/**
 * Aethera — Frontend Progress Store
 * 
 * Backend-ready architecture using React Context + localStorage.
 * API shape matches the backend Enrollment/Notes schema from LLD.md.
 */

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// ─── Types (matches backend schema) ─────────────────────────────────────────

export interface LectureProgress {
  lectureId: string;
  completed: boolean;
  completedAt?: string;
  watchedSeconds: number;
  totalSeconds: number;
}

export interface CourseProgress {
  courseId: string;
  enrolledAt: string;
  lastAccessedAt: string;
  lectures: Record<string, LectureProgress>;
  /** 0–100 */
  overallProgress: number;
}

export interface NoteEntry {
  id: string;
  userId: string;
  lectureId: string;
  courseId: string;
  content: string;
  title: string;
  /** ISO timestamp */
  createdAt: string;
  updatedAt: string;
}

export interface ProgressStore {
  courses: Record<string, CourseProgress>;
  notes: NoteEntry[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function computeOverallProgress(
  lectures: Record<string, LectureProgress>
): number {
  const vals = Object.values(lectures);
  if (vals.length === 0) return 0;
  const completed = vals.filter((l) => l.completed).length;
  return Math.round((completed / vals.length) * 100);
}

// ─── Context ─────────────────────────────────────────────────────────────────

interface ProgressContextValue {
  store: ProgressStore;
  markLectureComplete: (courseId: string, lectureId: string) => void;
  updateWatchTime: (courseId: string, lectureId: string, seconds: number) => void;
  addNote: (note: Omit<NoteEntry, "id" | "createdAt" | "updatedAt">) => void;
  updateNote: (id: string, updates: Partial<Pick<NoteEntry, "content" | "title">>) => void;
  deleteNote: (id: string) => void;
  getCourseProgress: (courseId: string) => CourseProgress | null;
  getNotesForLecture: (lectureId: string) => NoteEntry[];
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const STORAGE_KEY = "aethera_progress_v1";

const defaultStore: ProgressStore = {
  courses: {},
  notes: [],
};

// ─── Provider ────────────────────────────────────────────────────────────────

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [store, setStore] = useState<ProgressStore>(defaultStore);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setStore(JSON.parse(raw));
      }
    } catch {
      // localStorage unavailable — fail silently
    }
  }, []);

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch {
      // fail silently
    }
  }, [store]);

  const markLectureComplete = (courseId: string, lectureId: string) => {
    setStore((prev) => {
      const course = prev.courses[courseId] ?? {
        courseId,
        enrolledAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        lectures: {},
        overallProgress: 0,
      };

      const updatedLectures = {
        ...course.lectures,
        [lectureId]: {
          lectureId,
          completed: true,
          completedAt: new Date().toISOString(),
          watchedSeconds: course.lectures[lectureId]?.watchedSeconds ?? 0,
          totalSeconds: course.lectures[lectureId]?.totalSeconds ?? 0,
        },
      };

      const updated: CourseProgress = {
        ...course,
        lectures: updatedLectures,
        lastAccessedAt: new Date().toISOString(),
        overallProgress: computeOverallProgress(updatedLectures),
      };

      return {
        ...prev,
        courses: { ...prev.courses, [courseId]: updated },
      };
    });
  };

  const updateWatchTime = (
    courseId: string,
    lectureId: string,
    seconds: number
  ) => {
    setStore((prev) => {
      const course = prev.courses[courseId] ?? {
        courseId,
        enrolledAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        lectures: {},
        overallProgress: 0,
      };

      const existing = course.lectures[lectureId];
      const updatedLectures = {
        ...course.lectures,
        [lectureId]: {
          lectureId,
          completed: existing?.completed ?? false,
          completedAt: existing?.completedAt,
          watchedSeconds: seconds,
          totalSeconds: existing?.totalSeconds ?? 0,
        },
      };

      return {
        ...prev,
        courses: {
          ...prev.courses,
          [courseId]: {
            ...course,
            lectures: updatedLectures,
            lastAccessedAt: new Date().toISOString(),
            overallProgress: computeOverallProgress(updatedLectures),
          },
        },
      };
    });
  };

  const addNote = (note: Omit<NoteEntry, "id" | "createdAt" | "updatedAt">) => {
    const now = new Date().toISOString();
    const newNote: NoteEntry = {
      ...note,
      id: `note_${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    setStore((prev) => ({ ...prev, notes: [newNote, ...prev.notes] }));
  };

  const updateNote = (
    id: string,
    updates: Partial<Pick<NoteEntry, "content" | "title">>
  ) => {
    setStore((prev) => ({
      ...prev,
      notes: prev.notes.map((n) =>
        n.id === id ? { ...n, ...updates, updatedAt: new Date().toISOString() } : n
      ),
    }));
  };

  const deleteNote = (id: string) => {
    setStore((prev) => ({
      ...prev,
      notes: prev.notes.filter((n) => n.id !== id),
    }));
  };

  const getCourseProgress = (courseId: string) =>
    store.courses[courseId] ?? null;

  const getNotesForLecture = (lectureId: string) =>
    store.notes.filter((n) => n.lectureId === lectureId);

  return (
    <ProgressContext.Provider
      value={{
        store,
        markLectureComplete,
        updateWatchTime,
        addNote,
        updateNote,
        deleteNote,
        getCourseProgress,
        getNotesForLecture,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return ctx;
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NotePencil, Plus, Trash, Clock } from "@phosphor-icons/react";

const initialNotes = [
  {
    id: "1",
    title: "Consensus Algorithms — Raft vs Paxos",
    content:
      "Raft was designed to be more understandable than Paxos. Key insight: leader election is separated from normal operation. A leader is elected for a term. All log entries flow through the leader...",
    course: "Distributed Systems Architecture",
    createdAt: "2h ago",
    updatedAt: "2h ago",
  },
  {
    id: "2",
    title: "Microservices Deployment Strategies",
    content:
      "Blue-Green deployment: two identical production environments. Traffic switches from blue to green on release. Zero downtime. Canary deployments: route small % of traffic to new version...",
    course: "Advanced Cloud-Native Patterns",
    createdAt: "5h ago",
    updatedAt: "5h ago",
  },
  {
    id: "3",
    title: "Model Serving Latency Optimization",
    content:
      "Key techniques: model quantization (INT8), batching inference requests, GPU memory management. TorchServe vs Triton Inference Server. Cold start problem with serverless...",
    course: "Machine Learning Engineering for Production",
    createdAt: "1d ago",
    updatedAt: "1d ago",
  },
];

export default function NotesPage() {
  const [notes, setNotes] = useState(initialNotes);
  const [selected, setSelected] = useState(notes[0]);
  const [editContent, setEditContent] = useState(notes[0]?.content || "");
  const [editTitle, setEditTitle] = useState(notes[0]?.title || "");

  const handleSelect = (note: typeof notes[0]) => {
    setSelected(note);
    setEditContent(note.content);
    setEditTitle(note.title);
  };

  const handleNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      course: "General",
      createdAt: "just now",
      updatedAt: "just now",
    };
    setNotes([newNote, ...notes]);
    handleSelect(newNote);
  };

  return (
    <div
      className="h-[calc(100vh-60px)] -mx-8 lg:-mx-10 -my-8 lg:-my-10 flex"
      style={{ backgroundColor: "#F6F3EE" }}
    >
      {/* Notes list panel */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-[300px] shrink-0 flex flex-col h-full overflow-hidden"
        style={{ borderRight: "1px solid rgba(30,30,28,0.10)" }}
      >
        {/* Panel header */}
        <div
          className="px-6 py-5 flex items-center justify-between shrink-0"
          style={{ borderBottom: "1px solid rgba(30,30,28,0.08)" }}
        >
          <div>
            <h1
              className="text-sm font-semibold"
              style={{ color: "#1E1E1C" }}
            >
              Notes
            </h1>
            <p
              className="text-[10px] font-semibold tracking-wider uppercase mt-0.5"
              style={{ color: "#A8A8A5" }}
            >
              {notes.length} notes
            </p>
          </div>
          <button
            onClick={handleNewNote}
            className="w-7 h-7 rounded-md flex items-center justify-center transition-all duration-150"
            style={{
              backgroundColor: "#C1622F",
              color: "white",
            }}
          >
            <Plus size={14} weight="bold" />
          </button>
        </div>

        {/* Notes list */}
        <div className="flex-1 overflow-y-auto">
          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <NotePencil size={28} style={{ color: "#C8C8C5" }} />
              <p
                className="mt-3 text-sm"
                style={{ color: "#A8A8A5", fontStyle: "italic" }}
              >
                Your thoughts are waiting to be written.
              </p>
            </div>
          ) : (
            notes.map((note) => (
              <button
                key={note.id}
                onClick={() => handleSelect(note)}
                className="w-full text-left px-6 py-4 transition-all duration-150"
                style={{
                  backgroundColor:
                    selected?.id === note.id
                      ? "rgba(193, 98, 47, 0.06)"
                      : "transparent",
                  borderLeft:
                    selected?.id === note.id
                      ? "3px solid #C1622F"
                      : "3px solid transparent",
                  borderBottom: "1px solid rgba(30,30,28,0.06)",
                }}
                onMouseEnter={(e) => {
                  if (selected?.id !== note.id) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(30,30,28,0.025)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selected?.id !== note.id) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                <p
                  className="text-sm font-semibold truncate mb-1"
                  style={{
                    color:
                      selected?.id === note.id ? "#1E1E1C" : "#1E1E1C",
                  }}
                >
                  {note.title}
                </p>
                <p
                  className="text-xs truncate mb-1.5"
                  style={{ color: "#A8A8A5" }}
                >
                  {note.content || "Empty note"}
                </p>
                <div className="flex items-center gap-1.5">
                  <Clock size={10} style={{ color: "#C8C8C5" }} />
                  <span
                    className="text-[10px] font-semibold tracking-wide uppercase"
                    style={{ color: "#C8C8C5" }}
                  >
                    {note.updatedAt}
                  </span>
                </div>
              </button>
            ))
          )}
        </div>
      </motion.div>

      {/* Editor panel */}
      {selected ? (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col h-full overflow-hidden"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Editor topbar */}
          <div
            className="px-10 py-4 flex items-center justify-between shrink-0"
            style={{ borderBottom: "1px solid rgba(30,30,28,0.08)" }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="text-[10px] font-semibold tracking-widest uppercase"
                style={{ color: "#A8A8A5" }}
              >
                {selected.course}
              </span>
              <div
                className="w-px h-3"
                style={{ backgroundColor: "rgba(30,30,28,0.12)" }}
              />
              <div className="flex items-center gap-1">
                <Clock size={10} style={{ color: "#C8C8C5" }} />
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: "#C8C8C5" }}
                >
                  Edited {selected.updatedAt}
                </span>
              </div>
            </div>
            <button
              className="w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-150"
              style={{ color: "#C8C8C5" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#C1622F")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#C8C8C5")
              }
              onClick={() => {
                const remaining = notes.filter((n) => n.id !== selected.id);
                setNotes(remaining);
                setSelected(remaining[0] || null!);
                setEditContent(remaining[0]?.content || "");
                setEditTitle(remaining[0]?.title || "");
              }}
            >
              <Trash size={14} />
            </button>
          </div>

          {/* Note editor */}
          <div className="flex-1 overflow-y-auto px-10 py-8">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full bg-transparent border-none outline-none mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "28px",
                lineHeight: 1.2,
                color: "#1E1E1C",
                letterSpacing: "-0.01em",
              }}
              placeholder="Note title…"
            />
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="w-full h-full min-h-[400px] bg-transparent border-none outline-none resize-none"
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#1E1E1C",
                fontFamily: "var(--font-sans)",
              }}
              placeholder="Begin writing your thoughts here…"
            />
          </div>
        </motion.div>
      ) : (
        <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="text-center">
            <NotePencil size={36} style={{ color: "#C8C8C5", margin: "0 auto" }} />
            <p
              className="mt-4 text-base"
              style={{ color: "#A8A8A5", fontStyle: "italic" }}
            >
              Select a note or create a new one.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

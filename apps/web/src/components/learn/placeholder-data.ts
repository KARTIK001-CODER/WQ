"use client";

export interface Lecture {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  lectures: Lecture[];
}

export interface CourseLearningData {
  id: string;
  title: string;
  instructor: string;
  description: string;
  modules: Module[];
}

export const placeholderCourse: CourseLearningData = {
  id: "course-1",
  title: "Machine Learning Engineering for Production",
  instructor: "Dr. Aisha Patel",
  description:
    "Learn to design, deploy, and maintain production-grade ML systems. This comprehensive course covers everything from data pipelines to model serving and monitoring in real-world environments.",
  modules: [
    {
      id: "mod-1",
      title: "Foundations of ML Engineering",
      lectures: [
        { id: "lec-1", title: "Introduction to ML Pipelines", duration: "18:20", completed: true },
        { id: "lec-2", title: "Data Engineering for ML", duration: "24:15", completed: true },
        { id: "lec-3", title: "Feature Engineering & Selection", duration: "21:30", completed: true },
        { id: "lec-4", title: "Model Development Lifecycle", duration: "26:45", completed: false },
      ],
    },
    {
      id: "mod-2",
      title: "Production Infrastructure",
      lectures: [
        { id: "lec-5", title: "Containerization for ML", duration: "22:10", completed: false },
        { id: "lec-6", title: "Model Serving Architecture", duration: "19:55", completed: false },
        { id: "lec-7", title: "Monitoring & Observability", duration: "27:30", completed: false },
      ],
    },
    {
      id: "mod-3",
      title: "Advanced Deployment Strategies",
      lectures: [
        { id: "lec-8", title: "A/B Testing in Production", duration: "20:45", completed: false },
        { id: "lec-9", title: "Scaling ML Systems", duration: "25:30", completed: false },
        { id: "lec-10", title: "ML Pipelines with CI/CD", duration: "23:15", completed: false },
        { id: "lec-11", title: "Course Wrap-up & Next Steps", duration: "15:00", completed: false },
      ],
    },
  ],
};

export const placeholderNotes = [
  {
    id: "note-1",
    timestamp: "12:30",
    content: "Key insight: feature engineering accounts for 80% of model performance in production. The lecture emphasizes iterative feature selection over automated approaches.",
    pinned: true,
    createdAt: "2 days ago",
  },
  {
    id: "note-2",
    timestamp: "18:45",
    content: "Containerization strategy: use multi-stage Docker builds to reduce image size. Base image should be slim variant.",
    pinned: false,
    createdAt: "1 day ago",
  },
  {
    id: "note-3",
    timestamp: "05:15",
    content: "ML pipeline vs traditional software pipeline: the key difference is data dependency and model drift monitoring requirements.",
    pinned: false,
    createdAt: "3 hours ago",
  },
];

export const placeholderResources = [
  { id: "res-1", title: "ML Pipeline Architecture Guide", type: "PDF", size: "2.4 MB" },
  { id: "res-2", title: "Containerization Cheatsheet", type: "PDF", size: "1.1 MB" },
  { id: "res-3", title: "Example Repository: ML Serving", type: "GitHub", size: "—" },
  { id: "res-4", title: "Lecture Slides: Week 2", type: "Slides", size: "4.7 MB" },
];

export const placeholderDiscussions = [
  { id: "disc-1", title: "Best practices for feature store implementation?", author: "Marcus W.", replies: 8, time: "3h ago" },
  { id: "disc-2", title: "Docker vs Conda for ML environment management", author: "Sarah C.", replies: 12, time: "1d ago" },
  { id: "disc-3", title: "How do you handle data drift in production?", author: "Lily N.", replies: 5, time: "2d ago" },
];

export const placeholderQuizzes = [
  { id: "quiz-1", title: "Week 1: ML Pipeline Fundamentals", questions: 10, completed: true, score: 90 },
  { id: "quiz-2", title: "Week 2: Production Infrastructure", questions: 8, completed: false, score: null },
  { id: "quiz-3", title: "Module Review: Feature Engineering", questions: 15, completed: true, score: 82 },
];

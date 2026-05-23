"use client";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatSession {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  pinned: boolean;
}

export const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello! I'm your AI learning tutor. I can help you understand concepts, review material, create quizzes, and more. What would you like to explore today?",
};

export const chatSessions: ChatSession[] = [
  { id: "session-1", title: "ML Pipeline Architecture", preview: "Can you explain how containerization works in ML pipelines?", timestamp: "2 hours ago", pinned: true },
  { id: "session-2", title: "Gradient Descent Intuition", preview: "Help me understand gradient descent intuitively...", timestamp: "Yesterday", pinned: false },
  { id: "session-3", title: "Feature Engineering Review", preview: "What are the best practices for feature engineering?", timestamp: "2 days ago", pinned: false },
  { id: "session-4", title: "Neural Network Basics", preview: "Explain the architecture of a basic neural network", timestamp: "3 days ago", pinned: true },
  { id: "session-5", title: "Model Evaluation", preview: "How do I evaluate classification model performance?", timestamp: "5 days ago", pinned: false },
];

export const savedExplanations = [
  { id: "exp-1", title: "What is a container?", preview: "A container is a lightweight, standalone package..." },
  { id: "exp-2", title: "Gradient Descent Explained", preview: "Gradient descent is an optimization algorithm..." },
  { id: "exp-3", title: "Feature Engineering Basics", preview: "Feature engineering is the process of transforming..." },
];

export const weakTopics = [
  { name: "Container Orchestration", confidence: 35 },
  { name: "Model Serving", confidence: 42 },
  { name: "Feature Engineering", confidence: 68 },
  { name: "Data Pipelines", confidence: 55 },
];

export const suggestedPrompts = [
  { text: "Explain backpropagation in simple terms", icon: "🧠" },
  { text: "Create a quiz on linear regression", icon: "📝" },
  { text: "Summarize gradient descent key points", icon: "📋" },
  { text: "Compare supervised vs unsupervised learning", icon: "⚖️" },
];

export const smartActions = [
  { id: "explain", label: "Explain Concept", desc: "Break down any topic step by step", prompt: "Explain the core concept of this topic in simple terms" },
  { id: "summarize", label: "Summarize", desc: "Get a concise summary of any topic", prompt: "Give me a clear, concise summary of this topic" },
  { id: "quiz", label: "Generate Quiz", desc: "Test your understanding with questions", prompt: "Create a short quiz to test my understanding of this topic" },
  { id: "simplify", label: "Simplify", desc: "Make complex ideas easy to grasp", prompt: "Simplify this concept as if explaining to a beginner" },
  { id: "notes", label: "Revision Notes", desc: "Create structured study notes", prompt: "Create structured revision notes for this topic" },
];

export const aiResponses: Record<string, string> = {
  explain:
    "The core concept involves breaking down complex systems into manageable components that work together harmoniously. At its heart, this principle enables us to build robust, scalable solutions by following established patterns and best practices.\n\nConsider how a well-designed system handles complexity — it abstracts away unnecessary details, provides clear interfaces between components, and maintains consistent behavior across different scenarios. This approach reduces cognitive load and makes the system easier to reason about.\n\nKey aspects to understand:\n\n1. **Modularity**: Systems composed of interchangeable parts\n2. **Abstraction**: Hiding complexity behind clean interfaces\n3. **Composability**: Combining simple pieces to create complex behaviors\n\nWould you like me to elaborate on any of these aspects?",
  summarize:
    "Here's a concise summary:\n\nThis topic covers the fundamental principles of building and managing complex systems. The key ideas include modular architecture, clear abstraction boundaries, and composable components that work together reliably.\n\n**Main takeaways:**\n- Break down complexity into manageable pieces\n- Use clear interfaces between components\n- Follow established patterns and best practices\n- Test and validate each component independently\n\nThe most important thing to remember is that good system design is about managing complexity, not eliminating it.",
  quiz:
    "Here's a quick quiz to test your understanding:\n\n**Question 1:**\nWhat is the primary benefit of modular architecture?\nA) Faster execution speed\nB) Easier maintenance and testing\nC) Less memory usage\nD) Better graphics\n\n**Question 2:**\nWhich principle describes hiding complex implementation details?\nA) Polymorphism\nB) Inheritance\nC) Abstraction\nD) Recursion\n\n**Question 3:**\nWhat does composability enable?\nA) Faster algorithms\nB) Building complex behaviors from simple pieces\nC) Automatic code generation\nD) Better security\n\nTake your time thinking through these! I can reveal the answers when you're ready.",
  simplify:
    "Let me break this down in the simplest way possible:\n\nImagine you're building with LEGO blocks. Each block is simple on its own — it's just a piece of plastic. But when you connect them in the right way, you can build amazing things.\n\nThis concept works the same way:\n- **Modularity** = having different types of LEGO blocks for different purposes\n- **Abstraction** = you don't need to know how the LEGO factory makes each block, just how to use it\n- **Composability** = connecting blocks together to create something bigger\n\nThe beauty is that each individual piece is simple to understand, but together they can create incredibly complex and useful structures.",
  notes:
    "Here are structured revision notes:\n\n---\n\n## Topic: System Design Fundamentals\n\n### 1. Modular Architecture\n- Systems broken into independent components\n- Each component has a single responsibility\n- Components communicate through defined interfaces\n\n### 2. Key Principles\n| Principle | Description | Benefit |\n|-----------|-------------|--------|\n| Modularity | Separate concerns | Easier maintenance |\n| Abstraction | Hide complexity | Reduced cognitive load |\n| Composability | Combine pieces | Flexible solutions |\n\n### 3. Best Practices\n- Keep interfaces simple and consistent\n- Test components in isolation\n- Document assumptions and dependencies\n- Plan for change and evolution\n\n### 4. Common Patterns\n- Layered architecture\n- Microservices\n- Event-driven design\n\n---\n\nWould you like me to expand on any section?",
};

export const learningInsights = [
  { label: "Sessions this week", value: "8" },
  { label: "Topics covered", value: "12" },
  { label: "Avg. session length", value: "24 min" },
  { label: "Understanding score", value: "76%" },
];

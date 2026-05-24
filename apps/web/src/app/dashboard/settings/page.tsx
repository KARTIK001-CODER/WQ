"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sections = ["Account", "Notifications", "Appearance", "AI Preferences"];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("Account");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Page header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(30,30,28,0.2)" }} />
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#6B6B68" }}>
              Preferences
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1E1E1C",
            }}
          >
            Settings
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
          {/* Left nav */}
          <div className="space-y-0.5">
            {sections.map((section) => {
              const active = section === activeSection;
              return (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className="w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-150"
                  style={{
                    backgroundColor: active ? "rgba(193,98,47,0.07)" : "transparent",
                    borderLeft: active ? "3px solid #C1622F" : "3px solid transparent",
                    color: active ? "#1E1E1C" : "#6B6B68",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(30,30,28,0.03)";
                      (e.currentTarget as HTMLElement).style.color = "#1E1E1C";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#6B6B68";
                    }
                  }}
                >
                  {section}
                </button>
              );
            })}
          </div>

          {/* Right — settings panel */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg p-7 space-y-6"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(30,30,28,0.08)",
            }}
          >
            <h2 className="text-base font-semibold" style={{ color: "#1E1E1C" }}>
              {activeSection}
            </h2>

            {activeSection === "Account" && (
              <div className="space-y-5">
                {[
                  { id: "settings-name", label: "Full Name", value: "Kartik", type: "text" },
                  { id: "settings-email", label: "Email Address", value: "kartik@example.com", type: "email" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-[11px] font-semibold tracking-wider uppercase mb-1.5"
                      style={{ color: "#6B6B68" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full h-10 px-3.5 rounded-md text-sm"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid rgba(30,30,28,0.15)",
                        color: "#1E1E1C",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = "#C1622F";
                        (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(193,98,47,0.08)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = "rgba(30,30,28,0.15)";
                        (e.target as HTMLElement).style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="settings-bio"
                    className="block text-[11px] font-semibold tracking-wider uppercase mb-1.5"
                    style={{ color: "#6B6B68" }}
                  >
                    Bio
                  </label>
                  <textarea
                    id="settings-bio"
                    rows={3}
                    defaultValue="Software engineer with a passion for distributed systems and machine learning."
                    className="w-full px-3.5 py-2.5 rounded-md text-sm resize-none"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(30,30,28,0.15)",
                      color: "#1E1E1C",
                      outline: "none",
                      lineHeight: 1.6,
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.borderColor = "#C1622F";
                      (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(193,98,47,0.08)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.borderColor = "rgba(30,30,28,0.15)";
                      (e.target as HTMLElement).style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>
            )}

            {activeSection === "Notifications" && (
              <div className="space-y-4">
                {[
                  { label: "Course reminders", desc: "Daily nudge to continue your courses", on: true },
                  { label: "AI Tutor summaries", desc: "Weekly digest of your AI conversations", on: true },
                  { label: "Progress milestones", desc: "When you hit 25%, 50%, 75%, 100%", on: false },
                  { label: "New course alerts", desc: "When new courses match your interests", on: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid rgba(30,30,28,0.06)" }}
                  >
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#1E1E1C" }}>
                        {item.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#A8A8A5" }}>
                        {item.desc}
                      </p>
                    </div>
                    <button
                      id={`notif-toggle-${i}`}
                      className="w-10 h-5 rounded-full relative transition-colors duration-200"
                      style={{ backgroundColor: item.on ? "#4E7C6B" : "rgba(30,30,28,0.12)" }}
                    >
                      <div
                        className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                        style={{ transform: item.on ? "translateX(22px)" : "translateX(2px)" }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "Appearance" && (
              <div className="space-y-5">
                <div>
                  <label
                    className="block text-[11px] font-semibold tracking-wider uppercase mb-3"
                    style={{ color: "#6B6B68" }}
                  >
                    Theme
                  </label>
                  <div className="flex gap-3">
                    {["Ink & Ember (Light)", "Dark Mode (Coming Soon)"].map((theme, i) => (
                      <button
                        key={theme}
                        disabled={i > 0}
                        className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                          backgroundColor: i === 0 ? "rgba(193,98,47,0.08)" : "transparent",
                          border: i === 0 ? "1px solid #C1622F" : "1px solid rgba(30,30,28,0.12)",
                          color: i === 0 ? "#C1622F" : "#6B6B68",
                        }}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[11px] font-semibold tracking-wider uppercase mb-3"
                    style={{ color: "#6B6B68" }}
                  >
                    Font Size
                  </label>
                  <div className="flex gap-3">
                    {["Small", "Default", "Large"].map((size, i) => (
                      <button
                        key={size}
                        className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-150"
                        style={{
                          backgroundColor: i === 1 ? "rgba(193,98,47,0.08)" : "transparent",
                          border: i === 1 ? "1px solid #C1622F" : "1px solid rgba(30,30,28,0.12)",
                          color: i === 1 ? "#C1622F" : "#6B6B68",
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "AI Preferences" && (
              <div className="space-y-5">
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B68" }}>
                  Configure how your AI Tutor behaves during learning sessions.
                </p>
                {[
                  { id: "ai-style", label: "Response Style", options: ["Concise", "Detailed", "Socratic"] },
                  { id: "ai-level", label: "Explanation Depth", options: ["Beginner", "Intermediate", "Expert"] },
                ].map((pref) => (
                  <div key={pref.id}>
                    <label
                      htmlFor={pref.id}
                      className="block text-[11px] font-semibold tracking-wider uppercase mb-2"
                      style={{ color: "#6B6B68" }}
                    >
                      {pref.label}
                    </label>
                    <div className="flex gap-2">
                      {pref.options.map((opt, i) => (
                        <button
                          key={opt}
                          className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-150"
                          style={{
                            backgroundColor: i === 1 ? "rgba(92,122,155,0.10)" : "transparent",
                            border: i === 1 ? "1px solid #5C7A9B" : "1px solid rgba(30,30,28,0.12)",
                            color: i === 1 ? "#5C7A9B" : "#6B6B68",
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Save button */}
            <div
              className="pt-4 flex items-center gap-4"
              style={{ borderTop: "1px solid rgba(30,30,28,0.08)" }}
            >
              <button
                onClick={handleSave}
                className="px-6 h-9 rounded-md text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: "#C1622F" }}
              >
                {saved ? "Saved" : "Save changes"}
              </button>
              {saved && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs font-medium"
                  style={{ color: "#4E7C6B" }}
                >
                  Changes saved successfully
                </motion.span>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

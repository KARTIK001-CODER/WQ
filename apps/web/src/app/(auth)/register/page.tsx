"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Eye, EyeSlash, Spinner } from "@phosphor-icons/react";
import { useState, FormEvent } from "react";

type Role = "student" | "educator";

export default function RegisterPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("student");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please review your details.");
      }

      // Success - Redirect user to dashboard
      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_1fr]" style={{ backgroundColor: "#F6F3EE" }}>

      {/* Left panel — editorial statement */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex flex-col justify-between px-16 py-14"
        style={{ backgroundColor: "#18211E" }}
      >
        <Link href="/" className="flex items-center gap-2.5 w-fit">
          <div
            className="w-7 h-7 rounded flex items-center justify-center"
            style={{ backgroundColor: "#C1622F" }}
          >
            <GraduationCap size={14} weight="bold" className="text-white" />
          </div>
          <span
            className="text-lg tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Aethera
          </span>
        </Link>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: "#C1622F" }} />
            <span
              className="text-[10px] font-semibold tracking-[0.16em] uppercase"
              style={{ color: "#C1622F" }}
            >
              New workspace
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.90)",
              fontSize: "clamp(36px, 3.5vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Begin your
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>
              learning journey.
            </em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            A thoughtfully crafted workspace built for learners who take their growth seriously.
          </p>

          {/* Feature list */}
          <div className="mt-8 space-y-3">
            {[
              { color: "#C1622F", text: "Unlimited course access" },
              { color: "#5C7A9B", text: "AI Tutor for every lecture" },
              { color: "#4E7C6B", text: "Progress tracking & notes" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}
        >
          "An investment in knowledge pays the best interest."
        </p>
      </motion.div>

      {/* Right panel — form */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="flex flex-col items-center justify-center px-8 py-16 lg:px-16"
      >
        <Link href="/" className="flex items-center gap-2.5 mb-10 lg:hidden">
          <div
            className="w-6 h-6 rounded flex items-center justify-center"
            style={{ backgroundColor: "#C1622F" }}
          >
            <GraduationCap size={12} weight="bold" className="text-white" />
          </div>
          <span
            className="text-base tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "#1E1E1C",
            }}
          >
            Aethera
          </span>
        </Link>

        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold mb-1" style={{ color: "#1E1E1C" }}>
              Create your account
            </h1>
            <p className="text-sm" style={{ color: "#6B6B68" }}>
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium"
                style={{ color: "#C1622F" }}
              >
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div 
                className="p-3.5 rounded text-xs leading-relaxed border"
                style={{ 
                  backgroundColor: "rgba(193,98,47,0.06)", 
                  borderColor: "rgba(193,98,47,0.2)",
                  color: "#C1622F" 
                }}
              >
                {error}
              </div>
            )}

            {/* Full Name */}
            <div>
              <label
                htmlFor="reg-name"
                className="block text-[11px] font-semibold tracking-wider uppercase mb-1.5"
                style={{ color: "#6B6B68" }}
              >
                Full Name
              </label>
              <input
                id="reg-name"
                type="text"
                required
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

            {/* Email */}
            <div>
              <label
                htmlFor="reg-email"
                className="block text-[11px] font-semibold tracking-wider uppercase mb-1.5"
                style={{ color: "#6B6B68" }}
              >
                Email
              </label>
              <input
                id="reg-email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            {/* Password */}
            <div>
              <label
                htmlFor="reg-password"
                className="block text-[11px] font-semibold tracking-wider uppercase mb-1.5"
                style={{ color: "#6B6B68" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Minimum 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 px-3.5 pr-10 rounded-md text-sm"
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
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "#A8A8A5" }}
                >
                  {showPassword ? <EyeSlash size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <span
                className="block text-[11px] font-semibold tracking-wider uppercase mb-2"
                style={{ color: "#6B6B68" }}
              >
                Choose your perspective
              </span>
              <div 
                className="grid grid-cols-2 p-1 rounded-lg"
                style={{ backgroundColor: "rgba(30,30,28,0.05)" }}
              >
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className="h-8 rounded-md text-xs font-semibold transition-all duration-150"
                  style={{
                    backgroundColor: role === "student" ? "#FFFFFF" : "transparent",
                    color: role === "student" ? "#1E1E1C" : "#6B6B68",
                    boxShadow: role === "student" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("educator")}
                  className="h-8 rounded-md text-xs font-semibold transition-all duration-150"
                  style={{
                    backgroundColor: role === "educator" ? "#FFFFFF" : "transparent",
                    color: role === "educator" ? "#1E1E1C" : "#6B6B68",
                    boxShadow: role === "educator" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  Educator
                </button>
              </div>
            </div>

            <div className="h-px" style={{ backgroundColor: "rgba(30,30,28,0.08)" }} />

            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 rounded-md text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: "#C1622F" }}
            >
              {loading ? (
                <>
                  <Spinner size={16} className="animate-spin" />
                  Creating workspace...
                </>
              ) : (
                "Create my workspace"
              )}
            </button>
          </form>

          <p
            className="mt-5 text-center text-xs leading-relaxed"
            style={{ color: "#A8A8A5" }}
          >
            By continuing, you agree to Aethera&apos;s{" "}
            <a href="#" style={{ color: "#6B6B68" }}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "#6B6B68" }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}

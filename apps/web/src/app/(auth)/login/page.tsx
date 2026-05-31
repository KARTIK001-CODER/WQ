"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, Eye, EyeSlash, Spinner } from "@phosphor-icons/react";
import { useState, FormEvent, Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please check your credentials.");
      }

      // Success - redirect to target
      router.push(redirectTo);
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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

      {/* Email */}
      <div>
        <label
          htmlFor="login-email"
          className="block text-[11px] font-semibold tracking-wider uppercase mb-1.5"
          style={{ color: "#6B6B68" }}
        >
          Email
        </label>
        <input
          id="login-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 px-3.5 rounded-md text-sm transition-all duration-150"
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
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="login-password"
            className="block text-[11px] font-semibold tracking-wider uppercase"
            style={{ color: "#6B6B68" }}
          >
            Password
          </label>
          <a
            href="#"
            className="text-xs transition-colors duration-150"
            style={{ color: "#A8A8A5" }}
          >
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 px-3.5 pr-10 rounded-md text-sm transition-all duration-150"
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
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-150"
            style={{ color: "#A8A8A5" }}
          >
            {showPassword ? <EyeSlash size={15} /> : <Eye size={15} />}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px my-2"
        style={{ backgroundColor: "rgba(30,30,28,0.08)" }}
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full h-10 rounded-md text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 flex items-center justify-center gap-2"
        style={{ backgroundColor: "#C1622F" }}
      >
        {loading ? (
          <>
            <Spinner size={16} className="animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign in to Aethera"
        )}
      </button>
    </form>
  );
}

export default function LoginPage() {

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
        {/* Wordmark */}
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

        {/* Editorial statement */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ backgroundColor: "#C1622F" }} />
            <span
              className="text-[10px] font-semibold tracking-[0.16em] uppercase"
              style={{ color: "#C1622F" }}
            >
              Welcome back
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
            Continue where
            <br />
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>
              you left off.
            </em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Your courses, notes, and AI tutor are waiting. Sign in to resume your workspace.
          </p>
        </div>

        {/* Bottom quote */}
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}
        >
          "The expert in anything was once a beginner."
        </p>
      </motion.div>

      {/* Right panel — form */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="flex flex-col items-center justify-center px-8 py-16 lg:px-16"
      >
        {/* Mobile wordmark */}
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
            <h1
              className="text-2xl font-semibold mb-1"
              style={{ color: "#1E1E1C" }}
            >
              Sign in
            </h1>
            <p className="text-sm" style={{ color: "#6B6B68" }}>
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium transition-colors duration-150"
                style={{ color: "#C1622F" }}
              >
                Create one
              </Link>
            </p>
          </div>

          <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <Spinner size={24} className="animate-spin text-accent" />
              <span className="text-xs" style={{ color: "#6B6B68" }}>Preparing workspace...</span>
            </div>
          }>
            <LoginForm />
          </Suspense>

          {/* OR separator */}
          <div className="mt-5 flex items-center gap-3">
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "rgba(30,30,28,0.08)" }}
            />
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: "#A8A8A5" }}
            >
              or
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "rgba(30,30,28,0.08)" }}
            />
          </div>

          <button
            type="button"
            className="mt-4 w-full h-10 rounded-md text-sm font-medium transition-all duration-150 flex items-center justify-center gap-2.5"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(30,30,28,0.15)",
              color: "#1E1E1C",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(30,30,28,0.02)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "#FFFFFF")
            }
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15.68 8.18c0-.57-.05-1.11-.14-1.64H8v3.1h4.3a3.67 3.67 0 01-1.6 2.42v2h2.58c1.51-1.4 2.4-3.45 2.4-5.88z" fill="#4285F4"/>
              <path d="M8 16c2.16 0 3.97-.71 5.3-1.94l-2.59-2a4.8 4.8 0 01-2.71.75 4.8 4.8 0 01-4.52-3.32H.8v2.07A8 8 0 008 16z" fill="#34A853"/>
              <path d="M3.48 9.49A4.83 4.83 0 013.23 8c0-.52.09-1.02.25-1.49V4.44H.8A8.01 8.01 0 000 8c0 1.3.31 2.53.8 3.56l2.68-2.07z" fill="#FBBC05"/>
              <path d="M8 3.18c1.22 0 2.31.42 3.17 1.24l2.37-2.37A8 8 0 008 0 8 8 0 00.8 4.44l2.68 2.07A4.8 4.8 0 018 3.18z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  House,
  BookOpen,
  NotePencil,
  Robot,
  User,
  Gear,
  GraduationCap,
  ArrowSquareOut,
} from "@phosphor-icons/react";

const navItems = [
  { href: "/dashboard", label: "Home", icon: House },
  { href: "/dashboard/courses", label: "My Courses", icon: BookOpen },
  { href: "/dashboard/notes", label: "Notes", icon: NotePencil },
  { href: "/ai", label: "AI Tutor", icon: Robot, isAI: true },
];

const bottomItems = [
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Gear },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <motion.aside
      initial={{ x: -8, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-[220px] shrink-0 h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#18211E" }}
    >
      {/* Wordmark */}
      <div className="px-6 pt-8 pb-6">
        <Link href="/dashboard" className="block">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded flex items-center justify-center shrink-0"
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
          </div>
        </Link>
      </div>

      {/* Divider */}
      <div
        className="mx-6 mb-5"
        style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
      />

      {/* Nav Label */}
      <div className="px-6 mb-3">
        <span
          className="text-[9px] font-semibold tracking-[0.14em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Workspace
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group cursor-pointer"
                style={{
                  backgroundColor: active
                    ? "rgba(193, 98, 47, 0.12)"
                    : "transparent",
                  borderLeft: active
                    ? "3px solid #C1622F"
                    : "3px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                <Icon
                  size={16}
                  weight={active ? "bold" : "regular"}
                  style={{
                    color: active
                      ? item.isAI
                        ? "#5C7A9B"
                        : "#C1622F"
                      : "rgba(255,255,255,0.45)",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    color: active
                      ? "rgba(255,255,255,0.95)"
                      : "rgba(255,255,255,0.5)",
                  }}
                >
                  {item.label}
                </span>
                {item.isAI && (
                  <span
                    className="ml-auto text-[9px] font-semibold tracking-widest uppercase px-1.5 py-0.5 rounded"
                    style={{
                      backgroundColor: "rgba(92, 122, 155, 0.15)",
                      color: "#5C7A9B",
                    }}
                  >
                    AI
                  </span>
                )}
              </div>
            </Link>
          );
        })}

        {/* Section break */}
        <div className="pt-5 pb-2 px-3">
          <div
            className="mb-3"
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
          />
          <span
            className="text-[9px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Learning
          </span>
        </div>

        <Link href="/learn">
          <div
            className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 cursor-pointer"
            style={{
              borderLeft: pathname.startsWith("/learn")
                ? "3px solid #C1622F"
                : "3px solid transparent",
              backgroundColor: pathname.startsWith("/learn")
                ? "rgba(193, 98, 47, 0.1)"
                : "transparent",
            }}
            onMouseEnter={(e) => {
              if (!pathname.startsWith("/learn")) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.04)";
              }
            }}
            onMouseLeave={(e) => {
              if (!pathname.startsWith("/learn")) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
              }
            }}
          >
            <ArrowSquareOut
              size={16}
              style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Workspace
            </span>
          </div>
        </Link>
      </nav>

      {/* Bottom Section */}
      <div className="px-3 pb-6">
        <div
          className="mb-3"
          style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)" }}
        />
        {bottomItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 cursor-pointer"
                style={{
                  borderLeft: active
                    ? "3px solid #C1622F"
                    : "3px solid transparent",
                  backgroundColor: active
                    ? "rgba(193, 98, 47, 0.1)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                <Icon
                  size={16}
                  weight={active ? "bold" : "regular"}
                  style={{
                    color: active ? "#C1622F" : "rgba(255,255,255,0.35)",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-sm font-medium"
                  style={{
                    color: active
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.4)",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}

        {/* User identity */}
        <div
          className="mt-4 pt-4 flex items-center gap-3 px-1"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white"
            style={{ backgroundColor: "#C1622F" }}
          >
            K
          </div>
          <div className="min-w-0 flex-1">
            <p
              className="text-xs font-semibold truncate"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Kartik
            </p>
            <p
              className="text-[10px] truncate"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Student
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

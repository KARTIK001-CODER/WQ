import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-[var(--bg-primary)]">
      {/* Sidebar Structure */}
      <aside className="w-[260px] bg-[var(--bg-secondary)] border-r border-[var(--border-subtle)] flex flex-col p-8 md:p-4 lg:p-8 shrink-0 hidden md:flex">
        <Link href="/" className="font-heading text-xl text-[var(--text-primary)] mb-16 flex items-center gap-2">
          <div className="w-4 h-4 rounded-[4px] bg-[var(--accent-primary)]"></div>
          EduSync
        </Link>

        <nav className="flex flex-col gap-1 mb-8">
          <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] mb-2 pl-2">
            Overview
          </span>
          <Link href="/dashboard" className="text-[var(--text-secondary)] no-underline p-2 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg-layer)] hover:text-[var(--text-primary)] bg-[var(--bg-layer)] text-[var(--text-primary)]">
            Dashboard
          </Link>
          <Link href="#" className="text-[var(--text-secondary)] no-underline p-2 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg-layer)] hover:text-[var(--text-primary)]">
            My Courses
          </Link>
          <Link href="#" className="text-[var(--text-secondary)] no-underline p-2 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg-layer)] hover:text-[var(--text-primary)]">
            Pathways
          </Link>
        </nav>

        <nav className="flex flex-col gap-1 mb-8">
          <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] mb-2 pl-2">
            Library
          </span>
          <Link href="#" className="text-[var(--text-secondary)] no-underline p-2 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg-layer)] hover:text-[var(--text-primary)]">
            Saved Notes
          </Link>
          <Link href="#" className="text-[var(--text-secondary)] no-underline p-2 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg-layer)] hover:text-[var(--text-primary)]">
            Resources
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="h-[64px] flex items-center justify-between px-8 border-b border-[var(--border-subtle)] shrink-0">
          <div className="flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search for courses, notes..."
              className="bg-transparent border-none text-[var(--text-primary)] font-sans text-sm w-full outline-none focus:ring-0 placeholder:text-[var(--text-secondary)]"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[var(--accent-support)] shrink-0"></div>
          </div>
        </header>

        {/* Content Viewport */}
        <main className="flex-1 overflow-y-auto p-8 lg:p-16">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <>
      <div className="mb-16">
        <h1 className="text-3xl mb-2 font-heading">Good morning, Alex.</h1>
        <p className="text-[var(--text-secondary)] text-lg">Here&apos;s your learning progress for today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card flex flex-col">
          <h3 className="font-heading text-xl mb-4">Current Course</h3>
          <div className="h-[120px] rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] text-sm bg-[var(--bg-layer)] mt-auto">
            Placeholder
          </div>
        </div>
        <div className="card flex flex-col">
          <h3 className="font-heading text-xl mb-4">Recent Notes</h3>
          <div className="h-[120px] rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] text-sm bg-[var(--bg-layer)] mt-auto">
            Placeholder
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-heading mb-8">Recommended</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="h-[200px] rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] text-sm">
            Course Placeholder
          </div>
          <div className="h-[200px] rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] text-sm">
            Course Placeholder
          </div>
          <div className="h-[200px] rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] text-sm">
            Course Placeholder
          </div>
        </div>
      </div>
    </>
  );
}

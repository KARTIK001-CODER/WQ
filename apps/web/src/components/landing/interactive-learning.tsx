export default function InteractiveLearning() {
  const notes = [
    { time: "02:15", text: "Introduction to recursion and stack frames" },
    { time: "05:30", text: "Base cases vs recursive cases explained" },
    { time: "08:45", text: "Common pitfalls and how to avoid them" },
    { time: "14:20", text: "Tail recursion optimization techniques" },
    { time: "18:00", text: "Practical example: factorial function" },
  ];

  return (
    <section id="courses" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20 max-w-2xl">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-aurora-violet">
            Interactive Learning
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight tracking-tight text-star-white sm:text-5xl lg:text-6xl">
            Learning that
            <br />
            <span className="text-nebula-gray">engages and adapts</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-void-border/50 bg-void-surface shadow-elevated">
          <div className="flex items-center justify-between border-b border-void-border/50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-aurora-violet/10">
                <svg className="h-4 w-4 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-sans text-sm font-medium text-star-white">Data Structures & Algorithms</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs text-nebula-gray">12:34 / 30:00</span>
              <span className="h-1.5 w-24 rounded-full bg-void-elevated">
                <span className="block h-1.5 w-[42%] rounded-full bg-aurora-violet" />
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            <div className="relative md:col-span-2">
              <div className="aspect-video bg-void-elevated">
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-aurora-violet/90 transition-all duration-200 hover:bg-aurora-violet hover:shadow-glow-violet">
                    <svg className="ml-0.5 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-void-border/50 md:border-t-0 md:border-l">
              <div className="border-b border-void-border/50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-aurora-violet" />
                  <span className="font-sans text-xs font-medium uppercase tracking-wider text-star-white">
                    Timestamp Notes
                  </span>
                </div>
              </div>

              <div className="divide-y divide-void-border/30">
                {notes.map(({ time, text }) => (
                  <div
                    key={time}
                    className="flex items-start gap-3 px-5 py-3.5 transition-colors hover:bg-void-elevated/50"
                  >
                    <span className="mt-0.5 shrink-0 rounded bg-void-elevated px-1.5 font-mono text-[11px] text-nebula-gray">
                      {time}
                    </span>
                    <span className="font-sans text-sm text-nebula-gray">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-void-border/50 px-5 py-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-aurora-violet/10">
                  <svg className="h-3.5 w-3.5 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <span className="flex-1 font-sans text-sm text-nebula-gray">
                  Ask AI to explain this section
                </span>
                <svg className="h-3.5 w-3.5 text-nebula-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

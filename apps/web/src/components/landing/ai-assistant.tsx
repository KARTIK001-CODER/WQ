export default function AiAssistant() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-20 max-w-2xl">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-aurora-violet">
            AI Assistant
          </span>
          <h2 className="mt-5 font-heading text-4xl leading-tight tracking-tight text-star-white sm:text-5xl lg:text-6xl">
            Your intelligent
            <br />
            <span className="text-nebula-gray">learning companion</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-void-border/50 bg-void-surface shadow-elevated">
          <div className="flex items-center gap-3 border-b border-void-border/50 px-6 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-aurora-violet/10">
              <svg className="h-4 w-4 text-aurora-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-medium text-star-white">Aethera AI</span>
                <span className="h-1.5 w-1.5 rounded-full bg-stellar-gold" />
              </div>
              <span className="font-sans text-xs text-stellar-gold">Active and ready to help</span>
            </div>
          </div>

          <div className="space-y-4 px-6 py-6">
            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-br-md bg-aurora-violet/10 px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-star-white">
                  Can you help me understand closures in JavaScript?
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-void-elevated px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-star-white">
                  Of course. A closure is a function that remembers the variables from its outer scope even after the outer function has returned. Think of it as a function with a backpack of remembered data.
                </p>
                <div className="mt-3 flex items-center gap-4 border-t border-void-border/30 pt-3">
                  <span className="font-sans text-xs text-nebula-gray">Was this helpful?</span>
                  <button className="font-sans text-xs text-aurora-violet transition-colors hover:text-aurora-violet/80">
                    Yes
                  </button>
                  <button className="font-sans text-xs text-nebula-gray transition-colors hover:text-star-white">
                    No
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[75%] rounded-2xl rounded-br-md bg-aurora-violet/10 px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-star-white">
                  Can you show me a practical example?
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-aurora-violet/5 px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-star-white">
                  Sure! Here&apos;s a simple counter example...
                </p>
                <div className="mt-2 h-1 w-1/2 animate-pulse rounded-full bg-void-elevated" />
                <div className="mt-1 h-1 w-1/3 animate-pulse rounded-full bg-void-elevated" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-void-border/50 px-6 py-4">
            <div className="flex-1 rounded-lg border border-void-border bg-abyss px-4 py-2.5">
              <span className="font-sans text-sm text-nebula-gray">Ask anything about your course...</span>
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-aurora-violet transition-colors hover:bg-aurora-deep">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

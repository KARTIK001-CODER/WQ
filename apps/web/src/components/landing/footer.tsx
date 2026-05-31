'use client';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Courses', href: '/dashboard/courses' },
      { label: 'Help Center', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Email', href: 'mailto:hello@aethera.app' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-bg border-t border-[rgba(30,30,28,0.1)]">
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 mb-16">
          {/* Wordmark + tagline */}
          <div className="flex-shrink-0 max-w-[260px]">
            <a
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              id="footer-logo"
            >
              <div className="w-6 h-6 rounded-[4px] bg-ember flex items-center justify-center">
                <span className="text-white text-[11px] font-display font-light italic leading-none select-none">
                  a
                </span>
              </div>
              <span className="font-display text-[1rem] font-light text-ink tracking-[-0.015em]">
                Aethera
              </span>
            </a>
            <p className="text-ink-3 text-[13px] font-sans leading-relaxed">
              A thoughtfully crafted learning workspace. Built for depth, not
              distraction.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-sans font-semibold tracking-[0.1em] uppercase text-ink-3 mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13.5px] font-sans text-ink-2 hover:text-ink transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[rgba(30,30,28,0.07)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-3 text-[12.5px] font-sans">
            © 2026 Aethera. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12.5px] font-sans text-ink-3 hover:text-ink-2 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

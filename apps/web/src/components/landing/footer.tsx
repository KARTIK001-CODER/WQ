const footerLinks = [
  {
    label: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Courses", href: "#courses" },
      { name: "Analytics", href: "#analytics" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    label: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "API Status", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    label: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Security", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle/30">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md shadow-sm border border-border-subtle">
                <img 
                  src="/aethera-logo.png?v=2" 
                  alt="Aethera Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading text-sm font-semibold tracking-widest text-text-primary">
                AETHERA
              </span>
            </a>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-text-secondary">
              A premium intelligent learning platform combining AI tutoring,
              interactive learning, and personalized growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["X", "LI", "GH", "DI"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-layer text-xs text-text-secondary transition-all duration-200 hover:bg-accent/10 hover:text-accent"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.label}>
              <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-text-primary">
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border-subtle/20 pt-8">
          <p className="font-sans text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Aethera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

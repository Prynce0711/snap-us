import React from "react";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path fillRule="evenodd" d="M13.135 6H15V3h-1.865A4.147 4.147 0 0 0 9 7.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
    ),
  },
  {
    label: "Discord",
    href: "#",
    icon: (
      <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.138.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.55-1.118-4.55-4.979a3.956 3.956 0 0 1 1.025-2.694 3.7 3.7 0 0 1 .099-2.651s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.844.374 1.8.014 2.646a3.97 3.97 0 0 1 1.025 2.694c0 3.876-2.34 4.714-4.564 4.968a2.34 2.34 0 0 1 .661 1.816c0 1.314-.012 2.371-.012 2.693 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
    ),
  },
];

const footerColumns = [
  { title: "Company", links: ["About", "Careers", "Brand Center", "Blog"] },
  { title: "Help center", links: ["Discord server", "Twitter", "Facebook", "Contact us"] },
  { title: "Legal", links: ["Privacy policy", "Licensing", "Terms & conditions"] },
  { title: "Download", links: ["iOS", "Android", "Windows", "MacOS"] },
];

const Footer = () => {
  return (
    <footer className="bg-[#1a1916]" data-theme="grumpyjuggly">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr]">

        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="font-serif text-xl font-semibold text-[#faf9f7] tracking-tight mb-3 block">
            flow<em className="text-[#d4a96a] not-italic">bite</em>
          </a>
          <p className="text-sm text-[#6b6860] leading-relaxed max-w-[220px] mb-6">
            A modern design system for teams who care about craft. Open source and free forever.
          </p>
          <div className="flex gap-2">
            {socialLinks.map(({ label, href, icon }) => (

              <a
              
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-[#2e2d2a] flex items-center justify-center text-[#6b6860] hover:border-[#6b6860] hover:text-[#faf9f7] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-[#6b6860] mb-5">
              {title}
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-[#9c8f7e] hover:text-[#faf9f7] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2e2d2a] max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#4a4844]">
          © 2026 <a href="#" className="hover:text-[#9c8f7e] transition-colors">Flowbite™</a>. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <a key={item} href="#" className="text-sm text-[#4a4844] hover:text-[#9c8f7e] transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

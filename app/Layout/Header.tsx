import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-[#faf9f7] border-b border-[#e5e2db] sticky top-0 z-50" data-theme="grumpyjuggly">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="font-serif text-xl font-semibold text-[#1a1916] tracking-tight shrink-0">
          flow<em className="text-[#c17b3f] not-italic">bite</em>
        </a>

        {/* Nav (center) */}
        <Navigation />

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
          
            href="#"
            className="text-sm text-[#6b6860] hover:text-[#1a1916] hover:bg-[#f0ebe3] px-4 py-2 rounded-lg transition-colors"
          >
            Log in
          </a>

          <a
          
            href="#"
            className="text-sm text-white bg-[#1a1916] hover:bg-[#2e2d2a] px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get started
          </a>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-[#6b6860] hover:bg-[#f0ebe3] rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

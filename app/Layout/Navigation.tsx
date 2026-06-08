import React from 'react';

// 1. Converted to a configuration array of objects for proper routing and flexibility
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Features', href: '/features' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

const Navigation = () => {
  return (
    <nav className="hidden lg:flex items-center" aria-label="Main Navigation" data-theme="grumpyjuggly">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a 
              href={href} 
              className="block py-2 px-3 text-gray-700 rounded transition-colors duration-200 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
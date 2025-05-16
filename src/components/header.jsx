import React from 'react';
import { ModeToggle } from './mode-toggle';
import { NavLink } from 'react-router';

const links = [
  {
    label: 'Behaviour',
    href: '/interview-qa',
  },
  {
    label: 'Golang',
    href: '/interview-qa/golang',
  },
  {
    label: 'Python',
    href: '/interview-qa/python',
  },
];

const activeStyle = 'text-primary px-2 py-2 rounded-md';

const normalStyle = 'text-primary/65 hover:text-primary px-2 py-2 rounded-md';

const Header = () => {
  return (
    <header className="border-b-primary flex h-16 w-full items-center justify-between gap-4 border-b-2">
      <h2 className="font-bold">Enjoy your journey!</h2>

      <div className="flex items-center gap-4">
        <nav className="flex gap-1">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              end
              className={({ isActive }) =>
                isActive ? activeStyle : normalStyle
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;

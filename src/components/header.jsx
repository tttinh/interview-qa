import { ModeToggle } from '@/components/mode-toggle';
import { NavLink } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

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

const activeStyle = 'text-primary font-semibold px-2 py-2';
const normalStyle = 'text-primary/65 hover:text-primary px-2 py-2';

const Header = () => {
  return (
    <header className="border-b-primary flex h-16 w-full items-center justify-between gap-4 border-b-2">
      <h2 className="font-bold">Enjoy your journey!</h2>

      <div className="flex items-center gap-4">
        <nav className="hidden gap-1 lg:flex">
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

        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden" asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {links.map((link, index) => (
              <DropdownMenuItem>
                <NavLink
                  key={index}
                  to={link.href}
                  end
                  className={({ isActive }) =>
                    `w-full ${isActive ? activeStyle : normalStyle}`
                  }
                >
                  {link.label}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;

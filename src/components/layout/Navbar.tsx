import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/services' },
  { name: 'Membership', path: '/membership' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Tools', path: '/bmi' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tighter sm:text-2xl">
            FITZONE <span className="text-primary">GYM</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" className="ml-4 rounded-full font-bold" asChild>
            <Link to="/membership">JOIN NOW</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => {}}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-semibold transition-colors hover:text-primary ${
                      isActive(item.path) ? 'text-primary' : 'text-foreground/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="default" className="mt-4 rounded-full font-bold" asChild>
                  <Link to="/membership" onClick={() => setIsOpen(false)}>JOIN NOW</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
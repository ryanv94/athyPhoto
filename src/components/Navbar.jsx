import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Camera, Menu, X, ChevronRight, Award } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Members Gallery', path: '/gallery' },
  { name: 'Competitions', path: '/competitions' },
  { name: 'Blog', path: '/blog' },
  { name: 'Our Sponsors', path: '/sponsors' },
  { name: 'Membership', path: '/membership' },
  { name: 'Map & Studio', path: '/map' },
  { name: 'Useful Links', path: '/links' },
  { name: 'Shop', path: '/shop' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-obsidian/90 backdrop-blur-md border-b border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-lg bg-surface-800 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-300">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-wider uppercase text-zinc-100 block">
                Athy <span className="text-gold font-light">Photo</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-zinc-400 font-mono block uppercase">
                Est. 1978 • IPF Affiliated
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs font-sans tracking-wide uppercase transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-gold bg-surface-800/80 font-medium border border-gold/30'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-surface-800/40'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Quick CTA Desktop */}
          <div className="hidden lg:flex xl:hidden items-center space-x-2">
            <Link
              to="/membership"
              className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-gold/60 text-gold hover:bg-gold hover:text-obsidian transition-colors font-medium"
            >
              Join Club
            </Link>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-surface-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden border-b border-surface-800 bg-surface-900/98 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1 py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-sans tracking-wide transition-colors ${
                    isActive
                      ? 'bg-surface-800 text-gold border-l-4 border-gold'
                      : 'text-zinc-300 hover:bg-surface-800/50 hover:text-white'
                  }`
                }
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-surface-800 px-4">
            <div className="text-xs text-zinc-400 flex items-center space-x-2">
              <Award className="w-4 h-4 text-gold" />
              <span>Irish Photographic Federation (IPF) Affiliated</span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">
              Meetings: 1st & 3rd Wednesday, 8:00 PM • Mount Saint Marys
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

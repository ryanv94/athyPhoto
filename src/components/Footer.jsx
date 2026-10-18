import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, MapPin, Mail, Calendar, ExternalLink, Heart, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-900 border-t border-surface-800 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Society Info */}
          <div>
            <div className="flex items-center space-x-2 text-zinc-100 font-serif text-2xl uppercase mb-4">
              <Camera className="w-6 h-6 text-gold" />
              <span>Athy <span className="text-gold font-light">Photo</span></span>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6 font-sans text-sm">
              Founded in the mid-1980s, Athy Photographic Society is an award-winning community of image makers based in County Kildare, affiliated with the Irish Photographic Federation (IPF).
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-gold bg-surface-800/80 px-3 py-2 rounded border border-surface-700/80">
              <Shield className="w-4 h-4 text-gold flex-shrink-0" />
              <span>IPF & Midlands Photography Group</span>
            </div>
          </div>

          {/* Column 2: Exact Location & Studio Details */}
          <div>
            <h3 className="font-serif text-lg text-zinc-100 uppercase tracking-widest mb-4 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Club Studio</span>
            </h3>
            <address className="not-italic text-sm text-zinc-300 leading-relaxed mb-4">
              <strong className="text-white block font-medium">Athy Photographic Society</strong>
              Mount Saint Marys Resource Centre<br />
              Athy, Co. Kildare<br />
              <span className="font-mono text-gold text-xs">Eircode: R14 XY60</span>
            </address>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                <span>1st & 3rd Wednesday of each month @ 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:athyphotographicsociety@gmail.com" className="hover:text-gold transition-colors">
                  athyphotographicsociety@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-serif text-lg text-zinc-100 uppercase tracking-widest mb-4">
              Explore Pages
            </h3>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us & Committee</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Members Gallery</Link></li>
              <li><Link to="/competitions" className="hover:text-gold transition-colors">Competitions & Roll of Honour</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">A to Z Challenge & News</Link></li>
              <li><Link to="/sponsors" className="hover:text-gold transition-colors">Our Community Sponsors</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Annual Calendar (€5)</Link></li>
              <li><Link to="/links" className="hover:text-gold transition-colors">Useful Links & Tools</Link></li>
            </ul>
          </div>

          {/* Column 4: Community & Calendar */}
          <div>
            <h3 className="font-serif text-lg text-zinc-100 uppercase tracking-widest mb-4">
              Community Calendar
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Every year we produce the Athy Photographic Society Annual Calendar featuring photography across South Kildare. All proceeds support local Athy charities.
            </p>
            <div className="bg-surface-800 p-4 rounded-xl border border-surface-700">
              <div className="text-xs font-mono text-gold mb-1">Click & Collect Available</div>
              <p className="text-[11px] text-zinc-400">
                Pick up at <strong>JM Computer Services</strong> (Stanhope St) or <strong>Winkles Newsagents</strong>.
              </p>
              <Link to="/shop" className="mt-3 inline-flex items-center space-x-1 text-xs text-gold hover:underline">
                <span>View shop details</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-surface-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Athy Photographic Society. All rights reserved. Images copyright of respective photographers.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/map" className="hover:text-gold transition-colors">R14 XY60</Link>
            <Link to="/membership" className="hover:text-gold transition-colors">Join Society</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

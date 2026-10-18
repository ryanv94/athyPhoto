import React from 'react';
import { MapPin, Navigation, Calendar, Clock, Car, Bus, Info, Mail } from 'lucide-react';

export default function LocationMap() {
  const address = "Athy Photographic Society, Mount Saint Marys Resource Centre, Athy, R14 XY60";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Find Our Studio</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Club Studio & Map</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          We meet at our photography studio located in Mount Saint Marys Resource Centre in Athy. Guests and prospective new members are always welcome to drop in.
        </p>
      </div>

      {/* Main Address Card & Interactive Map Layout */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left: Detailed Info */}
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-surface-900 border border-gold/40 space-y-6">
            <div>
              <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-1">Official Society Address</span>
              <h2 className="font-serif text-2xl text-zinc-100">Mount Saint Marys Resource Centre</h2>
            </div>

            <div className="space-y-2 text-sm text-zinc-300">
              <p className="font-medium text-white">Athy Photographic Society</p>
              <p>Mount Saint Marys Resource Centre</p>
              <p>Athy, Co. Kildare</p>
              <p className="font-mono text-gold text-base pt-1 font-semibold">R14 XY60</p>
            </div>

            <div className="pt-4 border-t border-surface-800 space-y-3 text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span>1st & 3rd Wednesdays of each month</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Starts at 8:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:athyphotographicsociety@gmail.com" className="hover:text-gold transition-colors">
                  athyphotographicsociety@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gold text-obsidian font-mono text-xs uppercase tracking-wider font-semibold hover:bg-gold-light transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-900 border border-surface-800 space-y-3 text-xs text-zinc-400">
            <div className="flex items-center space-x-2 text-gold font-mono uppercase">
              <Car className="w-4 h-4" />
              <span>Parking & Accessibility</span>
            </div>
            <p className="leading-relaxed">
              Ample free parking is accessible on the grounds of Mount Saint Marys Resource Centre. The venue is wheelchair-accessible with step-free entry to the studio meeting room.
            </p>
          </div>
        </div>

        {/* Right: Map Embed */}
        <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-surface-900 border border-surface-800 h-[480px] lg:h-auto relative flex flex-col justify-between">
          <iframe
            title="Mount Saint Marys Resource Centre Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-7.0050%2C52.9850%2C-6.9700%2C53.0000&amp;layer=mapnik&amp;marker=52.9915%2C-6.9830"
            className="w-full h-full min-h-[420px] border-0 filter invert contrast-125 hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <div className="p-4 bg-surface-900/90 border-t border-surface-800 flex justify-between items-center text-xs font-mono text-zinc-400">
            <span>Mount Saint Marys • Athy, R14 XY60</span>
            <a
              href={`https://www.openstreetmap.org/?mlat=52.9915&amp;mlon=-6.9830#map=16/52.9915/-6.9830`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              View Larger OpenStreetMap
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

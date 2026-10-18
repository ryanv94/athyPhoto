import React, { useState } from 'react';
import { ShoppingBag, MapPin, Check, Heart, Mail, ExternalLink, Calendar } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Shop() {
  const [reserved, setReserved] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('JM Computer Services, Stanhope St');
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Store & Charity Fundraiser</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Society Store & Calendar</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Every year, Athy Photographic Society produces a full-colour annual calendar showcasing stunning photography of Athy, the River Barrow, and South Kildare. All proceeds support local charities.
        </p>
      </div>

      {/* Featured Item: Calendar */}
      <div className="grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 rounded-3xl bg-surface-900 border border-surface-800">
        <div>
          <MediaPlaceholder 
            title="Athy Photographic Society Annual Calendar" 
            category="Charity Fundraiser" 
            aspect="aspect-[4/3]"
            meta="12 Months • High Gloss • Local Photography"
            tone="from-amber-950/40 via-surface-900 to-obsidian"
          />
        </div>

        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-mono">
            <Heart className="w-3.5 h-3.5" />
            <span>Proceeds Support Athy Local Charities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100">
            Athy Photographic Society Annual Calendar
          </h2>

          <div className="text-3xl font-serif text-gold">€5.00 <span className="text-xs font-sans text-zinc-400">each</span></div>

          <p className="text-zinc-300 text-sm leading-relaxed font-sans">
            Featuring 12 exquisite scenes of Athy and South Kildare captured throughout the seasons by society members. An ideal Christmas or New Year gift for locals and diaspora worldwide.
          </p>

          <div className="space-y-3 pt-2">
            <div className="font-mono text-xs text-gold uppercase tracking-wider">Click & Collect Locations:</div>
            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center space-x-2 bg-surface-800 p-3 rounded-xl border border-surface-700">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span><strong>JM Computer Services</strong>, Stanhope Street, Athy</span>
              </div>
              <div className="flex items-center space-x-2 bg-surface-800 p-3 rounded-xl border border-surface-700">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span><strong>Winkles Newsagents</strong>, Athy Town Centre</span>
              </div>
            </div>
          </div>

          {/* Reserve / Buy Online Inquiry */}
          {reserved ? (
            <div className="p-4 rounded-xl bg-surface-800 border border-gold/40 text-center space-y-2">
              <Check className="w-6 h-6 text-gold mx-auto" />
              <div className="font-serif text-lg text-zinc-100">Reservation Request Received!</div>
              <p className="text-xs text-zinc-400">
                Your request for {qty} calendar(s) at {pickupLocation} has been registered. Our treasurer will confirm by email.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setReserved(true); }} className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">Quantity</label>
                  <select 
                    value={qty} 
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-surface-800 border border-surface-700 text-xs text-zinc-200"
                  >
                    {[1, 2, 3, 4, 5, 10].map(n => <option key={n} value={n}>{n} (€{n * 5})</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">Pickup Option</label>
                  <select 
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-surface-800 border border-surface-700 text-xs text-zinc-200"
                  >
                    <option value="JM Computer Services, Stanhope St">JM Computer Services</option>
                    <option value="Winkles Newsagents">Winkles Newsagents</option>
                    <option value="Studio Meeting (Mount Saint Marys)">Mount Saint Marys Studio</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gold text-obsidian font-sans font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                Reserve For Click & Collect
              </button>
            </form>
          )}

        </div>
      </div>

    </div>
  );
}

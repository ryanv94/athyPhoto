import React from 'react';
import { Heart, Building, CheckCircle2, Mail } from 'lucide-react';

export default function Sponsors() {
  const sponsors = [
    { name: 'Kildare County Council', category: 'Civic & Cultural Partner', note: 'Supporting local cultural activities and arts initiatives in South Kildare.' },
    { name: 'Shaws Department Store', category: 'Retail Sponsor', note: 'Long-standing support for community and society showcases.' },
    { name: 'Athy Community Arts Centre', category: 'Arts Venue Partner', note: 'Home to multiple society photography exhibitions and talks.' },
    { name: 'Athy Library', category: 'Civic Exhibition Partner', note: 'Hosting community photo showcases and library displays.' },
    { name: 'Fingleton & Co. Auctioneers', category: 'Estate Agents & Valuers', note: 'Local Athy business patron.' },
    { name: 'JM Computer Services', category: 'Technology & Retail Partner', note: 'Stanhope Street, Athy. Official Click & Collect distribution location for calendars.' },
    { name: 'People First Credit Union', category: 'Community Financial Patron', note: 'Fostering local civic societies and cultural projects.' },
    { name: 'O’Briens Bar, Food & Grocery', category: 'Hospitality Partner', note: 'Athy community patron.' },
    { name: 'Clancy’s Bar and Lounge', category: 'Hospitality Sponsor', note: 'Community supporter of local society events.' },
    { name: 'Francis B Taaffe & Co Solicitors', category: 'Professional Services', note: 'Legal practice patron in Athy.' },
    { name: 'Connaughton Auctioneers', category: 'Estate Agents & Valuers', note: 'Property specialists supporting local cultural development.' },
    { name: 'Paddy Dunne’s Bar, Lounge & Off Licence', category: 'Hospitality Patron', note: 'Community sponsor.' },
    { name: 'Winkles Newsagents', category: 'Retail Distribution Partner', note: 'Athy town centre stockist for our annual charity calendar.' },
    { name: 'Sherry FitzGerald', category: 'Estate Agents', note: 'Corporate community sponsor.' },
    { name: 'Athy Tidy Towns', category: 'Civic Environment Partner', note: 'Collaborating on environmental and heritage photography.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Gratitude & Patrons</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Our Generous Sponsors</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Athy Photographic Society would like to express our sincere gratitude to the local businesses, organizations, and patrons who provide us with ongoing assistance and encouragement throughout the year.
        </p>
      </div>

      {/* Grid of Sponsors */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-surface-900 border border-surface-800 hover:border-gold/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-gold text-xs font-mono uppercase tracking-wider mb-2">
                <Building className="w-4 h-4 flex-shrink-0" />
                <span>{sponsor.category}</span>
              </div>
              <h3 className="font-serif text-2xl text-zinc-100 mb-2">{sponsor.name}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{sponsor.note}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-800 flex items-center text-[11px] font-mono text-zinc-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold mr-1.5" />
              <span>Official Society Patron</span>
            </div>
          </div>
        ))}
      </div>

      {/* Become a sponsor CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface-900 border border-surface-800 text-center max-w-3xl mx-auto space-y-4">
        <Heart className="w-10 h-10 text-gold mx-auto" />
        <h2 className="font-serif text-3xl text-zinc-100">Interested in Sponsoring Athy Photographic Society?</h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          We welcome local businesses and organizations who wish to sponsor annual awards, print exhibitions, workshops, or our charity calendar.
        </p>
        <a
          href="mailto:athyphotographicsociety@gmail.com?subject=Sponsorship%20Inquiry"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gold text-obsidian text-xs font-mono uppercase tracking-wider font-semibold hover:bg-gold-light transition-colors mt-2"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Committee for Sponsorship</span>
        </a>
      </div>

    </div>
  );
}

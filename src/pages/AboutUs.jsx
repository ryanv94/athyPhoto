import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Award, Users, Calendar, MapPin, Mail, ShieldCheck } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function AboutUs() {
  const committee = [
    { role: 'Chairperson', name: 'Larry Connell' },
    { role: 'Secretary', name: 'Geraldine Flanagan' },
    { role: 'Assistant Secretary', name: 'Anthony Hubbock' },
    { role: 'Treasurer', name: 'Brid Rigney' },
    { role: 'P.R.O. (Public Relations Officer)', name: 'Aisling Hyland' },
    { role: 'Ordinary Committee Member', name: 'Andrea Mulhall' },
    { role: 'Ordinary Committee Member', name: 'Mairead O’Donohoe' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Our Legacy & Mission</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-6">About Athy Photographic Society</h1>
        <p className="text-zinc-400 text-lg leading-relaxed font-sans">
          Formed in the mid-1980s by a group of passionate amateur photographers in South Kildare, Athy Photographic Society has grown into an acclaimed, award-winning camera club with over 50 active members.
        </p>
      </div>

      {/* History & Studio Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-zinc-300 font-sans text-base leading-relaxed">
          <h2 className="font-serif text-3xl text-zinc-100">45 Years of Framing Light</h2>
          <p>
            After a slow but steady start in the mid-1980s, the society has gone from strength to strength. Jack Brogan, one of our revered founding members, was a major driving force behind the club in its formative years, establishing the ethos of mutual encouragement, constructive critiques, and creative freedom.
          </p>
          <p>
            Today, our main aim remains unchanged: <strong>for every member of APS to further their photographic skills and enjoy their photography.</strong> We run regular workshops, organize shoots and field trips across Ireland, and host guest speakers who share insights into specialized genres.
          </p>
          <p>
            Along with fellow camera clubs across Kildare, Laois, and Offaly, we are an active member of the <strong>Midlands Photography Group (MPG)</strong>, fostering regional interclub competitions, publications, and exhibitions. We are proudly affiliated with the <strong>Irish Photographic Federation (IPF)</strong>.
          </p>
          
          <div className="pt-4 border-t border-surface-800">
            <h3 className="font-serif text-xl text-gold mb-3">Where & When We Meet</h3>
            <div className="bg-surface-900 border border-surface-800 rounded-xl p-5 space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Mount Saint Marys Resource Centre</span>
                  <span className="text-zinc-400">Athy, Co. Kildare, R14 XY60</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                <span>First and Third Wednesdays of each month at 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <MediaPlaceholder 
            title="The Athy Studio Session" 
            category="Club Life" 
            aspect="aspect-[4/3]"
            meta="Mount Saint Marys • R14 XY60"
            tone="from-amber-950/30 via-surface-900 to-obsidian"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl bg-surface-900 border border-surface-800 text-center">
              <div className="text-2xl font-serif text-gold">50+</div>
              <div className="text-xs text-zinc-400 mt-1">Active Photographers</div>
            </div>
            <div className="p-4 rounded-xl bg-surface-900 border border-surface-800 text-center">
              <div className="text-2xl font-serif text-gold">IPF</div>
              <div className="text-xs text-zinc-400 mt-1">Federation Affiliated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Committee Section */}
      <section className="pt-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-mono text-xs uppercase tracking-widest">Leadership & Governance</span>
          <h2 className="font-serif text-4xl text-zinc-100 mt-2">Current Society Committee</h2>
          <p className="text-zinc-400 text-sm mt-2">
            The dedicated volunteer officers guiding Athy Photographic Society's events, workshops, and exhibitions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {committee.map((member, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-900 border border-surface-800 hover:border-gold/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-surface-800 border border-gold/40 flex items-center justify-center text-gold mb-4 font-serif text-sm">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xs font-mono uppercase text-gold tracking-wider mb-1">{member.role}</div>
              <div className="font-serif text-xl text-zinc-100">{member.name}</div>
            </div>
          ))}

          {/* Contact Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-800 to-surface-900 border border-gold/40 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-gold tracking-wider mb-1">Get in Touch</div>
              <div className="font-serif text-xl text-zinc-100 mb-2">Have a question?</div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Reach out directly to our committee for inquiries about joining or events.
              </p>
            </div>
            <a
              href="mailto:athyphotographicsociety@gmail.com"
              className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>athyphotographicsociety@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

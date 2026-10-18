import React from 'react';
import { ExternalLink, FileText, Image as ImageIcon, Globe, Shield, BookOpen } from 'lucide-react';

export default function UsefulLinks() {
  const links = [
    {
      title: 'Irish Photographic Federation (IPF)',
      desc: 'The national governing body for photographic clubs in Ireland. Organizers of the National Club Championships, Nature Competitions, and IPF distinctions.',
      url: 'https://irishphoto.ie',
      badge: 'National Governing Body'
    },
    {
      title: 'FIAP (International Federation of Photographic Art)',
      desc: 'The worldwide confederation of national photographic societies. Explore international salons, FIAP distinctions (AFIAP, EFIAP), and world showcases.',
      url: 'https://www.fiap.net',
      badge: 'International'
    },
    {
      title: 'Simple Model Release Form',
      desc: 'Standard model release forms for portrait and street photography sessions. Essential for commercial submissions and competition compliance.',
      url: '#/links',
      badge: 'Legal & Consent'
    },
    {
      title: 'Midlands Photography Group (MPG) Magazine',
      desc: 'Regional publications featuring member photography, interclub results, workshops, and camera club news across Kildare, Laois, and Offaly.',
      url: '#/links',
      badge: 'Regional Federation'
    },
    {
      title: 'Free Online Image Resizer & Compression',
      desc: 'Fast, easy, and free tools to resize and crop your images to match exact competition pixel dimensions (e.g., 2400px on long edge, sRGB color space).',
      url: 'https://imageresizer.com',
      badge: 'Recommended Tool'
    },
    {
      title: 'IPF Nature & Wildlife Competition Rules',
      desc: 'The Annual Athy Photographic Society Nature & Wildlife competition entries adhere strictly to the IPF guidelines regarding authentic wildlife behavior and digital manipulation limits.',
      url: 'https://irishphoto.ie',
      badge: 'Judging Criteria'
    },
    {
      title: 'Photographer of the Year Rules',
      desc: 'Full specification for panel submissions for the Jack Brogan Perpetual Trophy. Covers print mounting, digital projection standards, and panel themes.',
      url: '#/competitions',
      badge: 'Club Competition'
    },
    {
      title: 'Athy Photographic Society Newsletter',
      desc: 'Archived newsletters containing tips, upcoming shoot itineraries, calendar announcements, and society member spotlights.',
      url: '#/blog',
      badge: 'Society Archive'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Resources & Tooling</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Useful Links & Forms</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Essential links, national affiliations, competition guideline documents, and helpful digital tools for Athy Photographic Society members.
        </p>
      </div>

      {/* Links Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {links.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-surface-900 border border-surface-800 hover:border-gold/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-gold uppercase tracking-wider">{item.badge}</span>
                <ExternalLink className="w-4 h-4 text-zinc-600" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">{item.desc}</p>
            </div>
            <a
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:underline"
            >
              <span>Access Resource</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Aspect Ratio & Resizing Cheat Sheet Box */}
      <div className="p-8 rounded-3xl bg-surface-900 border border-surface-800 space-y-4">
        <h2 className="font-serif text-3xl text-zinc-100">Quick Competition Sizing Cheat Sheet</h2>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
          When preparing digital files for society competitions or external IPF salons, ensure your image profile is set to <strong>sRGB</strong> and sized to standard projection dimensions:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-surface-800 border border-surface-700 text-xs font-mono">
            <span className="text-gold block mb-1">Max Horizontal Dimension</span>
            <span className="text-white text-sm font-semibold">1920 pixels</span>
          </div>
          <div className="p-4 rounded-xl bg-surface-800 border border-surface-700 text-xs font-mono">
            <span className="text-gold block mb-1">Max Vertical Dimension</span>
            <span className="text-white text-sm font-semibold">1200 / 1080 pixels</span>
          </div>
          <div className="p-4 rounded-xl bg-surface-800 border border-surface-700 text-xs font-mono">
            <span className="text-gold block mb-1">Colour Space</span>
            <span className="text-white text-sm font-semibold">sRGB IEC61966-2.1</span>
          </div>
        </div>
      </div>

    </div>
  );
}

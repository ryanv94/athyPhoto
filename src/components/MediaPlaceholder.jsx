import React from 'react';
import { Camera, Aperture, Image as ImageIcon, Eye } from 'lucide-react';

export default function MediaPlaceholder({ 
  title = "Photographic Study", 
  category = "Gallery", 
  aspect = "aspect-[4/3]", 
  meta = "50mm • ƒ/1.8 • 1/250s • ISO 100",
  tone = "from-surface-800 via-surface-900 to-obsidian"
}) {
  return (
    <div className={`relative w-full ${aspect} overflow-hidden rounded-xl bg-surface-900 border border-surface-700/60 group`}>
      {/* Background abstract gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${tone} transition-transform duration-700 group-hover:scale-105`} />
      
      {/* Framing crop marks & viewfinder lines */}
      <div className="absolute inset-4 border border-zinc-700/30 rounded pointer-events-none flex flex-col justify-between p-2">
        <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>[ + ] AF-L</span>
          <span>RAW • 14-BIT</span>
        </div>
        
        {/* Center crosshair */}
        <div className="self-center flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/60 transition-colors">
            <Aperture className="w-6 h-6 text-zinc-600 group-hover:text-gold transition-colors duration-500" strokeWidth={1.2} />
          </div>
        </div>

        <div className="flex justify-between items-end">
          <span className="text-[10px] font-mono text-gold/80 tracking-wider">{category}</span>
          <span className="text-[10px] font-mono text-zinc-500">{meta}</span>
        </div>
      </div>

      {/* Hover vignette & title badge */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      <div className="absolute bottom-4 left-6 right-6">
        <p className="font-serif text-lg text-zinc-100 group-hover:text-gold transition-colors">{title}</p>
      </div>
    </div>
  );
}

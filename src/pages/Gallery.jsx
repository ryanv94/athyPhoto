import React, { useState } from 'react';
import { Camera, Filter, X, Eye } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['All', 'Landscape', 'Wildlife & Nature', 'Portrait', 'Monochrome & Street', 'Creative'];

  const photos = [
    { id: 1, title: 'Barrow Navigation at Dawn', author: 'Elena Doyle', category: 'Landscape', aspect: 'aspect-[4/3]', meta: '35mm • ƒ/8 • 1/125s • ISO 100', note: 'Captured along the Barrow Way in Athy during sunrise.' },
    { id: 2, title: 'Barn Owl in Silent Flight', author: 'Aisling Hyland', category: 'Wildlife & Nature', aspect: 'aspect-[4/3]', meta: '500mm • ƒ/4 • 1/2000s • ISO 800', note: 'Paddy Joe Ryan Wildlife Trophy entry.' },
    { id: 3, title: 'Athy Blacksmith Portrait', author: 'Pat O’Rourke', category: 'Portrait', aspect: 'aspect-[3/4]', meta: '85mm • ƒ/1.4 • 1/400s • ISO 160', note: 'Natural side window lighting study.' },
    { id: 4, title: 'Stanhope Street in Monochrome', author: 'Larry Connell', category: 'Monochrome & Street', aspect: 'aspect-[4/3]', meta: '28mm • ƒ/5.6 • 1/250s • ISO 400', note: 'High contrast monochrome conversion.' },
    { id: 5, title: 'Curragh Mist & Solitary Oak', author: 'Suzanne Behan', category: 'Landscape', aspect: 'aspect-[16/9]', meta: '70mm • ƒ/11 • 1/60s • ISO 100', note: 'Early winter mist across the Kildare plains.' },
    { id: 6, title: 'Kingfisher Diving', author: 'Paddy Joe Ryan', category: 'Wildlife & Nature', aspect: 'aspect-[4/3]', meta: '600mm • ƒ/4 • 1/3200s • ISO 1200', note: 'High-speed action capture on the Grand Canal.' },
    { id: 7, title: 'Reflections on Glass', author: 'Anthony Hubbock', category: 'Creative', aspect: 'aspect-[3/4]', meta: '50mm • ƒ/2.0 • 1/160s • ISO 200', note: 'Prism refraction through vintage lenses.' },
    { id: 8, title: 'The Musician at Clancy’s', author: 'Jane Chandlers', category: 'Portrait', aspect: 'aspect-[4/3]', meta: '50mm • ƒ/1.8 • 1/125s • ISO 1600', note: 'Low light atmospheric capture.' },
    { id: 9, title: 'Grand Canal Bridge Arch', author: 'Geraldine Flanagan', category: 'Monochrome & Street', aspect: 'aspect-[4/3]', meta: '24mm • ƒ/8 • 1/160s • ISO 100', note: 'Symmetrical stone masonry study.' },
  ];

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Exhibition & Showcase</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Members Gallery</h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          A showcase of vision and technical craft from Athy Photographic Society members. All images remain the copyright of their respective authors.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-sans tracking-wide uppercase transition-all ${
              filter === cat
                ? 'bg-gold text-obsidian font-semibold shadow-md'
                : 'bg-surface-800 text-zinc-400 hover:text-zinc-100 hover:bg-surface-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div 
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          >
            <MediaPlaceholder 
              title={photo.title} 
              category={`${photo.author} • ${photo.category}`}
              aspect={photo.aspect}
              meta={photo.meta}
            />
          </div>
        ))}
      </div>

      {/* Modal View */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/95 backdrop-blur-md">
          <div className="relative max-w-3xl w-full bg-surface-900 border border-surface-700 rounded-2xl overflow-hidden p-6 space-y-6">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-surface-800"
            >
              <X className="w-5 h-5" />
            </button>

            <MediaPlaceholder 
              title={selectedPhoto.title}
              category={selectedPhoto.category}
              aspect="aspect-[16/9]"
              meta={selectedPhoto.meta}
            />

            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-800 pb-3">
                <div>
                  <h3 className="font-serif text-2xl text-zinc-100">{selectedPhoto.title}</h3>
                  <p className="text-gold text-sm font-sans">Photographer: {selectedPhoto.author}</p>
                </div>
                <span className="font-mono text-xs text-zinc-400 bg-surface-800 px-3 py-1 rounded">
                  {selectedPhoto.category}
                </span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed">{selectedPhoto.note}</p>

              <div className="p-3 bg-surface-800 rounded-xl flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>EXIF: {selectedPhoto.meta}</span>
                <span className="text-gold">Athy Photographic Society</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

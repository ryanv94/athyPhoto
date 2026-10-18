import React from 'react';
import { Calendar, User, Tag, ArrowRight, BookOpen } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Blog() {
  const posts = [
    {
      id: 'album-m',
      title: '52-Week A to Z Challenge: Multitudes of "M"',
      date: 'Latest Edition',
      author: 'Athy Photographic Society',
      excerpt: 'Moving right along with the alphabet challenge! This round brought memorable moments, magnificent views, and maybe a few masterpieces for good measure.',
      category: 'Project 52',
      tag: 'Album M'
    },
    {
      id: 'album-d',
      title: 'Album D: Don’t be Dejected by Dark Decoys',
      date: 'Club Archive',
      author: 'Michelle Monet & Members',
      excerpt: 'D is our letter and following on from last week, dogs proved more popular than cats! We also enjoyed an inspiring guest presentation by Goran Grah in our studio.',
      category: 'Challenge & Workshops',
      tag: 'Album D'
    },
    {
      id: 'album-b',
      title: 'Album B: Broad Horizons & Outdoor Landscapes',
      date: 'Club Archive',
      author: 'Edward Lear & APS',
      excerpt: 'Week 2 of our challenge focused on the letter "B". A great range of photos, the majority taken outdoors across the Barrow river and surrounding countryside.',
      category: 'Project 52',
      tag: 'Album B'
    },
    {
      id: 'goran-grah',
      title: 'Studio Workshop: Guest Presentation by Goran Grah',
      date: 'Studio Event',
      author: 'Larry Connell',
      excerpt: 'Our activities started back with a wonderful presentation from Goran Grah, one of our newest members. Entertaining, technical, and immensely inspiring.',
      category: 'Workshops',
      tag: 'Studio Guest'
    },
    {
      id: 'midlands-shield',
      title: 'Athy Society Clinches 1st Place in Midlands Shield',
      date: 'Competition News',
      author: 'Committee',
      excerpt: 'We are over the moon to announce that Athy Photographic Society won 1st place in the Midlands Photography Group Shield. Well done to all members submitting images!',
      category: 'Competitions',
      tag: 'Victory'
    },
    {
      id: 'calendar-launch',
      title: 'Annual Athy Calendar Supporting Local Charities',
      date: 'Community News',
      author: 'Aisling Hyland',
      excerpt: 'Our annual €5 calendar is now on sale at JM Computer Services and Winkles Newsagents. Every cent goes toward helping community organizations in Athy.',
      category: 'Charity',
      tag: 'Calendar'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Chronicles & Challenges</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Latest News & Blog</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Stay connected with our weekly 52-week A-to-Z challenges, guest speaker workshops, field excursions, and society announcements.
        </p>
      </div>

      {/* Featured Blog Card */}
      <div className="p-8 rounded-3xl bg-surface-900 border border-surface-800 grid md:grid-cols-2 gap-8 items-center">
        <MediaPlaceholder 
          title="Multitude of M: 52-Week Challenge" 
          category="Album M • Challenge" 
          aspect="aspect-[16/10]"
          meta="Members Submissions"
          tone="from-amber-950/40 via-surface-900 to-obsidian"
        />
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono text-gold">
            <span>Project 52 Challenge</span>
            <span>•</span>
            <span>Letter M</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100">
            Welcome to the Alphabet Series: Multitudes of "M"
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Instead of a simple Photo of the Week, Athy Photographic Society members tackle our 52-week A to Z Project. Weeks 1 to 26 focus on object- and subject-based briefs, encouraging our photographers to interpret light and composition in surprising ways.
          </p>
          <div className="pt-2 text-xs text-zinc-500 font-mono">
            Submissions reviewed every Wednesday at Mount Saint Marys
          </div>
        </div>
      </div>

      {/* Grid of Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="p-6 rounded-2xl bg-surface-900 border border-surface-800 hover:border-surface-700 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-gold">{post.category}</span>
                <span className="text-zinc-500">{post.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-zinc-100 leading-snug">{post.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="pt-6 mt-6 border-t border-surface-800 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">{post.tag}</span>
              <span className="text-gold flex items-center space-x-1">
                <span>Read Story</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

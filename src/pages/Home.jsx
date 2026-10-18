import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Calendar, MapPin, Award, Users, BookOpen, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import MediaPlaceholder from '../components/MediaPlaceholder';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-surface-900/60 to-obsidian" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-surface-800/80 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase"
          >
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Irish Photographic Federation (IPF) Affiliated Club</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-zinc-100 font-light leading-[1.08] tracking-tight"
          >
            Fostering <span className="italic font-normal text-gold">Vision & Art</span> in Photography
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Welcome to Athy Photographic Society. For over 45 years, we have provided an inspiring, friendly space in Co. Kildare for photographers of all stages—from beginners exploring phone and mirrorless cameras to seasoned exhibition artists.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              to="/membership"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-gold text-obsidian font-sans font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-all shadow-lg shadow-gold/10"
            >
              <span>Join Our Society</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-surface-800 text-zinc-200 border border-surface-700 hover:border-gold/50 font-sans text-sm tracking-wider uppercase transition-colors"
            >
              <span>Explore Gallery</span>
            </Link>
          </motion.div>

          {/* Quick meeting banner pill */}
          <div className="pt-8 max-w-xl mx-auto">
            <div className="bg-surface-800/90 border border-surface-700/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-300 gap-3">
              <div className="flex items-center space-x-2 text-left">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">Mount Saint Marys Resource Centre</div>
                  <div className="text-zinc-400">Athy, Co. Kildare • R14 XY60</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 border-t sm:border-t-0 sm:border-l border-surface-700 pt-2 sm:pt-0 sm:pl-4 text-left">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                <div>
                  <div className="font-semibold text-white">1st & 3rd Wednesdays</div>
                  <div className="text-zinc-400">8:00 PM in Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '45+', label: 'Years of Existence', desc: 'Fostering enthusiasm since the mid-1980s' },
            { value: '50+', label: 'Active Members', desc: 'Passionate amateur and pro visual artists' },
            { value: '1st', label: 'Midlands Shield', desc: 'Midlands Photography Group Champions' },
            { value: '€5', label: 'Charity Calendar', desc: 'Proceeds support local Athy charities' },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface-900 border border-surface-800 hover:border-gold/30 transition-colors">
              <div className="font-serif text-4xl sm:text-5xl text-gold font-light mb-2">{stat.value}</div>
              <div className="font-sans font-semibold text-zinc-200 text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-zinc-500 leading-normal">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Society Pillars & Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-mono text-xs uppercase tracking-widest">What We Do</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-zinc-100 mt-2">A Community Built on Creative Growth</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-surface-900 border border-surface-800 hover:border-surface-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-800 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-100 mb-3">Competitions & Shield</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                We compete in the annual Jack Brogan Perpetual Trophy, the Paddy Joe Ryan Wildlife Award, portrait challenges, and the regional Midlands Group Shield.
              </p>
            </div>
            <Link to="/competitions" className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-gold hover:text-gold-light tracking-wider">
              <span>View Roll of Honour</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-surface-900 border border-surface-800 hover:border-surface-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-800 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-100 mb-3">52-Week A to Z Challenge</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Our members participate in regular weekly challenges and mentoring. For 2026, we explore the A to Z project, pushing members beyond their comfort zones.
              </p>
            </div>
            <Link to="/blog" className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-gold hover:text-gold-light tracking-wider">
              <span>Read Latest Albums</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-surface-900 border border-surface-800 hover:border-surface-700 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-800 border border-gold/30 flex items-center justify-center text-gold mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-100 mb-3">Annual Athy Calendar</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Every year our members shoot exquisite scenery of Athy and South Kildare. All calendar proceeds support local charity initiatives in our town.
              </p>
            </div>
            <Link to="/shop" className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-gold hover:text-gold-light tracking-wider">
              <span>Order / Click & Collect</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-gold font-mono text-xs uppercase tracking-widest">Selected Works</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-zinc-100 mt-2">Members Gallery Preview</h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 text-sm text-gold hover:underline font-mono uppercase tracking-wider"
          >
            <span>Open Complete Gallery (50+ Works)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MediaPlaceholder 
            title="River Barrow Reflections" 
            category="Landscape" 
            aspect="aspect-[4/3]"
            meta="35mm • ƒ/8.0 • 1/125s • ISO 100" 
            tone="from-emerald-950/40 via-surface-900 to-obsidian"
          />
          <MediaPlaceholder 
            title="Kingfisher on the Grand Canal" 
            category="Nature & Wildlife" 
            aspect="aspect-[4/3]"
            meta="400mm • ƒ/4.0 • 1/1600s • ISO 400" 
            tone="from-amber-950/40 via-surface-900 to-obsidian"
          />
          <MediaPlaceholder 
            title="Athy Street Architecture" 
            category="Monochrome" 
            aspect="aspect-[4/3]"
            meta="50mm • ƒ/2.8 • 1/500s • ISO 200" 
            tone="from-zinc-800/40 via-surface-900 to-obsidian"
          />
        </div>
      </section>

      {/* Sponsors & Community Marquee Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-900/60 border border-surface-800 rounded-3xl p-8 sm:p-12 text-center">
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Proudly Supported By Local Patrons</span>
          <h3 className="font-serif text-2xl sm:text-3xl text-zinc-200 mt-2 mb-8">Our Athy Community Sponsors</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-sans text-zinc-400">
            <span className="hover:text-gold transition-colors">Kildare County Council</span>
            <span className="text-zinc-700">•</span>
            <span className="hover:text-gold transition-colors">Shaws Department Store</span>
            <span className="text-zinc-700">•</span>
            <span className="hover:text-gold transition-colors">Athy Community Arts Centre</span>
            <span className="text-zinc-700">•</span>
            <span className="hover:text-gold transition-colors">JM Computer Services</span>
            <span className="text-zinc-700">•</span>
            <span className="hover:text-gold transition-colors">People First Credit Union</span>
            <span className="text-zinc-700">•</span>
            <span className="hover:text-gold transition-colors">Winkles Newsagents</span>
          </div>

          <div className="mt-8">
            <Link to="/sponsors" className="text-xs font-mono uppercase text-gold hover:underline tracking-wider">
              View All 15 Sponsors & Patrons &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

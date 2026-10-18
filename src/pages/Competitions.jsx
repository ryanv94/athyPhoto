import React from 'react';
import { Award, Trophy, ShieldCheck, FileText, ExternalLink, Calendar } from 'lucide-react';

export default function Competitions() {
  const potyWinners = [
    { year: '2023', winner: 'Elena Doyle' },
    { year: '2022', winner: 'Pat O’Rourke' },
    { year: '2021', winner: 'Pat O’Rourke' },
    { year: '2020', winner: 'Paddy Joe Ryan' },
    { year: '2019', winner: 'Peadar Doogue' },
    { year: '2018', winner: 'Paddy Joe Ryan' },
    { year: '2017', winner: 'Suzanne Behan' },
    { year: '2016', winner: 'Suzanne Behan' },
    { year: '2015', winner: 'Bernadette Gibbs' },
    { year: '2010', winner: 'Elliot Tucker' },
    { year: '2009', winner: 'Willie Quinlan' },
    { year: '2008', winner: 'Derek Gibbs' },
  ];

  const wildlifeWinners = [
    { year: '2023', winner: 'Aisling Hyland' },
    { year: '2022', winner: 'Jay Sharma' },
    { year: '2021', winner: 'Frank Fanning' },
    { year: '2016', winner: 'Suzanne Behan' },
  ];

  const intermediateWinners = [
    { year: '2022', winner: 'Jane Chandlers' },
    { year: '2021', winner: 'Anthony Hubbock' },
    { year: '2018', winner: 'Chris Bradshaw' },
    { year: '2017', winner: 'Aisling Hyland' },
    { year: '2016', winner: 'Suzanne Behan' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Excellence & Honours</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Society Competitions</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          APS organizes several prestigious internal and interclub competitions each year. Below is our historical Roll of Honour commemorating member achievements.
        </p>
      </div>

      {/* Midlands Shield Highlight Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-surface-900 via-surface-800 to-surface-900 border border-gold/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-gold/20 border border-gold flex items-center justify-center text-gold flex-shrink-0">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-gold tracking-widest uppercase">Major Milestone</span>
              <h2 className="font-serif text-3xl text-zinc-100">1st Place — Midlands Group Shield</h2>
              <p className="text-zinc-400 text-sm mt-1 max-w-xl">
                Athy Photographic Society took 1st place in the prestigious Midlands Photography Group Shield competition, representing the pinnacle of collective club excellence against regional camera clubs.
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="inline-block px-4 py-2 rounded-xl bg-surface-900 border border-surface-700 text-xs font-mono text-zinc-300">
              Affiliated with IPF & MPG
            </div>
          </div>
        </div>
      </div>

      {/* Jack Brogan Perpetual Trophy Section */}
      <div className="space-y-8">
        <div className="border-b border-surface-800 pb-4">
          <div className="flex items-center space-x-3">
            <Award className="w-6 h-6 text-gold" />
            <h2 className="font-serif text-3xl text-zinc-100">Jack Brogan Perpetual Trophy</h2>
          </div>
          <p className="text-zinc-400 text-sm mt-2 max-w-3xl">
            Awarded annually to the <strong>Photographer of the Year</strong>. The late Jack Brogan was a founding member of Athy Photographic Society—an exceptional photographer and major driving force behind the club in its formative years. Judged on a submitted panel of images assessed by an accredited IPF judge.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {potyWinners.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-surface-900 border border-surface-800 hover:border-gold/30 transition-colors">
              <div className="text-gold font-mono text-sm">{item.year}</div>
              <div className="font-serif text-lg text-zinc-200 mt-1">{item.winner}</div>
              <div className="text-[11px] text-zinc-500 font-sans mt-0.5">Jack Brogan Trophy</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dual Column: Wildlife & Intermediate */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Wildlife / Nature Trophy */}
        <div className="space-y-6">
          <div className="border-b border-surface-800 pb-4">
            <h3 className="font-serif text-2xl text-zinc-100">Paddy Joe Ryan Wildlife Trophy</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Presented in 2016 by long-standing officer and master wildlife photographer Paddy Joe Ryan. Awarded to the Wildlife & Nature Photographer of the Year based on IPF rules.
            </p>
          </div>
          <div className="space-y-3">
            {wildlifeWinners.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-surface-900 border border-surface-800 text-sm">
                <span className="font-mono text-gold">{item.year}</span>
                <span className="font-serif text-zinc-200 text-base">{item.winner}</span>
                <span className="text-xs text-zinc-500">Wildlife & Nature</span>
              </div>
            ))}
          </div>
        </div>

        {/* Intermediate Photographer Award */}
        <div className="space-y-6">
          <div className="border-b border-surface-800 pb-4">
            <h3 className="font-serif text-2xl text-zinc-100">Intermediate Photographer of the Year</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Introduced in 2016 to encourage newer members progressing their craft toward advanced exhibition standards.
            </p>
          </div>
          <div className="space-y-3">
            {intermediateWinners.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-surface-900 border border-surface-800 text-sm">
                <span className="font-mono text-gold">{item.year}</span>
                <span className="font-serif text-zinc-200 text-base">{item.winner}</span>
                <span className="text-xs text-zinc-500">Intermediate</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competition Rules & Links */}
      <div className="p-8 rounded-2xl bg-surface-900 border border-surface-800">
        <h3 className="font-serif text-2xl text-zinc-100 mb-2">Rules & Judging Criteria</h3>
        <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
          All annual competitions are adjudicated according to the standard criteria set out by the Irish Photographic Federation. Judges provide live feedback, scoring, and critiques during our studio sessions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://irishphoto.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-surface-800 hover:bg-surface-700 text-xs font-mono text-gold border border-surface-700"
          >
            <FileText className="w-4 h-4" />
            <span>IPF Nature & Wildlife Rules</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>
          <a
            href="https://irishphoto.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-surface-800 hover:bg-surface-700 text-xs font-mono text-zinc-300 border border-surface-700"
          >
            <FileText className="w-4 h-4" />
            <span>Photographer of the Year Rules</span>
            <ExternalLink className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>

    </div>
  );
}

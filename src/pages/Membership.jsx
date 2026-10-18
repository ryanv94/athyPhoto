import React, { useState } from 'react';
import { Users, Check, Calendar, MapPin, Mail, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: 'Beginner', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    'Regular bi-weekly studio meetings and hands-on workshops',
    'Official affiliation with the Irish Photographic Federation (IPF)',
    'Constructive image critiquing sessions and 1-on-1 mentoring',
    'Participation in internal awards (Jack Brogan & Wildlife trophies)',
    'Opportunity to compete in regional and national interclub competitions',
    'Organized photography field trips and location shoots across Ireland',
    'Submission rights for our annual exhibition and charity calendar',
    'Active online community forum and weekly A to Z challenges',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Join Our Community</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Society Membership</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          We are always looking for new members—from complete beginners looking to get the best out of their phones or first cameras, to seasoned exhibition photographers.
        </p>
      </div>

      {/* Details & Benefits Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-surface-900 border border-surface-800 space-y-6">
            <h2 className="font-serif text-3xl text-zinc-100">Why Join Athy Photo Society?</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Whether you want to learn the fundamentals of manual exposure or are looking for a welcoming group of fellow image-makers, you will find an encouraging, supportive home here.
            </p>

            <ul className="space-y-3">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Meeting location badge */}
          <div className="p-6 rounded-2xl bg-surface-900 border border-gold/30 space-y-3">
            <div className="text-xs font-mono uppercase text-gold">Meeting Information</div>
            <div className="font-serif text-xl text-zinc-100">Mount Saint Marys Resource Centre</div>
            <div className="text-sm text-zinc-400">Athy, Co. Kildare • R14 XY60</div>
            <div className="text-xs text-zinc-400 font-mono">
              1st & 3rd Wednesday of each month @ 8:00 PM
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-900 border border-surface-800">
          <h2 className="font-serif text-3xl text-zinc-100 mb-2">Membership Inquiry</h2>
          <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
            Fill in the form below and our society secretary will get back to you with current fees, meeting details, and answers to your questions.
          </p>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-surface-800 border border-gold/50 text-center space-y-3">
              <ShieldCheck className="w-10 h-10 text-gold mx-auto" />
              <h3 className="font-serif text-2xl text-zinc-100">Thank you for your interest!</h3>
              <p className="text-xs text-zinc-400">
                We have received your membership enquiry. You can also drop into our next studio meeting on the 1st or 3rd Wednesday at Mount Saint Marys.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 rounded bg-surface-700 text-xs text-gold font-mono"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Murphy"
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="087 123 4567"
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Current Experience Level</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                >
                  <option value="Beginner">Complete Beginner / Mobile Phone</option>
                  <option value="Intermediate">Intermediate / Enthusiast DSLR or Mirrorless</option>
                  <option value="Advanced">Advanced / Competitor / Pro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Tell Us What You Hope to Learn</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Interested in landscape photography, night shoots, and understanding camera settings..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gold text-obsidian font-sans font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                Submit Membership Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}

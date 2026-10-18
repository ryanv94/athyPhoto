import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Clock, Send, ShieldCheck, Check } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-gold font-mono text-xs uppercase tracking-widest">Connect With Us</span>
        <h1 className="font-serif text-5xl sm:text-6xl text-zinc-100 mt-2 mb-4">Contact the Society</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          Whether you have questions about membership, upcoming competitions, workshops, or our annual calendar, our committee is delighted to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info Box */}
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-surface-900 border border-surface-800 space-y-6">
            <h2 className="font-serif text-3xl text-zinc-100">Club Studio & Contacts</h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Athy Photographic Society</strong>
                  <span className="text-zinc-300">Mount Saint Marys Resource Centre</span><br />
                  <span className="text-zinc-400">Athy, Co. Kildare</span><br />
                  <span className="font-mono text-gold text-xs">Eircode: R14 XY60</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Email Address</strong>
                  <a href="mailto:athyphotographicsociety@gmail.com" className="text-zinc-300 hover:text-gold transition-colors">
                    athyphotographicsociety@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Meeting Schedule</strong>
                  <span className="text-zinc-400">1st and 3rd Wednesday of every month at 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-800 text-xs text-zinc-500 font-mono">
              Affiliated with the Irish Photographic Federation (IPF)
            </div>
          </div>
        </div>

        {/* Form Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface-900 border border-surface-800">
          <h2 className="font-serif text-3xl text-zinc-100 mb-2">Send a Message</h2>
          <p className="text-xs text-zinc-400 mb-6">Our club secretary will respond to your query promptly.</p>

          {sent ? (
            <div className="p-6 rounded-2xl bg-surface-800 border border-gold/40 text-center space-y-3">
              <Check className="w-8 h-8 text-gold mx-auto" />
              <h3 className="font-serif text-2xl text-zinc-100">Message Dispatched</h3>
              <p className="text-xs text-zinc-400">
                Thank you for reaching out. We look forward to seeing you at Athy Photographic Society!
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-3 px-4 py-2 rounded bg-surface-700 text-xs text-gold font-mono"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Mary Murphy"
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="mary@example.ie"
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Joining the club / Calendar purchase"
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message or query here..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-800 border border-surface-700 text-zinc-100 text-sm focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gold text-obsidian font-sans font-semibold text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}

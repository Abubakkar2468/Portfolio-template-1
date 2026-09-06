import { ArrowUpRight, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  async function handleSubmit(event) {
    event.preventDefault();
    if (!endpoint) {
      setStatus('missing-config');
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(event.currentTarget), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Form submission failed');
      event.currentTarget.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return <section id="contact" className="container-shell py-24 lg:py-32"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Have a project in mind?</p><h2 className="mt-4 max-w-md font-display text-5xl font-bold leading-tight tracking-tight text-ink dark:text-white">Let&apos;s make something <span className="text-accent">useful.</span></h2><p className="section-copy">Tell me a little about what you&apos;re working on, where you&apos;re stuck, or what you&apos;re curious about.</p><a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ink dark:text-white" href="mailto:hello@example.com"><Mail size={17} className="text-accent" /> hello@example.com</a></div><form className="grid gap-6" onSubmit={handleSubmit}><label className="grid gap-2 text-sm font-bold text-ink dark:text-white">Your name<input required name="name" autoComplete="name" className="border-b border-slate-300 bg-transparent px-0 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-accent dark:border-slate-700" placeholder="Jane Smith" /></label><label className="grid gap-2 text-sm font-bold text-ink dark:text-white">Email address<input required name="email" type="email" autoComplete="email" className="border-b border-slate-300 bg-transparent px-0 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-accent dark:border-slate-700" placeholder="jane@company.com" /></label><label className="grid gap-2 text-sm font-bold text-ink dark:text-white">Tell me about it<textarea required name="message" rows="4" className="resize-none border-b border-slate-300 bg-transparent px-0 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-accent dark:border-slate-700" placeholder="A few words about your project..." /></label><div className="flex flex-wrap items-center gap-5"><button className="button-primary mt-2 w-fit disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send inquiry'} <ArrowUpRight size={17} /></button>{status === 'success' && <p role="status" className="text-sm font-semibold text-emerald-600">Thanks, your message is on its way.</p>}{status === 'error' && <p role="alert" className="text-sm font-semibold text-red-600">Something went wrong. Please try again.</p>}{status === 'missing-config' && <p role="alert" className="text-sm font-semibold text-amber-600">Add a Formspree endpoint in your `.env` file first.</p>}</div></form></div></section>;
}

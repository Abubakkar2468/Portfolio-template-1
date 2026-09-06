import { ArrowUpRight, Globe2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="border-t border-slate-100"><div className="container-shell flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between"><Link to="/" className="font-display text-lg font-bold tracking-tight text-ink">northstar<span className="text-accent">.</span></Link><div className="flex items-center gap-5"><a aria-label="Website" href="#contact" className="text-slate-400 transition hover:text-accent"><Globe2 size={17} /></a><a aria-label="Message" href="#contact" className="text-slate-400 transition hover:text-accent"><MessageCircle size={17} /></a><a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 transition hover:text-accent">Get in touch <ArrowUpRight size={14} /></a></div><p className="text-xs text-slate-400">© 2024 Northstar Studio</p></div></footer>;
}

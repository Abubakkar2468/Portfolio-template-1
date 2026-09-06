import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { notes } from '../data/notes';

export default function Blog() {
  return <section id="writing" className="border-y border-slate-100 bg-cloud py-24 lg:py-32"><div className="container-shell"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">From the notebook</p><h2 className="section-heading mt-4">Thinking out loud.</h2></div><Link to="/notes" className="inline-flex items-center gap-2 text-sm font-bold text-accent">View all notes <ArrowUpRight size={16} /></Link></div><div className="mt-12 grid gap-8 md:grid-cols-3">{notes.map((note) => <article key={note.id} className="group border-t border-slate-300 pt-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{note.date}</p><h3 className="mt-6 font-display text-xl font-bold leading-snug text-ink transition group-hover:text-accent">{note.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{note.copy}</p><Link to={`/notes/${note.id}`} aria-label={`Read ${note.title}`} className="mt-7 inline-flex h-9 w-9 items-center justify-center border border-slate-300 text-ink transition hover:border-accent hover:text-accent"><ArrowUpRight size={16} /></Link></article>)}</div></div></section>;
}

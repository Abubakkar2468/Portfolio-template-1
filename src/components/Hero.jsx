import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cloud pt-32 lg:pt-40">
      <div className="container-shell grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500"><span className="h-2 w-2 bg-emerald-500" /> Available for select projects</div>
          <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-7xl">Designing digital products with <span className="text-accent">clarity.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">I&apos;m Alex Morgan, an independent product designer and developer helping ambitious teams turn complex ideas into simple, useful experiences.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a className="button-primary" href="#work">View selected work <ArrowUpRight size={17} /></a><a className="button-secondary" href="#contact">Start a conversation</a></div>
          <div className="mt-14 flex items-center gap-2 text-sm font-semibold text-slate-400"><MapPin size={16} className="text-accent" /> Based in Portland, working worldwide</div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:justify-self-end"><div className="absolute -left-8 top-12 h-40 w-40 border border-accent/20" /><img className="relative aspect-[4/5] w-full object-cover grayscale" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85" alt="Alex Morgan smiling in a studio" /><div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-soft"><p className="font-display text-3xl font-bold">08<span className="text-accent">+</span></p><p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">Years of craft</p></div></div>
      </div>
      <a href="#skills" aria-label="Scroll to skills" className="container-shell flex items-center gap-3 pb-7 text-xs font-bold uppercase tracking-[0.18em] text-slate-400"><ArrowDown size={16} className="text-accent" /> Scroll to explore</a>
    </section>
  );
}

import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Writing', '#writing']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-shell flex h-24 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink">northstar<span className="text-accent">.</span></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} className="text-sm font-semibold text-slate-500 transition hover:text-ink" href={href}>{label}</a>)}
          <ThemeToggle />
          <a className="button-secondary py-2.5" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button aria-label={open ? 'Close menu' : 'Open menu'} className="text-ink md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-y border-slate-100 bg-white px-6 py-5 dark:border-slate-800 dark:bg-ink md:hidden"><div className="flex flex-col gap-5">{links.map(([label, href]) => <a key={href} className="text-sm font-semibold text-slate-600 dark:text-slate-300" href={href} onClick={() => setOpen(false)}>{label}</a>)}<div className="flex items-center justify-between"><a className="button-primary" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a><ThemeToggle /></div></div></nav>}
    </header>
  );
}

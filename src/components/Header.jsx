import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Writing', '#writing']
];

const homeSection = (hash) => ({ pathname: '/', hash });

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;

    const sectionId = decodeURIComponent(location.hash.slice(1));
    const section = document.getElementById(sectionId);
    if (!section) return;

    window.requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.pathname, location.hash]);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-shell flex h-24 items-center justify-between">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink">northstar<span className="text-accent">.</span></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, hash]) => <Link key={hash} className="text-sm font-semibold text-slate-500 transition hover:text-ink" to={homeSection(hash)}>{label}</Link>)}
          <ThemeToggle />
          <Link className="button-secondary py-2.5" to={homeSection('#contact')}>Let's talk <ArrowUpRight size={15} /></Link>
        </nav>
        <button aria-label={open ? 'Close menu' : 'Open menu'} className="text-ink md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-y border-slate-100 bg-white px-6 py-5 dark:border-slate-800 dark:bg-ink md:hidden"><div className="flex flex-col gap-5">{links.map(([label, hash]) => <Link key={hash} className="text-sm font-semibold text-slate-600 dark:text-slate-300" to={homeSection(hash)} onClick={() => setOpen(false)}>{label}</Link>)}<div className="flex items-center justify-between"><Link className="button-primary" to={homeSection('#contact')} onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></Link><ThemeToggle /></div></div></nav>}
    </header>
  );
}

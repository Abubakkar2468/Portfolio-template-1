import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';
  return <button type="button" aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'} title={isDark ? 'Switch to light mode' : 'Switch to dark mode'} className="inline-flex h-10 w-10 items-center justify-center border border-slate-200 text-ink transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-white" onClick={() => setTheme(isDark ? 'light' : 'dark')}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}

import { Routes, Route, Link, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { notes } from './data/notes';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function ProjectDetail() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 lg:px-8">
        <p className="eyebrow">Project case study</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">A thoughtful digital product, built for momentum.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">This placeholder detail page is ready for your process, outcomes, and a deeper look at the work behind each project.</p>
        <img loading="lazy" decoding="async" className="mt-12 aspect-[16/8] w-full object-cover" src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=80" alt="Abstract product design workspace" />
      </main>
      <Footer />
    </>
  );
}

function NotesIndex() {
  return <>
    <Header />
    <main className="container-shell pb-24 pt-32 lg:pt-40">
      <p className="eyebrow">From the notebook</p>
      <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold tracking-tight text-ink dark:text-white sm:text-7xl">Notes on making useful things.</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400">Thoughts on design, systems, and the practice of turning ideas into work.</p>
      <div className="mt-16 grid gap-10 md:grid-cols-2">{notes.map((note) => <Link key={note.id} to={`/notes/${note.id}`} className="group border-t border-slate-200 pt-6 dark:border-slate-700"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-slate-400"><span>{note.category}</span><span>{note.date}</span></div><h2 className="mt-7 max-w-lg font-display text-3xl font-bold leading-tight text-ink transition group-hover:text-accent dark:text-white">{note.title}</h2><p className="mt-4 max-w-md leading-7 text-slate-500 dark:text-slate-400">{note.copy}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent">Read note <span aria-hidden="true">↗</span></span></Link>)}</div>
    </main>
    <Footer />
  </>;
}

function NoteDetail({ noteId }) {
  const note = notes.find((item) => item.id === noteId);
  if (!note) return <NotesIndex />;
  return <>
    <Header />
    <main className="container-shell pb-24 pt-32 lg:pt-40">
      <Link to="/notes" className="text-sm font-bold text-accent">← All notes</Link>
      <article className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400"><span>{note.category}</span><span aria-hidden="true">·</span><span>{note.date}</span></div>
        <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight text-ink dark:text-white sm:text-7xl">{note.title}</h1>
        <p className="mt-8 text-2xl leading-relaxed text-slate-500 dark:text-slate-400">{note.intro}</p>
        <div className="mt-12 space-y-7 text-lg leading-8 text-slate-600 dark:text-slate-300">{note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </article>
    </main>
    <Footer />
  </>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/project/:projectId" element={<ProjectDetail />} />
      <Route path="/notes" element={<NotesIndex />} />
      <Route path="/notes/:noteId" element={<NoteRoute />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function NoteRoute() {
  const { noteId } = useParams();
  return <NoteDetail noteId={noteId} />;
}

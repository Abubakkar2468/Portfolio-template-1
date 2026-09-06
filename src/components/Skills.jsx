import { Palette, Code2, PenTool, Layers3, Sparkles, Blocks } from 'lucide-react';

const skills = [
  ['Product design', 'From first sketch to shipped product.', Palette],
  ['Design systems', 'Flexible foundations for growing teams.', Layers3],
  ['Web development', 'Fast, accessible interfaces that last.', Code2],
  ['Visual identity', 'Distinctive brands with a clear point of view.', PenTool],
  ['Prototyping', 'Make the future tangible, early.', Sparkles],
  ['Creative direction', 'A steady hand for ambitious ideas.', Blocks]
];

export default function Skills() {
  return <section id="skills" className="container-shell py-24 lg:py-32"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">What I do</p><h2 className="section-heading mt-4">Many hats.<br /><span className="text-slate-400">One focus.</span></h2><p className="section-copy">The best work happens in the overlap between disciplines. I bring strategy, design, and code together to make ideas matter.</p></div><div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">{skills.map(([title, copy, Icon]) => <div key={title} className="border-t border-slate-200 pt-5"><Icon className="text-accent" size={23} strokeWidth={1.7} /><h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{copy}</p></div>)}</div></div></section>;
}

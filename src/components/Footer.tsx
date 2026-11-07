import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <div>© {new Date().getFullYear()} {personal.name}. Crafted with React & Framer Motion.</div>
        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-white transition-colors">Top</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
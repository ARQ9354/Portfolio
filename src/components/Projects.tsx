import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { projects } from '../data/portfolio'
import type { Project } from '../data/portfolio'
import { GithubIcon } from './BrandIcons'

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return ['All', ...Array.from(set).slice(0, 6)]
  }, [])
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <section id="work" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm uppercase tracking-widest text-violet-400">Selected Work</span>
          </div>
        </Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projects that <span className="grad-text">ship</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                    filter === t
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25'
                      : 'glass text-[var(--muted)] hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <TiltCard className="h-full">
        <div
          onClick={() => {
            const url = project.live || project.github
            if (url) window.open(url, '_blank', 'noopener,noreferrer')
          }}
          role="link"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              const url = project.live || project.github
              if (url) window.open(url, '_blank', 'noopener,noreferrer')
            }
          }}
          className="glass rounded-2xl overflow-hidden h-full flex flex-col card-hover cursor-pointer"
        >
          <div className="relative overflow-hidden aspect-[16/10]">
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16161f] via-transparent to-transparent" />
            {project.featured && (
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow">
                Featured
              </span>
            )}
            <span className="absolute top-3 right-3 text-xs text-white/70 font-mono">{project.year}</span>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-md text-xs bg-white/5 text-[var(--muted)] border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Live <ArrowUpRight size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-white transition-colors"
                >
                  <GithubIcon width={14} height={14} /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import Reveal from './Reveal'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm uppercase tracking-widest text-violet-400">Experience</span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            Where I've <span className="grad-text">worked</span>.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.15}>
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 -translate-x-1/2 mt-6 shadow-lg shadow-violet-500/40 ring-4 ring-[var(--bg)]" />

                  <div className="md:w-1/2 pl-12 md:pl-0">
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass rounded-2xl p-6 card-hover"
                    >
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <div className="text-violet-400 text-sm mt-0.5 flex items-center gap-2">
                            <Briefcase size={14} /> {exp.company}
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[var(--muted)] glass px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">{exp.description}</p>
                      <ul className="mt-4 space-y-1.5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="text-sm text-[var(--muted)] flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
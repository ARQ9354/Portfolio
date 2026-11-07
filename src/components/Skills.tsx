import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { skills } from '../data/portfolio'

export default function Skills() {
  // duplicate for seamless marquee
  const doubled = [...skills, ...skills]

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm uppercase tracking-widest text-violet-400">Skills</span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            My <span className="grad-text">toolkit</span>.
          </h2>
        </Reveal>
      </div>

      {/* marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />
        <div className="flex marquee-track whitespace-nowrap">
          {doubled.map((s, i) => (
            <div
              key={i}
              className="mx-3 px-6 py-3 rounded-2xl glass text-sm font-medium hover:border-violet-500/40 transition-colors"
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* grid of animated chips */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-400/20 flex items-center justify-center text-violet-400 text-xs font-bold">
                  {s.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{s}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
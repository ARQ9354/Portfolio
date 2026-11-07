import { motion } from 'framer-motion'
import { MapPin, Mail, Briefcase, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { personal, stats } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm uppercase tracking-widest text-violet-400">About</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Building digital products with <span className="grad-text">precision & soul</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[var(--muted)] leading-relaxed">
                {personal.bio}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                When I'm not shipping code, you'll find me exploring generative art, contributing to open source, or chasing the perfect espresso. I believe the best products live at the intersection of engineering rigor and creative intuition.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { Icon: MapPin, label: 'Location', value: personal.location },
                  { Icon: Mail, label: 'Email', value: personal.email },
                  { Icon: Briefcase, label: 'Status', value: personal.availability },
                  { Icon: Sparkles, label: 'Focus', value: 'Product & DX' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 glass rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)]">{label}</div>
                      <div className="text-sm font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-2xl p-8 text-center card-hover"
                >
                  <div className="text-5xl font-bold grad-text">{s.value}</div>
                  <div className="mt-2 text-sm text-[var(--muted)]">{s.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import { TypeAnimation } from 'react-type-animation'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-violet-600/30 blur-3xl blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl blob" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl blob" style={{ animationDelay: '8s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-[var(--muted)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personal.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm <br />
            <span className="grad-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-4 text-xl md:text-2xl text-[var(--muted)] font-light"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Engineer', 2000,
                'Creative Developer', 2000,
                'Design Systems Architect', 2000,
                'Performance Obsessive', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-[var(--muted)] max-w-xl leading-relaxed"
          >
            {personal.tagline} {personal.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium hover:bg-white/10 transition-colors"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex items-center gap-5 text-[var(--muted)]"
          >
            {[
              { Icon: GithubIcon, href: personal.social.github },
              { Icon: LinkedinIcon, href: personal.social.linkedin },
              { Icon: TwitterIcon, href: personal.social.twitter },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:-translate-y-1 transition-all"
              >
                <Icon width={20} height={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-2xl" />
            <div className="relative glass rounded-3xl p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-[var(--muted)] font-mono">portfolio.tsx</span>
              </div>
              <pre className="text-xs font-mono text-[var(--muted)] leading-relaxed overflow-hidden flex-1">
{`const developer = {
  name: "Jordan Blake",
  skills: ["React","TS","Node"],
  passion: "craft",
  coffee: Infinity,
  ships: true,
};

export default developer;`}
              </pre>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '87%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  />
                </div>
                <span className="text-xs text-[var(--muted)]">87% shipped</span>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-[var(--muted)]">Experience</div>
              <div className="text-lg font-bold grad-text">6+ yrs</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-[var(--muted)]">Projects</div>
              <div className="text-lg font-bold grad-text">40+</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--muted)] text-xs"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-violet-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
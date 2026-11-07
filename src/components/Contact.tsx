import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from './BrandIcons'
import Reveal from './Reveal'
import { personal } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // opens mail client with prefilled content
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const socials = [
    { Icon: GithubIcon, href: personal.social.github, label: 'GitHub' },
    { Icon: LinkedinIcon, href: personal.social.linkedin, label: 'LinkedIn' },
    { Icon: TwitterIcon, href: personal.social.twitter, label: 'Twitter' },
    { Icon: DribbbleIcon, href: personal.social.dribbble, label: 'Dribbble' },
  ]

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-violet-500" />
            <span className="text-sm uppercase tracking-widest text-violet-400">Contact</span>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Let's build something <span className="grad-text">great together</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-md">
                Have a project in mind, a role to fill, or just want to say hi? My inbox is always open. I'll get back to you within 24 hours.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-4">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-4 glass rounded-xl p-4 card-hover">
                  <div className="w-11 h-11 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted)]">Email</div>
                    <div className="text-sm font-medium">{personal.email}</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-11 h-11 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted)]">Based in</div>
                    <div className="text-sm font-medium">{personal.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-violet-500/40 transition-all"
                  >
                    <Icon width={18} height={18} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <motion.form
              onSubmit={submit}
              className="glass rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div>
                <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-xs text-[var(--muted)] uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium shadow-lg shadow-violet-500/25"
              >
                {sent ? 'Opening mail client…' : 'Send Message'}
                <Send size={16} />
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
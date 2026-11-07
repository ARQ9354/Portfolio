import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-0 hidden md:block"
      animate={{ x: pos.x - 250, y: pos.y - 250, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.5 }}
      style={{
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(34,211,238,0.08) 35%, transparent 70%)',
        filter: 'blur(20px)',
      }}
    />
  )
}
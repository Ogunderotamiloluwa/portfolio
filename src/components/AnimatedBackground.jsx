import { motion } from 'framer-motion'
import './AnimatedBackground.css'

export default function AnimatedBackground() {
  const shapes = [
    { id: 1, size: 120, duration: 20, delay: 0, color: '#6366f1' },
    { id: 2, size: 80, duration: 25, delay: 5, color: '#8b5cf6' },
    { id: 3, size: 100, duration: 30, delay: 10, color: '#d946ef' },
    { id: 4, size: 90, duration: 22, delay: 2, color: '#6366f1' },
    { id: 5, size: 70, duration: 28, delay: 7, color: '#8b5cf6' },
  ]

  return (
    <div className="animated-background">
      {shapes.map(shape => (
        <motion.div
          key={shape.id}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            opacity: 0.1,
          }}
          animate={{
            y: [0, -30, 0],
            x: [-20, 20, -20],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <div className="gradient-orb orb-3" />
    </div>
  )
}

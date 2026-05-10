import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { stats } from "../../data/mockData"
import { Stat } from "../../types"

export default function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center space-y-2"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary flex items-center justify-center">
        {count}{stat.suffix}
      </div>
      <p className="text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  )
}

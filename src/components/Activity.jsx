import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, UploadCloud, RefreshCw, CheckCircle2, XCircle, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

const eventsSeed = [
  { id: 1, icon: Rocket, title: 'Deployment started', status: 'running' },
  { id: 2, icon: UploadCloud, title: 'Uploading assets', status: 'running' },
  { id: 3, icon: RefreshCw, title: 'Running build', status: 'queued' },
]

function EventRow({ e, i }) {
  const Icon = e.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, delay: i * 0.04 }}
      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-white"
    >
      <div className="flex items-center gap-3">
        <div className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20">
          <Icon className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-medium">{e.title}</p>
          <p className="text-xs text-white/60">{new Date().toLocaleTimeString()}</p>
        </div>
      </div>
      <div>
        {e.status === 'running' && (
          <div className="flex items-center gap-2 text-xs text-amber-300">
            <Clock className="w-4 h-4 animate-pulse" /> In progress
          </div>
        )}
        {e.status === 'success' && (
          <div className="flex items-center gap-2 text-xs text-emerald-300">
            <CheckCircle2 className="w-4 h-4" /> Success
          </div>
        )}
        {e.status === 'failed' && (
          <div className="flex items-center gap-2 text-xs text-rose-300">
            <XCircle className="w-4 h-4" /> Failed
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Activity() {
  const [events, setEvents] = useState(eventsSeed)

  useEffect(() => {
    const t = setInterval(() => {
      setEvents((prev) => {
        // randomly complete or add an event for playful feel
        if (Math.random() > 0.6) {
          return prev.map((e) =>
            e.status === 'running' ? { ...e, status: Math.random() > 0.15 ? 'success' : 'failed' } : e
          )
        }
        const id = prev.length + 1
        return [
          { id, icon: RefreshCw, title: `Step #${id} processing`, status: 'running' },
          ...prev,
        ]
      })
    }, 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="activity" className="relative py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold tracking-tight">Realtime Activity</h2>
          <div className="text-white/70 text-sm">Live</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {events.map((e, i) => (
                <EventRow key={e.id} e={e} i={i} />
              ))}
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 text-white"
          >
            <p className="text-white/80">
              Watch your deployments stream through an animated pipeline. This panel simulates steps completing over time to give the interface a lively, playful feeling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

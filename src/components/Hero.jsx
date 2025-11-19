import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Realtime builds, instant previews
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            A playful, animated dashboard for your deployments
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Manage projects, watch deploys fly through a colorful assembly line, and collaborate with your team — all with delightful motion.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#create"
              className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold shadow-lg shadow-blue-500/20"
            >
              New Project
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#activity"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white px-4 py-2 font-semibold border border-white/15"
            >
              View Activity
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Menu, Search, Bell, Plus, ChevronDown, Settings, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Avatar({ name = 'You' }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500">
        <div className="absolute inset-[2px] rounded-full bg-slate-900"></div>
        <span className="absolute inset-0 grid place-items-center text-xs text-white/90 font-semibold">{name[0]}</span>
      </div>
      <span className="hidden sm:block text-sm text-white/80">{name}</span>
      <ChevronDown className="w-4 h-4 text-white/60 hidden sm:block" />
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/5 text-white/70">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400 shadow-inner"></div>
            <span className="text-white font-semibold tracking-tight">Nova Console</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              placeholder="Search projects, deployments, domains..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm border border-white/10 transition">
            <Plus className="w-4 h-4" /> New Project
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5 text-white/70 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-fuchsia-400"></span>
          </button>

          <div className="relative">
            <button onClick={() => setOpen((o) => !o)} className="p-2 rounded-lg hover:bg-white/5 text-white/80">
              <Avatar name="Ava" />
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 mt-2 w-56 rounded-xl overflow-hidden border border-white/10 bg-slate-800/90 backdrop-blur-xl shadow-2xl"
                >
                  <div className="p-2">
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-white/90">
                      <User className="w-4 h-4" /> Profile
                    </button>
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-white/90">
                      <Settings className="w-4 h-4" /> Settings
                    </button>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="p-2">
                    <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 text-white/90">Log out</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

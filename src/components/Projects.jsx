import { motion } from 'framer-motion'
import { Folder, GitBranch, Globe, Server, Star } from 'lucide-react'

const projects = [
  { name: 'docs', domain: 'docs.nova.dev', env: 'Production', status: 'Ready', stars: 213 },
  { name: 'studio', domain: 'studio.nova.dev', env: 'Preview', status: 'Building', stars: 102 },
  { name: 'api', domain: 'api.nova.dev', env: 'Production', status: 'Queued', stars: 54 },
  { name: 'marketing', domain: 'nova.dev', env: 'Production', status: 'Ready', stars: 321 },
]

function Card({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: i * 0.06 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:border-white/20 hover:bg-white/10 transition relative overflow-hidden"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 blur-2xl" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-white">
            <Folder className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-medium">{item.name}</p>
            <p className="text-white/50 text-xs">{item.domain}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/60">
          <div className="hidden sm:flex items-center gap-1 text-xs"><GitBranch className="w-4 h-4" />{item.env}</div>
          <div className="hidden sm:flex items-center gap-1 text-xs"><Server className="w-4 h-4" />{item.status}</div>
          <div className="flex items-center gap-1 text-xs"><Star className="w-4 h-4" />{item.stars}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-white/60">Last deploy succeeded</span>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-semibold tracking-tight">Projects</h2>
          <button className="text-white/70 text-sm hover:text-white">View all</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Card key={p.name} item={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

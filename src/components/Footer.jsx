import { Github, Twitter, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400" />
          <span>Nova Console</span>
          <span className="mx-3 opacity-40">•</span>
          <span className="text-sm">A playful dashboard inspired by Vercel</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Changelog</a>
          <a href="#" className="hover:text-white inline-flex items-center gap-1"><Star className="w-4 h-4" /> Star</a>
          <a href="#" className="hover:text-white"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  )
}

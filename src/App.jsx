import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Activity from './components/Activity'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />

      {/* Content area */}
      <main className="relative">
        {/* soft gradient accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>

        <Projects />
        <Activity />
      </main>

      <Footer />
    </div>
  )
}

export default App

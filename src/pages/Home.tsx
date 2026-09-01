import { Sidebar } from '../components/Sidebar'
import { Intro } from '../components/Intro'
import { Work } from '../components/Work'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Education } from '../components/Education'
import { ContactPanel } from '../components/ContactPanel'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div id="top" className="page">
      <div className="layout">
        <Sidebar />

        <div className="hero-main">
          <Intro />
          <Work />
        </div>

        <ContactPanel />

        <div className="nav-spacer nav-spacer--about" aria-hidden="true" />
        <About />

        <div className="nav-spacer nav-spacer--skills" aria-hidden="true" />
        <Skills />

        <div className="nav-spacer nav-spacer--education" aria-hidden="true" />
        <Education />
      </div>

      <Footer />
    </div>
  )
}

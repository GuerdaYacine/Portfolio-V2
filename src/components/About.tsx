import './About.css'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="section-block about">
      <p className="label">About</p>

      <div className="about__text reveal" ref={ref}>
        <p>
          I don’t see a feature as a standalone piece of code, but as a
          building block that fits into a larger system. It has to be
          thought through, built, tested, deployed and observed.
        </p>
        <p>
          This view of the software lifecycle guides the way I work. Before
          changing a system, I try to understand its architecture, its
          responsibilities, its dependencies and its conventions. I also try
          to write code with the people who will read, maintain or evolve it
          after me in mind.
        </p>
        <p>
          This same standard applies to my personal projects as much as to
          professional work: setting up quality pipelines, containerizing my
          applications, and staying attentive to what happens once
          something is in production rather than stopping at deployment.
        </p>
        <p className="about__closer">
          Paying attention to what happens after the merge.
        </p>
      </div>
    </section>
  )
}

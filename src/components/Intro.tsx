import './Intro.css'
import { IconArrowUpRight } from './icons'

export function Intro() {
  return (
    <section className="intro">
      <p className="intro__text">
        I'm Yacine Guerda, a Full Stack developer with a Backend focus. I
        like understanding the whole lifecycle of an application, from its
        architecture and development through to deployment, monitoring and
        observability.
      </p>
      <a className="arrow-link" href="#about">
        About{' '}
        <span className="arrow-link__glyph">
          <IconArrowUpRight />
        </span>
      </a>
    </section>
  )
}

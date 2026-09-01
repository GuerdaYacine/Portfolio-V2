import { Link } from 'react-router-dom'
import './Work.css'
import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../data/projects'
import { IconArrowUpRight } from './icons'

export function Work() {
  const ref = useReveal<HTMLUListElement>()

  return (
    <section id="work" className="work">
      <p className="label">Work</p>

      <ul className="work__list reveal" ref={ref}>
        {PROJECTS.map((project) => (
          <li key={project.slug}>
            <Link className="work__item" to={`/${project.slug}`}>
              <span className="work__title">{project.title}</span>
              <span className="meta work__year">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>

      <a className="arrow-link" href="https://github.com/GuerdaYacine" target="_blank" rel="noreferrer">
        See all{' '}
        <span className="arrow-link__glyph">
          <IconArrowUpRight />
        </span>
      </a>
    </section>
  )
}

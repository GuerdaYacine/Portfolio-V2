import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import { ImageSlider } from '../components/ImageSlider'
import { Footer } from '../components/Footer'
import { IconArrowLeft, IconArrowUpRight } from '../components/icons'
import './ProjectPage.css'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <div className="page">
        <div className="project-layout">
          <aside className="project-nav">
            <div className="project-nav__inner">
              <Link to="/" className="sidebar__name">
                Yacine
                <br />
                Guerda
              </Link>
              <Link className="arrow-link arrow-link--back" to="/">
                <span className="arrow-link__glyph">
                  <IconArrowLeft />
                </span>{' '}
                Back
              </Link>
            </div>
          </aside>
          <main className="project-content">
            <p className="meta">Project not found.</p>
          </main>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="page">
      <div className="project-layout">
        <aside className="project-nav">
          <div className="project-nav__inner">
            <Link to="/" className="sidebar__name">
              Yacine
              <br />
              Guerda
            </Link>
            <Link className="arrow-link arrow-link--back" to="/">
              <span className="arrow-link__glyph">
                <IconArrowLeft />
              </span>{' '}
              Back
            </Link>
          </div>
        </aside>

        <main className="project-content">
          <header className="project-header">
            <div className="project-header__title">
              <h1>{project.title}</h1>
              <span className="meta">{project.year}</span>
            </div>

            <p className="project-header__lede">{project.lede}</p>

            <dl className="project-meta">
              <div>
                <dt className="meta">Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt className="meta">Stack</dt>
                <dd>{project.stack}</dd>
              </div>
              <div>
                <dt className="meta">Status</dt>
                <dd>{project.status}</dd>
              </div>
            </dl>

            {project.link && (
              <a
                className="arrow-link"
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {project.link.label}{' '}
                <span className="arrow-link__glyph">
                  <IconArrowUpRight />
                </span>
              </a>
            )}
          </header>

          <ImageSlider images={project.images} alt={project.title} />

          <div className="project-sections">
            {project.sections.map((section) => (
              <section className="project-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

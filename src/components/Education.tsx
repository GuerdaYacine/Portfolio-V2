import './Education.css'
import { useReveal } from '../hooks/useReveal'

const ENTRIES = [
  {
    degree: 'BTS in IT Services for Organizations - Software Solutions & App Design (SLAM)',
    school: 'Lycée Saint-Vincent · Senlis',
  },
  {
    degree: 'Bachelor’s in IT Project Coordination',
    school: 'Maecia · Apprenticeship',
  },
]

export function Education() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="education" className="section-block education">
      <p className="label">Education</p>

      <div className="education__list reveal" ref={ref}>
        {ENTRIES.map((entry) => (
          <div className="education__entry" key={entry.degree}>
            <h3>{entry.degree}</h3>
            <p className="meta">{entry.school}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

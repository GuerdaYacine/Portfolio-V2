import './Skills.css'
import { useReveal } from '../hooks/useReveal'

const GROUPS = [
  { label: 'Frontend', items: 'React · Vue.js · React Native' },
  { label: 'Backend', items: 'PHP · Laravel · Symfony · REST API · MySQL' },
  {
    label: 'Architecture & Infrastructure',
    items:
      'Docker · Traefik · Portainer · Komodo · SOPS · UFW · Fail2ban · SSH Tunnel',
  },
  {
    label: 'Tools & Workflow',
    items:
      'Git · GitHub · Bitbucket · Bitbucket Pipelines · Jira · Confluence · Slack · Starlight · PHPStan · PHP-CS-Fixer',
  },
  {
    label: 'Observability',
    items: 'Prometheus · Grafana · Loki · cAdvisor · Uptime Kuma',
  },
]

export function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="section-block skills">
      <p className="label">Skills</p>

      <div className="skills__grid reveal" ref={ref}>
        {GROUPS.map((group) => (
          <div className="skills__group" key={group.label}>
            <h3 className="skills__name">{group.label}</h3>
            <p className="meta skills__items">{group.items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

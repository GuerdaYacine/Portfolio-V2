import { useEffect, useState } from 'react'
import './ContactPanel.css'
import { IconArrowUpRight } from './icons'

function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(id)
  }, [])

  return now
}

export function ContactPanel() {
  const now = useClock()
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  })

  return (
    <aside className="col-contact">
      <a className="contact-panel" href="mailto:guerda.yacine60100@gmail.com">
        <h2 className="contact-panel__title">
          Get in
          <br />
          touch
        </h2>

        <div className="contact-panel__foot">
          <p className="meta">
            Paris, FR
            <br />
            {time}
          </p>
          <span className="contact-panel__arrow" aria-hidden="true">
            <IconArrowUpRight />
          </span>
        </div>
      </a>
    </aside>
  )
}

import './Sidebar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
]

export function Sidebar() {
  return (
    <aside className="col-nav">
      <div className="col-nav__inner">
        <a href="/" className="sidebar__name">
          Yacine
          <br />
          Guerda
        </a>

        <nav className="sidebar__nav" aria-label="Main navigation">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}

import FalconMark from './components/FalconMark.jsx'

const EMAIL = 'hello@peregrineproductions.studio'

const offerings = [
  {
    number: '01',
    title: 'Applications',
    body: 'Software with interfaces that respond quickly and explain themselves. We take products from first prototype through to release.',
  },
  {
    number: '02',
    title: 'Games',
    body: 'Original games built on tight mechanics, clear feedback, and a good reason to play one more round.',
  },
]

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Peregrine Productions, back to top">
          <FalconMark className="brand-mark" />
          <span>Peregrine</span>
        </a>
        <a className="header-link" href={`mailto:${EMAIL}`}>Get in touch</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-panel" aria-hidden="true" />
          <div className="hero-streak" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow">Independent software &amp; game studio</p>
            <h1 className="hero-title">
              Peregrine
              <span className="hero-title-accent">Productions</span>
            </h1>
            <p className="hero-lede">
              We make software applications and games that people choose to come back to.
            </p>
          </div>
          <FalconMark className="hero-mark" />
        </section>

        <section className="studio" aria-labelledby="studio-heading">
          <div className="container studio-grid">
            <h2 id="studio-heading" className="section-label">The studio</h2>
            <p className="studio-copy">
              Peregrine Productions is a small studio focused on engaging software and games.
              We care about how a thing feels in the hand: how fast it answers, how little it
              asks of you, and whether you want to open it again tomorrow.
            </p>
          </div>
        </section>

        <section className="work" aria-labelledby="work-heading">
          <div className="container">
            <h2 id="work-heading" className="section-label">What we make</h2>
            <ul className="offerings">
              {offerings.map((item) => (
                <li key={item.number} className="offering">
                  <span className="offering-number">{item.number}</span>
                  <h3 className="offering-title">{item.title}</h3>
                  <p className="offering-body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading" className="section-label">Contact</h2>
            <p className="contact-prompt">Have a project in mind, or just want to say hello?</p>
            <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Peregrine Productions</span>
          <FalconMark className="footer-mark" />
        </div>
      </footer>
    </>
  )
}

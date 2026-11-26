import FalconMark from './components/FalconMark.jsx'
import FlowsmithMark from './components/FlowsmithMark.jsx'
import flowsmithPhoto from './assets/flowsmith-studio.jpg'
import gregoryPhoto from './assets/gregory-larson.jpg'

const EMAIL = 'hello@peregrineproductions.studio'
const FLOWSMITH_URL = 'https://flowsmith.studio'
const LINKEDIN_URL = 'https://www.linkedin.com/in/gregorynelslarson/'

const offerings = [
  {
    number: '01',
    title: 'Applications',
    body: 'Software that makes life easier. We take products from first prototype through to release.',
    link: { href: '#flowsmith', label: 'See Flowsmith, our first product' },
  },
  {
    number: '02',
    title: 'Games',
    body: 'Original games built on novel mechanics, clear feedback, and a good reason to play one more round.',
  },
]

const flowsmithApps = [
  {
    name: 'Flowsmith Pilates',
    body: 'Lesson planning for mat and apparatus work, with an exercise library, reusable flows and a full-screen Teach Mode.',
    status: 'Coming soon',
  },
  {
    name: 'Physical therapy',
    body: 'Session planning on the same foundation, shaped around how therapists program exercise for patients.',
    status: 'Planned',
  },
  {
    name: 'Other disciplines',
    body: 'Each new discipline brings its own exercises, equipment and vocabulary.',
    status: 'Planned',
  },
]

const experience = [
  { role: 'CTO', company: 'Procurement Sciences' },
  { role: 'CTO', company: 'Agility' },
  { role: 'VP Engineering', company: 'Jasper' },
  { role: 'SVP Engineering', company: 'Divvy and BILL' },
  { role: 'VP Software Development', company: 'ObservePoint' },
  { role: 'General Partner', company: 'Tauri Capital' },
]

function NewTabLink({ children, ...props }) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Peregrine Productions, back to top">
          <FalconMark className="brand-mark" />
          <span>Peregrine</span>
        </a>
        <nav className="header-nav" aria-label="Main">
          <a href="#work">What we do</a>
          <a href="#flowsmith">Flowsmith</a>
          <a href="#about">About</a>
          <a className="header-link" href="#contact">Get in touch</a>
        </nav>
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
              We build software that solves real problems and games that bring people together.
            </p>
          </div>
          <FalconMark className="hero-mark" />
        </section>

        <section className="studio" aria-labelledby="studio-heading">
          <div className="container studio-grid">
            <h2 id="studio-heading" className="section-label">The studio</h2>
            <p className="studio-copy">
              Peregrine Productions is a small studio focused on creating software and games that speak to people's passions.
              We're a team of creatives and engineers who care not just about function, but how our work makes people feel. We believe that software and games should be beautiful, intuitive, and fun to use.
            </p>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-heading">
          <div className="container">
            <h2 id="work-heading" className="section-label">What we make</h2>
            <ul className="offerings">
              {offerings.map((item) => (
                <li key={item.number} className="offering">
                  <span className="offering-number">{item.number}</span>
                  <h3 className="offering-title">{item.title}</h3>
                  <p className="offering-body">{item.body}</p>
                  {item.link && (
                    <a className="offering-link" href={item.link.href}>{item.link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="featured" id="flowsmith" aria-labelledby="flowsmith-heading">
          <div className="container">
            <p className="section-label">Featured product</p>
            <div className="featured-grid">
              <div className="featured-copy">
                <h2 id="flowsmith-heading" className="featured-brand">
                  <FlowsmithMark className="featured-mark" />
                  Flowsmith
                </h2>
                <p className="featured-tagline">Planning tools for the people who teach movement.</p>
                <p className="featured-body">
                  Flowsmith is a family of apps for Pilates instructors, fitness professionals and
                  physical therapists, built around how sessions actually run: plan ahead or just
                  in time, then run the plan in front of a client or class. We're designing it
                  alongside a working instructor and testing it against a real teaching week.
                </p>
                <NewTabLink className="featured-link" href={FLOWSMITH_URL}>
                  Visit flowsmith.studio <span aria-hidden="true">↗</span>
                </NewTabLink>
              </div>

              <figure className="featured-figure">
                <img
                  src={flowsmithPhoto}
                  alt="A bright Pilates studio with a light wood reformer, white shiplap walls and two tall plants."
                  width="1400"
                  height="840"
                  loading="lazy"
                />
              </figure>
            </div>

            <ul className="featured-apps">
              {flowsmithApps.map((app) => (
                <li key={app.name} className="featured-app">
                  <div className="featured-app-head">
                    <h3 className="featured-app-name">{app.name}</h3>
                    <span className="status">{app.status}</span>
                  </div>
                  <p className="featured-app-body">{app.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading" className="section-label">About</h2>
            <div className="about-grid">
              <figure className="about-figure">
                <img
                  src={gregoryPhoto}
                  alt="Portrait of Gregory Larson."
                  width="900"
                  height="1349"
                  loading="lazy"
                />
              </figure>

              <div className="about-copy">
                <h3 className="about-name">Gregory Larson</h3>
                <p className="about-title">President &amp; CEO</p>
                <div className="about-bio">
                  <p>
                    Gregory has spent more than 20 years building software and the teams behind it,
                    from Microsoft to startups that grew into unicorns. Most recently Gregory has led
                    technology at Procurement Sciences, Agility, Jasper and Divvy, growing small
                    engineering teams into globally distributed organizations.
                  </p>
                  <p>
                    Along the way Gregory helped Divvy through its $2.5 billion acquisition by
                    Bill.com, helped Jasper raise a $125 million Series A, and invented and launched
                    products in AI, fintech and marketing technology. As an angel investor and
                    advisor, Gregory also works with early-stage founders on product, engineering and
                    strategy.
                  </p>
                  <p>
                    Peregrine Productions brings that experience to a smaller canvas: a studio where
                    a few people can take an idea all the way to a product people enjoy using.
                  </p>
                </div>

                <dl className="about-experience">
                  {experience.map((item) => (
                    <div key={item.company} className="about-experience-row">
                      <dt>{item.company}</dt>
                      <dd>{item.role}</dd>
                    </div>
                  ))}
                </dl>

                <NewTabLink className="about-link" href={LINKEDIN_URL}>
                  Gregory on LinkedIn <span aria-hidden="true">↗</span>
                </NewTabLink>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
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
          <nav className="footer-nav" aria-label="Footer">
            <NewTabLink href={FLOWSMITH_URL}>Flowsmith</NewTabLink>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <FalconMark className="footer-mark" />
          </nav>
        </div>
      </footer>
    </>
  )
}

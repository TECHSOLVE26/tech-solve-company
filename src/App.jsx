import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.png'

const services = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Modern, responsive websites that help businesses establish a strong online presence and reach more customers.',
    tags: ['Business Websites', 'Landing Pages', 'E-commerce'],
  },
  {
    number: '02',
    title: 'Software & Systems',
    description:
      'Smart digital systems designed to simplify business operations, improve productivity and support growth.',
    tags: ['Business Systems', 'Management Tools', 'Automation'],
  },
  {
    number: '03',
    title: 'Branding & Design',
    description:
      'Creative visual identities and professional designs that make your business recognisable and memorable.',
    tags: ['Logo Design', 'Graphics', 'Brand Identity'],
  },
  {
    number: '04',
    title: 'Digital Identity',
    description:
      'Connect with people instantly through QR profiles, NFC smart cards and modern digital business cards.',
    tags: ['QR Profiles', 'NFC Cards', 'Digital Cards'],
  },
]

const products = [
  {
    initials: 'BP',
    category: 'BUSINESS MANAGEMENT',
    title: 'Butchery Pro',
    description:
      'A smart business management system designed to help butchery owners manage sales, stock, expenses and daily operations.',
    features: [
      'Sales management',
      'Stock tracking',
      'Expense records',
      'Business reports',
    ],
    status: 'IN DEVELOPMENT',
    className: 'butchery',
  },
  {
    initials: 'PS',
    category: 'PERSONAL FINANCE',
    title: 'Personal Savings',
    description:
      'A simple savings platform that helps individuals organise savings goals, track contributions and monitor progress.',
    features: [
      'Savings goals',
      'Contribution tracking',
      'Progress monitoring',
      'Savings history',
    ],
    status: 'COMING SOON',
    className: 'savings',
  },
]

const reasons = [
  {
    number: '01',
    title: 'Built around your needs',
    description:
      'We focus on understanding your goals before creating a digital solution.',
  },
  {
    number: '02',
    title: 'Practical technology',
    description:
      'Our solutions are designed to solve real problems and make everyday work easier.',
  },
  {
    number: '03',
    title: 'Growth focused',
    description:
      'We help businesses build a stronger digital presence and prepare for the future.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const whatsappLink =
    'https://wa.me/254115747135?text=Hello%20TECH%20SOLVE%2C%20I%20would%20like%20to%20make%20an%20enquiry.'

  return (
    <main>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img src={logo} alt="TECH SOLVE logo" />
          <span>TECH <strong>SOLVE</strong></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            TECHNOLOGY · INNOVATION · GROWTH
          </div>

          <h1>
            Technology that moves your ideas <span>forward.</span>
          </h1>

          <p className="hero-description">
            We create modern digital experiences, smart business systems and
            creative solutions that help people and businesses move forward.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button button-primary">
              Explore our services <span>↗</span>
            </a>

            <a href="#about" className="button button-outline">
              Discover TECH SOLVE
            </a>
          </div>

          <div className="hero-bottom-note">
            <span>01 / DIGITAL SOLUTIONS</span>
            <span>BUILT FOR WHAT'S NEXT</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>

          <div className="visual-center">
            <img src={logo} alt="TECH SOLVE" />
            <span>TECH SOLVE</span>
            <small>SMART SOLUTIONS</small>
          </div>

          <div className="floating-card floating-card-top">
            <span className="floating-number">01</span>
            <div>
              <strong>Digital Innovation</strong>
              <small>Ideas into solutions</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <span className="floating-number">02</span>
            <div>
              <strong>Business Growth</strong>
              <small>Technology that works</small>
            </div>
          </div>

          <div className="visual-caption">THINK. CREATE. SOLVE.</div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="intro-strip">
        <p>
          We believe technology should make life simpler, businesses stronger
          and opportunities more accessible.
        </p>
        <span>SMART SOLUTIONS. BETTER BUSINESS.</span>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-label">
          <span>01</span>
          <p>WHO WE ARE</p>
        </div>

        <div className="about-grid">
          <div className="about-title">
            <p className="eyebrow">ABOUT TECH SOLVE</p>
            <h2>
              We turn ideas into <span>digital solutions.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p className="large-copy">
              TECH SOLVE is a technology and digital solutions brand focused
              on helping individuals, entrepreneurs and businesses use
              technology with confidence.
            </p>

            <p>
              From websites and business systems to creative design and digital
              identity, we bring ideas together with practical technology.
            </p>

            <p>
              Our goal is simple: create useful solutions that make a real
              difference.
            </p>

            <a href="#contact" className="text-link">
              Work with us <span>↗</span>
            </a>
          </div>
        </div>

        <div className="about-bottom">
          <div>
            <strong>Our Vision</strong>
            <p>Making useful technology accessible to more people and businesses.</p>
          </div>
          <div>
            <strong>Our Mission</strong>
            <p>Creating practical, modern and reliable digital solutions.</p>
          </div>
          <div>
            <strong>Our Approach</strong>
            <p>Understand the challenge. Build the solution. Support growth.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="section-label">
          <span>02</span>
          <p>WHAT WE DO</p>
        </div>

        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2>Solutions for a <span>digital world.</span></h2>
          </div>
          <p>
            A range of technology and creative services designed to help you
            build, improve and grow.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-arrow">↗</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-section" id="products">
        <div className="section-label">
          <span>03</span>
          <p>OUR PRODUCTS</p>
        </div>

        <div className="section-heading">
          <div>
            <p className="eyebrow">MADE BY TECH SOLVE</p>
            <h2>Technology with a <span>purpose.</span></h2>
          </div>

          <p>
            We are developing digital products that solve everyday challenges
            for businesses and individuals.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article
              className={`product-card ${product.className}`}
              key={product.initials}
            >
              <div className="product-card-top">
                <div className="product-symbol">{product.initials}</div>
                <span className="product-status">{product.status}</span>
              </div>

              <p className="product-category">{product.category}</p>
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-features">
                {product.features.map((feature) => (
                  <span key={feature}>
                    <b>✓</b> {feature}
                  </span>
                ))}
              </div>

              <div className="product-card-footer">
                <span>BY TECH SOLVE</span>
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>

        <p className="products-note">
          More TECH SOLVE products and innovations are in development.
        </p>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="section-label">
          <span>04</span>
          <p>HOW WE WORK</p>
        </div>

        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR PROCESS</p>
            <h2>Simple steps. <span>Meaningful results.</span></h2>
          </div>
          <p>
            We keep the process clear, collaborative and focused on what you
            actually need.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <span>01</span>
            <h3>Understand</h3>
            <p>We listen to your ideas, needs and business challenges.</p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h3>Plan</h3>
            <p>We identify the right approach and define the solution.</p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h3>Create</h3>
            <p>We design and develop a solution around your requirements.</p>
          </div>

          <div className="process-step">
            <span>04</span>
            <h3>Deliver</h3>
            <p>We present the finished work and help you move forward.</p>
          </div>
        </div>
      </section>

      {/* WHY TECH SOLVE */}
      <section className="why-section">
        <div className="why-left">
          <p className="eyebrow">WHY TECH SOLVE</p>
          <h2>
            More than technology. <span>A partner in progress.</span>
          </h2>
          <p>
            Good technology is not just about how something looks. It is about
            how well it works for the people using it.
          </p>
          <a href="#contact" className="button button-light">
            Let's build something <span>↗</span>
          </a>
        </div>

        <div className="why-right">
          {reasons.map((reason) => (
            <div className="reason-row" key={reason.number}>
              <span>{reason.number}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-label">
          <span>05</span>
          <p>GET IN TOUCH</p>
        </div>

        <div className="contact-main">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>
            Let's create something <span>that matters.</span>
          </h2>

          <p className="contact-description">
            Tell us what you are planning. Whether you need a website, a
            business system, creative design or a digital identity, let's talk.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Start a conversation <span>↗</span>
          </a>
        </div>

        <div className="contact-details">
          <div>
            <span>WHATSAPP / PHONE</span>
            <a href="tel:+254115747135">+254 115 747 135</a>
          </div>

          <div>
            <span>EMAIL</span>
            <a href="mailto:iptihajf142@gmail.com">
              iptihajf142@gmail.com
            </a>
          </div>

          <div>
            <span>LOCATION</span>
            <p>Kenya</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="footer-brand">
            <img src={logo} alt="TECH SOLVE logo" />
            <span>TECH <strong>SOLVE</strong></span>
          </a>

          <p>Smart Solutions. Better Business.</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="footer-contact"
          >
            Get in touch ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} TECH SOLVE. All rights reserved.</span>
          <span>THINK. CREATE. SOLVE.</span>
        </div>
      </footer>
    </main>
  )
}

export default App
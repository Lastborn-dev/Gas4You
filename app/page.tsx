
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Flame,
  Headphones,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Gas refills",
    description:
      "Running low? Explore a simpler way to plan your next cooking gas refill.",
    icon: Flame,
    link: "#get-started",
  },
  {
    number: "02",
    title: "Cylinders & accessories",
    description:
      "Discover the essentials that help make your kitchen ready for everyday cooking.",
    icon: PackageCheck,
    link: "#get-started",
  },
  {
    number: "03",
    title: "Technical services",
    description:
      "Looking for installation or gas-related support? Find out how we can help.",
    icon: Wrench,
    link: "#contact",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Start with the service you're looking for and the area you live in.",
  },
  {
    number: "02",
    title: "Explore your options",
    description:
      "Find out which products or services may be suitable for your needs.",
  },
  {
    number: "03",
    title: "Take the next step",
    description:
      "Get in touch to discuss the details before arranging your service.",
  },
];

const benefits = [
  {
    title: "Convenience comes first",
    description:
      "A clear, straightforward experience designed around your everyday needs.",
  },
  {
    title: "Safety matters",
    description:
      "Gas equipment and installation should always be handled responsibly by qualified professionals.",
  },
  {
    title: "Help when you need it",
    description:
      "Make it easier to understand your options and know where to start.",
  },
];

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Gas4You home">
      <span className="brand-mark">
        <Flame size={23} strokeWidth={2.5} />
      </span>
      <span>
        Gas4<span style={{ color: "#83a943" }}>You</span>
      </span>
    </a>
  );
}

function GasCylinder() {
  return (
    <div className="hero-visual" aria-label="Illustration of a green gas cylinder">
      <div className="cylinder">
        <div className="cylinder-neck" />
        <div className="cylinder-band" />
        <div className="cylinder-logo">
          <Flame size={25} strokeWidth={2.5} />
          <strong>Gas4You</strong>
          <small>GAS MADE SIMPLE</small>
        </div>
        <div className="cylinder-base" />
      </div>

      <div className="float-card float-card-top">
        <span className="float-icon">
          <ShieldCheck size={21} />
        </span>
        <span>
          <strong>Safety first</strong>
          <small>Always handle gas responsibly</small>
        </span>
      </div>

      <div className="float-card float-card-bottom">
        <span className="float-icon">
          <Zap size={21} />
        </span>
        <span>
          <strong>Everyday essentials</strong>
          <small>A simpler way to get started</small>
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="announcement">
        <Flame size={14} />
        <span>
          Making everyday gas needs <strong>simpler.</strong>
        </span>
        <ArrowRight size={13} />
      </div>

      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <Brand />

          <div className="nav-links">
            <a href="#services">Our services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#why-us">Why Gas4You</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="button" href="#get-started">
            Get started <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                YOUR EVERYDAY GAS PARTNER
              </div>

              <h1>
                Your next gas refill, <span>without the hassle.</span>
              </h1>

              <p className="hero-copy">
                From everyday cooking gas needs to essential accessories and
                technical support, discover a simpler way to get started with
                Gas4You.
              </p>

              <div className="hero-actions">
                <a href="#services" className="button button-lime">
                  Explore our services <ArrowRight size={17} />
                </a>
                <a href="#how-it-works" className="button button-outline">
                  How it works
                </a>
              </div>

              <div className="trust-row">
                <span className="trust-item">
                  <Check size={15} className="trust-check" />
                  Convenience focused
                </span>
                <span className="trust-item">
                  <Check size={15} className="trust-check" />
                  Safety conscious
                </span>
              </div>
            </div>

            <GasCylinder />
          </div>
        </section>

        <section className="section section-white" id="services">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                WHAT WE CAN HELP WITH
              </div>
              <h2>Everything starts with the right service.</h2>
              <p>
                Whether you're planning your next refill or looking for gas
                essentials, start by finding what you need.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>
                    <div className="eyebrow" style={{ marginTop: 22, marginBottom: 0 }}>
                      SERVICE {service.number}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a className="text-link" href={service.link}>
                      Learn more <ArrowRight size={15} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                SIMPLE BY DESIGN
              </div>
              <h2>A clearer path from need to next step.</h2>
              <p>
                No complicated process. Just a simple starting point for your
                gas needs.
              </p>
            </div>

            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="why-us">
          <div className="container benefits-grid">
            <div className="split-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                THE GAS4YOU DIFFERENCE
              </div>

              <h2>Less confusion. More confidence.</h2>

              <p>
                Getting your everyday gas essentials shouldn't feel
                complicated. We're shaping a customer experience that puts
                clarity, convenience and responsible gas use first.
              </p>

              <a href="#contact" className="button">
                Find out more <ArrowRight size={16} />
              </a>
            </div>

            <div className="benefit-panel">
              {benefits.map((benefit) => (
                <div className="benefit-row" key={benefit.title}>
                  <span className="benefit-tick">
                    <Check size={16} />
                  </span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="get-started">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                START HERE
              </div>
              <h2>What do you need today?</h2>
              <p>
                Choose a starting point and explore the service that best
                matches your needs.
              </p>
            </div>

            <div className="services-grid">
              <a className="service-card" href="#services">
                <div className="service-icon">
                  <Flame size={24} />
                </div>
                <h3>A gas refill</h3>
                <p>I'm planning my next cooking gas refill.</p>
                <span className="text-link">
                  Explore refills <ArrowRight size={15} />
                </span>
              </a>

              <a className="service-card" href="#services">
                <div className="service-icon">
                  <PackageCheck size={24} />
                </div>
                <h3>Gas equipment</h3>
                <p>I'm looking for cylinders or useful accessories.</p>
                <span className="text-link">
                  Explore essentials <ArrowRight size={15} />
                </span>
              </a>

              <a className="service-card" href="#contact">
                <div className="service-icon">
                  <Headphones size={24} />
                </div>
                <h3>Some assistance</h3>
                <p>I need information about gas services or support.</p>
                <span className="text-link">
                  Get in touch <ArrowRight size={15} />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-panel">
              <div>
                <div className="eyebrow" style={{ color: "#c8f169" }}>
                  <span className="eyebrow-dot" />
                  LET'S GET YOU STARTED
                </div>
                <h2>Your everyday gas needs deserve a simpler experience.</h2>
                <p>
                  Have a question or want to learn more about Gas4You? Start
                  here.
                </p>
              </div>

              <a
                className="button button-lime"
                href="mailto:hello@gas4you.example?subject=Gas4You%20enquiry"
              >
                Contact us <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand />
              <p className="footer-description">
                A simpler starting point for everyday cooking gas needs,
                equipment and technical service enquiries.
              </p>
            </div>

            <div className="footer-column">
              <h4>EXPLORE</h4>
              <a href="#services">Our services</a>
              <a href="#how-it-works">How it works</a>
              <a href="#why-us">Why Gas4You</a>
            </div>

            <div className="footer-column">
              <h4>GET IN TOUCH</h4>
              <a href="#contact">Contact us</a>
              <a href="#get-started">Get started</a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Gas4You. All rights reserved.
            </span>
            <span>Built around simplicity, convenience and safety.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

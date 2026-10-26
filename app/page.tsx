
import {
  ArrowRight,
  Check,
  Flame,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

const email = "adedapoadedamola3@gmail.com";

const services = [
  {
    number: "01",
    title: "Gas refills",
    description:
      "Running low? Explore gas refill options for your home.",
    icon: Flame,
    link: "#gas-listings",
  },
  {
    number: "02",
    title: "Cylinders & accessories",
    description:
      "Explore cylinder sizes and essential cooking gas equipment.",
    icon: PackageCheck,
    link: "#gas-listings",
  },
  {
    number: "03",
    title: "Technical services",
    description:
      "Need installation advice or gas-related support? Contact us.",
    icon: Wrench,
    link: "#contact",
  },
];

const products = [
  {
    size: "3kg",
    name: "3kg Gas Cylinder",
    description: "A compact option for smaller cooking needs.",
  },
  {
    size: "6kg",
    name: "6kg Gas Cylinder",
    description: "A practical size to ask about for everyday cooking.",
  },
  {
    size: "12.5kg",
    name: "12.5kg Gas Cylinder",
    description: "A larger option for regular household cooking.",
  },
  {
    size: "25kg",
    name: "25kg Gas Cylinder",
    description: "Ask our team whether this size suits your needs.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose what you need",
    description:
      "Explore gas cylinders, refill enquiries and other services.",
  },
  {
    number: "02",
    title: "Contact our team",
    description:
      "Tell us what you need and confirm availability and pricing.",
  },
  {
    number: "03",
    title: "Arrange your next step",
    description:
      "Discuss delivery or service arrangements with our team.",
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
      "Gas equipment should always be handled responsibly by qualified professionals.",
  },
  {
    title: "Help when you need it",
    description:
      "Contact our team to ask questions and understand your options.",
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
    <div
      className="hero-visual"
      aria-label="Illustration of a green gas cylinder"
    >
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
            <a href="#gas-listings">Gas listings</a>
            <a href="#how-it-works">How it works</a>
            <a href="#contact">Contact</a>
            <a href="/login">Customer login</a>
          </div>

          <a className="button" href="#gas-listings">
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
                Explore gas cylinders, plan your next refill and discover
                essential services with Gas4You.
              </p>

              <div className="hero-actions">
                <a href="#gas-listings" className="button button-lime">
                  Explore gas listings <ArrowRight size={17} />
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
                Find the service you need, explore your options and contact
                our team for more information.
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

                    <div
                      className="eyebrow"
                      style={{ marginTop: 22, marginBottom: 0 }}
                    >
                      SERVICE {service.number}
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a className="text-link" href={service.link}>
                      Explore service <ArrowRight size={15} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="gas-listings">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                GAS PRODUCTS
              </div>
              <h2>Find the right gas option for your home.</h2>
              <p>
                Browse common cylinder sizes and contact us to confirm
                current availability and prices before ordering.
              </p>
            </div>

            <div className="services-grid">
              {products.map((product) => (
                <article className="service-card" key={product.size}>
                  <div className="service-icon">
                    <Flame size={25} />
                  </div>

                  <div
                    className="eyebrow"
                    style={{ marginTop: 22, marginBottom: 0 }}
                  >
                    CYLINDER SIZE · {product.size}
                  </div>

                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <a
                    className="text-link"
                    href={`mailto:${email}?subject=${encodeURIComponent(
                      `Gas4You enquiry: ${product.name}`
                    )}`}
                  >
                    Ask about availability <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>

            <p
              style={{
                marginTop: 24,
                color: "#68736a",
                fontSize: 12,
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              Product sizes shown are examples. Please contact us to confirm
              stock, refill options and current prices.
            </p>
          </div>
        </section>

        <section className="section section-white" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                SIMPLE BY DESIGN
              </div>
              <h2>A clearer path from need to next step.</h2>
              <p>
                Start with what you need and let our team help you understand
                the next steps.
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

        <section className="section" id="why-us">
          <div className="container benefits-grid">
            <div className="split-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                THE GAS4YOU DIFFERENCE
              </div>

              <h2>Less confusion. More confidence.</h2>

              <p>
                Getting your everyday gas essentials shouldn't feel
                complicated. Gas4You aims to make it easier to explore
                products, ask questions and plan your next step.
              </p>

              <a href="#gas-listings" className="button">
                Explore products <ArrowRight size={16} />
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

        <section className="section section-white" id="get-started">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                START HERE
              </div>
              <h2>What do you need today?</h2>
              <p>
                Choose an option below to explore products or contact our
                team directly.
              </p>
            </div>

            <div className="services-grid">
              <a className="service-card" href="#gas-listings">
                <div className="service-icon">
                  <Flame size={24} />
                </div>
                <h3>A gas refill</h3>
                <p>
                  I'm planning my next cooking gas refill.
                </p>
                <span className="text-link">
                  Browse gas options <ArrowRight size={15} />
                </span>
              </a>

              <a className="service-card" href="#gas-listings">
                <div className="service-icon">
                  <PackageCheck size={24} />
                </div>
                <h3>Gas equipment</h3>
                <p>
                  I'm looking for cylinders or useful accessories.
                </p>
                <span className="text-link">
                  Browse products <ArrowRight size={15} />
                </span>
              </a>

              <a className="service-card" href={`mailto:${email}`}>
                <div className="service-icon">
                  <Headphones size={24} />
                </div>
                <h3>Some assistance</h3>
                <p>
                  I need information about gas services or support.
                </p>
                <span className="text-link">
                  Contact our team <ArrowRight size={15} />
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
                <h2>
                  Your everyday gas needs deserve a simpler experience.
                </h2>
                <p>
                  Have a question about Gas4You? Send us an email and our
                  team can help you with your enquiry.
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${email}`}
                    style={{ color: "#c8f169", fontWeight: 700 }}
                  >
                    {email}
                  </a>
                </p>
              </div>

              <a
                className="button button-lime"
                href={`mailto:${email}?subject=Gas4You%20enquiry`}
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
                equipment and service enquiries.
              </p>
            </div>

            <div className="footer-column">
              <h4>EXPLORE</h4>
              <a href="#services">Our services</a>
              <a href="#gas-listings">Gas listings</a>
              <a href="#how-it-works">How it works</a>
            </div>

            <div className="footer-column">
              <h4>GET IN TOUCH</h4>
              <a href={`mailto:${email}`}>Email us</a>
              <a href="/login">Customer login</a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Gas4You. All rights reserved.
            </span>
            <span>
              Built around simplicity, convenience and safety.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

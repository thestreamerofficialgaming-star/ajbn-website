import { useState, useEffect } from "react";

export default function App() {
  const [showAll, setShowAll] = useState(false);

const mainServices = [
  { name: "Personal Loan", icon: "personal-loan.svg" },
  { name: "Home Loan", icon: "home-loan.svg" },
  { name: "Business Loan", icon: "buisiness-loan.svg" },
  { name: "Loan Against Property", icon: "property-loan.svg" },
  { name: "Commercial Vehicle Loan", icon: "vehicle-loan.svg" },
  { name: "Education Loan", icon: "education-loan.svg" },
];

  const allServices = [
  { name: "Car Loan", icon: "car-loan.svg" },
  { name: "Used Car Loan", icon: "use-car-loan.svg" },
  { name: "Commercial Vehicle Loan", icon: "commercial-vehicle-loan.svg" },
  { name: "Used Commercial Vehicle Loan", icon: "used-commercial-vehicle-loan.svg" },
  { name: "Home Renovation Loan", icon: "home-renovation-loan.svg" },
  { name: "Construction Loan", icon: "construction-loan.svg" },
  { name: "Project Loan", icon: "project-loan.svg" },
  { name: "Construction Equipment Loan", icon: "construction-equipment-loan.svg" },
  { name: "Working Capital", icon: "working-capital.svg" },
  { name: "Loan Balance Transfer & Takeover", icon: "balance-transfer.svg" },
  { name: "Gold Loan", icon: "gold-loan.svg" },
  { name: "Credit Cards", icon: "credit-cards.svg" },
  { name: "Central & State Subsidy Assistance", icon: "subsidy-assistance.svg" },
  { name: "PMEGP Service Assistance", icon: "pmegp-assistance.svg" },
];

const bankLogos = [
  "acko-insurance.svg",
  "aditya-birla-capital.svg",
  "au-bank.svg",
  "axis-bank-logo-1.svg",
  "bajaj-finserv-1.svg",
  "Bandhan-Bank_Svg-Logo.svg",
  "bank-of-baroda-1.svg",
  "Canara-Bank-Logo.svg",
  "Central Bank of India Logo SVG.svg",
  "CSB-Bank-New-Logo-02.svg",
  "Development-Credit-Bank.svg",
  "digit-insurance.svg",
  "Edelweiss-Group-logo.svg",
  "Equitas-logo.svg",
  "ESAF-Bank-Logo.svg",
  "Federal-bank-India.svg",
  "fulletron-1.svg",
  "hdfc-bank-logo.svg",
  "hdfc-life.svg",
  "hero-fincorp.svg",
  "icici-1.svg",
  "icici-lombard.svg",
  "idbi-bank-logo-1.svg",
  "IndusInd-Bank-SVG_Logo.svg",
  "Kotak-Mahindra-Group-logo.svg",
  "lic-insurance.svg",
  "Logo-of-IDFC-First-Bank.svg",
  "lt-logo.svg",
  "Mahindra-Finance-SVG-Logo.svg",
  "manappuram-finance.svg",
  "max-insurance.svg",
  "niva-bupa.svg",
  "piramal-finance.svg",
  "punjab-national-bank.svg",
  "rbl-bank-svg-logo.svg",
  "sbi-life.svg",
  "shriram-finance-logo-png_seeklogo-461364.svg",
  "South-indian-bank-logo.svg",
  "Star-Health-and-Allied-Insurance.svg",
  "state-bank-of-india-logo.svg",
  "tata-capital-logo-svg_logoshape.com.svg",
  "tvs-credit.svg",
  "UCO-Bank_logo.svg",
  "ujjivan-finance.svg",
  "union-bank-of-india.svg",
  "yes-bank-2.svg"
];
useEffect(() => {
  if (document.getElementById("google-translate-script")) return;

  window.googleTranslateElementInit = () => {
    if (document.getElementById("google_translate_element").children.length)
      return;

    new window.google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  };

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;

  document.body.appendChild(script);
}, []);





  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="logo-wrap">
          <img src="/logo.png" className="logo-icon" />
          <div className="logo-text">
            <span className="company">AJBN SERVICES</span>
            <span className="tagline">PVT LTD</span>
          </div>
        </div>

 <nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#how">How</a>
  <a href="#why">Why Us</a>
</nav>

<a href="tel:18004101080">
  <button className="cta small">Get a Call Back</button>
</a>
</header>


      {/* HERO */}
      <section id="home"className="hero">
        <div className="hero-left">
          <h1>
            Get the Right Loan.<br />
            <span>Faster. Smarter.</span>
          </h1>

          <p>
            We compare top banks & NBFCs to get you the best deal based on your profile.
          </p>

          <div className="hero-actions">
         <a href="tel:18004101080" className="phone-box">1800 410 1080
        </a>

            <div className="hero-contact">

  <a
  href="https://wa.me/919848821119"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cta">Contact on WhatsApp</button>
</a>

</div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services"className="services section-soft">
        <h2>Our Loan Services</h2>

        <div className="services-grid">
    {mainServices.map((s) => (
  <div className="service-card" key={s.name}>
    <div className="card-icon">
      <img src={`/icons/${s.icon}`} alt={s.name} />
    </div>
    <h4>{s.name}</h4>
    <p>Quick approval with best bank offers.</p>
  </div>
))}



        </div>

        <button className="outline" onClick={() => setShowAll(true)}>
          See all services →
        </button>
      </section>

      {/* MODAL */}
      {showAll && (
        <div className="modal-backdrop" onClick={() => setShowAll(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>All Services</h3>

            <div className="services-grid">
{allServices.map((s) => (
  <div className="service-card" key={s.name}>
    <div className="card-icon">
      <img src={`/icons/${s.icon}`} alt={s.name} />
    </div>
    <h4>{s.name}</h4>
    <p>Quick approval with best bank offers.</p>
  </div>
))}


            </div>

            <button className="cta small" onClick={() => setShowAll(false)}>
              Close
            </button>
            <div className="modal-actions">
  <button className="cta small" onClick={() => setShowAll(false)}>
    Close
  </button>
</div>

          </div>
        </div>
      )}

      {/* HOW IT WORKS */}
      <section id="how"className="how section-soft">
        <h2>How It Works</h2>

        <div className="how-grid">
          <div className="how-card">
            <div className="card-icon">
  <img src="/icons/step-1.svg" alt="Step 1" />
</div>

            <h4>Share Requirement</h4>
            <p>Call or submit your loan requirement.</p>
          </div>

          <div className="how-card">
          <div className="card-icon">
          <img src="/icons/step-2.svg" alt="Step 2" />
        </div>

            <h4>We Compare</h4>
            <p>Best banks & NBFCs compared for you.</p>
          </div>

          <div className="how-card">
           <div className="card-icon">
           <img src="/icons/step-3.svg" alt="Step 3" />
           </div>

            <h4>Get Disbursed</h4>
            <p>Fast approval with minimal paperwork.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
     <section id="why" className="why section-soft">
  <h2>Why Choose Us?</h2>

  <div className="why-grid">
    <div className="why-card">
      <div className="card-icon">
        <img src="/icons/trust.svg" alt="Trusted Expertise" />
      </div>
      <h4>Trusted Expertise</h4>
      <p>Years of experience dealing with banks & NBFCs.</p>
    </div>

    <div className="why-card">
      <div className="card-icon">
        <img src="/icons/transparent.svg" alt="Transparent Process" />
      </div>
      <h4>Transparent Process</h4>
      <p>No hidden charges. Clear guidance at every step.</p>
    </div>

    <div className="why-card">
      <div className="card-icon">
        <img src="/icons/fast.svg" alt="Faster Approvals" />
      </div>
      <h4>Faster Approvals</h4>
      <p>We match you with lenders that suit your profile.</p>
    </div>

    <div className="why-card">
      <div className="card-icon">
        <img src="/icons/network.svg" alt="Vast Network" />
      </div>
      <h4>Vast Network</h4>
      <p>Access to multiple banks and financial institutions.</p>
    </div>
  </div>
</section>

      {/* PARTNERS */}
      <section className="partners section-soft">
        <h2>Our Bank Partners</h2>
<section className="partners section-soft">
    We work with India’s leading banks & NBFCs

  <div className="bank-grid">
    {bankLogos.map((logo) => (
      <img
        key={logo}
        src={`/bank/${logo}`}
        alt="Bank partner"
        loading="lazy"
      />
    ))}
  </div>

</section>
  <a
  href="https://jsdl.in/RSL-WFE1768306645"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cta">Contact us on Justdial</button>
</a>


      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <h4>About Us</h4>
            <p>Company Profile</p>
            <p>Why AJBN Services?</p>
          </div>

          <div>
            <h4>Loan Services</h4>
            <p>Personal Loan</p>
            <p>Business Loan</p>
            <p>Home Loan</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="tel:18004101080">📞 1800 410 1080</a><p></p>
            <a href="mailto:info@ajbnservicespvttld.com">
  info@ajbnservicespvttld.com
</a>

          </div>
        </div>

        <div className="socials">
  <a className="social-link">Facebook</a>
  <a className="social-link">Twitter</a>
  <a className="social-link">LinkedIn</a>
  <a className="social-link">Instagram</a>
</div>


        <p className="copyright">
          © 2026 AJBN Services Pvt Ltd · All Rights Reserved
        </p>
      </footer>
      <div id="google_translate_element"></div>
      

    </>
  );
}


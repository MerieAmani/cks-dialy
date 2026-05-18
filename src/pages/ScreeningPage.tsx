import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Phone, Calendar, CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import Nav from "@/components/Nav";
import SHABadge from "@/components/SHABadge";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function ScreeningPage() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    document.title =
      "Screening & Diagnostics | CKS — Early Detection Saves Lives";
  }, []);

  return (
    <div className="font-sans">
      <Nav subPage subPageTitle="Screening & Diagnostics" />
      <SHABadge />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "460px" }}
      >
        <img
          src="/images/camp-anniversary-screening.jpg"
          alt="CKS Kimuka medical screening camp — early detection diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,10,60,0.88) 0%, rgba(40,50,150,0.72) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-white">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="nav-link-back mb-4 inline-flex text-blue-300 hover:text-white"
            >
              ← Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Screening & Diagnostics
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Early detection saves lives. Our comprehensive diagnostics lab,
              imaging suite, and screening clinics bring specialist-grade
              testing available across all CKS branches.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20book%20a%20screening%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{ background: "var(--steel)" }}
              >
                <Calendar className="w-4 h-4" />
                Book a Screening
              </a>
              <a
                href="tel:+254753372814"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border-2 text-white hover:bg-white/10 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.6)" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div
        className="py-6 px-4"
        style={{
          background:
            "linear-gradient(90deg, #2d5f80 0%, #4a7fa5 50%, #1a4a6e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          <div>
            <div className="font-display text-3xl font-bold">500+</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Camp Patients Screened
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">24/7</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Lab Services
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">15+</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Tests Available
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">Free</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Community Camps
            </div>
          </div>
        </div>
      </div>

      {/* WHY SCREEN */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="section-label">Why Early Detection Matters</p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading mb-6">
                Catch It Early. Treat It Better.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Many of the most serious conditions — including kidney disease,
                diabetes, hypertension, and cancer — can be effectively managed
                or even reversed when caught early. Yet across Kajiado County,
                most people never receive routine health screening.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                CKS Dialysis Centre is changing that. Our full-service
                diagnostics lab and imaging suite provide{" "}
                <strong>rapid, accurate, and affordable testing</strong> — so
                you can take action before conditions become life-threatening.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Fast turnaround — most results within 24 hours",
                  "Affordable prices, SHA accredited",
                  "Expert lab scientists on-site",
                  "Community screening camps — often free",
                  "Results reviewed by our clinical team",
                  "Referral pathways to specialists when needed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--steel)" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <img
                src="https://images.unsplash.com/photo-1625131135576-97ddbb6f063c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="CKS Kimuka laboratory team during screening camp"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ height: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">Our Diagnostic Services</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              What We Test & Screen For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Laboratory Services",
                color: "linear-gradient(135deg,#c0392b,#e74c3c)",
                img: "/images/laboratory.jpeg",
                imgAlt: "CKS Kimuka laboratory scientists conducting tests",
                items: [
                  "Full Blood Count (FBC / Haemogram)",
                  "Kidney Function Tests (KFTs) — creatinine, urea, GFR",
                  "Liver Function Tests (LFTs)",
                  "HbA1c — long-term blood sugar control",
                  "Blood glucose (fasting & random)",
                  "Malaria rapid test",
                  "H. pylori detection",
                  "Thyroid function (TSH, T3, T4)",
                  "Rheumatoid factor & specialty panels",
                ],
              },
              {
                title: "HIV & Sexual Health",
                color: "linear-gradient(135deg,#7b1fa2,#9c27b0)",
                img: "https://images.unsplash.com/photo-1736325680518-397f54bd1086?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt:
                  "HIV testing and sexual health services at CKS Hospital Kimuka",
                items: [
                  "HIV rapid testing (same-day results)",
                  "Voluntary Counselling & Testing (VCT)",
                  "Syphilis testing & treatment",
                  "Hepatitis B surface antigen (HBsAg)",
                  "Hepatitis C antibody test",
                  "Gonorrhoea & chlamydia screening",
                  "Pre-Exposure Prophylaxis (PrEP) referrals",
                  "Post-Exposure Prophylaxis (PEP) — 24/7 emergency",
                  "Partner notification & linkage to care",
                  "Confidential & non-judgmental care",
                ],
              },
              {
                title: "Imaging & Radiology",
                color: "linear-gradient(135deg,#e67e22,#f39c12)",
                img: "https://images.unsplash.com/photo-1763198302249-db661c45bf7d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "Ultrasound and radiology imaging services",
                items: [
                  "Ultrasound — obstetric & foetal wellbeing",
                  "Abdominal ultrasound (liver, kidneys, spleen)",
                  "Pelvic ultrasound (gynaecology)",
                  "Renal ultrasound (kidney size, stones, cysts)",
                  "Point-of-care imaging available 24/7",
                ],
              },
              {
                title: "Cardiac Screening",
                color: "linear-gradient(135deg,#2d5f80,#4a7fa5)",
                img: "https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "ECG and cardiac screening services at CKS",
                items: [
                  "12-lead ECG (electrocardiogram)",
                  "Blood pressure monitoring",
                  "Hypertension risk assessment",
                  "Cholesterol & lipid profile",
                  "Cardiovascular risk scoring",
                  "Stroke risk assessment",
                ],
              },
              {
                title: "Kidney Disease Screening",
                color: "linear-gradient(135deg,#005c54,#009e96)",
                img: "https://images.unsplash.com/photo-1650897492524-bbc1adb72626?q=80&w=1211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "Kidney disease screening and early detection at CKS",
                items: [
                  "Glomerular filtration rate (eGFR)",
                  "Urine dipstick & microscopy",
                  "Protein/creatinine ratio",
                  "24-hour urine collection",
                  "Risk factor assessment for CKD",
                  "Early intervention counselling",
                ],
              },
              {
                title: "Diabetes & Metabolic",
                color: "linear-gradient(135deg,#6b3fa0,#9b59b6)",
                img: "https://images.unsplash.com/photo-1685485276223-0bb0226dcca8?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt: "Blood glucose and diabetes screening services",
                items: [
                  "Random & fasting blood glucose",
                  "HbA1c (3-month sugar average)",
                  "Diabetic complication screening",
                  "Foot & vascular assessment",
                  "BMI & obesity assessment",
                  "Dietary and lifestyle counselling",
                ],
              },
              {
                title: "Maternal & Child Screening",
                color: "linear-gradient(135deg,#d63384,#e91e8c)",
                img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
                imgAlt:
                  "Maternal and child health screening at CKS Hospital Kimuka",
                items: [
                  "Antenatal blood tests (full panel)",
                  "Cervical cancer screening (VIA)",
                  "Breast examination & awareness",
                  "Newborn screening",
                  "Triple elimination (HIV, syphilis, Hep B in pregnancy)",
                  "Child growth & nutrition monitoring",
                  "Immunization status checks",
                ],
              },
              {
                title: "Tuberculosis (TB) Screening",
                color: "linear-gradient(135deg,#bf6000,#e07b00)",
                img: "https://images.unsplash.com/photo-1758691462445-d03a94aa7656?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imgAlt:
                  "TB screening and respiratory health at CKS community camp",
                items: [
                  "TB symptom screening & triage",
                  "Sputum smear microscopy",
                  "GeneXpert rapid TB test",
                  "Chest X-ray referrals",
                  "TB-HIV co-infection assessment",
                  "DOTS (directly observed therapy) linkage",
                  "Contact tracing support",
                ],
              },
              {
                title: "Community Camps",
                color: "linear-gradient(135deg,#1a6e4a,#27ae60)",
                img: "/images/camp-doctor-treating.jpg",
                imgAlt: "CKS community outreach medical camp — Kajiado County",
                items: [
                  "Free mass screening events in Kajiado villages",
                  "Blood pressure & sugar testing",
                  "Kidney disease awareness & screening",
                  "HIV, Hep B & STI screening",
                  "TB & respiratory health screening",
                  "World Kidney Day outreach (March annually)",
                  "Mother & Child Health camps",
                ],
              },
            ].map((cat, i) => (
              <div key={i} className="service-category reveal hover-lift">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.imgAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
                <div
                  className="px-5 py-4 flex items-center gap-3"
                  style={{ background: cat.color }}
                >
                  <h3 className="font-display text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
                <div>
                  {cat.items.map((item) => (
                    <div key={item} className="service-item">
                      <span className="service-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="section-label">In the Community</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Our Screening Camps
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              We bring free health screening directly to communities across
              Kajiado County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "/images/camp-anniversary-screening.jpg",
                alt: "Free medical screening camp at CKS Kimuka anniversary",
              },
              {
                src: "/images/camp-doctor-treating.jpg",
                alt: "Doctor treating patient during CKS community outreach",
              },
              {
                src: "/images/camp-nurses-lab.jpg",
                alt: "CKS nurses at community lab screening",
              },
              {
                src: "/images/wkd-group-photo.jpg",
                alt: "CKS team at World Kidney Day 2025",
              },
              {
                src: "/images/wkd-march-banner.jpg",
                alt: "World Kidney Day awareness march — Ngong Town",
              },
              {
                src: "/images/wkd-march-ngong-town.jpg",
                alt: "World Kidney Day march through Ngong Town",
              },
              {
                src: "/images/wkd-roadshow-truck.jpg",
                alt: "CKS World Kidney Day roadshow truck Kajiado",
              },
              {
                src: "/images/team-outreach-staff.jpg",
                alt: "CKS Kimuka outreach team",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="reveal aspect-square rounded-xl overflow-hidden hover-lift"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 reveal">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border-2"
              style={{ borderColor: "var(--steel)", color: "var(--steel)" }}
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">The Process</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              What to Expect
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {[
              {
                step: "01",
                title: "Walk In or Book",
                desc: "Walk in during working hours or book via WhatsApp for a specific time slot.",
              },
              {
                step: "02",
                title: "Consultation",
                desc: "A clinical officer or doctor will guide you on which tests are appropriate for your symptoms or risk factors.",
              },
              {
                step: "03",
                title: "Testing",
                desc: "Blood draw, urine, ECG, or ultrasound are all conducted in-house by trained professionals.",
              },
              {
                step: "04",
                title: "Results & Follow-Up",
                desc: "Most results within 24 hours. Our team explains your results and recommends next steps.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover-lift"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3"
                  style={{
                    background: "var(--teal-50)",
                    color: "var(--teal-800)",
                  }}
                >
                  {s.step}
                </div>
                <h3 className="font-display text-sm font-semibold text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 px-4 sm:px-6" style={{ background: "var(--silver-50)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="section-label">Accepted Insurance Partners</p>
            <h2 className="font-display text-2xl md:text-3xl text-gray-800 ruled-heading inline-block">
              We Accept Your Insurance
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 reveal">
            {[
              { name: "SHA", label: "Social Health Authority", logo: "/images/insurance/SHA.jpg" },
              { name: "Jubilee Health", label: "Jubilee Health Insurance", logo: "/images/insurance/Jubilee.jpg" },
              { name: "AAR Healthcare", label: "AAR Healthcare", logo: "/images/insurance/AAR.png" },
              { name: "CIC Insurance", label: "CIC Group", logo: null },
              { name: "Cigna", label: "Cigna Healthcare", logo: "/images/insurance/Cigna.png" },
              { name: "KCB", label: "KCB Insurance", logo: "/images/insurance/KCB.png" },
              { name: "Old Mutual", label: "Old Mutual Kenya", logo: "/images/insurance/OldMutual.png" },
              { name: "Minet Kenya", label: "Minet — Secure Tomorrow", logo: "/images/insurance/Minet.png" },
              { name: "APA Insurance", label: "APA Insurance", logo: "/images/insurance/APA.png" },
            ].map((ins) => (
              <div
                key={ins.name}
                className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-sm transition-all text-center"
              >
                {ins.logo ? (
                  <img src={ins.logo} alt={ins.label} className="h-12 w-full object-contain" />
                ) : (
                  <div className="h-12 flex items-center justify-center w-full bg-green-700 rounded-lg">
                    <span className="text-sm font-bold text-white tracking-wide">CIC</span>
                  </div>
                )}
                <span className="text-xs text-gray-500 leading-tight">{ins.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Common Questions</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              {
                q: "What do you require from patients before they come in?",
                a: "All patients must present: HIV Ab, Hepatitis Bs Ag, Hepatitis C Ab, Hepatitis B Antibody Titre, a medical report, and flow-charts. All documents must be no more than 4 weeks old and from a recognised hospital or laboratory. Additional medical summaries may be requested by the doctor.",
              },
              {
                q: "What modes of payment do you accept?",
                a: "Payment is required before each treatment and may be made by SHA, any accredited insurance cover, all major credit cards, cash, cheques, and M-Pesa.",
              },
              {
                q: "Will dialysis cure my kidney disease?",
                a: "In cases of sudden (acute) kidney failure, dialysis may be temporary. For chronic kidney disease, it is a lifelong requirement unless a successful kidney transplant is performed.",
              },
              {
                q: "Does dialysis hurt?",
                a: "The process itself is not painful, though you may feel temporary discomfort when the needles are placed into your vascular access (fistula or graft). This generally becomes much easier to tolerate over time.",
              },
              {
                q: "How do I schedule an appointment?",
                a: "You can book by calling or WhatsApping your preferred branch directly, using the online booking form on our Kimuka page, or simply walking into any of our four branches — Pangani, Buruburu, Aga Khan, and Kimuka.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    style={{ color: "var(--teal-600)" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(135deg, #2d5f80 0%, #4a7fa5 50%, #1a4a6e 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl mb-4">
            Don't Wait — Get Screened Today
          </h2>
          <p className="text-white/70 text-sm mb-8 leading-relaxed">
            Early detection is the most powerful tool you have. Book your
            screening at CKS today — walk-ins welcome,
            appointments preferred.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20book%20a%20screening"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-white text-blue-800 hover:bg-blue-50 transition-all"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+254753372814"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border-2 text-white border-white/40 hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call 0753 372 814
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA phone="+254753372814" whatsapp="254753372814" />
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Calendar, CheckCircle, ArrowRight } from "lucide-react";
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

export default function DialysisPage() {
  useReveal();
  useEffect(() => {
    document.title =
      "Dialysis Services | CKS Kimuka Hospital — 24/7 Haemodialysis";
  }, []);

  return (
    <div className="font-sans">
      <Nav subPage subPageTitle="Dialysis Services" />
      <SHABadge />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "460px" }}
      >
        <img
          src="/images/facility-dialysis-unit.jpg"
          alt="State-of-the-art haemodialysis unit at CKS Kimuka Hospital"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,40,35,0.88) 0%, rgba(0,90,84,0.72) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-white">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="nav-link-back mb-4 inline-flex text-teal-300 hover:text-white"
            >
              ← Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Dialysis & Renal Care
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Round-the-clock haemodialysis, managed by an in-house
              nephrologist, with state-of-the-art machines and a patient-first
              philosophy.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20book%20a%20dialysis%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{ background: "var(--teal-600)" }}
              >
                <Calendar className="w-4 h-4" />
                Book a Consultation
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
      <div className="stat-bar py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          <div>
            <div className="font-display text-3xl font-bold">24/7</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Dialysis Available
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">4 hrs</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Per Session
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">3×</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Per Week
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">1,800%</div>
            <div className="text-xs opacity-80 mt-0.5 uppercase tracking-widest">
              Capacity Growth
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT DIALYSIS */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="section-label">Our Dialysis Unit</p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading mb-6">
                World-Class Haemodialysis in Kimuka
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                CKS Kimuka Hospital's dialysis unit is the most advanced renal
                care facility in Kajiado County. We provide{" "}
                <strong>24-hour haemodialysis</strong> services using modern,
                computerised dialysis machines that ensure precise, safe, and
                comfortable treatment for every patient.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our unit is overseen by <strong>Dr. Jonathan Wala</strong>, a
                highly qualified Nephrologist and the{" "}
                <strong>President of the Kenya Renal Association</strong>,
                ensuring every patient receives expert clinical oversight.
                Since September 2024, our specialized care has been
                compassionately delivered by a team of highly trained renal
                nurses who demonstrate dedicated leadership and unwavering
                commitment to our patients.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "SHA accredited — 100% coverage for eligible patients",
                  "In-house nephrologist on-call 24 hours",
                  "Individualised dialysis prescriptions",
                  "Comfortable electric recliner chairs",
                  "Free breakfast & lunch at every session",
                  "Free Wi-Fi throughout your session",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--teal-600)" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <img
                src="/images/dialysis2.jpeg"
                alt="Modern haemodialysis machine"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ height: "420px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN DEPTH */}
      <section
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">Our Renal Services</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Full Spectrum of Kidney Care
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Haemodialysis",
                img: "https://plus.unsplash.com/premium_photo-1702598804759-8fb687f774fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Modern, 24/7 haemodialysis using state-of-the-art machines. Each session is 4 hours long, 2 sessions per week, with individual prescriptions tailored to your clinical needs.",
              },
              {
                title: "In-House Nephrologist",
                img: "/images/inhouse.jpeg",
                desc: "Dr. Jonathan Wala, our on-site Nephrologist, provides weekly consultations, reviews lab results, adjusts dialysis prescriptions, and coordinates care with specialist partners.",
              },
              {
                title: "Kidney Function Testing",
                img: "https://images.unsplash.com/photo-1663354876870-6282cb0a8843?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Monthly kidney function tests (creatinine, urea, electrolytes, GFR) to monitor your kidney health and guide treatment decisions in real-time.",
              },
              {
                title: "Pre-Transplant Work-Up",
                img: "https://images.unsplash.com/photo-1685997180450-242a65624238?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Comprehensive pre-transplant evaluations spearheaded by our lead team—including Dr. Jonathan Wala—and coordinated with Aga Khan and MP Shah hospitals for seamless transplant surgery access.",
              },
              {
                title: "Catheter Management",
                img: "https://images.unsplash.com/photo-1774456566981-8daf9252befb?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Safe insertion, management, and removal of haemodialysis catheters performed by experienced clinical staff with strict infection-control protocols.",
              },
              {
                title: "Patient Nutrition Support",
                img: "https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                desc: "Free breakfast and lunch at every dialysis session. A dedicated nutritionist provides renal diet guidance to help you maintain optimal health between sessions.",
              },
            ].map((card, i) => (
              <article
                key={i}
                className="hover-lift reveal bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <img
                  src={card.img}
                  alt={card.title + " at CKS Kimuka Hospital"}
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Patient Comfort</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Your Comfort Matters
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              Dialysis sessions are 4 hours long, 3 times a week — we make every
              moment as comfortable as possible.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              {
                emoji: "🍽️",
                label: "Free Breakfast & Lunch",
                detail: "Served at every session",
              },
              {
                emoji: "📶",
                label: "Free Wi-Fi",
                detail: "Stay connected always",
              },
              {
                emoji: "📺",
                label: "TV Entertainment",
                detail: "Flat-screen TV at every chair",
              },
              {
                emoji: "🛋️",
                label: "Electric Recliners",
                detail: "Fully adjustable comfort chairs",
              },
              {
                emoji: "🏥",
                label: "SHA accredited",
                detail: "100% coverage for eligible",
              },
              {
                emoji: "🅿️",
                label: "Free Parking",
                detail: "Ample on-site parking",
              },
            ].map((a) => (
              <div
                key={a.label}
                className="reveal flex flex-col items-center gap-2 p-4 bg-gray-50 border border-gray-200 rounded-xl text-center hover:border-teal-300 hover:bg-teal-50/50 transition-all"
              >
                <span className="text-3xl">{a.emoji}</span>
                <span className="text-xs font-semibold text-gray-700">
                  {a.label}
                </span>
                <span className="text-xs text-gray-400">{a.detail}</span>
              </div>
            ))}
          </div>

          {/* Insurance */}
          <div className="reveal text-center">
            <p className="section-label">Accepted Insurance Partners</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6">
              {[
                { name: "SHA", label: "Social Health Authority", logo: "/images/insurance/SHA.jpg" },
                { name: "Jubilee Health", label: "Jubilee Health Insurance", logo: "/images/insurance/Jubilee.jpg" },
                { name: "AAR Healthcare", label: "AAR Healthcare", logo: "/images/insurance/AAR.png" },
                { name: "CIC Insurance", label: "CIC Group", logo: null },
                { name: "Cigna International", label: "Cigna Healthcare", logo: "/images/insurance/Cigna.png" },
                { name: "KCB Insurance", label: "KCB Insurance", logo: "/images/insurance/KCB.png" },
                { name: "Old Mutual", label: "Old Mutual Kenya", logo: "/images/insurance/OldMutual.png" },
                { name: "Minet Kenya", label: "Minet — Secure Tomorrow", logo: "/images/insurance/Minet.png" },
                { name: "APA Insurance", label: "APA Insurance", logo: "/images/insurance/APA.png" },
              ].map((ins) => (
                <div
                  key={ins.name}
                  className="flex flex-col items-center gap-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-sm transition-all text-center"
                >
                  {ins.logo ? (
                    <img
                      src={ins.logo}
                      alt={ins.label}
                      className="h-12 w-full object-contain"
                    />
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
        </div>
      </section>

      {/* PATIENT CHARTER */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="section-label">Patient Rights & Responsibilities</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Patient Charter
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              At CKS Kimuka Hospital, we uphold a clear Patient Charter so
              every person receives dignified, transparent, and safe renal
              care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 reveal">
              <h3 className="font-display text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "var(--teal-600)" }}
                >
                  ✓
                </span>
                Your Rights as a Patient
              </h3>
              <ul className="space-y-3">
                {[
                  "Dignity & respect — you will be treated with compassion regardless of background or ability to pay.",
                  "Transparent clinical oversight — you have the right to know your diagnosis, treatment plan, and progress at all times.",
                  "Informed consent — no procedure will be performed without your understanding and agreement.",
                  "Privacy & confidentiality of all medical records and personal information.",
                  "Safe, high-quality care adhering to Kenya Renal Association and international haemodialysis standards.",
                  "Direct access to Dr. Jonathan Wala or the on-call clinical team at any point during your treatment.",
                ].map((right) => (
                  <li
                    key={right}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--teal-600)" }}
                    >
                      •
                    </span>
                    {right}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 reveal">
              <h3 className="font-display text-lg text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 bg-blue-500">
                  !
                </span>
                Your Responsibilities
              </h3>
              <ul className="space-y-3">
                {[
                  "Attend all scheduled dialysis sessions and notify us promptly if you cannot make an appointment.",
                  "Follow the prescribed renal diet and medication regime between sessions.",
                  "Provide accurate and complete health information to your care team at all times.",
                  "Treat all clinical staff and fellow patients with mutual respect and courtesy.",
                  "Report any changes in your symptoms, medications, or general health status immediately.",
                  "Settle agreed financial obligations or SHA co-payments in a timely manner.",
                ].map((resp) => (
                  <li
                    key={resp}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(135deg, #003d38 0%, #005c54 40%, #009e96 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl mb-4">
            Ready to Start Your Dialysis Journey?
          </h2>
          <p className="text-white/70 text-sm mb-8 leading-relaxed">
            Our team is available 24 hours a day to speak with you, answer your
            questions, and arrange your first consultation with Dr. Jonathan
            Wala.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20start%20dialysis%20treatment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              Book via WhatsApp
            </a>
            <a
              href="tel:+254753372814"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-white text-teal-800 hover:bg-teal-50 transition-all"
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

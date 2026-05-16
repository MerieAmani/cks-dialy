import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Calendar,
  Activity,
  Stethoscope,
  Syringe,
  Microscope,
  CheckCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Nav from "@/components/Nav";
import SHABadge from "@/components/SHABadge";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const heroSlides = [
  {
    bg: "/images/Buruburu.jpeg",
    alt: "CKS Buruburu Dialysis Centre",
    heading: "Expert Kidney Care,\nCloser to Home",
    subtext:
      "CKS Dialysis Centre offers world-class haemodialysis and nephrology services at four convenient locations. SHA accredited. Meals included.",
  },
  {
    bg: "/images/cksdialy.jpeg",
    alt: "CKS Pangani Dialysis Centre",
    heading: "Haemodialysis You\nCan Count On",
    subtext:
      "Modern machines, experienced nurses, and in-house nephrologist care — three sessions per week at a branch near you.",
  },
  {
    bg: "/images/homepagefacility.jpeg",
    alt: "Comfortable patient waiting area",
    heading: "Comfort & Care\nEvery Session",
    subtext:
      "Electric recliners, free Wi-Fi, meals provided, and TV entertainment — because your comfort matters as much as your treatment.",
  },
  {
    bg: "/images/main.jpeg",
    alt: "CKS Dialysis Centre main facility",
    heading: "24-Hour Care at\nCKS Kimuka Hospital",
    subtext:
      "Our flagship Kimuka Hospital is open every hour of every day — serving Kajiado County with dialysis, emergency, maternity and more.",
  },
];

const testimonials = [
  {
    stars: 5,
    text: "The nurses at CKS Pangani are incredibly caring. They remember my name, check on my comfort throughout each session, and the meals are a lovely touch.",
    author: "Margaret W.",
    branch: "Pangani Branch",
  },
  {
    stars: 5,
    text: "Dr. Wala took time to explain everything about my kidney condition. I finally felt understood. The Buruburu centre is clean and peaceful.",
    author: "James O.",
    branch: "Buruburu Branch",
  },
  {
    stars: 5,
    text: "SHA covers most of my dialysis costs here. CKS made the insurance process seamless — no stress for me or my family.",
    author: "Fatuma A.",
    branch: "Aga Khan Branch",
  },
  {
    stars: 4,
    text: "Comfortable electric recliner chairs made my 4-hour sessions so much more bearable. The TV entertainment helps the time fly by.",
    author: "Peter K.",
    branch: "Kimuka Branch",
  },
  {
    stars: 5,
    text: "Having a branch so close to Aga Khan Hospital means my specialist referrals are fast. Highly recommended.",
    author: "Esther M.",
    branch: "Aga Khan Branch",
  },
  {
    stars: 5,
    text: "Free WiFi during sessions — I catch up on work emails without missing a beat. The staff are professional and the facility is spotless.",
    author: "David N.",
    branch: "Pangani Branch",
  },
  {
    stars: 5,
    text: "My father has been coming here for 2 years. The team treats him with so much dignity. We are grateful for CKS Dialysis.",
    author: "Grace L.",
    branch: "Buruburu Branch",
  },
];

const faqs = [
  {
    q: "When is dialysis needed?",
    a: "Dialysis is needed when your kidneys retain only 10–15% function. Symptoms like nausea, swelling, and fatigue indicate it is time. Your nephrologist will determine the right moment.",
  },
  {
    q: "How long does each haemodialysis session last?",
    a: "Each session is typically 4 hours and is done 3 times per week at our centres, following your personalised prescription.",
  },
  {
    q: "Does CKS Dialysis accept SHA?",
    a: "Yes. SHA covers 80% of dialysis costs for eligible patients. We also accept most private health insurance schemes.",
  },
  {
    q: "Is parking available at CKS branches?",
    a: "Yes. All four CKS branches — Pangani, Buruburu, Aga Khan, and Kimuka — have dedicated parking for patients and visitors.",
  },
  {
    q: "What are your operating hours?",
    a: "We are open Monday to Saturday, 7:00 AM – 6:00 PM at our Nairobi branches. CKS Kimuka Hospital is open 24 hours, 7 days a week.",
  },
  {
    q: "What meals are provided during dialysis?",
    a: "Breakfast and lunch are provided at every dialysis session at no extra cost to the patient.",
  },
];

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

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useReveal();

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="font-sans">
      <Nav />

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
        style={{ minHeight: "520px" }}
      >
        <div className="absolute inset-0">
          {heroSlides.map((s, i) => (
            <img
              key={i}
              src={s.bg}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: i === slide ? 1 : 0 }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,40,60,0.82) 0%, rgba(0,100,94,0.65) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-36">
          {/* Fixed-height container prevents layout shifts during slide transitions */}
          <div className="relative" style={{ minHeight: "300px" }}>
            {heroSlides.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 max-w-2xl text-white"
                style={{
                  opacity: i === slide ? 1 : 0,
                  transform: i === slide ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 900ms ease, transform 900ms ease",
                  pointerEvents: i === slide ? "auto" : "none",
                }}
                aria-hidden={i !== slide}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-teal-300">
                  Nairobi & Kajiado County
                </p>
                <h1
                  id={i === 0 ? "hero-heading" : undefined}
                  className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
                >
                  {s.heading.split("\n").map((line, li) => (
                    <span key={li}>
                      {li === 1 ? (
                        <span className="text-teal-300">{line}</span>
                      ) : (
                        line
                      )}
                      {li === 0 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  {s.subtext}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/254757614036?text=Hi%20CKS%2C%20I%27d%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white shadow-lg transition-opacity hover:opacity-90"
                    style={{ background: "var(--teal-600)" }}
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Consultation
                  </a>
                  <a
                    href="#branches"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border-2 text-white transition-all hover:bg-white/10"
                    style={{ borderColor: "rgba(255,255,255,0.6)" }}
                  >
                    <MapPin className="w-4 h-4" />
                    Our Branches
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === slide ? "#fff" : "rgba(255,255,255,0.4)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <SHABadge />

      {/* STATS BAR */}
      <div
        className="stat-bar py-6 px-4"
        role="region"
        aria-label="Key statistics"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          <div>
            <div className="font-display text-3xl font-bold">4</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Branches
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">10+</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Years Experience
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">80%</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              SHA Coverage
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">24/7</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Kimuka Hospital
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">What We Do</p>
            <h2
              id="services-heading"
              className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block"
            >
              Our Specialised Services
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              From haemodialysis to kidney transplant work-ups, every service is
              delivered with precision, compassion, and clinical excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "Haemodialysis",
                desc: "2 sessions per week, 4 hours each, using state-of-the-art dialysis machines. Breakfast & lunch included. Free Wi-Fi.",
              },
              {
                icon: Stethoscope,
                title: "Kidney Transplant Work-Up",
                desc: "Comprehensive pre-transplant evaluation and post-transplant follow-up care coordinated with our partner hospitals.",
              },
              {
                icon: Syringe,
                title: "Catheter Insertion & Removal",
                desc: "Safe, experienced catheter management for haemodialysis access, performed by our specialist team.",
              },
              {
                icon: Microscope,
                title: "Kidney Biopsy",
                desc: "Diagnostic kidney biopsies performed under imaging guidance to accurately diagnose kidney conditions.",
              },
              {
                icon: CheckCircle,
                title: "Outpatient Nephrology",
                desc: "One-on-one consultations with Dr. Jonathan Wala for CKD management, diet counselling, and medication reviews.",
              },
              {
                icon: Activity,
                title: "Kidney Function Tests",
                desc: "Monthly KFT monitoring, creatinine, urea, and full renal panels to track your kidney health over time.",
              },
            ].map((svc, i) => (
              <article
                key={i}
                className="hover-lift reveal bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--silver-100)" }}
                >
                  <svc.icon
                    className="w-5 h-5"
                    style={{ color: "var(--teal-600)" }}
                  />
                </div>
                <h3 className="font-display text-lg text-gray-800 mb-2">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {svc.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE */}
      <section
        aria-label="Patient testimonials"
        className="py-10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 mb-6 reveal">
          <p className="section-label text-center">What Our Patients Say</p>
        </div>
        <div className="marquee-wrapper py-4">
          <div className="marquee-track" aria-live="off">
            {[...testimonials, ...testimonials].map((t, i) => (
              <article key={i} className="marquee-item">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      style={{ color: j < t.stars ? "#f59e0b" : "#d1d5db" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  "{t.text}"
                </p>
                <footer className="text-xs font-semibold text-gray-700">
                  — {t.author}{" "}
                  <span className="font-normal text-gray-400">
                    · {t.branch}
                  </span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section
        id="branches"
        aria-labelledby="branches-heading"
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-50)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">Find Us Near You</p>
            <h2
              id="branches-heading"
              className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block"
            >
              Our Four Branches
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              Expert kidney care at every location — choose the branch nearest
              to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PANGANI */}
            <article className="branch-card reveal">
              <div className="branch-header">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold opacity-70 uppercase tracking-widest mb-1">
                      Branch 01
                    </p>
                    <h3 className="font-display text-2xl font-semibold">
                      CKS Pangani
                    </h3>
                    <p className="text-sm opacity-80 mt-1">
                      KCDF House, 5th Floor, Pangani, Nairobi
                    </p>
                  </div>
                  <MapPin className="w-8 h-8 opacity-40 flex-shrink-0" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+254757614036"
                      className="font-medium text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      0757 614 036
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Hours
                    </p>
                    <p className="font-medium text-gray-700">
                      Mon–Sat, 7am–6pm
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Nearby Landmarks
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Pangani Police Station",
                    "Globe Cinema Roundabout",
                    "Pangani Market",
                    "TRM Drive",
                  ].map((l) => (
                    <span key={l} className="landmark-chip">
                      <MapPin className="w-3 h-3" />
                      {l}
                    </span>
                  ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/XmaoZ2va1JMhGRgm9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors"
                  style={{
                    borderColor: "var(--teal-600)",
                    color: "var(--teal-600)",
                  }}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </article>

            {/* BURUBURU */}
            <article className="branch-card reveal">
              <div className="branch-header">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold opacity-70 uppercase tracking-widest mb-1">
                      Branch 02
                    </p>
                    <h3 className="font-display text-2xl font-semibold">
                      CKS Buruburu
                    </h3>
                    <p className="text-sm opacity-80 mt-1">
                      The Point Mall, Rabai Road, Nairobi
                    </p>
                  </div>
                  <MapPin className="w-8 h-8 opacity-40 flex-shrink-0" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+254717385797"
                      className="font-medium text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      0717 385 797
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Hours
                    </p>
                    <p className="font-medium text-gray-700">
                      Mon–Sat, 7am–6pm
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Nearby Landmarks
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Buruburu Shopping Centre",
                    "Nairobi East Hospital",
                    "Buruburu Primary School",
                    "Eastlands Stage",
                  ].map((l) => (
                    <span key={l} className="landmark-chip">
                      <MapPin className="w-3 h-3" />
                      {l}
                    </span>
                  ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/Fb7sg2E2w5hQ5eaX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors"
                  style={{
                    borderColor: "var(--teal-600)",
                    color: "var(--teal-600)",
                  }}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </article>

            {/* AGA KHAN */}
            <article className="branch-card reveal">
              <div className="branch-header">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold opacity-70 uppercase tracking-widest mb-1">
                      Branch 03
                    </p>
                    <h3 className="font-display text-2xl font-semibold">
                      CKS Aga Khan
                    </h3>
                    <p className="text-sm opacity-80 mt-1">
                      Aga Khan Doctor's Plaza, 3rd Parklands Ave
                    </p>
                  </div>
                  <MapPin className="w-8 h-8 opacity-40 flex-shrink-0" />
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+254790602291"
                      className="font-medium text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      0790 602 291
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Hours
                    </p>
                    <p className="font-medium text-gray-700">
                      Mon–Sat, 7am–6pm
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Nearby Landmarks
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Aga Khan University Hospital",
                    "Parklands Police Station",
                    "Westlands Roundabout",
                    "Mpaka Road",
                  ].map((l) => (
                    <span key={l} className="landmark-chip">
                      <MapPin className="w-3 h-3" />
                      {l}
                    </span>
                  ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/AgaKhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors"
                  style={{
                    borderColor: "var(--teal-600)",
                    color: "var(--teal-600)",
                  }}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </article>

            {/* KIMUKA — FEATURED */}
            <article className="branch-card-kimuka reveal">
              <div className="branch-header-kimuka">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="badge-24h">⏱ 24 Hours · 7 Days</div>
                    <p className="text-xs font-semibold opacity-70 uppercase tracking-widest mb-1">
                      Branch 04 — Featured
                    </p>
                    <h3 className="font-display text-2xl font-semibold flex items-center gap-2">
                      CKS Kimuka Hospital
                      <span className="text-xs font-normal opacity-70 bg-white/15 border border-white/25 rounded-full px-2 py-0.5 ml-1">
                        Full Hospital
                      </span>
                    </h3>
                    <p className="text-sm opacity-80 mt-1">
                      Ngong-Suswa Road, Kimuka Trading Center
                    </p>
                  </div>
                  <MapPin className="w-8 h-8 opacity-40 flex-shrink-0" />
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "Dialysis",
                    "Emergency",
                    "Maternity",
                    "Pharmacy",
                    "Lab",
                    "Imaging",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs text-white/90 bg-white/15 border border-white/20 rounded px-2 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+254753372814"
                      className="font-medium text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      0753 372 814
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                      Hours
                    </p>
                    <p className="font-medium text-gray-700">
                      Open 24/7, Every Day
                    </p>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mb-5 text-sm text-gray-700 leading-relaxed">
                  Kimuka's fastest-growing healthcare facility.
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/kimuka"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-full text-white transition-opacity hover:opacity-90"
                    style={{ background: "var(--teal-600)" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                    Visit Kimuka Hospital
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/Kimuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors"
                    style={{
                      borderColor: "var(--teal-600)",
                      color: "var(--teal-600)",
                    }}
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Patient Experience</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              What's Included at Every Session
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "🍽️", label: "Free Breakfast & Lunch" },
              { emoji: "📶", label: "Free Wi-Fi" },
              { emoji: "📺", label: "TV Entertainment" },
              { emoji: "🛋️", label: "Electric Recliners" },
              { emoji: "🏥", label: "SHA Accredited" },
              { emoji: "🅿️", label: "Free Parking" },
            ].map((a) => (
              <div
                key={a.label}
                className="reveal flex flex-col items-center gap-3 p-5 bg-gray-50 border border-gray-200 rounded-xl text-center hover:border-teal-300 hover:bg-teal-50/50 transition-all"
              >
                <span className="text-3xl">{a.emoji}</span>
                <span className="text-xs font-medium text-gray-600">
                  {a.label}
                </span>
              </div>
            ))}
          </div>

          {/* Insurance grid */}
          <div className="mt-14 reveal">
            <p className="section-label text-center">
              Accepted Insurance Providers
            </p>
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

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Common Questions</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
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

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-500 text-sm">
              Call, email, or WhatsApp us — we're here to help you access the
              care you need.
            </p>
          </div>
          <div className="max-w-xl mx-auto grid gap-4">
            <a href="tel:+254757614036" className="contact-row">
              <div
                className="contact-icon"
                style={{ background: "var(--teal-50)" }}
              >
                <Phone
                  className="w-5 h-5"
                  style={{ color: "var(--teal-600)" }}
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                  Main Line
                </p>
                <p className="font-semibold text-gray-800">0757 614 036</p>
              </div>
            </a>
            <a href="tel:+254790602291" className="contact-row">
              <div
                className="contact-icon"
                style={{ background: "var(--teal-50)" }}
              >
                <Phone
                  className="w-5 h-5"
                  style={{ color: "var(--teal-600)" }}
                />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                  Alternative
                </p>
                <p className="font-semibold text-gray-800">0790 602 291</p>
              </div>
            </a>
            <a href="mailto:info@cksdialysis.co.ke" className="contact-row">
              <div className="contact-icon" style={{ background: "#e6f0f8" }}>
                <Mail className="w-5 h-5" style={{ color: "var(--steel)" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                  Email
                </p>
                <p className="font-semibold text-gray-800">
                  info@cksdialysis.co.ke
                </p>
              </div>
            </a>
            <a
              href="https://wa.me/254757614036?text=Hi%20CKS%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <div className="contact-icon bg-green-50">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                  WhatsApp
                </p>
                <p className="font-semibold text-gray-800">
                  Book an appointment on WhatsApp
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </div>
  );
}

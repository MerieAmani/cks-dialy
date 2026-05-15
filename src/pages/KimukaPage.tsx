import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  Navigation,
  Calendar,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Nav from "@/components/Nav";
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

const galleryImages = [
  {
    src: "/images/building-anniversary.jpg",
    alt: "CKS Kimuka Hospital anniversary celebration",
  },
  {
    src: "/images/building-night.jpg",
    alt: "CKS Kimuka Hospital at night — always open 24/7",
  },
  {
    src: "/images/building-signage.jpg",
    alt: "CKS Hospital Kimuka signage on Ngong-Suswa Road",
  },
  {
    src: "/images/camp-anniversary-screening.jpg",
    alt: "Free medical camp screening at CKS Kimuka anniversary",
  },
  {
    src: "/images/camp-doctor-treating.jpg",
    alt: "Doctor treating patient at CKS free medical camp",
  },
  {
    src: "/images/camp-nurses-lab.jpg",
    alt: "Nurses and lab staff at CKS Kimuka outreach camp",
  },
  {
    src: "/images/facility-dialysis-unit.jpg",
    alt: "Modern dialysis unit at CKS Kimuka Hospital",
  },
  {
    src: "/images/facility-equipment.jpg",
    alt: "State-of-the-art medical equipment",
  },
  { src: "/images/team-outreach-staff.jpg", alt: "CKS Kimuka outreach team" },
  {
    src: "/images/wkd-group-photo.jpg",
    alt: "CKS team at World Kidney Day 2025",
  },
  {
    src: "/images/wkd-march-banner.jpg",
    alt: "World Kidney Day awareness march",
  },
  {
    src: "/images/wkd-roadshow-truck.jpg",
    alt: "World Kidney Day roadshow across Kajiado",
  },
];

export default function KimukaPage() {
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useReveal();

  useEffect(() => {
    document.title =
      "CKS Kimuka Hospital | 24-Hour Multi-Service Hospital · Dialysis, MCH, Emergency Care";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const faqs = [
    {
      q: "Is CKS Kimuka Hospital really open 24 hours?",
      a: "Yes — CKS Kimuka Hospital operates 24 hours a day, 7 days a week, 365 days a year, including public holidays.",
    },
    {
      q: "Does the hospital accept SHA (NHIF)?",
      a: "Yes. We are a registered SHA healthcare provider. SHA covers 80% of dialysis costs and a significant portion of other services for eligible patients.",
    },
    {
      q: "What dialysis services are available at Kimuka?",
      a: "We offer round-the-clock haemodialysis with modern machines, in-house nephrologist consultations, and free meals for dialysis patients. Sessions are 4 hours, 3 times per week.",
    },
    {
      q: "Is there an ambulance service?",
      a: "Yes. CKS Kimuka Hospital maintains an ambulance for emergency transfers and community outreach, available 24/7.",
    },
    {
      q: "Where exactly is CKS Kimuka Hospital?",
      a: "We are located on the Ngong-Suswa Road, Kimuka Trading Center, next to Dominion Church, Ngong, Kajiado County.",
    },
  ];

  return (
    <div className="font-sans">
      <Nav subPage isKimuka />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "580px" }}
        aria-labelledby="kimuka-hero-heading"
      >
        <img
          src="/images/main.jpeg"
          alt="CKS Kimuka Hospital facility — serving Ngong and Kajiado County"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,40,35,0.88) 0%, rgba(0,100,94,0.7) 100%)",
          }}
        />
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute right-8 bottom-0 w-48 h-48 object-contain opacity-[0.07] pointer-events-none"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-36 text-white">
          <div className="max-w-2xl">
            <div className="badge-24h mb-3">⏱ Open 24/7 · 365 Days</div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-teal-300">
              Kimuka, Kajiado County
            </p>
            <h1
              id="kimuka-hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
            >
              CKS Kimuka Hospital
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-3">
              A full-service 24-hour hospital bringing life-saving care to the
              heart of Kajiado County.
            </p>
            <p className="text-teal-300 font-semibold text-base mb-8">
              Dialysis · Emergency · Maternity · Pharmacy · Lab · Imaging
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white shadow-lg transition-opacity hover:opacity-90"
                style={{ background: "var(--teal-600)" }}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
              <a
                href="tel:+254753372814"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border-2 text-white transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.6)" }}
              >
                <Phone className="w-4 h-4" />
                Call Kimuka
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <div
        className="stat-bar py-6 px-4"
        role="region"
        aria-label="Kimuka Hospital impact"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
          <div>
            <div className="font-display text-3xl font-bold">24/7</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Always Open
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">1,800%</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Dialysis Growth
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">237+</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Monthly Patients
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">10+</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Services Available
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center reveal">
          <p className="section-label">Welcome</p>
          <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-5 ruled-heading inline-block">
            Welcome to CKS Kimuka Hospital
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            Your health and well-being are our top priorities. We are dedicated
            to providing exceptional healthcare in a compassionate and
            patient-centred environment. Serving approximately{" "}
            <strong>36,000 residents</strong> of Kimuka and the wider Kajiado
            County — including the underserved Maasai community — we are open
            every hour of every day.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Founded
              </p>
              <p className="font-semibold text-gray-800">September 23, 2024</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Clinical Director
              </p>
              <p className="font-semibold text-gray-800">Dr. Jonathan Wala</p>
              <p className="text-xs text-gray-500">Nephrologist</p>
            </div>
            <div className="p-5 rounded-xl border border-gray-200 bg-gray-50 text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                Admin Director
              </p>
              <p className="font-semibold text-gray-800">Mrs. Alice Wala</p>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <div className="p-6 rounded-2xl border border-teal-100 bg-teal-50">
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-2"
                style={{ color: "var(--teal-600)" }}
              >
                Our Mission
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                To provide accessible, affordable, and high-quality healthcare
                to the residents of Kimuka and Kajiado County — bringing
                specialised kidney care, emergency services, and comprehensive
                health support closer to those who need it most.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50">
              <p
                className="text-xs font-semibold uppercase tracking-wide mb-2"
                style={{ color: "var(--steel)" }}
              >
                Our Vision
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                To be the leading community hospital in Kajiado County,
                recognised for clinical excellence, compassionate care, and
                transformative impact on the health and well-being of
                underserved communities across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section
        id="impact"
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Our Growth</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              Impact & Growth
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
              From a small start, CKS Kimuka has grown into a vital lifeline for
              the region.
            </p>
          </div>

          {/* BIG STAT */}
          <div
            className="reveal mb-10 text-center py-14 px-6 rounded-3xl text-white"
            style={{
              background:
                "linear-gradient(135deg, #003d38 0%, #005c54 40%, #009e96 100%)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-3">
              Since September 2024
            </p>

            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              We have seen a significant increase in the number of patients
            </h3>
            <p className="text-white/70 max-w-lg mx-auto text-sm leading-relaxed">
              From our very first dialysis session to a fully operational
              24-hour renal care unit — the fastest healthcare scale-up in the
              Kajiado County region. [Ask for the exact detail]
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div
              className="impact-card reveal text-white"
              style={{ background: "linear-gradient(135deg,#2d5f80,#4a7fa5)" }}
            >
              <div className="text-5xl font-display font-bold mb-2">237</div>
              <div className="text-sm font-semibold opacity-90 mb-1">
                Monthly Patients
              </div>
              <div className="text-xs opacity-70">As of June 2025</div>
            </div>
            <div
              className="impact-card reveal text-white"
              style={{ background: "linear-gradient(135deg,#007269,#26bdb5)" }}
            >
              <div className="text-5xl font-display font-bold mb-2">500+</div>
              <div className="text-sm font-semibold opacity-90 mb-1">
                Free Camp Patients
              </div>
              <div className="text-xs opacity-70">
                November 2024 medical outreach
              </div>
            </div>
            <div
              className="impact-card reveal text-white sm:col-span-2 lg:col-span-1"
              style={{ background: "linear-gradient(135deg,#3a6e8c,#009e96)" }}
            >
              <div className="text-5xl font-display font-bold mb-2">36K</div>
              <div className="text-sm font-semibold opacity-90 mb-1">
                People Served
              </div>
              <div className="text-xs opacity-70">
                Kimuka & surrounding villages
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-8 reveal">
            <h3 className="font-display text-xl text-gray-800 mb-5">
              Our Story
            </h3>
            <div className="space-y-5">
              {[
                {
                  year: "2018 — Foundation",
                  text: "Dr. Jonathan Wala and Mrs. Alice Wala founded CKS Hospital Ltd, establishing two dialysis units in Pangani (12 beds) and Buruburu (10 beds) in Nairobi.",
                },
                {
                  year: "2024 — The Vision",
                  text: "Driven by seeing patients from Kajiado County travel over 100km to Nairobi for dialysis, the founders committed to bringing care closer to home.",
                },
                {
                  year: "September 23, 2024 — Kimuka Opens",
                  text: "CKS Hospital Kimuka opens its doors as a 24-hour multi-service facility, immediately serving the Maasai community and surrounding villages.",
                },
                {
                  year: "2025 — Growing Impact",
                  text: "After hosting two major free medical camps (500+ patients in November 2024; World Kidney Day roadshow in March 2025), the hospital continues expanding across Kajiado County.",
                },
              ].map((item, i, arr) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                      style={{ background: "var(--teal-600)" }}
                    />
                    {i < arr.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-1"
                        style={{ background: "var(--silver-200)" }}
                      />
                    )}
                  </div>
                  <div className={i < arr.length - 1 ? "pb-5" : ""}>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1"
                      style={{ color: "var(--teal-600)" }}
                    >
                      {item.year}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              Comprehensive Services
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              A full range of medical services under one roof — available 24
              hours a day, 7 days a week.
            </p>
          </div>

          {/* Detailed service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Dialysis & Renal Care",
                color: "linear-gradient(135deg,#005c54,#009e96)",
                img: "/images/facility-dialysis-unit.jpg",
                imgAlt:
                  "State-of-the-art haemodialysis unit at CKS Kimuka Hospital",
                items: [
                  "24-hour haemodialysis services",
                  "Modern dialysis machines & comfortable beds",
                  "In-house nephrologist consultations",
                  "Monthly kidney function tests",
                  "Free meals (breakfast & lunch) for dialysis patients",
                  "Free Wi-Fi during sessions",
                  "Pre- & post-transplant renal support",
                  "SHA covered dialysis services",
                ],
              },
              {
                title: "Outpatient & Emergency",
                color: "linear-gradient(135deg,#2d5f80,#4a7fa5)",
                img: "/images/outpatient.jpeg",
                imgAlt:
                  "Doctor treating patient at CKS Kimuka Hospital outpatient department",
                items: [
                  "24/7 general consultations & treatment",
                  "Accident & trauma care",
                  "Emergency & critical care",
                  "Night consultations available",
                  "Chronic illness management",
                  "Specialist referral services",
                  "Ambulance services — 24/7",
                ],
              },
              {
                title: "Maternal & Child Health",
                color: "linear-gradient(135deg,#6b3fa0,#9b59b6)",
                img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
                imgAlt:
                  "Mother and newborn baby — maternal and child health care",
                items: [
                  "Antenatal care & routine check-ups",
                  "Postnatal care & breastfeeding support",
                  "Normal deliveries",
                  "Immunization programmes",
                  "Family planning (short & long term)",
                  "Triple elimination (HIV, syphilis, Hep B)",
                  "Growth monitoring & nutritional support",
                ],
              },
              {
                title: "Diagnostics & Laboratory",
                color: "linear-gradient(135deg,#c0392b,#e74c3c)",
                img: "/images/laboratory.jpeg",
                imgAlt: "CKS Kimuka Hospital laboratory and diagnostics team",
                items: [
                  "Full laboratory services (haemogram, KFTs, HbA1c)",
                  "Ultrasound — obstetric, pelvic, abdominal",
                  "ECG (electrocardiogram)",
                  "HIV rapid testing & VCT",
                  "H. pylori detection",
                  "Hepatitis B & C screening",
                  "Rheumatoid factor & specialty panels",
                ],
              },
              {
                title: "Specialist Clinics",
                color: "linear-gradient(135deg,#e67e22,#f39c12)",
                img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=800&q=80",
                imgAlt: "Specialist doctor consultation at CKS Kimuka Hospital",
                items: [
                  "Nephrology — weekly consultations",
                  "Gynecology — monthly clinic",
                  "Oncology — monthly clinic",
                  "Diabetic & Hypertension — twice monthly",
                  "Physiotherapy services",
                  "Psychology counselling",
                  "Nutritional support",
                ],
              },
              {
                title: "Pharmacy",
                color: "linear-gradient(135deg,#1a6e4a,#27ae60)",
                img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
                imgAlt: "In-house 24-hour pharmacy at CKS Kimuka Hospital",
                items: [
                  "Fully stocked in-house pharmacy — open 24/7",
                  "Long-term medication for Hypertension",
                  "Long-term medication for Diabetes",
                  "Essential drugs & emergency supplies",
                  "Affordable prices",
                  "Guidance from licensed pharmacists",
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

          {/* Community outreach */}
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-2xl p-6 reveal">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                style={{ background: "var(--teal-600)" }}
              >
                🌍
              </div>
              <div>
                <h3 className="font-display text-lg text-gray-800 mb-1">
                  Community Outreach & Immunization Drives
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We actively reach the furthest villages in Kajiado County with
                  free medical camps. In November 2024 we served{" "}
                  <strong>500+ patients</strong> free of charge. In March 2025
                  we held a World Kidney Day roadshow across Ngong Town.
                  Community health is at the core of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE DEEP LINKS */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-center mb-8">Explore Our Services</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/dialysis"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "var(--teal-50)" }}
              >
                🩺
              </div>
              <div>
                <h3 className="font-display text-base text-gray-800 font-semibold mb-1">
                  Dialysis Services
                </h3>
                <p className="text-xs text-gray-500">
                  24/7 haemodialysis, in-house nephrologist, free meals
                </p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-teal-500 transition-colors" />
            </Link>
            <Link
              href="/screening"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "#fef3c7" }}
              >
                🔬
              </div>
              <div>
                <h3 className="font-display text-base text-gray-800 font-semibold mb-1">
                  Screening & Diagnostics
                </h3>
                <p className="text-xs text-gray-500">
                  Lab, ultrasound, ECG, early detection programmes
                </p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-teal-500 transition-colors" />
            </Link>
            <Link
              href="/gallery"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "#f3e8ff" }}
              >
                📸
              </div>
              <div>
                <h3 className="font-display text-base text-gray-800 font-semibold mb-1">
                  Photo Gallery
                </h3>
                <p className="text-xs text-gray-500">
                  Our facilities, team, and community events
                </p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-teal-500 transition-colors" />
            </Link>
            <a
              href="#contact"
              className="group flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "#d1fae5" }}
              >
                📞
              </div>
              <div>
                <h3 className="font-display text-base text-gray-800 font-semibold mb-1">
                  Contact Us
                </h3>
                <p className="text-xs text-gray-500">
                  Call, email, or book an appointment
                </p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto text-gray-300 group-hover:text-teal-500 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section id="gallery" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <p className="section-label">Our Facility & Events</p>
              <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
                Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border-2 transition-colors"
              style={{
                borderColor: "var(--teal-600)",
                color: "var(--teal-600)",
              }}
            >
              Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="gallery-grid">
            {galleryImages.slice(0, 8).map((img, i) => (
              <div
                key={i}
                className="gallery-item reveal"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden reveal">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border-2"
              style={{
                borderColor: "var(--teal-600)",
                color: "var(--teal-600)",
              }}
            >
              Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section
        id="appointment"
        className="py-20 px-4 sm:px-6"
        style={{ background: "var(--silver-100)" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="section-label">Book Your Visit</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Book an Appointment
            </h2>
          </div>
          <form
            className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 reveal space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                "https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20book%20an%20appointment",
                "_blank",
              );
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="appt-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="07XX XXX XXX"
                  className="appt-input"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Service Needed *
              </label>
              <select required className="appt-input">
                <option value="">Select a service</option>
                <option>Dialysis / Renal Care</option>
                <option>General Outpatient</option>
                <option>Maternal & Child Health (MCH)</option>
                <option>Emergency Care</option>
                <option>Diagnostics / Lab / Imaging</option>
                <option>Pharmacy Consultation</option>
                <option>Physiotherapy</option>
                <option>Psychology</option>
                <option>Specialist Clinic</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Preferred Date
              </label>
              <input type="date" className="appt-input" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Additional Notes
              </label>
              <textarea
                placeholder="Any additional information..."
                className="appt-input"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ background: "var(--teal-600)" }}
            >
              Send Appointment Request via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="section-label">Common Questions</p>
            <h2 className="font-display text-2xl text-gray-800 ruled-heading inline-block">
              FAQ
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Find Us</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Contact Kimuka Hospital
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 reveal">
            <a href="tel:+254753372814" className="contact-row">
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
                  Phone
                </p>
                <p className="font-semibold text-gray-800">0753 372 814</p>
              </div>
            </a>
            <a href="mailto:ckskimuka@gmail.com" className="contact-row">
              <div className="contact-icon" style={{ background: "#e6f0f8" }}>
                <Mail className="w-5 h-5" style={{ color: "var(--steel)" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                  Email
                </p>
                <p className="font-semibold text-gray-800">
                  ckskimuka@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://maps.app.goo.gl/zqoKtRmfJsejv3cN9"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row sm:col-span-2"
            >
              <div className="contact-icon" style={{ background: "#fef3c7" }}>
                <MapPin className="w-5 h-5" style={{ color: "#d97706" }} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
                  Location
                </p>
                <p className="font-semibold text-gray-800">
                  Ngong-Suswa Road, Kimuka Trading Center, next to Dominion
                  Church, Ngong
                </p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center reveal">
            <a
              href="https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white shadow-lg transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* KIMUKA MAP STRIP */}
      <div className="w-full" style={{ lineHeight: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4092.5649052489775!2d36.59359888844212!3d-1.3610288717274939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182efd007cb6a3d3%3A0x83b751d300f64ae2!2sCKS%20Kimuka!5e1!3m2!1sen!2ske!4v1778859752015!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CKS Kimuka Hospital location map"
        />
      </div>

      <Footer />
      <MobileCTA phone="+254753372814" whatsapp="254753372814" />

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div className="lightbox active" onClick={() => setLightboxImg(null)}>
          <div
            className="relative max-w-5xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center text-xl hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              className="max-w-full max-h-[82vh] object-contain rounded-md shadow-2xl"
            />
            <p className="text-white/70 text-xs text-center">
              {lightboxImg.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

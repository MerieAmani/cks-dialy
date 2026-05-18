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
  Stethoscope,
  Microscope,
  Camera,
} from "lucide-react";
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

const kimukaSlides = [
  {
    bg: "/images/main.jpeg",
    alt: "CKS Hospital Kimuka — the heart of Kajiado County healthcare",
    heading: "24-Hour Emergency\nCare for All",
    subtext:
      "CKS Hospital Kimuka is open every hour of every day — emergency care, dialysis, maternity, pharmacy, lab and more. Serving Ngong and Kajiado County without pause.",
  },
  {
    bg: "/images/facility-dialysis-unit.jpg",
    alt: "Modern haemodialysis unit at CKS Hospital Kimuka",
    heading: "Advanced Dialysis\nCloser to Home",
    subtext:
      "State-of-the-art haemodialysis with in-house nephrologist care and modern machines. SHA covered. Free meals and Wi-Fi included at every session.",
  },
  {
    bg: "/images/camp-doctor-treating.jpg",
    alt: "Doctor providing compassionate care at CKS Kimuka free medical camp",
    heading: "Maternal & Child\nHealth Services",
    subtext:
      "Comprehensive antenatal care, safe deliveries, immunization, and family planning — compassionate care for mothers and children across Kajiado County.",
  },
  {
    bg: "/images/kimukacks.jpeg",
    alt: "CKS Hospital Kimuka Logo",
    heading: "Diagnostics &\nLaboratory",
    subtext:
      "Full lab services, ultrasound, ECG, and imaging available around the clock — right in the heart of Kimuka Trading Center, Ngong.",
  },
];

const galleryImages = [
  {
    src: "/images/building-anniversary.jpg",
    alt: "CKS Hospital Kimuka anniversary celebration",
  },
  {
    src: "/images/building-night.jpg",
    alt: "CKS Hospital Kimuka at night — always open 24/7",
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
    alt: "Modern dialysis unit at CKS Hospital Kimuka",
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
  const [apptName, setApptName] = useState("");
  const [apptPhone, setApptPhone] = useState("");
  const [apptService, setApptService] = useState("");
  const [apptNotes, setApptNotes] = useState("");
  const [apptDate, setApptDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [slide, setSlide] = useState(0);
  const today = new Date().toISOString().split("T")[0];
  useReveal();

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % kimukaSlides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    document.title =
      "CKS Hospital Kimuka | 24-Hour Multi-Service Hospital · Dialysis, MCH, Emergency Care";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const faqs = [
    {
      q: "Who owns CKS Kimuka Hospital?",
      a: "CKS Kimuka Hospital is privately owned and managed by a team of experienced healthcare professionals committed to providing quality, affordable, and patient-centered healthcare services.",
    },
    {
      q: "Are you open 24/7?",
      a: "Yes. Our outpatient department, casualty, and emergency services are available 24 hours a day, 7 days a week, 365 days a year — including public holidays.",
    },
    {
      q: "Where are you located?",
      a: "We are located along Ngong–Suswa Road at Kimuka Trading Center, next to Dominion Church in Kimuka, Kajiado County.",
    },
    {
      q: "What services do you offer?",
      a: "We offer a wide range of healthcare services including outpatient services, emergency and casualty care, dialysis, maternity services, laboratory services, radiology and ultrasound imaging, specialist clinics, daycare procedures, immunization and MCH services, and ambulance evacuation and referral services.",
    },
    {
      q: "Do you have specialist clinics?",
      a: "Yes. We offer specialist consultation clinics handled by qualified medical professionals covering a wide range of medical specialties.",
    },
    {
      q: "Do you offer maternity services?",
      a: "Yes. We provide comprehensive maternity care including antenatal care, delivery services, postnatal care, and maternal monitoring.",
    },
    {
      q: "Do you accept SHA and other insurance?",
      a: "Yes. We are SHA accredited and accept SHA services including the Civil Servants Scheme, Mwalimu Scheme, and Primary Healthcare (PHC). We also accept most major insurance providers.",
    },
    {
      q: "Do I need to book an appointment in advance?",
      a: "Walk-in patients are welcome at any time. However, for specialist clinics and certain procedures, advance booking is recommended to help minimise waiting time. You can call, WhatsApp, or use the booking form on this page.",
    },
    {
      q: "Is emergency care available 24/7?",
      a: "Yes. Our emergency and casualty unit operates 24 hours a day for emergency treatment and stabilisation before referrals or transfers when necessary. Ambulance evacuation services are also available around the clock.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash, M-Pesa, debit and credit cards, insurance payments, and SHA coverage.",
    },
    {
      q: "Do you offer dialysis services?",
      a: "Yes. CKS Kimuka Hospital offers haemodialysis services managed by qualified healthcare professionals in a safe, comfortable, and patient-friendly environment. Sessions are 4 hours long, typically twice per week, and include free meals for dialysis patients.",
    },
    {
      q: "What are the requirements to start dialysis?",
      a: "Before starting dialysis, a patient is required to be assessed by a doctor or nephrologist, have kidney function tests and relevant laboratory investigations done, and receive a formal recommendation for dialysis. Suitable dialysis access (AV fistula or catheter) must be in place. Patients should bring their national ID, SHA card or insurance details, previous medical records and lab results (HIV Ab, Hepatitis Bs Ag, Hepatitis C Ab, Hepatitis B Antibody Titre — all no more than 4 weeks old), and a referral letter from their doctor if available. Our team will guide patients and families through every step of the process.",
    },
    {
      q: "Does dialysis hurt?",
      a: "The process itself is not painful, though you may feel temporary discomfort when the needles are placed into your vascular access (fistula or graft). This generally becomes much easier to tolerate over time.",
    },
  ];

  return (
    <div className="font-sans">
      <Nav subPage isKimuka />
      <SHABadge />

      {/* HERO SLIDESHOW */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "580px" }}
        aria-labelledby="kimuka-hero-heading"
      >
        {/* Background slide images */}
        <div className="absolute inset-0">
          {kimukaSlides.map((s, i) => (
            <img
              key={i}
              src={s.bg}
              alt={s.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === slide ? 1 : 0,
                transition: "opacity 900ms ease",
              }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,40,35,0.88) 0%, rgba(0,100,94,0.7) 100%)",
            }}
          />
        </div>

        {/* Watermark logo */}
        <img
          src="/images/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute right-8 bottom-0 w-48 h-48 object-contain opacity-[0.07] pointer-events-none z-10"
        />

        {/* Slide content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 md:py-36">
          <div className="relative" style={{ minHeight: "300px" }}>
            {kimukaSlides.map((s, i) => (
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
                <div className="badge-24h mb-3">⏱ Open 24/7 · 365 Days</div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-teal-300">
                  Kimuka, Kajiado County
                </p>
                <h1
                  id={i === 0 ? "kimuka-hero-heading" : undefined}
                  className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
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
                <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                  {s.subtext}
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
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {kimukaSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                background: i === slide ? "#fff" : "rgba(255,255,255,0.35)",
                transform: i === slide ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
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
              Emergency Care & OPD
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">Full Service</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Lab & Pharmacy
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">Maternal</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              & Child Health
            </div>
          </div>
          <div>
            <div className="font-display text-3xl font-bold">Specialist</div>
            <div className="text-xs font-medium opacity-80 mt-0.5 uppercase tracking-widest">
              Medical Clinics
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center reveal">
          <p className="section-label">Welcome</p>
          <h2 className="font-display text-3xl md:text-4xl text-gray-800 mb-5 ruled-heading inline-block">
            Welcome to CKS Hospital Kimuka
          </h2>
          {/* About description */}
          <div className="text-left max-w-3xl mx-auto mt-8 space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              CKS Hospital Kimuka is dedicated to providing compassionate,
              accessible, and high-quality healthcare services to improve the
              well-being of our community. Our mission is to empower patients
              through comprehensive and innovative care.
            </p>
            <p>
              We are located along Ngong–Suswa Road at Kimuka Trading Centre,
              providing accessible, affordable, and quality healthcare services
              to Kimuka and the surrounding communities.
            </p>
            <p>
              The hospital is equipped with modern medical facilities and is
              staffed by qualified and dedicated healthcare professionals
              committed to delivering patient-centered care in a safe and
              friendly environment.
            </p>

            <div>
              <p className="font-semibold text-gray-800 mb-2">
                Our services include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                {[
                  "Maternity services",
                  "Dialysis unit",
                  "Laboratory services",
                  "Radiology and ultrasound services",
                  "Daycare services",
                  "Casualty and emergency care",
                  "24/7 outpatient services",
                  "Specialist clinics",
                  "Ambulance and evacuation services",
                  "Immunization",
                ].map((svc) => (
                  <li key={svc}>{svc}</li>
                ))}
              </ul>
            </div>

            <p>
              Our emergency and casualty unit operates 24 hours a day and is
              equipped for emergency response, patient stabilization, and urgent
              medical care before referral or transfer to higher-level
              facilities when necessary. We also offer ambulance services for
              emergency evacuation and patient referrals to ensure timely and
              safe transportation.
            </p>
            <p>
              Our dialysis unit provides professional haemodialysis services
              under qualified medical supervision to ensure quality care and
              comfort for patients with kidney-related conditions.
            </p>

            <div className="p-5 rounded-2xl border border-teal-100 bg-teal-50 space-y-3">
              <p className="font-semibold text-gray-800">
                We are accredited by the Social Health Authority (SHA) and
                accept all major insurance providers. SHA coverage includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>Civil Servants Scheme</li>
                <li>Mwalimu Scheme</li>
                <li>Primary Health Care (PHC)</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                <li>SHA covers Maternity Package at KES 10,000</li>
                <li>
                  SHA fully covers two haemodialysis sessions weekly at KES
                  10,650 per session.
                </li>
              </ul>
            </div>

            <p>
              At CKS Hospital Kimuka, we are committed to improving community
              health through compassionate care, professionalism, and reliable
              medical services available 24 hours a day, 7 days a week.
            </p>
          </div>

          {/* Administrators photo */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div
              className="relative rounded-2xl overflow-hidden cursor-zoom-in"
              onClick={() => setLightboxImg({ src: "/images/cks-admin.jpeg", alt: "Dr. Jonathan Wala and Mrs. Alice Wala — CKS Kimuka Hospital administrators" })}
              title="Tap to view full image"
            >
              <img
                src="/images/cks-admin.jpeg"
                alt="Dr. Jonathan Wala and Mrs. Alice Wala — CKS Kimuka Hospital administrators"
                className="w-full h-64 sm:h-80 object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-white text-sm font-semibold">Mrs. Alice Wala & Dr. Jonathan Wala</p>
                <p className="text-white/75 text-xs">Administrators — CKS Kimuka Hospital</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
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
                To provide compassionate, accessible, and high-quality
                healthcare services to improve the well-being of our community,
                empowering patients through comprehensive and innovative care
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
                To be a leading healthcare provider in the region, known for
                excellence in patient care, advanced medical services, and a
                commitment to community health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES & OBJECTIVES */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="section-label">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 ruled-heading inline-block">
              Core Values & Objectives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* CORE VALUES */}
            <div className="reveal">
              <h3 className="font-display text-xl text-gray-800 mb-6 flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "var(--teal-600)" }}
                >
                  ♥
                </span>
                Our Core Values
              </h3>
              <div className="grid gap-4">
                {[
                  {
                    value: "Compassion",
                    desc: "We treat every patient with empathy, respect, and dignity,ensuring their comfort and well-being.",
                  },
                  {
                    value: "Excellence",
                    desc: "We strive for the highest standards in healthcare delivery through continuous improvement and innovation.",
                  },
                  {
                    value: "Integrity",
                    desc: "We uphold honesty, transparency, and ethical practices inall our operations and interactions.",
                  },
                  {
                    value: "Teamwork",
                    desc: "We foster collaboration among our dedicated staff todeliver comprehensive and coordinated care.",
                  },
                  {
                    value: "Patient-Centered Care",
                    desc: "We prioritize the needs of our patients, ensuringpersonalized and holistic care.",
                  },
                  {
                    value: "Commitment to Growth",
                    desc: "We are dedicated to expanding our services and improving infrastructure to meet the evolving needs of the community.",
                  },
                  {
                    value: "Community Focus",
                    desc: "We work to address the unique health challenges of our community, promoting wellness and preventive care.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl border border-teal-100 bg-teal-50"
                  >
                    <span
                      className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                      style={{ background: "var(--teal-600)" }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-0.5">
                        {item.value}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OBJECTIVES */}
            <div className="reveal">
              <h3 className="font-display text-xl text-gray-800 mb-4 flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "var(--steel)" }}
                >
                  ◎
                </span>
                Objectives
              </h3>
              <div className="p-4 rounded-xl border border-teal-200 bg-teal-50 mb-4">
                <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                  General Objective
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To provide accessible, affordable, high-quality, and
                  patient-centered healthcare services to the community through
                  professional medical care, modern diagnostic services,
                  preventive healthcare, and specialized treatment.
                </p>
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Specific Objectives
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "To offer quality outpatient and emergency medical services for timely diagnosis and treatment of patients.",
                  "To provide reliable dialysis services for patients with kidney-related conditions under professional supervision.",
                  "To improve maternal and child health through antenatal care, postnatal care, family planning, immunization, and child wellness clinics.",
                  "To provide accurate laboratory and imaging services that support effective diagnosis and treatment.",
                  "To ensure availability of specialist clinics for comprehensive management of various medical conditions.",
                  "To promote preventive healthcare and community health education on hygiene, nutrition, chronic diseases, and healthy lifestyles.",
                  "To provide efficient ambulance and evacuation services for emergency response and patient referrals.",
                  "To maintain high standards of professionalism, ethics, patient safety, and confidentiality in all hospital operations.",
                  "To create a friendly, safe, and easily accessible healthcare environment for all patients and families.",
                  "To collaborate with healthcare partners, insurance providers, and community organizations to improve healthcare access and outcomes within Kimuka and surrounding areas.",
                ].map((obj, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-3 rounded-xl border border-blue-100 bg-blue-50"
                  >
                    <span
                      className="text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                      style={{ background: "var(--steel)" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
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
              Kajiado County region.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div
              className="impact-card text-white"
              style={{ background: "linear-gradient(135deg,#2d5f80,#4a7fa5)" }}
            >
              <div className="text-5xl font-display font-bold mb-2">24/7</div>
              <div className="text-sm font-semibold opacity-90 mb-1">
                We Operate 24/7
              </div>
              <div className="text-xs opacity-70">Open every day of the year</div>
            </div>
            <div
              className="impact-card text-white"
              style={{ background: "linear-gradient(135deg,#007269,#26bdb5)" }}
            >
              <div className="text-5xl font-display font-bold mb-2">10+</div>
              <div className="text-sm font-semibold opacity-90 mb-1">
                Specialist Clinics
              </div>
              <div className="text-xs opacity-70">
                Covering a wide range of medical specialties
              </div>
            </div>
            <div
              className="impact-card text-white"
              style={{ background: "linear-gradient(135deg,#3a6e8c,#009e96)" }}
            >
              <div className="text-5xl font-display font-bold mb-2">6+</div>
              <div className="text-sm font-semibold opacity-90 mb-1">
                Dialysis Bed Capacity
              </div>
              <div className="text-xs opacity-70">
                Professional haemodialysis under qualified supervision
              </div>
            </div>
            <div
              className="impact-card text-white"
              style={{ background: "linear-gradient(135deg,#1a5c4a,#2d9e7a)" }}
            >
              <div className="text-sm font-semibold opacity-90 mb-1">
                Emergency & Ambulance
              </div>
              <div className="text-xs opacity-70">
                24-hour casualty unit with ambulance evacuation services
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
                  text: "Dr. Jonathan Wala and Mrs. Alice Wala established the foundation of CKS, launching dedicated dialysis units in Pangani and Buruburu to provide life-saving, compassionate renal care within Nairobi.",
                },
                {
                  year: "2024 — The Vision",
                  text: "Witnessing exhausted patients and anxious families travel over 100km from rural Kajiado to Nairobi—enduring grueling journeys just to access basic, routine dialysis—the founders committed to bringing dignity and care directly to the doorstep of the community.",
                },
                {
                  year: "September 23, 2024 — Kimuka Opens",
                  text: "CKS Hospital Kimuka opened its doors as a 24-hour sanctuary of healing. It immediately became a vital lifeline for the surrounding villages, ensuring that critical daytime emergencies and vulnerable midnight medical crises no longer went unanswered.",
                },
                {
                  year: "2025 — Deepening Roots",
                  text: "Moving beyond hospital walls, the team engaged directly with families through extensive free medical camps and regional wellness roadshows, building lasting trust and expanding healthcare access across the entire county.",
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
                  "State-of-the-art haemodialysis unit at CKS Hospital Kimuka",
                items: [
                  "24-hour haemodialysis services with weekly Blood boosts and Monthly Renal tests",
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
                  "Doctor treating patient at CKS Hospital Kimuka outpatient department",
                items: [
                  "24/7 general consultations & treatment",
                  "Accident & trauma care",
                  "Emergency & critical care",
                  "Chronic illness management",
                  "Specialist referral services",
                  "Ambulance services — 24/7",
                ],
              },
              {
                title: "Maternal & Child Health",
                color: "linear-gradient(135deg,#6b3fa0,#9b59b6)",
                img: "/images/mch.jpeg",
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
                imgAlt: "CKS Hospital Kimuka laboratory and diagnostics team",
                items: [
                  "Full laboratory services (haemogram, KFTs, HbA1c)",
                  "Ultrasound — obstetric, pelvic, abdominal",
                  "ECG (electrocardiogram)",
                  "HIV rapid testing & VCT",
                  "H. pylori detection",
                  "Hepatitis B & C screening",
                  "Rheumatoid factor & many more",
                ],
              },
              {
                title: "Specialist Clinics",
                color: "linear-gradient(135deg,#e67e22,#f39c12)",
                img: "/images/specializedclinics.jpeg",
                imgAlt: "Specialist doctor consultation at CKS Hospital Kimuka",
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
                img: "/images/pharmacy.jpeg",
                imgAlt: "In-house 24-hour pharmacy at CKS Hospital Kimuka",
                items: [
                  "Fully stocked in-house pharmacy — open 24/7",
                  "Medication for Hypertension",
                  "Medication for Diabetes",
                  "Essential drugs & emergency supplies",
                  "Affordable prices",
                  "Guidance from licensed pharmacists",
                ],
              },
              {
                title: "Screening & Diagnostics",
                color: "linear-gradient(135deg,#2d5f80,#4a7fa5)",
                img: "/images/camp-anniversary-screening.jpg",
                imgAlt:
                  "CKS Kimuka comprehensive health screening and diagnostics",
                items: [
                  "Comprehensive health screening programmes",
                  "HIV testing, VCT & counselling",
                  "Blood glucose & hypertension screening",
                  "Cervical & breast cancer screening",
                  "Hepatitis B & C testing",
                  "Renal function (creatinine, GFR) screening",
                  "Community outreach & free medical camps",
                  "Early detection diagnostics",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                id={i === 0 ? "dialysis" : i === 3 ? "screening" : undefined}
                className="service-category reveal hover-lift"
              >
                <div
                  className="relative h-44 overflow-hidden cursor-zoom-in"
                  onClick={() => setLightboxImg({ src: cat.img, alt: cat.imgAlt })}
                  title="Tap to view full image"
                >
                  <img
                    src={cat.img}
                    alt={cat.imgAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <span className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full">
                      View full image
                    </span>
                  </div>
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--teal-50)" }}
              >
                <Stethoscope
                  className="w-6 h-6"
                  style={{ color: "var(--teal-600)" }}
                />
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#fef3c7" }}
              >
                <Microscope className="w-6 h-6 text-amber-600" />
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#f3e8ff" }}
              >
                <Camera className="w-6 h-6 text-purple-600" />
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
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#d1fae5" }}
              >
                <Phone className="w-6 h-6 text-emerald-600" />
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
              if (apptDate && apptDate < today) {
                setDateError("Please select a future date.");
                return;
              }
              const msg = [
                "Hi CKS Kimuka, I'd like to book an appointment.",
                `Name: ${apptName}`,
                `Phone: ${apptPhone}`,
                `Service: ${apptService}`,
                apptDate ? `Preferred Date: ${apptDate}` : "",
                apptNotes ? `Notes: ${apptNotes}` : "",
              ]
                .filter(Boolean)
                .join("\n");
              window.open(
                `https://wa.me/254753372814?text=${encodeURIComponent(msg)}`,
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
                  value={apptName}
                  onChange={(e) => setApptName(e.target.value)}
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
                  value={apptPhone}
                  onChange={(e) => setApptPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Service Needed *
              </label>
              <select
                required
                className="appt-input"
                value={apptService}
                onChange={(e) => setApptService(e.target.value)}
              >
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
              <input
                type="date"
                className="appt-input"
                min={today}
                value={apptDate}
                onChange={(e) => {
                  const val = e.target.value;
                  setApptDate(val);
                  if (val && val < today) {
                    setDateError("Please select a future date.");
                  } else {
                    setDateError("");
                  }
                }}
              />
              {dateError && (
                <p className="mt-1 text-xs font-medium text-red-500">
                  {dateError}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                Additional Notes
              </label>
              <textarea
                placeholder="Any additional information..."
                className="appt-input"
                value={apptNotes}
                onChange={(e) => setApptNotes(e.target.value)}
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

      {/* Insurance Partners */}
      <section
        className="py-16 px-4 sm:px-6"
        style={{ background: "var(--silver-50)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 reveal">
            <p className="section-label">Accepted Insurance Partners</p>
            <h2 className="font-display text-2xl md:text-3xl text-gray-800 ruled-heading inline-block">
              We Accept Your Insurance
            </h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 reveal">
            {[
              {
                name: "SHA",
                label: "Social Health Authority",
                logo: "/images/insurance/SHA.jpg",
              },
              {
                name: "Jubilee Health",
                label: "Jubilee Health Insurance",
                logo: "/images/insurance/Jubilee.jpg",
              },
              {
                name: "AAR Healthcare",
                label: "AAR Healthcare",
                logo: "/images/insurance/AAR.png",
              },
              { name: "CIC Insurance", label: "CIC Group", logo: null },
              {
                name: "Cigna",
                label: "Cigna Healthcare",
                logo: "/images/insurance/Cigna.png",
              },
              {
                name: "KCB",
                label: "KCB Insurance",
                logo: "/images/insurance/KCB.png",
              },
              {
                name: "Old Mutual",
                label: "Old Mutual Kenya",
                logo: "/images/insurance/OldMutual.png",
              },
              {
                name: "Minet Kenya",
                label: "Minet — Secure Tomorrow",
                logo: "/images/insurance/Minet.png",
              },
              {
                name: "APA Insurance",
                label: "APA Insurance",
                logo: "/images/insurance/APA.png",
              },
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
                    <span className="text-sm font-bold text-white tracking-wide">
                      CIC
                    </span>
                  </div>
                )}
                <span className="text-xs text-gray-500 leading-tight">
                  {ins.name}
                </span>
              </div>
            ))}
          </div>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-label">Find Us</p>
            <h2 className="font-display text-3xl text-gray-800 ruled-heading inline-block">
              Contact Kimuka Hospital
            </h2>
          </div>

          {/* Side-by-side: details LEFT, map RIGHT — stacked on mobile */}
          <div className="flex flex-col md:flex-row gap-8 reveal">
            {/* LEFT — Contact details */}
            <div className="flex flex-col gap-4 md:w-2/5">
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
                className="contact-row"
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
              <a
                href="https://wa.me/254753372814?text=Hi%20CKS%20Kimuka%2C%20I%27d%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white shadow-lg transition-opacity hover:opacity-90 mt-2"
                style={{ background: "#25D366" }}
              >
                Book via WhatsApp
              </a>
            </div>

            {/* RIGHT — Embedded map */}
            <div
              className="md:w-3/5 rounded-2xl overflow-hidden shadow-lg"
              style={{ minHeight: "380px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4092.5649052489775!2d36.59359888844212!3d-1.3610288717274939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182efd007cb6a3d3%3A0x83b751d300f64ae2!2sCKS%20Kimuka!5e1!3m2!1sen!2ske!4v1778859752015!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "380px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CKS Hospital Kimuka location map"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA
        phone="+254753372814"
        whatsapp="254753372814"
        homePath="/kimuka"
      />

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

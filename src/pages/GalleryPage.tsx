import { useEffect, useState, useCallback } from "react";
import { Link } from "wouter";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
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
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Named featured images (non-gallery folder)
const featuredImages = [
  {
    src: "/images/building-anniversary.jpg",
    alt: "CKS Kimuka Anniversary",
    category: "Hospital",
  },
  {
    src: "/images/clinicaldirector.jpeg",
    alt: "CKS Clinical Director",
    category: "Team",
  },
  {
    src: "images/admindirector.jpeg",
    alt: "CKS Admin Director",
    category: "Team",
  },
  {
    src: "/images/building-night.jpg",
    alt: "CKS Hospital Kimuka Lit Up",
    category: "Hospital",
  },
  {
    src: "/images/main.jpeg",
    alt: "CKS Hospital Kimuka Entrance",
    category: "Facilities",
  },
  {
    src: "/images/facility-dialysis-unit.jpg",
    alt: "State-of-the-art dialysis unit at CKS",
    category: "Facilities",
  },
  {
    src: "/images/facility-equipment.jpg",
    alt: "CKS Kimuka Bed & Wheelchair",
    category: "Facilities",
  },
  {
    src: "/images/cksleadership.jpeg",
    alt: "CKS Leadership",
    category: "Team",
  },
  {
    src: "/images/facility-waiting-area.jpg",
    alt: "Comfortable waiting area at CKS",
    category: "Facilities",
  },
  {
    src: "/images/camp-anniversary-screening.jpg",
    alt: "Free medical screening camp — CKS anniversary 2024",
    category: "Events",
  },
  {
    src: "/images/camp-doctor-treating.jpg",
    alt: "Doctor treating patient at CKS free community camp",
    category: "Events",
  },
  {
    src: "/images/ambulance+entry.jpeg",
    alt: "CKS Hospital Ambulance at the hospital entry",
    category: "Hospital",
  },
  {
    src: "/images/camp-nurses-lab.jpg",
    alt: "Nurses and lab team at CKS screening outreach",
    category: "Events",
  },
  {
    src: "/images/team-outreach-staff.jpg",
    alt: "CKS Kimuka team",
    category: "Team",
  },
  {
    src: "/images/team-outside-hospital.jpg",
    alt: "CKS medical team outside Hospital Kimuka",
    category: "Team",
  },
  {
    src: "/images/wkd-group-photo.jpg",
    alt: "CKS team — World Kidney Day 2025",
    category: "Events",
  },
  {
    src: "/images/wkd-march-banner.jpg",
    alt: "World Kidney Day awareness march",
    category: "Events",
  },
  {
    src: "/images/Admindirector+clinicaldirector.jpeg",
    alt: "CKS Leadership",
    category: "Team",
  },
  {
    src: "/images/wkd-march-ngong-town.jpg",
    alt: "World Kidney Day march through Ngong Town, March 2025",
    category: "Events",
  },
  {
    src: "/images/wkd-roadshow-truck.jpg",
    alt: "CKS World Kidney Day roadshow truck — Kajiado County",
    category: "Events",
  },
  {
    src: "/images/img1.jpg",
    alt: "CKS Hospital Kimuka WKD march",
    category: "Facilities",
  },
  {
    src: "/images/ckscakecutting.jpeg",
    alt: "CKS Cake Cutting",
    category: "Events",
  },
  {
    src: "/images/img2.jpg",
    alt: "CKS Hospital Kimuka WKD March",
    category: "Facilities",
  },
  {
    src: "/images/img3.jpg",
    alt: "WKD March led by the Admin Director",
    category: "Team",
  },
  {
    src: "/images/img4.jpg",
    alt: "World Kidney Day Cake Cutting",
    category: "Events",
  },
  {
    src: "/images/img5.jpg",
    alt: "World Kideny Day March",
    category: "Events",
  },
  {
    src: "/images/img6.jpg",
    alt: "CKS Hospital Kimuka WKD March",
    category: "Events",
  },
  {
    src: "/images/ckswkddrone.jpeg",
    alt: "CKS World Kidney day March",
    category: "Events",
  },
  {
    src: "/images/img7.jpg",
    alt: "CKS Hospital Kimuka WKD March Ngong Town",
    category: "Facilities",
  },
  {
    src: "/images/img8.jpg",
    alt: "CKS Hospital Kimuka Staff during WKD 2025",
    category: "Team",
  },
  {
    src: "/images/img9.jpg",
    alt: "CKS Hospital Kimuka Staff",
    category: "Team",
  },
  {
    src: "/images/img10.jpg",
    alt: "CKS Hospital Kimuka WKD 2025",
    category: "Events",
  },
  {
    src: "/images/ckswkd.jpeg",
    alt: "CKS Hospital Kimuka WKD 2025",
    category: "Events",
  },
  {
    src: "/images/img11.jpg",
    alt: "World Kidney Day March 2025",
    category: "Events",
  },
  {
    src: "/images/img12.jpg",
    alt: "CKS Hospital Kimuka Team -WKD",
    category: "Team",
  },
  {
    src: "/images/img13.jpg",
    alt: "CKS Hospital Kimuka Ambulance",
    category: "Facilities",
  },
  {
    src: "/images/ambulance.jpeg",
    alt: "CKS Hospital Kimuka Ambulance",
    category: "Facilities",
  },
  {
    src: "/images/img15.jpg",
    alt: "CKS Hospital Kimuka Roadshow",
    category: "Events",
  },
  {
    src: "/images/ultrasound2.jpeg",
    alt: "CKS Hospital Kimuka Ultrasound Machine",
    category: "Facilities",
  },
  {
    src: "/images/cksstaffwalking.jpeg",
    alt: "CKS Hospital Kimuka Staff during WKD 2025",
    category: "Team",
  },
  {
    src: "/images/staff.jpeg",
    alt: "CKS Staff",
    category: "Team",
  },
  {
    src: "/images/technician.jpeg",
    alt: "CKS Technician Innocent Malingu",
    category: "Team",
  },
  {
    src: "/images/ambulance+staff.jpeg",
    alt: "CKS Ambulance + Staff",
    category: "Facilities",
  },
  {
    src: "/images/outpatient.jpeg",
    alt: "CKS Kimuka Outpatient",
    category: "Facilities",
  },
  {
    src: "/images/dialysis.jpeg",
    alt: "CKS Kimuka Dialysis Facility",
    category: "Facilities",
  },
  {
    src: "/images/cksstaffcake.jpeg",
    alt: "CKS Staff Cake",
    category: "Events",
  },
  {
    src: "/images/teambuilding1.jpeg",
    alt: "CKS staff team building activity — harness training",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding2.jpeg",
    alt: "CKS staff getting ready for team building challenge",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding3.jpeg",
    alt: "CKS team members preparing for outdoor activity",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding4.jpeg",
    alt: "CKS staff trio smiling at team building event",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding5.jpeg",
    alt: "CKS team receiving safety briefing from instructor",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding6.jpeg",
    alt: "CKS team learning rope techniques during team building",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding7.jpeg",
    alt: "CKS staff members in harness gear at adventure park",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding8.jpeg",
    alt: "CKS staff member with helmet and harness at team event",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding9.jpeg",
    alt: "CKS staff and family at team building adventure park",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding10.jpeg",
    alt: "CKS staff",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding12.jpeg",
    alt: "CKS staff",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding13.jpeg",
    alt: "CKS",
    category: "Team Building Event",
  },
  {
    src: "/images/teambuilding14.jpeg",
    alt: "CKS staff",
    category: "Team Building Event",
  },
  {
    src: "/images/team1.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team2.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team3.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team4.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team5.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team6.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team7.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team8.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team9.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team10.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team11.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team12.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team13.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team14.jpeg",
    alt: "CKS staff",
    category: "Events",
  },
  {
    src: "/images/team15.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team16.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team17.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team18.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team19.jpeg",
    alt: "CKS staff",
    category: "Events",
  },
  {
    src: "/images/team20.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
  {
    src: "/images/team21.jpeg",
    alt: "CKS staff",
    category: "Team",
  },
];

// Build gallery images list with named images + WhatsApp images
const waImageCount = 99;
const waImages = Array.from({ length: waImageCount }, (_, i) => ({
  src: `/images/gallery/WhatsApp Image 2026-05-12 at 11.20.52.jpeg`,
  alt: `CKS Hospital Kimuka — gallery photo ${i + 1}`,
  category: "Gallery",
}));

// Use only well-named images as our main gallery (WhatsApp images are too generic to loop)
const allImages = featuredImages;

const categories = [
  "All",
  "Hospital",
  "Facilities",
  "Team",
  "Events",
  "Team Building Event",
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  useReveal();

  useEffect(() => {
    document.title = "Photo Gallery | CKS Dialysis Centre & Hospital Kimuka";
  }, []);

  const filtered =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(
    () =>
      setLightboxIdx((i) =>
        i !== null && i > 0 ? i - 1 : filtered.length - 1,
      ),
    [filtered.length],
  );
  const next = useCallback(
    () =>
      setLightboxIdx((i) =>
        i !== null && i < filtered.length - 1 ? i + 1 : 0,
      ),
    [filtered.length],
  );

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightboxIdx, closeLightbox, prev, next]);

  useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  return (
    <div className="font-sans">
      <Nav />

      {/* PAGE HEADER */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-4"
        style={{
          background:
            "linear-gradient(135deg, #003d38 0%, #005c54 40%, #009e96 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center text-white">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-teal-300">
            Our Story in Photos
          </p>
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Photo Gallery
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-6">
            A visual journey through our facilities, our team, and our community
            impact across Nairobi and Kajiado County.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* FILTER */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setVisibleCount(20); }}
              className="text-sm font-medium px-4 py-1.5 rounded-full border transition-all"
              style={
                filter === cat
                  ? {
                      background: "var(--teal-600)",
                      color: "#fff",
                      borderColor: "var(--teal-600)",
                    }
                  : {
                      background: "#fff",
                      color: "var(--silver-700)",
                      borderColor: "var(--silver-300)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY GRID */}
      <section
        className="py-12 px-4 sm:px-6"
        style={{ background: "var(--silver-100)", minHeight: "60vh" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-400 text-right mb-4">
            {filtered.length} photos
          </p>
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="gallery-item reveal"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`Open photo: ${img.alt}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(i);
                }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-end p-3 opacity-0 hover:opacity-100">
                  <span className="text-white text-xs font-medium bg-black/50 rounded-full px-2 py-0.5">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No photos in this category yet.
            </div>
          )}

        </div>
      </section>

      {/* WA GALLERY SECTION */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label">More From Us</p>
          <h2 className="font-display text-2xl text-gray-800 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Stay up to date with our latest events, medical camps, and news by
            following us on social media or contacting us via WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/254753372814"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white"
              style={{ background: "#25D366" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Kimuka
            </a>
            <a
              href="https://wa.me/254757614036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white"
              style={{ background: "var(--teal-600)" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Main Line
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="lightbox active"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute -top-14 left-0 text-white/60 text-sm">
              {lightboxIdx + 1} / {filtered.length}
            </div>

            {/* Image */}
            <div className="relative w-full flex items-center justify-center">
              <button
                onClick={prev}
                className="absolute left-0 -translate-x-12 hidden md:flex w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              <button
                onClick={next}
                className="absolute right-0 translate-x-12 hidden md:flex w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <p className="text-white/60 text-xs text-center max-w-lg">
              {filtered[lightboxIdx].alt}
            </p>

            {/* Mobile prev/next */}
            <div className="flex gap-3 md:hidden">
              <button
                onClick={prev}
                className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
                Prev
              </button>
              <button
                onClick={next}
                className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
                aria-label="Next"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

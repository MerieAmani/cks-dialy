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
    alt: "CKS Kimuka Hospital Lit Up",
    category: "Hospital",
  },
  {
    src: "/images/main.jpeg",
    alt: "CKS Kimuka Hospital Entrance",
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
    category: "Community",
  },
  {
    src: "/images/camp-doctor-treating.jpg",
    alt: "Doctor treating patient at CKS free community camp",
    category: "Community",
  },
  {
    src: "/images/camp-nurses-lab.jpg",
    alt: "Nurses and lab team at CKS screening outreach",
    category: "Community",
  },
  {
    src: "/images/team-outreach-staff.jpg",
    alt: "CKS Kimuka team",
    category: "Team",
  },
  {
    src: "/images/team-outside-hospital.jpg",
    alt: "CKS medical team outside Kimuka Hospital",
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
    alt: "CKS Kimuka Hospital WKD march",
    category: "Facilities",
  },
  {
    src: "/images/ckscakecutting.jpeg",
    alt: "CKS Cake Cutting",
    category: "Team",
  },
  {
    src: "/images/img2.jpg",
    alt: "CKS Kimuka Hospital WKD March",
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
    category: "Community",
  },
  {
    src: "/images/img5.jpg",
    alt: "World Kideny Day March",
    category: "Community",
  },
  {
    src: "/images/img6.jpg",
    alt: "CKS Kimuka Hospital WKD March",
    category: "Community",
  },
  {
    src: "/images/img7.jpg",
    alt: "CKS Kimuka Hospital WKD March Ngong Town",
    category: "Facilities",
  },
  {
    src: "/images/img8.jpg",
    alt: "CKS Kimuka Hospital Staff during WKD 2025",
    category: "Team",
  },
  {
    src: "/images/img9.jpg",
    alt: "CKS Kimuka Hospital Staff",
    category: "Team",
  },
  {
    src: "/images/img10.jpg",
    alt: "CKS Kimuka Hospital WKD 2025",
    category: "Community",
  },
  {
    src: "/images/img11.jpg",
    alt: "World Kidney Day March 2025",
    category: "Community",
  },
  {
    src: "/images/img12.jpg",
    alt: "CKS Kimuka Hospital Team -WKD",
    category: "Team",
  },
  {
    src: "/images/img13.jpg",
    alt: "CKS Kimuka Hospital Ambulance",
    category: "Facilities",
  },
  {
    src: "/images/ambulance.jpeg",
    alt: "CKS Kimuka Hospital Ambulance",
    category: "Facilities",
  },
  {
    src: "/images/img15.jpg",
    alt: "CKS Kimuka Hospital Roadshow",
    category: "Community",
  },
  {
    src: "/images/staff.jpeg",
    alt: "CKS Staff",
    category: "Team",
  },
  {
    src: "/images/technician.jpeg",
    alt: "CKS Technician",
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
];

// Build gallery images list with named images + WhatsApp images
const waImageCount = 99;
const waImages = Array.from({ length: waImageCount }, (_, i) => ({
  src: `/images/gallery/WhatsApp Image 2026-05-12 at 11.20.52.jpeg`,
  alt: `CKS Kimuka Hospital — gallery photo ${i + 1}`,
  category: "Gallery",
}));

// Use only well-named images as our main gallery (WhatsApp images are too generic to loop)
const allImages = featuredImages;

const categories = [
  "All",
  "Hospital",
  "Facilities",
  "Community",
  "Team",
  "Events",
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  useReveal();

  useEffect(() => {
    document.title = "Photo Gallery | CKS Dialysis Centre & Kimuka Hospital";
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
              onClick={() => setFilter(cat)}
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
              💬 WhatsApp Kimuka
            </a>
            <a
              href="https://wa.me/254757614036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full text-white"
              style={{ background: "var(--teal-600)" }}
            >
              💬 WhatsApp Main Line
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

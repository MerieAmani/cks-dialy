import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar } from "lucide-react";

interface NavProps {
  subPage?: boolean;
  subPageTitle?: string;
  isKimuka?: boolean;
}

export default function Nav({ subPage = false, isKimuka = false }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const brandSub = isKimuka ? "Kimuka Hospital" : "Dialysis Center";
  const brandLabel = isKimuka ? "CKS Kimuka Hospital — go to homepage" : "CKS Dialysis Center — go to homepage";

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* BRAND LOGO — always links to homepage */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label={brandLabel}>
              <img
                src="/images/logo.jpeg"
                alt="CKS logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="leading-tight">
                <span className="block font-display font-bold text-lg text-gray-800 leading-none">CKS</span>
                <span className="block text-xs font-medium tracking-wide" style={{ color: "var(--teal-600)" }}>
                  {brandSub}
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-5">
            {subPage ? (
              <>
                <a href="/kimuka#about" className="nav-link">About</a>
                <a href="/kimuka#services" className="nav-link">Services</a>
                <a href="/kimuka#dialysis" className="nav-link">Dialysis</a>
                <a href="/kimuka#screening" className="nav-link">Screening</a>
                <a href="/kimuka#gallery" className="nav-link">Gallery</a>
                <a href="/kimuka#contact" className="nav-link">Contact</a>
                <Link href="/" className="nav-link-back">← Back to Home</Link>
              </>
            ) : (
              <>
                <a href="#home" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</a>
                <a href="#services" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <Link href="/dialysis" className="nav-link">Dialysis</Link>
                <Link href="/screening" className="nav-link">Screening</Link>
                <a href="#branches" className="nav-link">Our Branches</a>
                <a href="#contact" className="nav-link">Contact</a>
                <Link href="/gallery" className="nav-link">Gallery</Link>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/254757614036?text=Hi%20CKS%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full text-white"
              style={{ background: "var(--teal-600)" }}
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {subPage ? (
              <>
                <a href="/kimuka#about" className="nav-link py-1" onClick={() => setMobileOpen(false)}>About</a>
                <a href="/kimuka#services" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Services</a>
                <a href="/kimuka#dialysis" className="nav-link py-0.5 pl-4 text-xs text-gray-500" onClick={() => setMobileOpen(false)}>↳ Dialysis Services</a>
                <a href="/kimuka#screening" className="nav-link py-0.5 pl-4 text-xs text-gray-500" onClick={() => setMobileOpen(false)}>↳ Screening & Diagnostics</a>
                <a href="/kimuka#gallery" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Gallery</a>
                <a href="/kimuka#contact" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Contact</a>
                <Link href="/" className="nav-link-back py-1" onClick={() => setMobileOpen(false)}>← Back to Home</Link>
              </>
            ) : (
              <>
                <a href="#home" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Home</a>
                <a href="#services" className="nav-link py-1" onClick={() => setMobileOpen(false)}>About</a>
                <a href="#services" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Services</a>
                <Link href="/dialysis" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Dialysis</Link>
                <Link href="/screening" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Screening</Link>
                <a href="#branches" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Our Branches</a>
                <a href="#contact" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Contact</a>
                <Link href="/gallery" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Gallery</Link>
              </>
            )}
            <a
              href="https://wa.me/254757614036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-full text-white mt-2"
              style={{ background: "#25D366" }}
            >
              Book via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar } from "lucide-react";

interface NavProps {
  subPage?: boolean;
  subPageTitle?: string;
}

export default function Nav({ subPage = false, subPageTitle }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label="CKS Dialysis — go to homepage">
              <img
                src="/images/logo.jpeg"
                alt="CKS Dialysis Centre logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="leading-tight">
                <span className="block font-display font-bold text-lg text-gray-800 leading-none">CKS</span>
                <span className="block text-xs font-medium tracking-wide" style={{ color: "var(--teal-600)" }}>
                  Dialysis Centre
                </span>
              </div>
            </Link>
            {subPage && subPageTitle && (
              <>
                <span className="hidden sm:block text-gray-300 text-lg">/</span>
                <span className="hidden sm:block text-sm font-semibold text-gray-700">{subPageTitle}</span>
              </>
            )}
          </div>

          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            {subPage ? (
              <>
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#gallery" className="nav-link">Gallery</a>
                <a href="#contact" className="nav-link">Contact</a>
                <Link href="/" className="nav-link-back">
                  ← Back to Home
                </Link>
              </>
            ) : (
              <>
                <a href="#home" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#branches" className="nav-link">Our Branches</a>
                <a href="#faq" className="nav-link">FAQ</a>
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

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {subPage ? (
              <>
                <a href="#about" className="nav-link py-1" onClick={() => setMobileOpen(false)}>About</a>
                <a href="#services" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Services</a>
                <a href="#gallery" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Gallery</a>
                <a href="#contact" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Contact</a>
                <Link href="/" className="nav-link-back py-1" onClick={() => setMobileOpen(false)}>← Back to Home</Link>
              </>
            ) : (
              <>
                <a href="#home" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Home</a>
                <a href="#services" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Services</a>
                <a href="#branches" className="nav-link py-1" onClick={() => setMobileOpen(false)}>Our Branches</a>
                <a href="#faq" className="nav-link py-1" onClick={() => setMobileOpen(false)}>FAQ</a>
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

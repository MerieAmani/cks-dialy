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

  const brandSub = isKimuka ? "Hospital Kimuka" : "Dialysis Center";
  const brandLabel = isKimuka
    ? "CKS Hospital Kimuka — go to homepage"
    : "CKS Dialysis Center — go to homepage";

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* BRAND LOGO */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={brandLabel}
            >
              <img
                src="/images/logo.jpeg"
                alt="CKS logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="leading-tight">
                <span className="block font-display font-bold text-lg text-gray-800 leading-none">
                  CKS
                </span>
                <span
                  className="block text-xs font-medium tracking-wide"
                  style={{ color: "var(--teal-600)" }}
                >
                  {brandSub}
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            role="navigation"
            aria-label="Main navigation"
            className={`hidden md:flex items-center ${subPage && isKimuka ? "gap-3 text-xs" : "gap-5"}`}
          >
            {subPage && isKimuka ? (
              /* Kimuka branch nav — double home + full item list */
              <>
                <Link href="/" className="nav-link whitespace-nowrap">
                  Main Home
                </Link>
                <Link href="/kimuka" className="nav-link whitespace-nowrap">
                  Kimuka Home
                </Link>
                <a href="/kimuka#about" className="nav-link">
                  About Us
                </a>
                <a href="/kimuka#services" className="nav-link">
                  Our Services
                </a>
                <a href="/dialysis" className="nav-link">
                  Dialysis
                </a>
                <a href="/screening" className="nav-link">
                  Screening
                </a>
                <a href="/#branches" className="nav-link whitespace-nowrap">
                  Our Branches
                </a>
                <a href="/kimuka#contact" className="nav-link">
                  Contact
                </a>
                <a href="/gallery" className="nav-link">
                  Gallery
                </a>
              </>
            ) : subPage ? (
              /* Non-Kimuka sub-page nav (Dialysis, Screening, etc.) */
              <>
                <Link href="/" className="nav-link-back">
                  ← Back to Home
                </Link>
                <a href="/kimuka#services" className="nav-link">
                  Our Services
                </a>
                <Link href="/dialysis" className="nav-link">
                  Dialysis
                </Link>
                <Link href="/screening" className="nav-link">
                  Screening
                </Link>
                <Link href="/gallery" className="nav-link">
                  Gallery
                </Link>
                <Link href="/kimuka" className="nav-link whitespace-nowrap">
                  Kimuka Branch
                </Link>
              </>
            ) : (
              <>
                <a
                  href="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </a>
                <a href="/#about" className="nav-link">
                  About Us
                </a>
                <a href="/kimuka#services" className="nav-link">
                  Our Services
                </a>
                <Link href="/dialysis" className="nav-link">
                  Dialysis
                </Link>
                <Link href="/screening" className="nav-link">
                  Screening
                </Link>
                <a href="/#branches" className="nav-link whitespace-nowrap">
                  Our Branches
                </a>
                <a href="/#contact" className="nav-link">
                  Contact
                </a>
                <Link href="/gallery" className="nav-link">
                  Gallery
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/254757614036?text=Hi%20CKS%2C%20I%27d%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full text-white whitespace-nowrap"
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
            {mobileOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {subPage && isKimuka ? (
              /* Kimuka mobile — double home */
              <>
                <Link
                  href="/"
                  className="nav-link py-1 font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  ← CKS Dialysis Center
                </Link>
                <Link
                  href="/kimuka"
                  className="nav-link py-1 font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  ⌂ CKS Hospital Kimuka
                </Link>
                <a
                  href="/kimuka#about"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/kimuka#services"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Our Services
                </a>
                <a
                  href="/dialysis"
                  className="nav-link py-0.5 pl-4 text-xs text-gray-500"
                  onClick={() => setMobileOpen(false)}
                >
                  Dialysis Services
                </a>
                <a
                  href="/screening"
                  className="nav-link py-0.5 pl-4 text-xs text-gray-500"
                  onClick={() => setMobileOpen(false)}
                >
                  Screening & Diagnostics
                </a>
                <a
                  href="/#branches"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Our Branches
                </a>
                <a
                  href="/kimuka#contact"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/gallery"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Gallery
                </a>
              </>
            ) : subPage ? (
              /* Non-Kimuka sub-page mobile */
              <>
                <Link
                  href="/"
                  className="nav-link py-1 font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  ← CKS Dialysis Center
                </Link>
                <Link
                  href="/dialysis"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Dialysis
                </Link>
                <Link
                  href="/screening"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Screening
                </Link>
                <Link
                  href="/gallery"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/kimuka"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Kimuka Branch
                </Link>
              </>
            ) : (
              <>
                <a
                  href="/"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/#about"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="/kimuka#services"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Our Services
                </a>
                <Link
                  href="/dialysis"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Dialysis
                </Link>
                <Link
                  href="/screening"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Screening
                </Link>
                <a
                  href="/#branches"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Our Branches
                </a>
                <a
                  href="/#contact"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
                <Link
                  href="/gallery"
                  className="nav-link py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Gallery
                </Link>
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

export default function SHABadge() {
  return (
    <div
      role="banner"
      aria-label="SHA Accreditation"
      style={{ background: "linear-gradient(90deg,#004d47 0%,#006b63 100%)" }}
      className="py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center sm:text-left">
        <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm">
          <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-teal-700 font-bold text-xs flex-shrink-0">✓</span>
          SHA Accredited Facility
        </span>
        <span className="hidden sm:block text-teal-300 text-xs">|</span>
        <span className="text-teal-200 text-xs sm:text-sm">
          Social Health Authority approved — SHA covers eligible services including haemodialysis
        </span>
        <a
          href="https://wa.me/254757614036?text=Hi%20CKS%2C%20I%27d%20like%20to%20verify%20my%20SHA%20cover"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-white border border-teal-400 rounded-full px-3 py-0.5 hover:bg-white/10 transition-colors flex-shrink-0"
        >
          Verify SHA Cover →
        </a>
      </div>
    </div>
  );
}

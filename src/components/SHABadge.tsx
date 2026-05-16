export default function SHABadge() {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <img
            src="/images/GOKsha.jpg"
            alt="Government of Kenya — Social Health Authority"
            className="h-10 w-auto object-contain flex-shrink-0"
          />
          <div className="hidden sm:block w-px h-8 bg-gray-200 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-800 leading-tight">
              SHA Accredited Facility
            </p>
            <p className="text-xs text-gray-500 leading-snug">
              Social Health Authority (SHA) — Quality care covered by SHA, including haemodialysis
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/254757614036?text=Hi%20CKS%2C%20I%27d%20like%20to%20verify%20my%20SHA%20cover"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex-shrink-0 whitespace-nowrap"
          style={{ background: "var(--teal-600)" }}
        >
          Verify SHA Cover →
        </a>
      </div>
    </div>
  );
}

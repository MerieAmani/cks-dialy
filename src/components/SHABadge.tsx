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
      </div>
    </div>
  );
}

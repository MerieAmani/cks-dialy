import { useState } from "react";
import { X } from "lucide-react";

const WaIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const branches = [
  { label: "Contact CKS Pangani",  number: "254757614036" },
  { label: "Contact CKS Buruburu", number: "254717385797" },
  { label: "Contact CKS Aga Khan", number: "254790602291" },
  { label: "Contact CKS Kimuka",   number: "254753372814" },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-[9999]">
      {open && (
        <div className="wa-widget-popup">
          <div className="wa-widget-header">
            <div className="wa-widget-header-icon">
              <WaIcon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-white text-sm leading-tight">CKS Group of Hospitals</p>
              <p className="text-xs text-green-200 flex items-center gap-1 mt-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                Typically replies in minutes
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="wa-widget-body">
            <div className="wa-widget-bubble">
              <p className="text-sm text-gray-800 leading-relaxed">
                👋 Hello! Welcome to <strong>CKS Group of Hospitals</strong>.
              </p>
              <p className="text-sm text-gray-800 leading-relaxed mt-1">
                How can we help you today? Choose a branch below to start a chat.
              </p>
              <p className="text-xs text-gray-400 mt-2 text-right">Today</p>
            </div>
          </div>

          <div className="wa-widget-branches">
            {branches.map((b) => (
              <a
                key={b.number}
                href={`https://wa.me/${b.number}?text=Hi%20CKS%2C%20I%27d%20like%20to%20get%20in%20touch`}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-widget-branch-btn"
              >
                <WaIcon />
                <span>{b.label}</span>
              </a>
            ))}
            <p className="text-center text-xs text-gray-400 mt-2">Opens WhatsApp — free of charge</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="wa-widget-btn"
        aria-label="Open WhatsApp chat"
      >
        <WaIcon />
      </button>
    </div>
  );
}

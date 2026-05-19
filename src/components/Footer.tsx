import { useState } from "react";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Copy, Check, MessageCircle } from "lucide-react";

export default function Footer() {
  const [copiedNum, setCopiedNum] = useState<string | null>(null);
  const copyPhone = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNum(num);
    setTimeout(() => setCopiedNum(null), 2000);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpeg"
                alt="CKS Dialysis logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <span className="block font-display font-bold text-lg leading-none">
                  CKS
                </span>
                <span
                  className="block text-xs tracking-wide"
                  style={{ color: "var(--teal-400)" }}
                >
                  Dialysis Centre
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Expert kidney care and haemodialysis services across four
              locations in Nairobi and Kajiado County. SHA accepted.
            </p>
            <p className="text-xs text-gray-500">
              Managed by{" "}
              <strong className="text-gray-300">Dr. Jonathan Wala</strong>,
              Nephrologist
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/kimuka"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                CKS Hospital Kimuka
              </Link>
              <Link
                href="/dialysis"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Dialysis Services
              </Link>
              <Link
                href="/screening"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Screening & Diagnostics
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
              >
                Photo Gallery
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-white">
              Our Branches
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>📍 Pangani — KCDF House, 5th Floor</p>
              <p>📍 Buruburu — The Point Mall, Rabai Road</p>
              <p>📍 Aga Khan — Doctor's Plaza, Parklands</p>
              <p>📍 Kimuka — Ngong-Suswa Road (24/7)</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-white">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { num: "0757614036", label: "0757 614 036 (HQ)", href: "tel:+254757614036" },
                { num: "0753372814", label: "0753 372 814 (Kimuka)", href: "tel:+254753372814" },
                { num: "0790602291", label: "0790 602 291 (Aga Khan)", href: "tel:+254790602291" },
                { num: "0717385797", label: "0717 385 797 (Buruburu)", href: "tel:+254717385797" },
              ].map(({ num, label, href }) => (
                <div key={num} className="flex items-center gap-2">
                  <a href={href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0 text-teal-400" />
                    {label}
                  </a>
                  <button
                    onClick={() => copyPhone(num)}
                    className="text-gray-600 hover:text-teal-400 transition-colors flex-shrink-0"
                    title="Copy number"
                  >
                    {copiedNum === num ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              ))}
              <a
                href="mailto:info@cksdialysis.co.ke"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-teal-400" />
                info@cksdialysis.co.ke
              </a>
              <a
                href="mailto:ckskimuka@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-teal-400" />
                ckskimuka@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5 items-center sm:items-start">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} CKS Dialysis Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>Website design by Matthew Amani Merie</span>
              <a
                href="https://wa.me/254797719612?text=Hello%20Matthew%2C%20I%20would%20like%20to%20inquire%20about%20your%20website%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400 transition-colors"
                title="WhatsApp Matthew"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyPhone("0797719612")}
                className="flex items-center gap-1 text-gray-600 hover:text-teal-400 transition-colors"
                title="Copy number"
              >
                <span>0797 719 612</span>
                {copiedNum === "0797719612" ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>SHA Accredited</span>
            <span>•</span>
            <span>Private Insurance Accepted</span>
            <span>•</span>
            <span>24/7 Kimuka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

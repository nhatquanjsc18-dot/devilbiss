"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/nha-phan-phoi", label: "Nhà phân phối" },
  { href: "/#gioi-thieu", label: "Giới thiệu" },
  { href: "/bai-viet", label: "Súng phun sơn" },
  { href: "/phu-kien", label: "Phụ kiện" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="flex h-11 w-11 items-center justify-center">
            <img
              src="/images/logo-sung.png"
              alt="Nhất Quán"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold uppercase tracking-wide text-lg">
              Nhất Quán
            </span>
            <span className="block text-[11px] text-white/60">
              Thiết bị phun sơn &amp; chà nhám công nghiệp
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-white/85 transition-colors hover:text-primary xl:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="tel:0907811767" className="btn-solid">
            📞 0907 811 767
          </a>
        </div>

        <button
          type="button"
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center border border-primary text-primary"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-semibold uppercase tracking-wide text-white/85 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:0907811767" className="btn-solid mt-3 w-fit">
                📞 0907 811 767
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

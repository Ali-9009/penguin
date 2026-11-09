"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Search,
  UserRound,
  ShoppingBag,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

import { useCart } from "@/context/CartContext";
import HeaderSearch from "./HeaderSearch";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "COA", href: "/coa" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
  { name: "Partner Program", href: "/partner-program" },
  { name: "Track Order", href: "/track-order" },
];

import { Gift } from "lucide-react";

function AnnouncementBar() {
  return (
    <div className="relative w-full overflow-hidden bg-linear-to-r from-[#073B68] via-[#07558F] to-[#009CA9] px-4 py-3 sm:py-3.5">
      {/* SOFT GRADIENT GLOW */}
      <div className="pointer-events-none absolute -top-16 left-1/4 h-28 w-60 rounded-full bg-white/10 blur-[50px]" />

      <div className="pointer-events-none absolute right-1/4 -bottom-16 h-28 w-60 rounded-full bg-[#04C1CA]/30 blur-[50px]" />

      {/* ANNOUNCEMENT */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-2">
        <div className="font-heading flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center sm:gap-x-3">
          {/* DISCOUNT BADGE */}
          <span className="inline-flex shrink-0 items-center rounded-lg bg-gradient-to-r from-[#A3F7F4] to-[#04C1CA] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.02em] text-[#073B68] shadow-[0_4px_14px_rgba(4,193,202,0.25)] sm:text-[12px]">
            40% OFF
          </span>

          {/* PLUS BADGE */}
          <span
            aria-hidden="true"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 text-[15px] font-semibold text-white shadow-sm backdrop-blur-sm"
          >
            +
          </span>

          {/* FREE PEPTIDE OFFER */}
          <p className="text-[11px] leading-relaxed text-white sm:text-[13px]">
            <span className="font-bold text-white">FREE Peptide</span>{" "}
            <span className="font-medium text-white/80">
              per $150 Spent After Discount
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileSidebar({ open, onClose, pathname }) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${
        open ? "visible" : "invisible delay-300"
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-[min(340px,90vw)] flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#EEE6EF] px-5 py-4">
          <Link href="/" onClick={onClose} aria-label="Spectrum home">
            <Image
              src="/assets/penguin-logo.png"
              alt="Spectrum Biosciences"
              width={160}
              height={55}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-primary hover:bg-primary flex size-9 items-center justify-center rounded-full bg-[#F6E5F7] transition-colors hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <nav
          aria-label="Sidebar navigation"
          className="flex-1 overflow-y-auto px-4 py-5"
        >
          <p className="mb-3 px-3 text-[11px] font-bold tracking-[0.12em] text-[#9B8C9F] uppercase">
            Navigation
          </p>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-sans text-sm font-semibold transition-colors ${
                    active
                      ? "text-primary bg-[#F6E5F7]"
                      : "hover:text-primary text-[#514653] hover:bg-[#FAF5FB]"
                  }`}
                >
                  {link.name}
                  <ChevronRight
                    size={17}
                    className={active ? "text-primary" : "text-[#B6A7BA]"}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 border-t border-[#EEE6EF] pt-5">
            <p className="mb-3 px-3 text-[11px] font-bold tracking-[0.12em] text-[#9B8C9F] uppercase">
              Account
            </p>

            <Link
              href="/account"
              onClick={onClose}
              className="hover:text-primary flex items-center gap-3 rounded-xl px-4 py-3.5 text-[14px] font-semibold text-[#514653] transition-colors hover:bg-[#FAF5FB]"
            >
              <UserRound size={19} />
              My Account
              <ChevronRight size={17} className="ml-auto text-[#B6A7BA]" />
            </Link>
          </div>
        </nav>

        <div className="border-t border-[#EEE6EF] px-5 py-4">
          <p className="flex items-center gap-2 text-[11px] text-[#8B7E8E]">
            <FlaskConical size={15} className="text-primary" />
            For laboratory research use only
          </p>
        </div>
      </aside>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openCart, itemCount, hydrated } = useCart();

  const cartCount = hydrated ? itemCount : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <AnnouncementBar />

      <header
        className={`sticky top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ease-in-out ${
          scrolled
            ? "border-white/40 bg-white/65 shadow-[0_10px_40px_rgba(7,59,104,0.10)] backdrop-blur-[24px] backdrop-saturate-150"
            : "border-[#E2EDF2] bg-white shadow-none backdrop-blur-none"
        } `}
      >
        <div
          className={`mx-auto grid max-w-[1360px] grid-cols-[1fr_auto] items-center gap-4 px-4 transition-[padding] duration-300 ease-in-out sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10 ${scrolled ? "py-1" : "py-2"} `}
        >
          <Link
            href="/"
            aria-label="Spectrum Biosciences home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/assets/penguin-logo.png"
              alt="Spectrum Biosciences"
              width={200}
              height={65}
              priority
              className="h-12 w-auto origin-left object-contain transition-[height] duration-300 ease-in-out"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-7 lg:flex xl:gap-10"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`group text-md relative font-sans font-medium whitespace-nowrap transition-colors duration-300 ${
                    active
                      ? "text-primary"
                      : "hover:text-primary text-[#514654]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`bg-secondary absolute -bottom-2 left-0 h-[2px] rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              data-header-search-trigger
              onClick={() => {
                setSearchOpen((current) => !current);
                setMenuOpen(false);
              }}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls="header-search"
              className="text-primary relative flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11"
            >
              {searchOpen ? <X size={21} /> : <Search size={21} />}
            </button>

            <Link
              href="/account"
              aria-label="My account"
              className="text-primary relative flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11"
            >
              <UserRound size={21} />
            </Link>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Open shopping cart, ${cartCount} items`}
              className="text-primary relative flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11"
            >
              <ShoppingBag size={21} strokeWidth={1.8} />

              {cartCount > 0 && (
                <span className="bg-secondary absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 font-sans text-[10px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(true);
                setSearchOpen(false);
              }}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="text-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#F6E5F7] sm:h-11 sm:w-11 lg:hidden"
            >
              <Menu size={24} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <HeaderSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>

      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />

      <style jsx global>{`
        @keyframes spectrum-announcement-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .announcement-track {
          animation: spectrum-announcement-scroll 45s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .announcement-track {
            animation-duration: 35s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

// =========================
// NAVIGATION LINKS
// =========================

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

// =========================
// HEADER
// =========================

export default function Header() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
      <div
        style={{
          maxWidth: isScrolled ? "1300px" : "1400px",
        }}
        className="relative mx-auto w-full transition-[max-width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        {/* =========================
            MAIN HEADER
        ========================= */}

        <div
          className={`relative grid min-h-[76px] grid-cols-[1fr_auto] items-center rounded-2xl border border-white/70 bg-white/85 shadow-[0_12px_45px_rgba(7,59,104,0.09)] backdrop-blur-2xl transition-all duration-500 lg:grid-cols-[1fr_auto_1fr] ${
            isScrolled ? "px-4 sm:px-6" : "px-4 sm:px-7 lg:px-9"
          } `}
        >
          {/* =========================
              LOGO - LEFT
          ========================= */}

          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Penguin Peptides Home"
            className="flex w-fit shrink-0 items-center"
          >
            <Image
              src="/assets/penguin-logo.png"
              alt="Penguin Peptides"
              width={155}
              height={60}
              priority
              className="h-auto w-[115px] object-contain sm:w-[145px]"
            />
          </Link>

          {/* =========================
              DESKTOP NAV - CENTER
          ========================= */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-1 lg:flex"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                {...item}
                active={pathname === item.href}
              />
            ))}
          </nav>

          {/* =========================
              RIGHT ICONS
          ========================= */}

          <div className="flex items-center justify-end gap-1 sm:gap-2">
            {/* Search */}

            <button
              type="button"
              aria-label="Search products"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((current) => !current);
                setMobileOpen(false);
              }}
              className="text-primary hover:bg-accent hover:text-primary-dark flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:h-11 sm:w-11"
            >
              <Search size={21} strokeWidth={1.8} />
            </button>

            {/* Account */}

            <Link
              href="/account"
              aria-label="My account"
              className="text-primary hover:bg-accent hover:text-primary-dark flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:h-11 sm:w-11"
            >
              <UserRound size={21} strokeWidth={1.8} />
            </Link>

            {/* Cart */}

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="text-primary hover:bg-accent hover:text-primary-dark relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 sm:h-11 sm:w-11"
            >
              <ShoppingBag size={21} strokeWidth={1.8} />
            </Link>

            {/* Mobile Menu */}

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                setMobileOpen((current) => !current);
                setSearchOpen(false);
              }}
              className="border-primary/10 bg-accent-light text-primary hover:bg-accent ml-1 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 lg:hidden"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* =========================
            SEARCH DROPDOWN
        ========================= */}

        <div
          className={`border-border absolute top-[calc(100%+10px)] right-0 left-0 origin-top overflow-hidden rounded-2xl border bg-white/95 shadow-[0_20px_60px_rgba(7,59,104,0.12)] backdrop-blur-2xl transition-all duration-300 ${
            searchOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          } `}
        >
          <form
            role="search"
            action="/shop"
            method="GET"
            className="flex items-center gap-3 p-4 sm:p-5"
          >
            <Search size={21} className="text-primary shrink-0" />

            <input
              type="search"
              name="search"
              placeholder="Search research peptides..."
              aria-label="Search products"
              className="text-text placeholder:text-muted min-w-0 flex-1 bg-transparent font-sans text-sm outline-none sm:text-base"
            />

            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 sm:px-6"
            >
              Search
              <ArrowUpRight size={16} />
            </button>
          </form>
        </div>

        {/* =========================
            MOBILE NAVIGATION
        ========================= */}

        <div
          id="mobile-navigation"
          className={`border-border absolute top-[calc(100%+10px)] right-0 left-0 origin-top overflow-hidden rounded-2xl border bg-white/95 shadow-[0_24px_70px_rgba(7,59,104,0.13)] backdrop-blur-2xl transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-3 scale-[0.98] opacity-0"
          } `}
        >
          <nav
            aria-label="Mobile navigation"
            className="max-h-[calc(100vh-120px)] overflow-y-auto p-3"
          >
            {navLinks.map((item) => (
              <MobileNavLink
                key={item.label}
                {...item}
                active={pathname === item.href}
                onClick={closeMenu}
              />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

// =========================
// DESKTOP NAV LINK
// =========================

function NavLink({ label, href, active }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative rounded-full px-4 py-2.5 font-sans text-[14px] font-semibold transition-all duration-300 ${
        active
          ? "bg-accent text-primary"
          : "text-text/75 hover:bg-accent-light hover:text-primary"
      } `}
    >
      {label}
    </Link>
  );
}

// =========================
// MOBILE NAV LINK
// =========================

function MobileNavLink({ label, href, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`mb-1 flex items-center justify-between rounded-xl px-4 py-3.5 font-sans text-sm font-semibold transition-all duration-300 ${
        active
          ? "bg-accent text-primary"
          : "text-text/75 hover:bg-accent-light hover:text-primary"
      } `}
    >
      {label}

      <ArrowUpRight
        size={16}
        className={active ? "text-primary" : "text-muted"}
      />
    </Link>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const sections = [
  { name: "Platform", href: "#platform" },
  { name: "Solutions", href: "#solutions" },
  { name: "Why Findigm", href: "#why" },
  { name: "Coverage", href: "#coverage" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let current: string | null = null;
      sections.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 80) {
          current = href;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white/90 py-2" : "bg-white/70 py-4"
      } backdrop-blur-md border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo - Styled as text logo like deel.com */}
        <div className="flex items-center h-12">
        <span className={`text-3xl font-extrabold tracking-tighter text-gray-900 ${plusJakarta.className}`}> findigm
        </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
          {sections.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className={`transition ${
                activeSection === href
                  ? "text-[#F97316] font-semibold"
                  : "hover:text-[#F97316]"
              }`}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Buttons */} 
        <div className="hidden md:flex gap-4">
            <Link href ="/signin">
          <button className="px-4 py-1.5 rounded-full border border-gray-300 text-sm text-gray-800 hover:bg-gray-100 transition cursor-pointer">
            Sign In
          </button>
          </Link>
          <button className="px-4 py-1.5 rounded-full bg-[#FFB347] text-black text-sm hover:bg-[#FFB347] transition cursor-pointer">
              <Link href ="/signup">
            Apply
            </Link>
          </button>
        </div>

        {/* Mobile Menu Icon + Apply */}
        <div className="md:hidden flex items-center gap-2 pr-2">
            <Link href="/signup">
          <button className="px-4 py-1.5 rounded-full bg-[#FFB347] text-white text-sm font-medium">
            Apply
          </button>
          </Link>
          <button
            className="p-2 text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-inner">
          {sections.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="block text-gray-800 text-sm hover:text-[#FFB347]"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200">
              <Link href="/signin">
            <button className="w-full text-left py-2 text-gray-800 hover:text-[#FFB347]">
              Log-in
            </button>
            </Link>
            <Link href ="/signup">
            <button className="w-full text-left py-2 text-white bg-[#FFB347] rounded-md mt-2">
              Apply
            </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

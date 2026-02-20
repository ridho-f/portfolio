"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function FloatingNav() {
  // State untuk melacak apakah user sudah scroll ke bawah
  const [isScrolled, setIsScrolled] =
    useState(false);
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 10px, set Scrolled jadi true
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Jalankan sekali saat mount untuk cek posisi awal
    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Grind", href: "#grind" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className={`w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 h-20"
            : "bg-transparent border-b border-transparent h-24" // Lebih tinggi & transparan saat di atas
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl flex items-center gap-1 group"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600 transition-all duration-300 group-hover:tracking-wider">
              Ridho
            </span>
            <span className="text-white">
              Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-400 hover:text-phthalo-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-phthalo-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button className="bg-phthalo-600 hover:bg-phthalo-700 text-white rounded-md px-6">
                Hire Me
              </Button>
            </div>
          )}

          {/* Mobile Toggle */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          )}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay Tetap Gelap */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-3xl font-bold text-white hover:text-phthalo-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

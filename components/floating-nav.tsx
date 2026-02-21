"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Grind", href: "#grind" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className={`w-full transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 h-20"
            : "bg-transparent border-b border-transparent h-24"
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
            <span className="text-zinc-900 dark:text-white">
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
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-phthalo-600 dark:hover:text-phthalo-400 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-phthalo-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  id="theme-toggle"
                  onClick={toggleTheme}
                  className="relative w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 hover:border-phthalo-500 hover:text-phthalo-600 dark:hover:text-phthalo-400 transition-all duration-300"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                      <motion.span
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}

              <Button className="bg-phthalo-600 hover:bg-phthalo-700 text-white rounded-md px-6">
                Hire Me
              </Button>
            </div>
          )}

          {/* Mobile: Theme Toggle + Hamburger */}
          {isMobile && (
            <div className="flex items-center gap-2">
              {mounted && (
                <motion.button
                  id="theme-toggle-mobile"
                  onClick={toggleTheme}
                  className="relative w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 hover:border-phthalo-500 transition-all duration-300"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                      <motion.span
                        key="sun-mobile"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon-mobile"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={16} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-zinc-950 z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-3xl font-bold text-zinc-900 dark:text-white hover:text-phthalo-500 dark:hover:text-phthalo-400"
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

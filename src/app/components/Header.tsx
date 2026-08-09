"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import AmbishLogo from "./AmbishLogo";
import { SITE } from "../../lib/site";

const navItems = [
  // { label: "Home", href: "#home" },
  { label: "Legacy", href: "#legacy" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-slate-200/30"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-10 xl:px-14">
          <div className="flex items-center h-20 w-full">
            {/* Logo */}
            <div className="shrink-0">
              <div
                className="cursor-pointer"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                <AmbishLogo width={220} variant="light" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              <nav className="flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                      isScrolled
                        ? "text-slate-950 hover:text-slate-900"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(`tel:${SITE.phone}`, "_self")}
                className={`border text-sm font-medium transition-colors ${
                  isScrolled
                    ? "border-slate-300 text-slate-950 hover:bg-slate-100"
                    : "border-white/15 text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                Call Us
              </Button>

              <Button
                size="sm"
                onClick={() =>
                  document
                    .getElementById("inquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#E86A17] hover:bg-[#d05c0f] text-white shadow-lg shadow-[#E86A17]/20"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ml-auto p-2 ${
                isScrolled ? "text-slate-950" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl px-6 py-24">
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-2xl text-white text-left hover:text-[#E86A17] transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              <div className="mt-12 flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => window.open(`tel:${SITE.phone}`, "_self")}
                >
                  Call Us
                </Button>

                <Button
                  size="lg"
                  className="bg-[#E86A17] hover:bg-[#d05c0f] text-white"
                  onClick={() => {
                    document
                      .getElementById("inquiry-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
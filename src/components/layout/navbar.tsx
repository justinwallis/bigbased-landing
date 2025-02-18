"use client";

import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <a href="/" aria-label="Home">
            <Image 
              src="/Exclude.svg"
              alt="BigBased.AI Logo"
              width={64}
              height={64}
              priority
              className="brightness-0 invert"
            />
          </a>
          <div className="hidden md:flex gap-6">
            <a href="#features" className="text-zinc-100 hover:text-zinc-300">
              Features
            </a>
            <a href="#testimonials" className="text-zinc-100 hover:text-zinc-300">
              Testimonials
            </a>
            <a href="#pricing" className="text-zinc-100 hover:text-zinc-300">
              Pricing
            </a>
            <a href="#faq" className="text-zinc-100 hover:text-zinc-300">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
         <a href="https://bigbased.ai/chat"  rel="noopener noreferrer">
  <button className="hidden md:block rounded-full bg-zinc-100 px-4 py-2 font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-600 border-2 border-zinc-900 hover:border-zinc-800">
    Get Started
  </button>
</a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-100"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-zinc-100 hover:text-zinc-300">
                Features
              </a>
              <a href="#testimonials" className="text-zinc-100 hover:text-zinc-300">
                Testimonials
              </a>
              <a href="#pricing" className="text-zinc-100 hover:text-zinc-300">
                Pricing
              </a>
              <a href="#faq" className="text-zinc-100 hover:text-zinc-300">
                FAQ
              </a>
            </div>
            <button className="w-full rounded-full bg-zinc-100 px-4 py-2 font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-600 border-2 border-zinc-900 hover:border-zinc-800">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

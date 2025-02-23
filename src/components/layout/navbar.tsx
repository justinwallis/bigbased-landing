"use client";

import { Button } from "@/app/_components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Home">
            <Image
              src="/Exclude.svg"
              alt="BigBased.AI Logo"
              width={64}
              height={64}
              priority
              className="brightness-0 invert"
            />
          </Link>
          <div className="hidden gap-6 md:flex">
            <a href="#features" className="text-zinc-100 hover:text-zinc-300">
              Features
            </a>
            <a
              href="#testimonials"
              className="text-zinc-100 hover:text-zinc-300"
            >
              Testimonials
            </a>
            <a href="#pricing" className="text-zinc-100 hover:text-zinc-300">
              Pricing
            </a>
            <a href="#faq" className="text-zinc-100 hover:text-zinc-300">
              FAQ
            </a>
            <a
              href="https://docs.google.com/document/d/16ZAiarRHfpjEjizYVGBBgKTfLrECp-tm0myLcGCQ71Q/edit?tab=t.0"
              target="_blank"
              rel="noopener"
              className="text-zinc-100 hover:text-zinc-300"
            >
              WhitePaper
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://bigbased.ai/chat" rel="noopener noreferrer">
            <Button title="Get Started" />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-100 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-zinc-800 md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-zinc-100 hover:text-zinc-300">
                Features
              </a>
              <a
                href="#testimonials"
                className="text-zinc-100 hover:text-zinc-300"
              >
                Testimonials
              </a>
              <a href="#pricing" className="text-zinc-100 hover:text-zinc-300">
                Pricing
              </a>
              <a href="#faq" className="text-zinc-100 hover:text-zinc-300">
                FAQ
              </a>
              <a
                href="https://docs.google.com/document/d/16ZAiarRHfpjEjizYVGBBgKTfLrECp-tm0myLcGCQ71Q/edit?tab=t.0"
                target="_blank"
                rel="noopener"
                className="text-zinc-100 hover:text-zinc-300"
              >
                WhitePaper
              </a>
            </div>
            {/* <button className="w-full rounded-full border-2 border-zinc-900 bg-zinc-100 px-4 py-2 font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-600">
              Get Started
            </button> */}
            <Button title="Get Started" />
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { Button } from "@/app/_components/Button";
import { SparklesText } from "@/app/_components/sparkles-text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex w-full items-center justify-between gap-8">
          <SparklesText
            text={
              <Link href="/" aria-label="Home">
                <Image
                  src="/white-logo.png"
                  // src="/Exclude.svg"
                  alt="BigBased.AI Logo"
                  width={64}
                  height={64}
                  priority
                  className="brightness-0 invert"
                />
              </Link>
            }
          ></SparklesText>
          <div className="hidden justify-center gap-6 lg:flex">
            <Link href="/#about" className="text-zinc-100 hover:text-zinc-300">
              About
            </Link>
            <Link
              href="/#features"
              className="text-zinc-100 hover:text-zinc-300"
            >
              Features
            </Link>
            <Link
              href="/#testimonials"
              className="text-zinc-100 hover:text-zinc-300"
            >
              Testimonials
            </Link>
            <Link
              href="/#pricing"
              className="text-zinc-100 hover:text-zinc-300"
            >
              Pricing
            </Link>

            <Link href="/#faq" className="text-zinc-100 hover:text-zinc-300">
              FAQ
            </Link>
            <Link
              href={"/#contact"}
              className="text-zinc-100 hover:text-zinc-300"
            >
              Contact
            </Link>
            <a
              href="https://basedpitch.com/"
              target="_blank"
              rel="noopener"
              className="text-zinc-100 hover:text-zinc-300"
            >
              WhitePaper
            </a>
          </div>
          <a
            href="https://bigbased.ai/chat"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <Button title="Get Started" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-100 lg:hidden"
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
        <div className="border-t border-zinc-800 lg:hidden">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#about"
                className="text-zinc-100 hover:text-zinc-300"
              >
                About
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#features"
                className="text-zinc-100 hover:text-zinc-300"
              >
                Features
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#testimonials"
                className="text-zinc-100 hover:text-zinc-300"
              >
                Testimonials
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#pricing"
                className="text-zinc-100 hover:text-zinc-300"
              >
                Pricing
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#faq"
                className="text-zinc-100 hover:text-zinc-300"
              >
                FAQ
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/#contact"
                className="text-zinc-100 hover:text-zinc-300"
              >
                Contact
              </Link>
              <a
                onClick={() => setIsMenuOpen(false)}
                href="https://basedpitch.com/"
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
            <a
              href="https://bigbased.ai/chat"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button title="Get Started" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

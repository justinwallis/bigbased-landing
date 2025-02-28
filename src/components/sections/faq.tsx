"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { RetroGrid } from "@/app/_components/retro-grid";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does BigBased.AI's trading bot work?",
    answer:
      "Our AI-powered trading bot operates 24/7, analyzing market data and executing trades based on advanced algorithms. It combines machine learning with traditional trading strategies to identify opportunities and manage positions automatically.",
  },
  {
    question: "What kind of returns can I expect?",
    answer:
      "While past performance doesn't guarantee future results, our system is designed to capitalize on market opportunities consistently. The actual returns depend on market conditions, selected strategies, and risk management parameters.",
  },
  {
    question: "Is my capital safe with BigBased.AI?",
    answer:
      "Security is our top priority. Your funds remain in your own exchange account, and our bot only executes trades through secure API connections. We never take custody of your assets.",
  },
  {
    question: "Which exchanges and cryptocurrencies are supported?",
    answer:
      "We support major exchanges including Binance, FTX, and Bybit, with trading pairs across top cryptocurrencies. The specific selection depends on your subscription tier and exchange availability.",
  },
  {
    question: "How do I get started with BigBased.AI?",
    answer:
      "Getting started is simple: Sign up for an account, connect your preferred exchange via API, select your trading preferences, and let our AI bot handle the rest. Our support team is available to help with the setup process.",
  },
];

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full last:border-0">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-zinc-100">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-zinc-400">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section className="scroll-mt-28 py-2 sm:scroll-mt-0 sm:py-24" id="faq">
      {/* <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          Everything you need to know about BigBased.AI
        </p>
      </div>
      <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <RetroGrid />
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl p-6">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div> */}
      <div className="mx-auto max-w-3xl sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Everything you need to know about BigBased.AI
          </p>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

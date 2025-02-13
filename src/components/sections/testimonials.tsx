"use client";

import { XCard } from "@/components/ui/x-gradient-card";
import Image from "next/image";

const TATE_POSTS = [
  {
    link: "https://x.com/Cobratate/status/1774828573951492335",
    authorName: "Andrew Tate",
    authorHandle: "Cobratate",
    authorImage: "https://pbs.twimg.com/profile_images/1887763323464146945/5HdM0_7C_400x400.jpg",
    content: [
      "AI is revolutionary because AI is FAST. If you aren't using it, you'll soon be replaced by someone who is."
    ],
    isVerified: true,
    timestamp: "Apr 1, 2024",
    reply: {
      authorName: "BigBased.AI",
      authorHandle: "BigBasedAI",
      authorImage: "/icon.png",
      content: "That's why we built our trading bot to execute 24/7 at superhuman speed. No emotions, no delays, just pure performance.",
      isVerified: true,
      timestamp: "Apr 1"
    }
  },
  {
    link: "https://x.com/Cobratate/status/1702777427116605455",
    authorName: "Andrew Tate",
    authorHandle: "Cobratate",
    authorImage: "https://pbs.twimg.com/profile_images/1887763323464146945/5HdM0_7C_400x400.jpg",
    content: [
      "Most business owners have not deployed A.I. yet, They're lazy and slow. They will pay you hundreds of dollars for MINUTES of your time and be extremely grateful for your work. Being broke is a choice."
    ],
    isVerified: true,
    timestamp: "Sep 15, 2023",
    reply: {
      authorName: "BigBased.AI",
      authorHandle: "BigBasedAI",
      authorImage: "/icon.png",
      content: "While others sleep on AI, our users are building wealth autonomously. The future belongs to those who adapt first.",
      isVerified: true,
      timestamp: "Sep 15"
    }
  },
  {
    link: "https://x.com/Cobratate/status/1882784000793849897",
    authorName: "Andrew Tate",
    authorHandle: "Cobratate",
    authorImage: "https://pbs.twimg.com/profile_images/1887763323464146945/5HdM0_7C_400x400.jpg",
    content: [
      "AI isn't going away. It's getting better and becoming further and further integrated into society. You still have time to take advantage of it."
    ],
    isVerified: true,
    timestamp: "Mar 22, 2024",
    reply: {
      authorName: "BigBased.AI",
      authorHandle: "BigBasedAI",
      authorImage: "/icon.png",
      content: "Join the AI revolution in crypto trading. Our bot is already making moves while others are still thinking about it.",
      isVerified: true,
      timestamp: "Mar 22"
    }
  }
];

export function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
            What Top G Says About AI
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Be the first to break free from the matrix
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {TATE_POSTS.map((post, index) => (
            <XCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

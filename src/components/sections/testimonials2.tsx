"use client";

import { ClientTweetCard } from "@/components/ui/client-tweet-card";

const TATE_TWEET_IDS = [
  "1774828573951492335", // AI is revolutionary because AI is FAST
  "1702777427116605455", // Most business owners have not deployed A.I. yet
  "1882784000793849897"  // AI isn't going away
];

export function Testimonials2() {
  return (
    <section className="py-24" id="testimonials2">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
            Real Tweets from Top G
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Direct insights from the matrix breaker himself
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {TATE_TWEET_IDS.map((id) => (
            <ClientTweetCard key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

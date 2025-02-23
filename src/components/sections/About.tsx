"use client";

import * as React from "react";
import { GridBackground } from "@/app/_components/glwoingcard";

export function About() {
  return (
    <div className="my-24 flex flex-col items-center gap-y-10 sm:my-20 md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl lg:text-6xl">
          AI-Powered <br className="hidden md:block" />
          Crypto Trading for <br className="hidden md:block" />
          Independent Wealth
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-zinc-400 md:mx-0 md:text-lg">
          Join the revolution of algorithmic trading with our agentic AI bot
          that works for your financial freedom
        </p>
      </div>
      <GridBackground
        className="w-full md:w-1/2"
        title="Welcome to JatinVerse"
        description="Transforming your ideas into stunning visual experiences. Explore the world of creative design with us."
      />
    </div>
  );
}

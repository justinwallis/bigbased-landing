import { Button } from "@/app/_components/Button";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-zinc-100 sm:text-4xl">
          NewsLetter
        </h2>
        <div className="mx-auto mt-7 flex max-w-3xl items-center justify-center gap-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="h-14 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 outline-none placeholder:text-gray-600 focus:ring-1"
          />
          <button>
            <Button title="Subscribe" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

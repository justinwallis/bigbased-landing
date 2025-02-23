"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface GridBackgroundProps {
  title: string;
  description: string;
  showAvailability?: boolean;
  className: string;
}

export function GridBackground({
  title,
  description,
  showAvailability = true,
  className,
}: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-9/12 items-center justify-center rounded-md p-1",
        className,
      )}
      style={{
        backgroundColor: "rgba(15, 15, 15, 1)",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    >
      <div
        className="absolute z-10 h-3 w-3 rounded-full bg-current shadow-[0_0_15px] shadow-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `,
        }}
      />
      <div
        className="absolute inset-0 w-full rounded-md border-2"
        style={{
          animation: "border-color-change 6s linear infinite",
        }}
      />

      <div className="relative z-20 h-full w-full text-center">
        <Image
          src={"/main-img.png"}
          width={1000}
          height={500}
          className="h-full w-full object-contain"
          alt="Main Image"
        />
        {/* <h1 className="text-6xl font-bold">{title}</h1>
        {description && (
          <p className="text-md mt-5 text-gray-300">{description}</p>
        )}

        {showAvailability && (
          <div className="available-now mt-5 flex items-center justify-center text-sm text-[#20bb5a]">
            <div className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#20bb5a] shadow-[0_0_8px_#20bb5a]" />
            Call Now
          </div>
        )} */}
      </div>
    </div>
  );
}

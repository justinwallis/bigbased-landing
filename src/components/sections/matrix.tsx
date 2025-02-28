"use client";

import { useId } from "react";

const DotPattern = ({
  width = 24,
  height = 24,
  x = 0,
  y = 0,
  cx = 1,
  cy = 0.5,
  cr = 0.5,
}) => {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full fill-zinc-500/50 md:fill-zinc-500/70"
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
};

export function Matrix() {
  return (
    <section className="scroll-mt-24 pb-10 pt-8 sm:pb-24" id="features">
      <div className="relative mx-auto max-w-7xl md:px-6">
        <div className="relative border border-zinc-800">
          <DotPattern width={5} height={5} />

          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-zinc-100" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-zinc-100" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-zinc-100" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-zinc-100" />

          <div className="relative z-20 grid grid-cols-1 gap-4 p-4 sm:gap-8 sm:p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl lg:text-4xl">
                Traditional Trading
              </h2>
              <ul className="space-y-4 text-zinc-400">
                <li>• Emotional Decision Making</li>
                <li>• Limited Trading Hours</li>
                <li>• Manual Position Management</li>
                <li>• Missed Opportunities</li>
                <li>• High Time Investment</li>
                <li>• Inconsistent Strategy</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-100 md:text-3xl lg:text-4xl">
                BigBased.AI Trading
              </h2>
              <ul className="space-y-4 text-zinc-400">
                <li>• Data-Driven Decisions</li>
                <li>• 24/7 Market Monitoring</li>
                <li>• Automated Position Management</li>
                <li>• Instant Execution</li>
                <li>• Set and Forget</li>
                <li>• Consistent Strategy Execution</li>
              </ul>
            </div>
          </div>

          <div className="relative z-20 border-t border-zinc-800 p-8 text-center">
            <p className="text-lg text-zinc-100">
              Built on the foundations of{" "}
              <span className="font-bold">
                God, Truth, Hard Work, and Freedom
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

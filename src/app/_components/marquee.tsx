import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 20,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("relative z-10 mb-5 w-full overflow-hidden", className)}
      {...props}
    >
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        <div
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse",
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

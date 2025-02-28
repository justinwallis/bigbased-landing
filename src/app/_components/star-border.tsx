import { cn } from "@/lib/utils";
import { ElementType, ComponentPropsWithoutRef } from "react";

interface StarBorderProps<T extends ElementType> {
  as?: T;
  color?: string;
  speed?: string;
  className?: string;
  children: React.ReactNode;
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as ?? "button";
  const defaultColor = color ?? "hsl(var(--foreground))";

  return (
    <Component
      className={cn(
        "relative inline-block overflow-hidden rounded-[20px] py-[1px]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "animate-star-movement-bottom absolute bottom-[-11px] right-[-250%] z-0 h-[50%] w-[300%] rounded-full",
          "opacity-20 dark:opacity-70",
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "animate-star-movement-top absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] rounded-full",
          "opacity-20 dark:opacity-70",
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "z-1 text-foreground relative rounded-[20px] border px-6 py-3 text-center text-base",
          "from-background/90 to-muted/90 border-border/40 bg-gradient-to-b",
          "dark:from-background dark:to-muted dark:border-border",
        )}
      >
        {children}
      </div>
    </Component>
  );
}

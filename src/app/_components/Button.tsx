"use client";
import { StarBorder } from "./star-border";

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <div className="space-y-5">
      <StarBorder>{title}</StarBorder>
    </div>
  );
}

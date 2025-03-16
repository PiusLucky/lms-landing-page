import { type ClassValue, clsx } from "clsx";
import { Mulish, Syne } from "next/font/google";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const mulishFont = mulish;
export const syneFont = syne;

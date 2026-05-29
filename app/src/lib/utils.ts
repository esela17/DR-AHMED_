import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

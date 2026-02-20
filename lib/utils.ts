import { clsx, type ClassValue } from "clsx";
import path from "path";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cdnUrl = (path: string) => {
  const baseUrl = "https://cdn.ridhof.my.id";
  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

export const getCdnUrl = (
  path: string,
  options: {
    width?: number;
    quality?: number;
    format?: string;
  } = {},
) => {
  const {
    width = 800,
    quality = 80,
    format = "auto",
  } = options;

  const baseUrl = "https://cdn.ridhof.my.id";

  const cleanPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${baseUrl}/cdn-cgi/image/width=${width},quality=${quality},format=${format}${cleanPath}`;
};

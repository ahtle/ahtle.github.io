import type { StaticImageData } from "next/image";

/**
 * Resolve a project image source to a URL string for the lightbox.
 */
export function resolveImageSrc(src: StaticImageData | string): string {
  return typeof src === "string" ? src : src.src;
}

/**
 * Strip HTML tags from vue-era caption strings (e.g. `<h4>I am a person!</h4>`).
 */
export function captionToText(caption: string): string {
  return caption.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

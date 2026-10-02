import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/menu/*.png', { eager: true });

/** Product photo for a menu item. Throws at build time if the file is missing. */
export function menuImage(slug: string): ImageMetadata {
  const file = files[`../assets/menu/${slug}.png`];
  if (!file) throw new Error(`No menu image named "${slug}.png" in src/assets/menu/`);
  return file.default;
}

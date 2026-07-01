export function buildImagePath(folder: string, file: string): string {
  return `/images/${encodeURIComponent(folder)}/${encodeURIComponent(file)}.png`;
}

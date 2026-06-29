export function truncateString(
  text: string,
  length: number,
  end: string = "...",
) {
  return text.length > length
    ? text.substring(0, length).trimEnd() + end
    : text;
}

export function goToElement(
  element: string,
  offset: number = 0,
  smooth: "auto" | "instant" | "smooth" = "smooth",
) {
  const el = document.querySelector(element) as HTMLDivElement;
  if (el) {
    window.scrollTo({ top: el?.offsetTop - offset, behavior: smooth });
  }
}

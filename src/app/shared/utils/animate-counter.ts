export function animateCounter(
  element: HTMLElement,
  target: number,
  duration = 2000,
  suffix = '+'
): void {
  const start = performance.now();

  const animate = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(eased * target).toLocaleString('pt-BR') + suffix;
    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}

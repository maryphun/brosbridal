const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const current = new WeakMap<HTMLElement, Animation>();
const running = new Set<Animation>();

export function cancelMotion(element: HTMLElement) {
  const animation = current.get(element);
  if (!animation) return;
  current.delete(element);
  running.delete(animation);
  animation.cancel();
}

export function playMotion(element: HTMLElement, frames: Keyframe[], duration = 200) {
  cancelMotion(element);
  if (preference.matches || typeof element.animate !== 'function') return;

  const animation = element.animate(frames, {
    duration,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  });
  current.set(element, animation);
  running.add(animation);
  const cleanup = () => {
    running.delete(animation);
    if (current.get(element) === animation) current.delete(element);
  };
  animation.addEventListener('finish', cleanup, { once: true });
  animation.addEventListener('cancel', cleanup, { once: true });
  return animation;
}

preference.addEventListener('change', () => {
  if (preference.matches) running.forEach(animation => animation.finish());
});

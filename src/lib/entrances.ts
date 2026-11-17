import { cancelMotion, playMotion } from './motion';

const targets = [
  '.site-header .wordmark', '.desktop-nav > a', '.header-actions > select',
  '.header-actions > .header-cta', '.header-actions > .menu-toggle', '.mobile-nav > a',
  '.hero-copy > h1', '.hero-copy > p', '.hero-copy > a', '.hero-photo',
  '.section-heading h2', '.section-heading p', '.section-heading > a', '.service-feature',
  '.package-copy > h3', '.package-copy > .price', '.package-copy > h4',
  '.package-copy > ul > li', '.package-copy > details', '.package-copy > a',
  '.package-extras li', '.package-details', '.package-note',
  '.faq > h2', '.faq details > summary', '.faq details > p',
  '.page-heading > h1', '.page-heading > p', '.page-heading > a',
  '.page-heading > div > p', '.section-jumps > a', '.service-row > h2', '.service-row > p',
  '.filter-field', '.catalog-note', '.gown-grid > article', '.empty-state > p', '.empty-state > button',
  '.back-link', '.dress-main', '.dress-thumbnails > button', '.dress-info > h1',
  '.dress-info > p', '.dress-info > h2', '.dress-info > a', '.dress-info dl > div',
  '.portfolio-filters > button', '.result-count', '.masonry > figure',
  '.about-intro > div > h1', '.about-intro > div > p', '.about-photo',
  '.contact-intro > h1', '.contact-intro > p', '.form-field', '.form-details > summary',
  '.form-hint', '#enquiry-form > button', '.enquiry-preview > h2',
  '.enquiry-preview > textarea', '.preview-actions > a', '.preview-actions > button',
  '.consultation-banner h2', '.consultation-banner p', '.consultation-banner a',
  '.footer-wordmark', '.footer-top > div > p', '.footer-top nav > a',
  '.footer-contact > *', '.footer-bottom > span', '.image-notice', '.sticky-chat',
].join(',');

export function startPageEntrances() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(targets));
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  elements.forEach(element => { element.dataset.entrance = 'complete'; });
  if (preference.matches || !('IntersectionObserver' in window)) return;

  const pending = new Set(elements);
  const positions = new WeakMap<HTMLElement, number>();
  const groups = new WeakMap<Element, number>();
  elements.forEach(element => {
    const group = element.closest('.hero-copy,.page-heading,.section-heading,.service-row,.package-copy,.gown-grid,.masonry,.dress-info,.contact-intro,#enquiry-form,.faq,.site-header,.site-footer') || element.parentElement!;
    const position = groups.get(group) || 0;
    positions.set(element, position);
    groups.set(group, position + 1);
    element.dataset.entrance = 'pending';
  });

  const finish = (element: HTMLElement) => {
    element.dataset.entrance = 'complete';
    pending.delete(element);
    if (!pending.size) {
      observer.disconnect();
      document.removeEventListener('focusin', revealFocused);
      document.removeEventListener('pointerdown', revealFocused);
      preference.removeEventListener('change', reduce);
    }
  };
  const revealFocused = (event: Event) => {
    const element = (event.target as Element).closest<HTMLElement>('[data-entrance]');
    if (!element || !pending.has(element)) return;
    cancelMotion(element);
    observer.unobserve(element);
    finish(element);
  };
  const reduce = () => {
    if (!preference.matches) return;
    observer.disconnect();
    Array.from(pending).forEach(element => { cancelMotion(element); finish(element); });
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target as HTMLElement;
      if (!entry.isIntersecting || !pending.has(element)) return;
      observer.unobserve(element);
      const position = positions.get(element) || 0;
      const rect = element.getBoundingClientRect();
      const centre = (rect.left + rect.width / 2) / window.innerWidth;
      const image = element.matches('.hero-photo,.about-photo,.dress-main');
      const copy = element.matches('.hero-copy > *, .contact-intro > *');
      const fromRight = image || (!copy && (centre > .56 || (centre >= .44 && position % 2 === 1)));
      const distance = window.innerWidth <= 640 ? 24 : 44;
      element.dataset.entranceSide = fromRight ? 'right' : 'left';
      element.dataset.entrance = 'running';
      const animation = playMotion(element, [
        { opacity: 0, transform: `translateX(${fromRight ? distance : -distance}px)` },
        { opacity: 1, transform: 'translateX(0)' },
      ], 1200, { delay: Math.min(position * 120, 360), fill: 'backwards', easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)' });
      if (animation) {
        animation.addEventListener('finish', () => finish(element), { once: true });
        animation.addEventListener('cancel', () => finish(element), { once: true });
      } else finish(element);
    });
  }, { threshold: .06, rootMargin: '0px 0px 40px 0px' });

  document.addEventListener('focusin', revealFocused);
  document.addEventListener('pointerdown', revealFocused);
  preference.addEventListener('change', reduce);
  elements.forEach(element => observer.observe(element));
}

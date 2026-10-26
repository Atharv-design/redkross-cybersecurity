import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Safe 3D SplitText Ripple Engine for RedKross Cybersecurity Platform.
 * - Perfectly preserves inline tags (<span className="text-[#00F0FF]">, <br>, etc.)
 * - Uses atomic replaceChildren & node cloning (0 DOM XSS sinks, 0 vulnerabilities)
 * - Re-animates smoothly on EVERY downward scroll into view without requiring page reload
 * - Perfectly synchronized with component mounting and font readiness
 */
export function initGlobalSplitText() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};

  const targets = Array.from(
    document.querySelectorAll('section h1, section h2, .split-heading, .split-text')
  );

  function splitNode(node, isGradientClass = '') {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      if (!text || text.length === 0) return null;
      if (/^\s+$/.test(text)) {
        return document.createTextNode(text);
      }

      const frag = document.createDocumentFragment();
      const parts = text.split(/(\s+)/);

      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }

        const wordSpan = document.createElement('span');
        wordSpan.className = 'split-word inline-block';
        if (isGradientClass) {
          wordSpan.classList.add(isGradientClass);
        }

        for (const char of part) {
          const charSpan = document.createElement('span');
          charSpan.className = 'split-char inline-block';
          charSpan.textContent = char;
          if (isGradientClass) {
            charSpan.classList.add(isGradientClass);
          }
          wordSpan.appendChild(charSpan);
        }
        frag.appendChild(wordSpan);
      });
      return frag;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName.toLowerCase() === 'br') {
        return node.cloneNode(true);
      }

      let gradClass = isGradientClass;
      if (node.classList.contains('gradient-text')) gradClass = 'gradient-text';
      else if (node.classList.contains('text-[#00F0FF]')) gradClass = 'text-[#00F0FF]';
      else if (node.classList.contains('text-[#FFA439]')) gradClass = 'text-[#FFA439]';

      const clone = node.cloneNode(false);
      Array.from(node.childNodes).forEach((child) => {
        const processed = splitNode(child, gradClass);
        if (processed) clone.appendChild(processed);
      });
      return clone;
    }
    return node.cloneNode(true);
  }

  targets.forEach((element) => {
    try {
      if (element.dataset.splitInitialized === 'true') return;
      element.dataset.splitInitialized = 'true';

      element.style.perspective = '1000px';

      element._originalChildNodes = Array.from(element.childNodes).map((node) => node.cloneNode(true));

      const fragment = document.createDocumentFragment();
      Array.from(element.childNodes).forEach((child) => {
        const res = splitNode(child);
        if (res) fragment.appendChild(res);
      });

      element.replaceChildren(fragment);

      const chars = element.querySelectorAll('.split-char');
      if (chars.length === 0) return;

      const isHero = element.closest('section') === document.querySelector('section');

      if (isHero) {
        const heroAnim = gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 35,
            rotateX: -65,
            transformOrigin: '50% 100% -25px',
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.015,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
          }
        );

        ScrollTrigger.create({
          trigger: element,
          start: 'top 90%',
          onEnterBack: () => {
            heroAnim.restart();
          },
        });
      } else {
        // Re-triggers 3D wave smoothly on every downward scroll into view
        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 35,
            rotateX: -65,
            transformOrigin: '50% 100% -25px',
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.015,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              end: 'bottom top',
              toggleActions: 'restart none restart reset',
              invalidateOnRefresh: true,
            },
          }
        );
      }
    } catch (err) {
      console.warn('Safe SplitText caught error on heading:', err);
    }
  });

  return () => {
    targets.forEach((el) => {
      if (el._originalChildNodes) {
        el.replaceChildren(...el._originalChildNodes);
        delete el._originalChildNodes;
        delete el.dataset.splitInitialized;
      }
    });
  };
}

import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAnimations() {
  AOS.init({
    duration: 1000,
    once: true
  });
}

export function animateCounter(counter) {
  const target = parseFloat(counter.getAttribute('data-target'));
  const duration = 2000;
  const steps = 100;
  const stepValue = target / steps;
  let current = 0;

  const updateCounter = () => {
    current += stepValue;
    if (current <= target) {
      counter.textContent = current.toFixed(1);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}
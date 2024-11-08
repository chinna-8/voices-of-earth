import { createEmissionsChart, createImpactChart } from './charts.js';
import { initAnimations, animateCounter } from './animations.js';
import { initNavigation } from './navigation.js';

// Initialize animations
initAnimations();

// Initialize navigation
initNavigation();

// Initialize charts
document.addEventListener('DOMContentLoaded', () => {
  createEmissionsChart();
  createImpactChart();
});

// Counter animations
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.counter').forEach(counter => 
  observer.observe(counter)
);
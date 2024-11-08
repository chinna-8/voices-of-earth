// Counter animation
const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = parseFloat(counter.getAttribute('data-target'));
  const duration = 2000; // Animation duration in milliseconds
  const steps = 100; // Number of steps in animation
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
};

// Intersection Observer for counter animation
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

counters.forEach(counter => observer.observe(counter));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Learn More button scroll
document.getElementById('learn-more').addEventListener('click', () => {
  document.getElementById('impact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Action buttons interaction
document.querySelectorAll('.action-btn').forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
  });
});
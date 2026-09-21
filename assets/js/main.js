/**
 * MAIN CONTROLLER (Vanilla JS)
 * Navbar scroll dynamics, back-to-top button, animated stat counters, mobile nav behavior.
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Sticky Navbar on Scroll
  const navbar = document.querySelector('.combat-navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Highlight Current Page Link in Navbar
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.combat-navbar .nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 4. Close Mobile Navbar Collapse on Link Click
  const navCollapse = document.querySelector('.navbar-collapse');
  if (navCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      });
    });
  }

  // 5. Stat Counter Animation via IntersectionObserver
  const statNumbers = document.querySelectorAll('[data-counter-target]');
  if (statNumbers.length > 0) {
    const observerOptions = { threshold: 0.5 };
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          const suffix = el.getAttribute('data-counter-suffix') || '';
          let count = 0;
          const duration = 1600;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              el.textContent = target + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(count) + suffix;
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    }, observerOptions);

    statNumbers.forEach(num => counterObserver.observe(num));
  }

  // 6. Year Updater for Footer
  const yearEls = document.querySelectorAll('.current-year');
  const thisYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = thisYear;
  });

  // 7. Footer DOJO Newsletter Submission Handler
  const newsletterForms = document.querySelectorAll('.footer-newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.footer-newsletter-input');
      const feedback = form.parentElement.querySelector('.footer-newsletter-feedback');
      if (!input) return;

      const emailVal = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailVal || !emailRegex.test(emailVal)) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        if (feedback) {
          feedback.textContent = 'Please enter a valid email address.';
          feedback.className = 'footer-newsletter-feedback small mt-2 error';
          feedback.style.display = 'block';
        }
      } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (feedback) {
          feedback.textContent = '✓ Thank you for subscribing to DOJO Newsletter!';
          feedback.className = 'footer-newsletter-feedback small mt-2 success';
          feedback.style.display = 'block';
        }
        try {
          const subs = JSON.parse(localStorage.getItem('dojo_subscribers') || '[]');
          if (!subs.includes(emailVal)) subs.push(emailVal);
          localStorage.setItem('dojo_subscribers', JSON.stringify(subs));
        } catch (err) {
          // ignore
        }
        input.value = '';
        setTimeout(() => {
          input.classList.remove('is-valid');
        }, 3000);
      }
    });
  });
});


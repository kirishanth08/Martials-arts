/**
 * THEME CONTROLLER (Vanilla JS)
 * Manages Light / Dark mode toggling with localStorage persistence.
 * Carbon + Bone + Vermilion palette.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'matrial_arts_theme';
  const htmlElement = document.documentElement;

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function setStoredTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored) return stored;
    return 'dark'; // Martial Arts default is Dark Carbon
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    updateToggleButtons(theme);
  }

  function updateToggleButtons(theme) {
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.innerHTML = isDark 
        ? '<i class="bi bi-sun-fill text-warning"></i>' 
        : '<i class="bi bi-moon-stars-fill text-danger"></i>';
    });
  }

  function toggleTheme() {
    const current = htmlElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
  }

  // Initialize theme immediately to prevent flashing
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Attach event listeners after DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons(initialTheme);
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });
  });
})();
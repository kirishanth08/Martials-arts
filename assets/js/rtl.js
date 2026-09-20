/**
 * RTL / LTR CONTROLLER (Vanilla JS)
 * Manages Direction toggling with localStorage persistence.
 * Toggle button strictly shows text: "LTR | RTL"
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'matrial_arts_dir';
  const htmlElement = document.documentElement;

  function getStoredDir() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function setStoredDir(dir) {
    localStorage.setItem(STORAGE_KEY, dir);
  }

  function getInitialDir() {
    const stored = getStoredDir();
    if (stored) return stored;
    return 'ltr';
  }

  function applyDir(dir) {
    htmlElement.setAttribute('dir', dir);
    htmlElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    updateButtons(dir);
  }

  function updateButtons(dir) {
    const buttons = document.querySelectorAll('.rtl-toggle-btn');
    buttons.forEach((btn) => {
      btn.setAttribute('aria-label', `Switch text direction. Current: ${dir.toUpperCase()}`);
      // Strictly use text LTR | RTL as specified in Master Prompt
      btn.innerHTML = `<span class="fw-bold">LTR | RTL</span>`;
      if (dir === 'rtl') {
        btn.classList.add('btn-combat-vermilion');
      } else {
        btn.classList.remove('btn-combat-vermilion');
      }
    });
  }

  function toggleDir() {
    const current = htmlElement.getAttribute('dir') || 'ltr';
    const next = current === 'ltr' ? 'rtl' : 'ltr';
    setStoredDir(next);
    applyDir(next);
  }

  // Initialize immediately to prevent layout shifts
  const initialDir = getInitialDir();
  applyDir(initialDir);

  document.addEventListener('DOMContentLoaded', () => {
    updateButtons(initialDir);
    const buttons = document.querySelectorAll('.rtl-toggle-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDir();
      });
    });
  });
})();

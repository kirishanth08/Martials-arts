/**
 * GALLERY & LIGHTBOX CONTROLLER (Vanilla JS)
 * Category filtering + Vanilla Bootstrap 5 Lightbox modal viewer
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const gallerySection = document.getElementById('galleryGridSection') || document.getElementById('gallerySection');
  if (!gallerySection) return;

  const filterButtons = gallerySection.querySelectorAll('.gallery-filter-btn');
  const items = gallerySection.querySelectorAll('.gallery-item-wrap');
  const modalEl = document.getElementById('galleryLightboxModal');
  const lightboxImg = document.getElementById('lightboxModalImage');
  const lightboxCaption = document.getElementById('lightboxModalCaption');
  const lightboxCategory = document.getElementById('lightboxModalCategory');

  let bsModal = null;
  if (modalEl && typeof bootstrap !== 'undefined') {
    bsModal = new bootstrap.Modal(modalEl);
  }

  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterButtons.forEach(b => b.classList.remove('active', 'btn-combat'));
      filterButtons.forEach(b => b.classList.add('btn-combat-outline'));

      btn.classList.add('active', 'btn-combat');
      btn.classList.remove('btn-combat-outline');

      const filter = btn.getAttribute('data-filter');

      items.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.classList.remove('d-none');
        } else {
          item.classList.add('d-none');
        }
      });
    });
  });

  // Lightbox opening click
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title') || 'Martial Arts Training';
      const cat = item.getAttribute('data-category') || 'Academy';

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || title;
      }
      if (lightboxCaption) lightboxCaption.textContent = title;
      if (lightboxCategory) lightboxCategory.textContent = cat.toUpperCase();

      if (bsModal) {
        bsModal.show();
      }
    });
  });
});

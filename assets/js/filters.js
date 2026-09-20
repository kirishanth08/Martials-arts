/**
 * DIRECTORY & BLOG FILTERS (Vanilla JS)
 * Handles live program filtering and blog search/category filtering.
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. PROGRAM DIRECTORY FILTER ---
  const programFilterBar = document.getElementById('programFilterBar');
  if (programFilterBar) {
    const filterButtons = programFilterBar.querySelectorAll('.program-filter-btn');
    const programCards = document.querySelectorAll('.program-filter-item');
    const emptyNotice = document.getElementById('programsEmptyState');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterButtons.forEach(b => b.classList.remove('active', 'btn-combat'));
        filterButtons.forEach(b => b.classList.add('btn-combat-outline'));

        btn.classList.add('active', 'btn-combat');
        btn.classList.remove('btn-combat-outline');

        const filter = btn.getAttribute('data-filter');
        let visibleCount = 0;

        programCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.classList.remove('d-none');
            visibleCount++;
          } else {
            card.classList.add('d-none');
          }
        });

        if (emptyNotice) {
          if (visibleCount === 0) {
            emptyNotice.classList.remove('d-none');
          } else {
            emptyNotice.classList.add('d-none');
          }
        }
      });
    });
  }

  // --- 2. BLOG SEARCH & CATEGORY FILTER ---
  const blogCards = document.querySelectorAll('.blog-post-card, .blog-card-item');
  if (blogCards.length > 0) {
    const searchInput = document.getElementById('blogSearchInput');
    const catButtons = document.querySelectorAll('.blog-cat-btn');
    const emptyNotice = document.getElementById('blogEmptyState');
    const countBadge = document.getElementById('blogVisibleCount');

    let currentCat = 'all';
    let currentQuery = '';

    function filterBlog() {
      let visibleCount = 0;

      blogCards.forEach(card => {
        const title = (card.querySelector('.blog-post-title, .blog-card-title')?.textContent || '').toLowerCase();
        const excerpt = (card.querySelector('.blog-post-excerpt, .blog-card-excerpt')?.textContent || '').toLowerCase();
        const category = (card.getAttribute('data-category') || '').toLowerCase();

        const matchesCat = (currentCat === 'all' || category === currentCat || category.includes(currentCat));
        const matchesQuery = !currentQuery || title.includes(currentQuery) || excerpt.includes(currentQuery);

        if (matchesCat && matchesQuery) {
          card.classList.remove('d-none');
          visibleCount++;
        } else {
          card.classList.add('d-none');
        }
      });

      if (countBadge) {
        countBadge.textContent = `Showing ${visibleCount} of ${blogCards.length} Dispatches`;
      }

      if (emptyNotice) {
        if (visibleCount === 0) {
          emptyNotice.classList.remove('d-none');
        } else {
          emptyNotice.classList.add('d-none');
        }
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = e.target.value.trim().toLowerCase();
        filterBlog();
      });
    }

    catButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        catButtons.forEach(b => {
          b.classList.remove('active', 'btn-combat');
          b.classList.add('btn-combat-outline');
        });

        btn.classList.add('active', 'btn-combat');
        btn.classList.remove('btn-combat-outline');

        currentCat = (btn.getAttribute('data-cat-filter') || 'all').toLowerCase();
        filterBlog();
      });
    });
  }
});

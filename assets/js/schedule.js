/**
 * SCHEDULE & TIMETABLE CONTROLLER (Vanilla JS)
 * Interactive multi-criteria filtering: Day of the Week + Program Discipline
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const scheduleContainer = document.getElementById('scheduleSection');
  if (!scheduleContainer) return;

  const dayButtons = scheduleContainer.querySelectorAll('.schedule-day-btn');
  const catButtons = scheduleContainer.querySelectorAll('.schedule-cat-btn');
  const rows = scheduleContainer.querySelectorAll('.schedule-item-row');
  const mobileCards = scheduleContainer.querySelectorAll('.schedule-mobile-card');
  const emptyNotice = document.getElementById('scheduleEmptyState');

  let activeDay = 'all';
  let activeCat = 'all';

  function filterSchedule() {
    let visibleCount = 0;

    // Filter Desktop Table Rows
    rows.forEach(row => {
      const rowDay = row.getAttribute('data-day');
      const rowCat = row.getAttribute('data-category');

      const matchesDay = (activeDay === 'all' || rowDay === activeDay);
      const matchesCat = (activeCat === 'all' || rowCat === activeCat);

      if (matchesDay && matchesCat) {
        row.classList.remove('d-none');
        visibleCount++;
      } else {
        row.classList.add('d-none');
      }
    });

    // Filter Mobile Cards
    mobileCards.forEach(card => {
      const cardDay = card.getAttribute('data-day');
      const cardCat = card.getAttribute('data-category');

      const matchesDay = (activeDay === 'all' || cardDay === activeDay);
      const matchesCat = (activeCat === 'all' || cardCat === activeCat);

      if (matchesDay && matchesCat) {
        card.classList.remove('d-none');
      } else {
        card.classList.add('d-none');
      }
    });

    // Handle Empty State
    if (emptyNotice) {
      if (visibleCount === 0) {
        emptyNotice.classList.remove('d-none');
      } else {
        emptyNotice.classList.add('d-none');
      }
    }
  }

  // Day Filter Event Handlers
  dayButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      dayButtons.forEach(b => b.classList.remove('active', 'btn-combat'));
      dayButtons.forEach(b => b.classList.add('btn-combat-outline'));
      
      btn.classList.add('active', 'btn-combat');
      btn.classList.remove('btn-combat-outline');

      activeDay = btn.getAttribute('data-day-filter');
      filterSchedule();
    });
  });

  // Category Filter Event Handlers
  catButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      catButtons.forEach(b => b.classList.remove('active', 'badge-combat-active'));
      btn.classList.add('active', 'badge-combat-active');

      activeCat = btn.getAttribute('data-cat-filter');
      filterSchedule();
    });
  });
});

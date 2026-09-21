/**
 * FORMS & TRIAL CLASS WIZARD (Vanilla JS)
 * Interactive 4-step booking progression:
 * 01 / YOUR DETAILS -> 02 / CHOOSE PROGRAM -> 03 / SELECT DATE -> 04 / CONFIRM TRIAL
 */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const wizardForm = document.getElementById('trialBookingForm');
  if (!wizardForm) return;

  const steps = wizardForm.querySelectorAll('.wizard-step-pane');
  const indicators = document.querySelectorAll('.wizard-step-indicator');
  const nextBtns = wizardForm.querySelectorAll('.btn-wizard-next');
  const prevBtns = wizardForm.querySelectorAll('.btn-wizard-prev');
  let currentStep = 1;

  // Booking Data Store
  const bookingData = {
    fullName: '',
    email: '',
    phone: '',
    ageGroup: 'adult',
    program: 'Karate Do',
    level: 'Beginner',
    trialDate: '',
    trialTime: '06:30 PM'
  };

  function updateWizardUI(step) {
    steps.forEach(pane => {
      const paneStep = parseInt(pane.getAttribute('data-step'), 10);
      if (paneStep === step) {
        pane.classList.remove('d-none');
        pane.classList.add('active');
      } else {
        pane.classList.add('d-none');
        pane.classList.remove('active');
      }
    });

    indicators.forEach(ind => {
      const indStep = parseInt(ind.getAttribute('data-step-target'), 10);
      ind.classList.remove('active', 'completed');
      if (indStep === step) {
        ind.classList.add('active');
      } else if (indStep < step) {
        ind.classList.add('completed');
      }
    });

    if (step === 4) {
      renderConfirmationSummary();
    }
  }

  function validateCurrentStep(step) {
    let isValid = true;

    if (step === 1) {
      const nameInput = document.getElementById('trialFullName');
      const emailInput = document.getElementById('trialEmail');
      const phoneInput = document.getElementById('trialPhone');

      // Full Name validation
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your full name');
        isValid = false;
      } else {
        clearError(nameInput);
        bookingData.fullName = nameInput.value.trim();
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please provide a valid email address');
        isValid = false;
      } else {
        clearError(emailInput);
        bookingData.email = emailInput.value.trim();
      }

      // Phone validation: strictly reject letters and validate phone number
      const phoneVal = phoneInput.value.trim();
      const digitsOnly = phoneVal.replace(/\D/g, '');
      const validPhoneChars = /^[0-9+\s\-().]+$/;

      if (!phoneVal) {
        showError(phoneInput, 'Please enter your phone number');
        isValid = false;
      } else if (/[a-zA-Z]/.test(phoneVal)) {
        showError(phoneInput, 'Letters are not accepted in phone number');
        isValid = false;
      } else if (!validPhoneChars.test(phoneVal) || digitsOnly.length < 7 || digitsOnly.length > 15) {
        showError(phoneInput, 'Please enter a valid phone number (7-15 digits)');
        isValid = false;
      } else {
        clearError(phoneInput);
        bookingData.phone = phoneVal;
      }

      const ageSelect = document.getElementById('trialAge');
      if (ageSelect) {
        bookingData.ageGroup = ageSelect.value;
      }
    } else if (step === 2) {
      const selectedProgramRadio = wizardForm.querySelector('input[name="programChoice"]:checked');
      if (selectedProgramRadio) {
        bookingData.program = selectedProgramRadio.value;
      }
      const expLevel = wizardForm.querySelector('input[name="experienceLevel"]:checked');
      if (expLevel) {
        bookingData.level = expLevel.value;
      }
    } else if (step === 3) {
      const dateInput = document.getElementById('trialDate');
      if (!dateInput.value) {
        showError(dateInput, 'Please select your preferred trial date');
        isValid = false;
      } else {
        // Date cannot be in past
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
          showError(dateInput, 'Selected date must be today or in the future');
          isValid = false;
        } else {
          clearError(dateInput);
          bookingData.trialDate = dateInput.value;
        }
      }

      const timeSlot = wizardForm.querySelector('input[name="trialSlot"]:checked');
      if (timeSlot) {
        bookingData.trialTime = timeSlot.value;
      }
    }

    return isValid;
  }

  function showError(inputEl, msg) {
    inputEl.classList.add('is-invalid');
    const feedback = inputEl.parentElement.querySelector('.invalid-feedback');
    if (feedback) feedback.textContent = msg;
  }

  function clearError(inputEl) {
    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
  }

  function renderConfirmationSummary() {
    const summaryName = document.getElementById('summaryName');
    const summaryProgram = document.getElementById('summaryProgram');
    const summaryDate = document.getElementById('summaryDate');
    const summaryTime = document.getElementById('summaryTime');
    const summaryCode = document.getElementById('summaryPassCode');

    if (summaryName) summaryName.textContent = bookingData.fullName;
    if (summaryProgram) summaryProgram.textContent = `${bookingData.program} (${bookingData.level})`;
    if (summaryDate) summaryDate.textContent = bookingData.trialDate;
    if (summaryTime) summaryTime.textContent = bookingData.trialTime;
    if (summaryCode) {
      const randomCode = 'DOJO-' + Math.floor(100000 + Math.random() * 900000);
      summaryCode.textContent = randomCode;
    }
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateCurrentStep(currentStep)) {
        if (currentStep < 4) {
          currentStep++;
          updateWizardUI(currentStep);
        }
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI(currentStep);
      }
    });
  });

  // Final Submit Handler
  wizardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const finalSuccessCard = document.getElementById('wizardSuccessNotice');
    const wizardBody = document.getElementById('wizardFormBody');
    if (finalSuccessCard && wizardBody) {
      wizardBody.classList.add('d-none');
      finalSuccessCard.classList.remove('d-none');
    }
  });

  // Restrict phone input space to disallow letters
  const trialPhoneInput = document.getElementById('trialPhone');
  if (trialPhoneInput) {
    trialPhoneInput.addEventListener('input', (e) => {
      // Disallow letters, allow digits, spaces, plus, minus, parentheses, dots
      e.target.value = e.target.value.replace(/[a-zA-Z]/g, '');
    });
  }

  // Default initial date to tomorrow
  const dateInput = document.getElementById('trialDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    bookingData.trialDate = `${yyyy}-${mm}-${dd}`;
  }

  // URL Parameter Pre-selection (e.g. ?program=..., ?plan=..., ?instructor=...)
  const params = new URLSearchParams(window.location.search);
  const paramProg = (params.get('program') || '').toLowerCase().trim();
  const paramPlan = (params.get('plan') || '').toLowerCase().trim();
  const paramInst = (params.get('instructor') || '').toLowerCase().trim();

  if (paramProg) {
    let targetProgName = '';
    if (paramProg.includes('shotokan') || paramProg.includes('karate')) {
      targetProgName = 'Shotokan Karate';
    } else if (paramProg.includes('taekwondo')) {
      targetProgName = 'Olympic Taekwondo';
    } else if (paramProg.includes('defense') || paramProg.includes('women')) {
      targetProgName = "Women's Self-Defense";
    } else if (paramProg.includes('tiger') || paramProg.includes('kids')) {
      targetProgName = 'Little Tigers Foundation';
      const ageSelect = document.getElementById('trialAge');
      if (ageSelect) ageSelect.value = 'little-tiger';
    } else if (paramProg.includes('weapon') || paramProg.includes('cadet') || paramProg.includes('combat')) {
      targetProgName = 'Combat Conditioning';
    }

    if (targetProgName) {
      bookingData.program = targetProgName;
      const matchingRadio = wizardForm.querySelector(`input[name="programChoice"][value="${targetProgName}"]`);
      if (matchingRadio) matchingRadio.checked = true;
    }
  }

  if (paramPlan) {
    bookingData.selectedPlan = paramPlan.toUpperCase();
  }
  if (paramInst) {
    bookingData.preferredInstructor = paramInst.toUpperCase();
  }
});

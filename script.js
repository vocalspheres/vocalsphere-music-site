/*
  script.js

  This file adds interactive behaviour to the site.  Currently it handles
  toggling the navigation menu on small screens and updating the
  corresponding ARIA attributes.  Additional scripts could be added here
  without interfering with page content.
*/

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close the menu when focus moves away and the user presses Escape
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }
});
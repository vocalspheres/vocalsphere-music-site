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

  /*
    Side menu handling
    The off‑canvas menu is toggled by the menu button in the header.  When
    opened, a semi‑transparent overlay covers the page.  The menu can
    be closed using the close button, clicking the overlay, or
    pressing the Escape key.  ARIA attributes are updated to reflect
    the open state for assistive technologies.
  */
  const menuButton = document.getElementById('menu-button');
  const sideMenu   = document.getElementById('side-menu');
  const closeMenu  = document.getElementById('close-menu');
  const overlay    = document.getElementById('overlay');

  function openSideMenu() {
    if (sideMenu) {
      sideMenu.classList.add('open');
    }
    if (overlay) {
      overlay.classList.add('open');
    }
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', 'true');
    }
  }

  function closeSideMenu() {
    if (sideMenu) {
      sideMenu.classList.remove('open');
    }
    if (overlay) {
      overlay.classList.remove('open');
    }
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  }

  if (menuButton) {
    menuButton.addEventListener('click', openSideMenu);
  }
  if (closeMenu) {
    closeMenu.addEventListener('click', closeSideMenu);
  }
  if (overlay) {
    overlay.addEventListener('click', closeSideMenu);
  }
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && sideMenu && sideMenu.classList.contains('open')) {
      closeSideMenu();
    }
  });
});
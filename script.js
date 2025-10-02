document.addEventListener('DOMContentLoaded', function () {

  // --- THEME SWITCHER LOGIC ---
  const themeSwitcherBtn = document.querySelector('.theme-switcher');
  const body = document.body;

  // Function to set the theme from memory (localStorage)
  const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      body.classList.add('light-mode');
    }
  };

  // Event listener for the button click
  themeSwitcherBtn.addEventListener('click', () => {
    // Toggle the .light-mode class on the body
    body.classList.toggle('light-mode');

    // Save the user's choice to localStorage
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });

  // Apply the theme when the page first loads
  applySavedTheme();

  // --- TYPED.JS (TYPING EFFECT) ---
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: ['Sahil Singh', 'a Software Developer', 'an AI Enthusiast'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });
  }


  // --- SKILLS FILTER LOGIC ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillItems = document.querySelectorAll('.skill-list span');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory.includes(filterValue)) {
          item.classList.remove('dimmed');
        } else {
          item.classList.add('dimmed');
        }
      });
    });
  });


  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // --- PROJECT POPUP LOGIC ---
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    const header = item.querySelector('.project-info');
    const popup = item.querySelector('.project-popup');
    header.addEventListener('click', (event) => {
      event.stopPropagation();
      const isVisible = popup.classList.contains('visible');
      document.querySelectorAll('.project-popup').forEach(p => p.classList.remove('visible'));
      projectItems.forEach(i => i.classList.remove('active'));
      if (!isVisible) {
        popup.classList.add('visible');
        item.classList.add('active');
      }
    });
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.project-item')) {
      document.querySelectorAll('.project-popup').forEach(p => p.classList.remove('visible'));
      projectItems.forEach(i => i.classList.remove('active'));
    }
  });

  // --- SCROLL ANIMATION ---
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => {
    observer.observe(section);
  });

});
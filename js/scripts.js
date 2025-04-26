document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  
    // Dark mode toggle
    const toggle = document.getElementById('dark-toggle');
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark'); // Toggle dark mode
    });
  
    // Contact form submission (demo)
    document.querySelector(".contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent! (This is a demo form.)");
    });
  });
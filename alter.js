const aboutLink = document.querySelector('a[href="#about"]');

aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
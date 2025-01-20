// JavaScript to toggle the active class
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' class from all links
    navLinks.forEach(item => item.classList.remove('active'));
    
    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
});

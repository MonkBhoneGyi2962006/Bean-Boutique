document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop().toLowerCase();

    // Get all navigation links
    var navLinks = document.querySelectorAll('nav ul li a.showactive-link');

    // Loop through the links and set the active class
    navLinks.forEach(function(link) {
        var linkPage = link.getAttribute('href').toLowerCase();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

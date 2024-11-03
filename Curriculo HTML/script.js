document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - 10, // -10 para espaço adicional
            behavior: 'smooth'
        });
    });
});

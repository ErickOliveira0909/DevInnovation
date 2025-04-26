document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobile_btn');
    const mobileMenu = document.getElementById('mobile_menu');
    
    mobileBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        const icon = mobileBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-x');
        }
    });

    ScrollReveal().reveal("#cta", {
        origin: "left",
        duration: 2000,
        distance: '20%'
    })
    ScrollReveal().reveal("#banner", {
        origin: "bottom",
        duration: 2000,
        distance: '20%',
        
    })
    ScrollReveal().reveal(".services", {
        origin: "bottom",
        duration: 2000,
        distance: '20%',
        scale: 0.85,
        opacity: 0.5,
    })
    ScrollReveal().reveal(".card", {
        origin: "bottom",
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })
    ScrollReveal().reveal(".portifolio", {
        origin: "bottom",
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })
    ScrollReveal().reveal(".site", {
        origin: "bottom",
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })

    ScrollReveal().reveal(".contato", {
        origin: "bottom",
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })
    ScrollReveal().reveal(".banner-cta", {
        origin: "left",
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })
    ScrollReveal().reveal(".cta-text", {
        origin: 'right',
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })
    ScrollReveal().reveal(".cta-button", {
        origin: 'right',
        duration: 2000,
        distance: '20%',
        scale: 0.85,
    })
    
});
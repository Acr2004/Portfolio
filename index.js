ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('#home2', { origin: 'top' })
ScrollReveal().reveal('#skills2', { origin: 'top' })
ScrollReveal().reveal('#portfolio2', { origin: 'top' })

const typed = new Typed('.job', {
    strings: ['Frontend Developer', 'Backend Developer', 'FullStack Developer', 'Mobile Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
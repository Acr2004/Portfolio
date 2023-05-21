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

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 88;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("#nav-bar-list a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector("#nav-bar-list a[href*=" + id + "]").classList.remove("active");
        }
    });
})

const scrollToTop = document.querySelector(".scrollToTop");

window.addEventListener("scroll", function() {
    scrollToTop.classList.toggle("show", window.scrollY > 500);
})

scrollToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
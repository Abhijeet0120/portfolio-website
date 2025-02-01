/*===== MOBILE MENU TOGGLE =====*/ 
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });
    }
});

/*===== ACTIVE LINK ON SCROLL =====*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

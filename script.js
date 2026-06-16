// ===============================
// TYPING EFFECT
// ===============================

const roles = [
    "Web Developer",
    "C++ Programmer",
    "DSA Enthusiast",
    "Problem Solver",
    "Tech Explorer",
    "Future Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;

const typedText = document.getElementById("typed");

function type() {

    if (charIndex < roles[roleIndex].length) {

        typedText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }
}

function erase() {

    if (charIndex > 0) {

        typedText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText = count;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats-grid");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounters();

            counterObserver.disconnect();

        }

    });

});

if (statsSection) {

    counterObserver.observe(statsSection);

}

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .achievement-card, .stat-card"
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {

            link.classList.add("active");

        }

    });

});

// ===============================
// SMOOTH BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});

// ===============================
// FLOATING TITLE EFFECT
// ===============================

window.addEventListener("mousemove", (e) => {

    const heroTitle = document.querySelector(".hero h1");

    if (!heroTitle) return;

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroTitle.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ===============================
// CURRENT YEAR AUTO UPDATE
// ===============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Anish Kumar. All Rights Reserved.`;

}

// ===============================
// PRELOADER (OPTIONAL)
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

console.log(
    "🚀 Portfolio Loaded Successfully"
);
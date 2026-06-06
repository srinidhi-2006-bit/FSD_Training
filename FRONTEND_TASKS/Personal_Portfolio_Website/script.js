// ===========================
// Portfolio JavaScript
// ===========================

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Contact Form Handling
    // ===========================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        const successModal =
            new bootstrap.Modal(
                document.getElementById("successModal")
            );

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            if (!contactForm.checkValidity()) {

                e.stopPropagation();

            } else {

                handleFormSubmit();

            }

            contactForm.classList.add("was-validated");

        });

        function handleFormSubmit() {

            const formData = {

                name:
                    document.getElementById("name")?.value || "",

                email:
                    document.getElementById("email")?.value || "",

                subject:
                    document.getElementById("subject")?.value || "",

                message:
                    document.getElementById("message")?.value || ""

            };

            console.log("Contact Form Data:", formData);

            successModal.show();

            setTimeout(() => {

                contactForm.reset();

                contactForm.classList.remove("was-validated");

            }, 500);

        }

    }

    // ===========================
    // Initialize Tooltips
    // ===========================

    const tooltipTriggerList =
        [].slice.call(
            document.querySelectorAll(
                '[data-bs-toggle="tooltip"]'
            )
        );

    tooltipTriggerList.map(function (tooltipTriggerEl) {

        return new bootstrap.Tooltip(
            tooltipTriggerEl
        );

    });

});

// ===========================
// Smooth Scrolling
// ===========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
// ===========================
// Active Navbar Highlight
// ===========================

window.addEventListener("scroll", updateActiveNavLink);

function updateActiveNavLink() {

    const sections =
        document.querySelectorAll("section[id]");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.remove("active");

        });

    if (currentSection) {

        document
            .querySelector(
                `.nav-link[href="#${currentSection}"]`
            )
            ?.classList.add("active");

    }

}

// ===========================
// Fade In Animation On Scroll
// ===========================

const observerOptions = {

    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"

};

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-in");

                observer.unobserve(entry.target);

            }

        });

    },

    observerOptions

);

document
.querySelectorAll(
    ".card, .project-card, .skill-card, .timeline-item"
)
.forEach(element => {

    observer.observe(element);

});

// ===========================
// Progress Bar Animation
// ===========================

const progressObserver =
new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bars =
                    entry.target.querySelectorAll(
                        ".progress-bar"
                    );

                bars.forEach(bar => {

                    const width =
                        bar.style.width;

                    bar.style.width = "0";

                    setTimeout(() => {

                        bar.style.width = width;

                    }, 100);

                });

                progressObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.5
    }

);

document
.querySelectorAll(".progress")
.forEach(progress => {

    progressObserver.observe(progress);

});

// ===========================
// Counter Animation
// ===========================

function animateCounter(
    element,
    target,
    duration = 2000
) {

    let start = 0;

    const increment =
        target / (duration / 16);

    const timer =
        setInterval(() => {

            start += increment;

            if (start >= target) {

                element.textContent = target;

                clearInterval(timer);

            } else {

                element.textContent =
                    Math.floor(start);

            }

        }, 16);

}

// ===========================
// Scroll To Top Button
// ===========================

const scrollBtn =
document.createElement("button");

scrollBtn.id = "scrollToTopBtn";

scrollBtn.className =
"btn btn-primary";

scrollBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===========================
// Dark Mode Toggle
// ===========================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );

    localStorage.setItem(

        "darkMode",

        document.body.classList.contains(
            "dark-mode"
        )

    );

}

if (
    localStorage.getItem("darkMode")
    === "true"
) {

    document.body.classList.add(
        "dark-mode"
    );

}

// ===========================
// Utility Functions
// ===========================

function isValidEmail(email) {

    const regex =

        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

function debounce(func, wait) {

    let timeout;

    return function (...args) {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            func.apply(this, args);

        }, wait);

    };

}

// ===========================
// Portfolio Information
// ===========================

const portfolioData = {

    name:
        "Egala Srinidhi Reddy",

    designation:
        "AI & Full Stack Developer",

    email:
        "egalasrinidhireddy7@gmail.com",

    github:
        "https://github.com/srinidhi-2006-bit",

    linkedin:
        "https://www.linkedin.com/in/egala-srinidhi-reddy-049966335/",

    leetcode:
        "https://leetcode.com/u/nidhi_123-4/",

    codechef:
        "https://www.codechef.com/users/flash_zeal_29"

};

console.log(
    "Portfolio Loaded Successfully"
);

console.log(portfolioData);

// ===========================
// End of File
// ===========================
// ===========================
// Form Validation & Handling
// ===========================
document.addEventListener('DOMContentLoaded', function () {
    // Bootstrap form validation
    const contactForm = document.getElementById('contactForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    // Form submission handler
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Check if form is valid
        if (!contactForm.checkValidity()) {
            e.stopPropagation();
        } else {
            // Form is valid - here you would typically send the data to a server
            handleFormSubmit();
        }

        contactForm.classList.add('was-validated');
    });

    // Form reset handler
    contactForm.addEventListener('reset', function () {
        contactForm.classList.remove('was-validated');
    });

    // Handle form submission
    function handleFormSubmit() {
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Log form data (in a real app, this would be sent to a server)
        console.log('Form Data:', formData);

        // Show success modal
        successModal.show();

        // Reset form after successful submission
        setTimeout(function () {
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        }, 500);
    }
});

// ===========================
// Smooth Scrolling for navigation links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });

            // Close navbar if open
            const navbarToggle = document.querySelector('.navbar-toggler');
            if (navbarToggle.offsetParent !== null) {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggle.click();
                }
            }
        }
    });
});

// ===========================
// Navbar Active Link Highlighting
// ===========================
window.addEventListener('scroll', function () {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current nav link
    if (current) {
        document.querySelector(`.nav-link[href="#${current}"]`)?.classList.add('active');
    }
}

// ===========================
// Fade-in Animation on Scroll
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards, skill items, and project cards
document.querySelectorAll('.card, .project-card, .skill-card, .achievement-item').forEach(element => {
    observer.observe(element);
});

// ===========================
// Tooltip Initialization
// ===========================
document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// ===========================
// Progress Bar Animation
// ===========================
const progressObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            progressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.progress').forEach(progress => {
    progressObserver.observe(progress);
});

// ===========================
// Counter Animation (Optional - for stats)
// ===========================
function animateCounters(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===========================
// Scroll to Top Button (Optional)
// ===========================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'btn btn-primary btn-circle scroll-to-top-btn';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    z-index: 99;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 0;
    opacity: 0.7;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

// Show scroll to top button on scroll
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '0.7';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top on button click
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollToTopBtn.addEventListener('mouseover', function () {
    this.style.opacity = '1';
    this.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseout', function () {
    this.style.opacity = '0.7';
    this.style.transform = 'scale(1)';
});

// ===========================
// Utility Functions
// ===========================

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// Print Portfolio
// ===========================
function printPortfolio() {
    window.print();
}

// ===========================
// Export Portfolio Data
// ===========================
function exportPortfolioData() {
    const portfolioData = {
        name: 'John Doe',
        designation: 'Full Stack Developer',
        email: 'john@example.com',
        phone: '+1 (234) 567-890',
        exportDate: new Date().toLocaleDateString()
    };

    const dataStr = JSON.stringify(portfolioData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio_data.json';
    link.click();
}

// ===========================
// Dark Mode Toggle (Optional)
// ===========================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference from localStorage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===========================
// Project Filter (Optional)
// ===========================
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            setTimeout(() => {
                project.classList.add('fade-in');
            }, 100);
        } else {
            project.style.display = 'none';
            project.classList.remove('fade-in');
        }
    });
}

// ===========================
// Skill Level Display
// ===========================
function displaySkillLevels() {
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 75 }
    ];

    return skills.map(skill => `${skill.name}: ${skill.level}%`).join(', ');
}

console.log('Portfolio JavaScript loaded successfully!');

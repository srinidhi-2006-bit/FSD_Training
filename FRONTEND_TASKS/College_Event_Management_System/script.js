// JavaScript for College Event Management System

// Registration Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegistrationForm()) {
                submitRegistration();
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateContactForm()) {
                submitContactForm();
            }
        });
    }

    // Event Filter
    const filterButtons = document.querySelectorAll('.gallery-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterGallery(this.dataset.filter);
        });
    });

    // Events Filter
    const categoryFilter = document.getElementById('categoryFilter');
    const monthFilter = document.getElementById('monthFilter');
    const searchInput = document.getElementById('searchInput');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents);
    }
    if (monthFilter) {
        monthFilter.addEventListener('change', filterEvents);
    }
    if (searchInput) {
        searchInput.addEventListener('keyup', filterEvents);
    }
});

// Registration Form Validation Function
function validateRegistrationForm() {
    const studentName = document.getElementById('studentName').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const branch = document.getElementById('branch').value;
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const terms = document.getElementById('terms').checked;
    
    // Get selected events
    const eventCheckboxes = document.querySelectorAll('input[name="events"]:checked');
    const hasSelectedEvents = eventCheckboxes.length > 0;

    // Clear previous errors
    clearErrors();

    let isValid = true;

    // Validate Student Name
    if (!studentName) {
        showError('nameError', 'Please enter your full name');
        isValid = false;
    } else if (studentName.length < 3) {
        showError('nameError', 'Name must be at least 3 characters');
        isValid = false;
    }

    // Validate Roll Number
    if (!rollNumber) {
        showError('rollError', 'Please enter your roll number');
        isValid = false;
    } else if (!/^[0-9]{4}[A-Z]{2,3}[0-9]{3}$|^[A-Z0-9]{5,10}$/.test(rollNumber)) {
        showError('rollError', 'Please enter a valid roll number');
        isValid = false;
    }

    // Validate Branch
    if (!branch) {
        showError('branchError', 'Please select your branch');
        isValid = false;
    }

    // Validate Email
    if (!email) {
        showError('emailError', 'Please enter your email address');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Mobile Number
    if (!mobile) {
        showError('mobileError', 'Please enter your mobile number');
        isValid = false;
    } else if (!/^[0-9]{10}$/.test(mobile.replace(/[-\s]/g, ''))) {
        showError('mobileError', 'Please enter a valid 10-digit mobile number');
        isValid = false;
    }

    // Validate Event Selection
    if (!hasSelectedEvents) {
        showError('eventError', 'Please select at least one event');
        isValid = false;
    }

    // Validate Terms & Conditions
    if (!terms) {
        alert('Please agree to the terms and conditions');
        isValid = false;
    }

    return isValid;
}

// Validate Contact Form
function validateContactForm() {
    const contactName = document.getElementById('contactName').value.trim();
    const contactEmail = document.getElementById('contactEmail').value.trim();
    const contactSubject = document.getElementById('contactSubject').value;
    const contactMessage = document.getElementById('contactMessage').value.trim();
    const contactTerms = document.getElementById('contactTerms').checked;

    let isValid = true;

    if (!contactName || contactName.length < 3) {
        alert('Please enter a valid name');
        isValid = false;
    } else if (!contactEmail || !isValidEmail(contactEmail)) {
        alert('Please enter a valid email address');
        isValid = false;
    } else if (!contactSubject) {
        alert('Please select a subject');
        isValid = false;
    } else if (!contactMessage || contactMessage.length < 10) {
        alert('Please enter a message (at least 10 characters)');
        isValid = false;
    } else if (!contactTerms) {
        alert('Please agree to be contacted');
        isValid = false;
    }

    return isValid;
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Error Message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.875rem';
    }
}

// Clear Error Messages
function clearErrors() {
    const errorElements = document.querySelectorAll('[id$="Error"]');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

// Submit Registration
function submitRegistration() {
    const studentName = document.getElementById('studentName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const branch = document.getElementById('branch').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    
    // Get selected events
    const eventCheckboxes = document.querySelectorAll('input[name="events"]:checked');
    const selectedEvents = Array.from(eventCheckboxes).map(cb => cb.value);

    // Create registration data
    const registrationData = {
        name: studentName,
        rollNumber: rollNumber,
        branch: branch,
        email: email,
        mobile: mobile,
        events: selectedEvents,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage
    let registrations = JSON.parse(localStorage.getItem('eventRegistrations')) || [];
    registrations.push(registrationData);
    localStorage.setItem('eventRegistrations', JSON.stringify(registrations));

    // Show success message
    const successAlert = document.getElementById('successAlert');
    if (successAlert) {
        successAlert.classList.remove('d-none');
        successAlert.style.display = 'block';
    }

    // Reset form
    document.getElementById('registrationForm').reset();

    // Log registration data
    console.log('Registration submitted:', registrationData);

    // Hide success message after 5 seconds
    setTimeout(() => {
        if (successAlert) {
            successAlert.classList.add('d-none');
        }
    }, 5000);
}

// Submit Contact Form
function submitContactForm() {
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactPhone = document.getElementById('contactPhone').value;
    const contactSubject = document.getElementById('contactSubject').value;
    const contactMessage = document.getElementById('contactMessage').value;

    // Create contact data
    const contactData = {
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        subject: contactSubject,
        message: contactMessage,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage
    let contacts = JSON.parse(localStorage.getItem('contactMessages')) || [];
    contacts.push(contactData);
    localStorage.setItem('contactMessages', JSON.stringify(contacts));

    // Show success message
    const contactSuccessAlert = document.getElementById('contactSuccessAlert');
    if (contactSuccessAlert) {
        contactSuccessAlert.classList.remove('d-none');
        contactSuccessAlert.style.display = 'block';
    }

    // Reset form
    document.getElementById('contactForm').reset();

    // Log contact data
    console.log('Contact form submitted:', contactData);

    // Hide success message after 5 seconds
    setTimeout(() => {
        if (contactSuccessAlert) {
            contactSuccessAlert.classList.add('d-none');
        }
    }, 5000);
}

// Filter Gallery
function filterGallery(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterButtons = document.querySelectorAll('.gallery-filter');

    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter items
    galleryItems.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.3s ease-out';
        } else if (item.dataset.category === filter) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// Filter Events
function filterEvents() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const monthFilter = document.getElementById('monthFilter')?.value || '';
    const eventItems = document.querySelectorAll('.event-item');

    eventItems.forEach(item => {
        const eventName = item.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const eventCategory = item.dataset.category || '';
        const eventMonth = item.dataset.month || '';
        const eventDescription = item.querySelector('.card-text')?.textContent.toLowerCase() || '';

        let matchesSearch = true;
        let matchesCategory = true;
        let matchesMonth = true;

        // Check search term
        if (searchTerm && !eventName.includes(searchTerm) && !eventDescription.includes(searchTerm)) {
            matchesSearch = false;
        }

        // Check category
        if (categoryFilter && eventCategory !== categoryFilter) {
            matchesCategory = false;
        }

        // Check month
        if (monthFilter && eventMonth !== monthFilter) {
            matchesMonth = false;
        }

        // Show or hide item
        if (matchesSearch && matchesCategory && matchesMonth) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            item.style.display = 'none';
        }
    });

    // Check if any items are displayed
    const visibleItems = Array.from(eventItems).filter(item => item.style.display !== 'none');
    console.log(`Displaying ${visibleItems.length} event(s)`);
}

// Smooth Scroll to Elements
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add Event Listener for Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile Menu Close on Link Click
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', function() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// Format Mobile Number
function formatMobileNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 10) {
        value = value.slice(0, 10);
    }
    input.value = value;
}

// Add event listener to mobile input
const mobileInput = document.getElementById('mobile');
if (mobileInput) {
    mobileInput.addEventListener('input', function() {
        formatMobileNumber(this);
    });
}

// Capitalize Input Text
function capitalizeInput(input) {
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
}

// Add event listener to name input
const studentNameInput = document.getElementById('studentName');
if (studentNameInput) {
    studentNameInput.addEventListener('blur', function() {
        this.value = this.value
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    });
}

// Display Stored Registrations (for demo purposes)
function displayStoredRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('eventRegistrations')) || [];
    console.log('Stored Registrations:', registrations);
    console.log(`Total registrations: ${registrations.length}`);
}

// Display Stored Contact Messages (for demo purposes)
function displayStoredMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    console.log('Stored Contact Messages:', messages);
    console.log(`Total messages: ${messages.length}`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayStoredRegistrations();
    displayStoredMessages();
});

// Utility Function: Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Utility Function: Format Time
function formatTime(dateString) {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleTimeString('en-US', options);
}

// Export Registrations (for admin purposes)
function exportRegistrations() {
    const registrations = JSON.parse(localStorage.getItem('eventRegistrations')) || [];
    const dataStr = JSON.stringify(registrations, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `registrations_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Clear All Data (for testing)
function clearAllData() {
    if (confirm('Are you sure you want to clear all stored data?')) {
        localStorage.removeItem('eventRegistrations');
        localStorage.removeItem('contactMessages');
        console.log('All data cleared!');
    }
}

// Add console commands for debugging
console.log('%cCollege Event Management System', 'font-size: 18px; font-weight: bold; color: #667eea;');
console.log('Available functions:');
console.log('- displayStoredRegistrations()');
console.log('- displayStoredMessages()');
console.log('- exportRegistrations()');
console.log('- clearAllData()');
console.log('- formatDate(dateString)');
console.log('- formatTime(dateString)');

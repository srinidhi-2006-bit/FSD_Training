// College Event Management System

document.addEventListener("DOMContentLoaded", function () {
    // Registration Form
    const registrationForm =
        document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener(
            "submit",
            function (e) {
                e.preventDefault();
                const studentName =
                    document.getElementById("studentName").value.trim();
                const rollNumber =
                    document.getElementById("rollNumber").value.trim();
                const branch =
                    document.getElementById("branch").value;
                const email =
                    document.getElementById("email").value.trim();
                const mobile =
                    document.getElementById("mobile").value.trim();
                const event =
                    document.getElementById("event").value;
                const terms =
                    document.getElementById("terms").checked;
                if (
                    studentName === "" ||
                    rollNumber === "" ||
                    branch === "" ||
                    email === "" ||
                    mobile === "" ||
                    event === ""
                ) {
                    alert(
                        "Please fill all fields."
                    );
                    return;
                }
                if (!validateEmail(email)) {
                    alert(
                        "Please enter a valid email address."
                    );
                    return;
                }
                if (
                    !/^[0-9]{10}$/.test(mobile)
                ) {
                    alert(
                        "Please enter a valid 10-digit mobile number."
                    );
                    return;
                }
                if (!terms) {
                    alert(
                        "Please accept the Terms & Conditions."
                    );
                    return;
                }
                const successAlert =
                    document.getElementById("successAlert");
                successAlert.classList.remove("d-none");
                registrationForm.reset();
                setTimeout(() => {
                    successAlert.classList.add("d-none");
                }, 4000);
            }
        );
    }
    // Contact Form
    const contactForm =
        document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener(
            "submit",
            function (e) {
                e.preventDefault();
                const contactName =
                    document.getElementById("contactName").value.trim();
                const contactEmail =
                    document.getElementById("contactEmail").value.trim();
                const contactMessage =
                    document.getElementById("contactMessage").value.trim();
                if (
                    contactName === "" ||
                    contactEmail === "" ||
                    contactMessage === ""
                ) {
                    alert(
                        "Please fill all fields."
                    );
                    return;
                }
                if (
                    !validateEmail(contactEmail)
                ) {
                    alert(
                        "Please enter a valid email address."
                    );
                    return;
                }
                const contactSuccess =
                    document.getElementById("contactSuccessAlert");
                if (contactSuccess) {
                    contactSuccess.classList.remove("d-none");
                    setTimeout(() => {
                        contactSuccess.classList.add("d-none");
                    }, 4000);
                }
                contactForm.reset();
            }
        );
    }
});
// Email Validation Function
function validateEmail(email) {
    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Smooth Scroll
document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {
        anchor.addEventListener(
            "click",
            function (e) {
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
            }
        );
    });
// Navbar Shadow on Scroll
window.addEventListener(
    "scroll",
    function () {
        const navbar =
            document.querySelector(".navbar");
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.2)";
        } else {
            navbar.style.boxShadow =
                "0 2px 5px rgba(0,0,0,0.1)";
        }
    }
);
// Console Message
console.log(
    "%cCollege Event Management System Loaded Successfully",
    "color:green; font-size:16px; font-weight:bold;"
);
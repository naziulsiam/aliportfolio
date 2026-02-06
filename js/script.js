/* ============================================
   Ali Siam Portfolio - Interactive Scripts
   ============================================ */

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loadingScreen');
        if (loader) loader.classList.add('hidden');
    }, 1000);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.pointerEvents = 'auto';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.pointerEvents = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-cyan-400');
        link.classList.add('text-gray-300');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.remove('text-gray-300');
            link.classList.add('text-cyan-400');
        }
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Contact Form Validation and Handling
// ============================================

const contactForm = document.getElementById('contactForm');
const formButton = document.getElementById('formButton');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    // Real-time validation
    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Show error message
    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.textContent = message;
            errorDiv.classList.remove('hidden');
        }
        input.classList.add('border-red-500');
        input.classList.remove('border-cyan-500/30');
    }

    // Clear error message
    function clearError(input) {
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.classList.add('hidden');
        }
        input.classList.remove('border-red-500');
        input.classList.add('border-cyan-500/30');
    }

    // Validate name
    function validateName() {
        const value = nameInput.value.trim();
        if (value.length === 0) {
            showError(nameInput, 'Name is required');
            return false;
        } else if (value.length < 2) {
            showError(nameInput, 'Name must be at least 2 characters');
            return false;
        } else {
            clearError(nameInput);
            return true;
        }
    }

    // Validate email
    function validateEmail() {
        const value = emailInput.value.trim();
        if (value.length === 0) {
            showError(emailInput, 'Email is required');
            return false;
        } else if (!emailRegex.test(value)) {
            showError(emailInput, 'Please enter a valid email address');
            return false;
        } else {
            clearError(emailInput);
            return true;
        }
    }

    // Validate message
    function validateMessage() {
        const value = messageInput.value.trim();
        if (value.length === 0) {
            showError(messageInput, 'Message is required');
            return false;
        } else if (value.length < 10) {
            showError(messageInput, 'Message must be at least 10 characters');
            return false;
        } else {
            clearError(messageInput);
            return true;
        }
    }

    // Add real-time validation listeners
    if (nameInput) {
        nameInput.addEventListener('blur', validateName);
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length > 0) validateName();
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', () => {
            if (emailInput.value.trim().length > 0) validateEmail();
        });
    }

    if (messageInput) {
        messageInput.addEventListener('blur', validateMessage);
        messageInput.addEventListener('input', () => {
            if (messageInput.value.trim().length > 0) validateMessage();
        });
    }

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            showFormMessage('Please fix the errors above.', 'error');
            return;
        }

        // Show loading state
        if (formButton) {
            formButton.disabled = true;
            formButton.innerHTML = `
                <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            `;
        }

        try {
            // Submit form data
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFormMessage('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                // Clear any remaining error states
                [nameInput, emailInput, messageInput].forEach(input => {
                    if (input) clearError(input);
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showFormMessage('✗ Oops! Something went wrong. Please try again or email me directly.', 'error');
        } finally {
            // Reset button state
            if (formButton) {
                formButton.disabled = false;
                formButton.textContent = 'Send Message';
            }
        }
    });
}

// Show form message helper
function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.classList.remove('hidden', 'bg-green-500/10', 'text-green-400', 'border-green-500/30', 'bg-red-500/10', 'text-red-400', 'border-red-500/30');
        
        if (type === 'success') {
            formMessage.classList.add('bg-green-500/10', 'text-green-400', 'border-green-500/30');
        } else {
            formMessage.classList.add('bg-red-500/10', 'text-red-400', 'border-red-500/30');
        }
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }
    }
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Hide any previous messages
        formSuccess.style.display = 'none';
        formError.style.display = 'none';
        
        try {
            // Collect form data
            const formData = new FormData(this);
            const data = {};
            
            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                if (data[key]) {
                    // Handle multiple checkboxes
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            
            // Simulate form submission (replace with actual endpoint)
            const response = await submitContactForm(data);
            
            if (response.success) {
                // Show success message
                formSuccess.style.display = 'block';
                this.reset();
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Send notification email (simulated)
                await sendNotificationEmail(data);
                
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            formError.style.display = 'block';
            formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } finally {
            // Hide loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Simulate form submission (replace with actual API endpoint)
async function submitContactForm(data) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Log form data for debugging (remove in production)
    console.log('Form submitted with data:', data);
    
    // Simulate successful submission
    return { success: true, message: 'Form submitted successfully' };
    
    // In a real implementation, you would send the data to your server:
    /*
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    return await response.json();
    */
}

// Send notification email (simulated)
async function sendNotificationEmail(formData) {
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Notification email sent with data:', {
        to: 'claire@clairesevents.com',
        subject: 'New Contact Form Submission',
        from: formData.email,
        name: formData.name,
        eventType: formData.eventType,
        message: formData.message
    });
    
    // In a real implementation, you would send an email:
    /*
    await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: 'claire@clairesevents.com',
            subject: 'New Contact Form Submission',
            formData: formData
        })
    });
    */
}

// Intersection Observer for fade-in animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .testimonial, .portfolio-item, .about-text, .about-image');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form validation enhancements
function validateForm() {
    const requiredFields = contactForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#dc3545';
        } else {
            field.style.borderColor = '#e9ecef';
        }
    });
    
    // Email validation
    const emailField = contactForm.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#dc3545';
        } else {
            emailField.style.borderColor = '#e9ecef';
        }
    }
    
    return isValid;
}

// Add real-time validation
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateForm);
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(220, 53, 69)') {
                validateForm();
            }
        });
    });
}

// Portfolio item click handler for lightbox (optional enhancement)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const title = this.querySelector('h3');
        
        if (img && title) {
            // Create lightbox modal
            createLightbox(img.src, title.textContent, this.querySelector('p').textContent);
        }
    });
});

function createLightbox(imageSrc, title, description) {
    // Remove existing lightbox if any
    const existingLightbox = document.querySelector('.lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay">
            <div class="lightbox-content">
                <button class="lightbox-close">&times;</button>
                <img src="${imageSrc}" alt="${title}">
                <div class="lightbox-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        </div>
    `;
    
    // Add lightbox styles
    const lightboxStyles = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lightbox-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .lightbox-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .lightbox-content img {
            width: 100%;
            height: auto;
            max-height: 70vh;
            object-fit: cover;
        }
        .lightbox-info {
            padding: 2rem;
        }
        .lightbox-info h3 {
            color: #333;
            margin-bottom: 1rem;
        }
        .lightbox-info p {
            color: #666;
            margin: 0;
        }
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#lightbox-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'lightbox-styles';
        styleSheet.textContent = lightboxStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Add to page
    document.body.appendChild(lightbox);
    
    // Close lightbox handlers
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const overlay = lightbox.querySelector('.lightbox-overlay');
    
    closeBtn.addEventListener('click', () => lightbox.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            lightbox.remove();
        }
    });
    
    // Close with Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            lightbox.remove();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Add loading states and micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #d4af37';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add form field focus effects
document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add success/error message animations
function showMessage(element, message, type = 'success') {
    element.textContent = message;
    element.className = `message ${type}`;
    element.style.display = 'block';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-20px)';
    
    // Animate in
    setTimeout(() => {
        element.style.transition = 'all 0.3s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            element.style.display = 'none';
        }, 300);
    }, 5000);
}

// Add click-to-call functionality for phone numbers
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const phoneNumber = this.getAttribute('href').replace('tel:', '');
        
        if (confirm(`Call ${phoneNumber}?`)) {
            window.location.href = this.getAttribute('href');
        }
    });
});

// Add email click functionality
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const email = this.getAttribute('href').replace('mailto:', '');
        
        // Copy email to clipboard
        navigator.clipboard.writeText(email).then(() => {
            showMessage(document.createElement('div'), 'Email copied to clipboard!', 'success');
        }).catch(() => {
            window.location.href = this.getAttribute('href');
        });
    });
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add keyboard navigation for portfolio items
document.addEventListener('keydown', (e) => {
    const portfolioItems = document.querySelectorAll('.portfolio-item:not([style*="display: none"])');
    const activeItem = document.querySelector('.portfolio-item:focus');
    
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        
        if (activeItem) {
            const currentIndex = Array.from(portfolioItems).indexOf(activeItem);
            let nextIndex;
            
            if (e.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : portfolioItems.length - 1;
            } else {
                nextIndex = currentIndex < portfolioItems.length - 1 ? currentIndex + 1 : 0;
            }
            
            portfolioItems[nextIndex].focus();
        } else if (portfolioItems.length > 0) {
            portfolioItems[0].focus();
        }
    }
});

// Make portfolio items focusable
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.setAttribute('tabindex', '0');
});

console.log('Claire\'s Wedding Planning Website - JavaScript loaded successfully!');

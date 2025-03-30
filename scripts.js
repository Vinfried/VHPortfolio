/**
 * Main JavaScript for Victor Hugo's Game Developer Portfolio
 * ES6+ with clean, modular approach
 */

// DOM utility functions
const q = (selector, parent = document) => parent.querySelector(selector);
const qa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeThemeToggle();
    initializeNavigation();
    initializeScrollEffects();
    initializeProjectFilters();
    initializeTabs();
    initializeVideoPlaceholders();
    initializeContactForm();
    initializeBackToTop();
    initializeProjectModals();
});

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = q('.theme-toggle');
    const storedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme based on stored preference
    document.documentElement.setAttribute('data-theme', storedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Mobile navigation
function initializeNavigation() {
    const menuToggle = q('.menu-toggle');
    const navLinks = q('.nav-links');
    
    if (!menuToggle) return;
    
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !expanded);
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    qa('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
        });
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Header scroll effect
    const header = q('.site-header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Add shadow class when scrolled
        if (scrollY > 20) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
        
        lastScrollY = scrollY;
    });
    
    // Smooth scroll for anchor links
    qa('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = q(targetId);
            
            if (targetElement) {
                const headerOffset = q('.site-header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project filters
function initializeProjectFilters() {
    const filterBtns = qa('.filter-btn');
    const projectCards = qa('.project-card');
    
    if (!filterBtns.length || !projectCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to current button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Tabs for gameplay demos
function initializeTabs() {
    const tabBtns = qa('.tab-btn');
    const tabPanels = qa('.tab-panel');
    
    if (!tabBtns.length || !tabPanels.length) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to current button
            btn.classList.add('active');
            
            // Show corresponding panel
            const tabId = btn.dataset.tab;
            q(`#${tabId}`).classList.add('active');
        });
    });
}

// Video placeholders
function initializeVideoPlaceholders() {
    const playButtons = qa('.play-btn');
    
    if (!playButtons.length) return;
    
    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const placeholder = btn.closest('.video-placeholder');
            const img = q('img', placeholder);
            
            // Replace placeholder with video
            // In a real implementation, this would create an iframe or video element
            // For this demo, we'll just show an alert
            alert('This would play the video in a real implementation.');
            
            // Example of how it would work with real videos:
            /*
            const videoSrc = placeholder.dataset.videoSrc;
            const iframe = document.createElement('iframe');
            iframe.src = videoSrc;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            
            placeholder.innerHTML = '';
            placeholder.appendChild(iframe);
            */
        });
    });
}

// Contact form validation and submission
function initializeContactForm() {
    const contactForm = q('#contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        
        // Reset all error messages
        qa('.error-message').forEach(error => error.textContent = '');
        
        // Validate form fields
        let isValid = true;
        
        // Name validation
        const nameInput = q('#name');
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        }
        
        // Email validation
        const emailInput = q('#email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Please enter your email');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Subject validation
        const subjectInput = q('#subject');
        if (!subjectInput.value.trim()) {
            showError(subjectInput, 'Please enter a subject');
            isValid = false;
        }
        
        // Message validation
        const messageInput = q('#message');
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Please enter your message');
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            // In a real implementation, this would send the form data to a server
            // For this demo, we'll just show a success notification
            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            contactForm.reset();
        }
    });
    
    // Helper function to show error messages
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
    }
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = q('.notification');
    const notificationMessage = q('.notification-message');
    
    if (!notification || !notificationMessage) return;
    
    // Set notification type (success/error)
    notification.style.backgroundColor = type === 'success' ? 'var(--color-success)' : 'var(--color-error)';
    
    // Set message
    notificationMessage.textContent = message;
    
    // Show notification
    notification.classList.add('active');
    notification.setAttribute('aria-hidden', 'false');
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        hideNotification();
    }, 5000);
    
    // Close button
    q('.notification-close').addEventListener('click', hideNotification);
    
    function hideNotification() {
        notification.classList.remove('active');
        notification.setAttribute('aria-hidden', 'true');
    }
}

// Back to top button
function initializeBackToTop() {
    const backToTopBtn = q('.back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

// Project modal details
function initializeProjectModals() {
    const detailsTriggers = qa('.project-details-trigger');
    
    if (!detailsTriggers.length) return;
    
    detailsTriggers.forEach(trigger => {
        trigger.addEventListener('click', e => {
            e.preventDefault();
            
            const modalId = trigger.getAttribute('href');
            const modal = q(modalId);
            
            if (!modal) return;
            
            // Show modal
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            
            // Populate modal content (this would pull from a data source in a real implementation)
            const projectTitle = trigger.closest('.project-card').querySelector('.project-title').textContent;
            const modalTitle = q('h2', modal);
            if (modalTitle) modalTitle.textContent = projectTitle;
            
            // Get project ID from modal ID
            const projectId = modalId.replace('#', '').replace('-modal', '');
            
            // Example modal content (in a real implementation, this would come from a data source)
            const modalContent = getProjectDetails(projectId);
            q('.modal-body', modal).innerHTML = modalContent;
            
            // Close button
            q('.modal-close', modal).addEventListener('click', () => {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
            });
            
            // Close on background click
            modal.addEventListener('click', e => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    modal.setAttribute('aria-hidden', 'true');
                }
            });
            
            // Close on Escape key
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    modal.classList.remove('active');
                    modal.setAttribute('aria-hidden', 'true');
                }
            });
        });
    });
    
    // Helper function to get project details content
    function getProjectDetails(projectId) {
        // In a real implementation, this would come from a database or API
        const projectDetails = {
            'project1': `
                <div class="project-detail-images">
                    <img src="assets/images/project1-detail1.jpg" alt="AI Enemy Behavior System - Detail 1">
                    <img src="assets/images/project1-detail2.jpg" alt="AI Enemy Behavior System - Detail 2">
                </div>
                <h3>Project Overview</h3>
                <p>This advanced AI system creates intelligent and dynamic enemy behaviors in a first-person shooter game. The system uses a modular approach with a finite state machine at its core, allowing for complex decision-making.</p>
                <h3>Technical Highlights</h3>
                <ul>
                    <li>Implemented perception system using raycasts and sound detection</li>
                    <li>Created a modular state machine allowing for easy addition of new behaviors</li>
                    <li>Developed tactical positioning algorithms for group coordination</li>
                    <li>Optimized performance with LOD-based behavior complexity</li>
                </ul>
                <h3>Development Challenges</h3>
                <p>One of the main challenges was balancing computational efficiency with realistic behaviors. I solved this by implementing a dynamic LOD system that adjusts AI complexity based on distance and visibility to the player.</p>
                <h3>Technologies Used</h3>
                <p>Unreal Engine 5, C++, Blueprints, Behavior Trees, Environment Query System</p>
                <div class="project-links">
                    <a href="https://github.com/Vinfried/EnemyAI" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                    <a href="#gameplay" class="btn btn-secondary">Watch Demo</a>
                </div>
            `,
            // Additional project details would be defined here
        };
        
        return projectDetails[projectId] || '<p>Project details not available.</p>';
    }
}

// Skill animation - starts animation when the element is in viewport
window.addEventListener('load', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    });
    
    qa('.skill-progress').forEach(skill => {
        skill.style.animationPlayState = 'paused';
        observer.observe(skill);
    });
});
// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Check for saved theme or prefer-color-scheme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

// Initialize theme based on saved preference or system preference
function initializeTheme() {
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
}

function setLightTheme() {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.style.color = '#fbbf24';
    localStorage.setItem('theme', 'light');
    
    themeToggle.style.animation = 'themeSwitch 0.3s ease';
    setTimeout(() => {
        themeToggle.style.animation = '';
    }, 300);
}

function setDarkTheme() {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.style.color = '#ffffff';
    localStorage.setItem('theme', 'dark');
    
    themeToggle.style.animation = 'themeSwitch 0.3s ease';
    setTimeout(() => {
        themeToggle.style.animation = '';
    }, 300);
}

// Initialize theme
initializeTheme();

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const mobileNav = document.getElementById('mobileNav');

mobileMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileNav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('nav-active');
            });
            this.classList.add('nav-active');
            
            // Close mobile menu if open
            if (!mobileNav.classList.contains('hidden')) {
                mobileNav.classList.add('hidden');
            }
        }
    });
});

// Skill Filter Functionality
const skillTabs = document.querySelectorAll('#skillTabs button');
const skillCards = document.querySelectorAll('.skill-card');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        skillTabs.forEach(t => {
            if (t === tab) {
                t.classList.add('tab-active');
                t.classList.remove('glass-card');
            } else {
                t.classList.remove('tab-active');
                t.classList.add('glass-card');
            }
        });
        
        // Filter skills
        const filter = tab.getAttribute('data-filter');
        
        skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                // Add animation for appearing cards
                card.style.animation = 'slideUp 0.5s ease-out';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Resume Tabs Functionality
const resumeTabs = document.querySelectorAll('#resumeTabsContainer button');
const resumeTabContents = document.querySelectorAll('.resume-tab-content');

resumeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        resumeTabs.forEach(t => {
            if (t === tab) {
                t.classList.add('tab-active');
                t.classList.remove('glass-card');
            } else {
                t.classList.remove('tab-active');
                t.classList.add('glass-card');
            }
        });
        
        // Show selected tab content
        const tabId = tab.getAttribute('data-tab');
        resumeTabContents.forEach(content => {
            if (content.id === `${tabId}-tab`) {
                content.classList.add('active');
                content.style.animation = 'fadeIn 0.5s ease-in-out';
            } else {
                content.classList.remove('active');
            }
        });
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
        button.classList.remove('animate-pulse-glow');
        button.classList.add('bg-gradient-to-r', 'from-green-500', 'to-teal-500');
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-teal-500');
            button.classList.add('animate-pulse-glow');
        }, 3000);
    });
}

// Ripple effect for buttons
document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
            z-index: 10;
        `;
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('nav-active');
                }
            });
        }
    });
});

// Initialize first section as visible
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#home').classList.add('section-visible');
    document.querySelector('#home').classList.remove('section-hidden');
    
    // Add animation classes to elements with animate-* classes
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
        // The animation classes are already applied in the HTML
        // This ensures they work properly
    });
});

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileNav.classList.add('hidden');
    }
});

// Prevent default behavior for anchor links with empty href
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
    }
});

// Smooth scroll to top when clicking logo
document.querySelector('a[href="#home"]').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.5s ease-in-out';
    });
});

// Form input focus effects
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Add hover effect for skill cards on touch devices
if ('ontouchstart' in window) {
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('touchend', function() {
            this.classList.remove('hover');
        });
    });
}

// Initialize tooltips if needed
function initTooltips() {
    // Add tooltip functionality here if needed
}

// Call initialization functions
initTooltips();

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLightTheme,
        setDarkTheme,
        initializeTheme
    };
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Check for saved theme or system preference
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
    
    // Add animation
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
    
    // Add animation
    themeToggle.style.animation = 'themeSwitch 0.3s ease';
    setTimeout(() => {
        themeToggle.style.animation = '';
    }, 300);
}

// Initialize theme on page load
initializeTheme();

// Toggle theme on button click
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
        
        // Show success message
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
        button.classList.remove('animate-pulse-glow');
        button.classList.add('bg-gradient-to-r', 'from-green-500', 'to-purple-500');
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('bg-gradient-to-r', 'from-green-500', 'to-purple-500');
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
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.classList.add('section-visible');
        homeSection.classList.remove('section-hidden');
    }
});

// Handle certificate iframe loading
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('error', function() {
        this.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = 'w-full h-64 bg-slate-800 flex items-center justify-center text-slate-400';
        fallback.innerHTML = '<i class="fas fa-external-link-alt mr-2"></i> Click to view certificate';
        this.parentNode.appendChild(fallback);
    });
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.querySelectorAll('.hover\\:gradient-border').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('gradient-border');
        });
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('gradient-border');
            }, 200);
        });
    });
}

// Prevent default behavior for anchor links with empty href
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
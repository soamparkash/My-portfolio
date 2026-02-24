/* Base Styles */
* {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0f172a;
    color: #f8fafc;
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
}

body.light {
    background-color: #f8fafc;
    color: #1e293b;
}

/* Glass Card Effect */
.glass-card {
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.light .glass-card {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(203, 213, 225, 0.3);
}

/* Gradient Text */
.gradient-text {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #6366f1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.light .gradient-text {
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #4f46e5 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

/* Gradient Border */
.gradient-border {
    position: relative;
    border: double 2px transparent;
    border-radius: 12px;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    background-image: linear-gradient(#0f172a, #0f172a), linear-gradient(135deg, #3b82f6, #8b5cf6);
}

.light .gradient-border {
    background-image: linear-gradient(#f8fafc, #f8fafc), linear-gradient(135deg, #2563eb, #7c3aed);
}

/* Skill Progress Bar */
.skill-progress {
    height: 8px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    width: 100%;
}

.light .skill-progress {
    background: rgba(0, 0, 0, 0.1);
}

.progress-fill {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
}

/* Keyframe Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { 
        transform: translateY(20px); 
        opacity: 0; 
    }
    to { 
        transform: translateY(0); 
        opacity: 1; 
    }
}

@keyframes pulseGlow {
    0%, 100% { 
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); 
    }
    50% { 
        box-shadow: 0 0 30px rgba(139, 92, 246, 0.6); 
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes dataFlow {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
}

@keyframes themeSwitch {
    0% { 
        transform: scale(0.8) rotate(-30deg); 
        opacity: 0.5; 
    }
    100% { 
        transform: scale(1) rotate(0deg); 
        opacity: 1; 
    }
}

@keyframes ripple {
    0% { 
        transform: scale(0, 0); 
        opacity: 0.5; 
    }
    100% { 
        transform: scale(20, 20); 
        opacity: 0; 
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
    }
    50% {
        transform: scale(1.1);
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
    }
}

/* Animation Classes */
.animate-fade-in {
    animation: fadeIn 0.5s ease-in-out;
}

.animate-slide-up {
    animation: slideUp 0.6s ease-out;
}

.animate-pulse-glow {
    animation: pulseGlow 2s infinite;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-data-flow {
    animation: dataFlow 3s ease infinite;
}

.animate-theme-switch {
    animation: themeSwitch 0.3s ease;
}

.animate-pulse {
    animation: pulse 2s infinite;
}

/* Tab Active State */
.tab-active {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    font-weight: 600;
}

.light .tab-active {
    background: linear-gradient(135deg, #2563eb, #7c3aed);
}

/* Navigation Active State */
.nav-active {
    color: #8b5cf6;
    font-weight: 600;
}

.light .nav-active {
    color: #7c3aed;
}

/* Timeline Dot */
.timeline-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: 3px solid #0f172a;
}

.light .timeline-dot {
    border: 3px solid #f8fafc;
}

/* Page Transition */
.page-transition {
    animation: slideUp 0.5s ease-out;
}

/* Ripple Effect */
.ripple {
    position: relative;
    overflow: hidden;
}

.ripple:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
}

.ripple:focus:not(:active)::after {
    animation: ripple 1s ease-out;
}

/* Certificate Iframe */
.certificate-iframe {
    filter: sepia(0.2) brightness(0.9);
    transition: filter 0.3s ease;
    width: 100%;
    height: 100%;
    border: none;
}

.light .certificate-iframe {
    filter: sepia(0.1) brightness(1.05);
}

.certificate-card:hover .certificate-iframe {
    filter: sepia(0) brightness(1);
}

/* Section Visibility */
.section-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.section-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Code Font */
.code-font {
    font-family: 'Fira Code', monospace;
}

/* Skill Description */
.skill-description {
    color: #94a3b8;
    transition: color 0.3s ease;
}

.dark .skill-description {
    color: #cbd5e1;
}

.light .skill-description {
    color: #475569;
}

/* Skill Card Hidden State */
.skill-card.hidden {
    display: none;
}

/* Theme Toggle Button */
.theme-toggle-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: none;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.theme-toggle-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
}

.theme-toggle-btn:active {
    transform: scale(0.95);
}

.theme-toggle-btn .icon {
    font-size: 1.5rem;
    color: white;
    transition: all 0.3s ease;
}

.light .theme-toggle-btn {
    background: linear-gradient(135deg, #dbeafe, #c7d2fe);
    box-shadow: 0 4px 15px rgba(219, 234, 254, 0.3);
}

.light .theme-toggle-btn:hover {
    box-shadow: 0 6px 20px rgba(219, 234, 254, 0.4);
}

.theme-toggle-btn::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #3b82f6);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.theme-toggle-btn:hover::after {
    opacity: 1;
}

/* Data Particle Animation */
.data-particle {
    position: fixed;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    opacity: 0.2;
    animation: float 8s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
}

/* Resume Tab Content */
.resume-tab-content {
    display: none;
    animation: fadeIn 0.5s ease-in-out;
}

.resume-tab-content.active {
    display: block;
}

/* Resume Item Hover */
.resume-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.resume-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
}

/* Background Gradients */
.bg-data-gradient {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #6366f1 100%);
}

/* Responsive Utilities */
@media (max-width: 768px) {
    .timeline-dot {
        left: 1rem;
    }
    
    .certificate-iframe {
        height: 200px;
    }
}

/* Form Input Focus */
input:focus, textarea:focus {
    outline: none;
    ring: 2px solid #8b5cf6;
}

/* Smooth Transitions */
a, button {
    transition: all 0.3s ease;
}

/* Container Max Width */
.max-w-7xl {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

/* Z-index layering */
.z-50 {
    z-index: 50;
}

/* Mobile Menu */
#mobileNav {
    transition: all 0.3s ease;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #1e293b;
}

.light ::-webkit-scrollbar-track {
    background: #e2e8f0;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #2563eb, #7c3aed);
}

/* Updated Timeline Styles - Enhanced for better visibility */

/* Timeline Container */
#education .relative {
    position: relative;
    padding: 2rem 0;
}

/* Timeline Line - Enhanced */
#education .absolute.left-8 {
    left: 2rem;
    width: 4px;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    border-radius: 4px;
}

@media (min-width: 768px) {
    #education .absolute.left-8 {
        left: 50%;
        transform: translateX(-50%);
    }
}

/* Timeline Dot - Enhanced */
#education .timeline-dot {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border: 4px solid #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
    animation: pulse 2s infinite;
    z-index: 20;
}

.dark #education .timeline-dot {
    border-color: #0f172a;
}

/* Timeline Cards - Enhanced for better visibility */
#education .glass-card {
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease;
}

#education .glass-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
    border-color: rgba(139, 92, 246, 0.3);
}

.light #education .glass-card {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Text Colors - Ensuring visibility in dark mode */
#education h3 {
    color: #ffffff !important;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.light #education h3 {
    color: #1e293b !important;
    text-shadow: none;
}

#education p {
    color: #e2e8f0 !important;
}

.light #education p {
    color: #334155 !important;
}

/* Date and location text */
#education .text-blue-300,
#education .text-purple-300,
#education .text-pink-300,
#education .text-orange-300 {
    color: #93c5fd !important;
    font-weight: 600;
}

.light #education .text-blue-300,
.light #education .text-purple-300,
.light #education .text-pink-300,
.light #education .text-orange-300 {
    color: #2563eb !important;
}

/* Percentage badges */
#education .bg-purple-500\/20,
#education .bg-pink-500\/20,
#education .bg-orange-500\/20 {
    background: rgba(139, 92, 246, 0.2);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

#education .bg-purple-500\/20 span,
#education .bg-pink-500\/20 span,
#education .bg-orange-500\/20 span {
    color: #ffffff !important;
    font-weight: 700;
}

.light #education .bg-purple-500\/20 span,
.light #education .bg-pink-500\/20 span,
.light #education .bg-orange-500\/20 span {
    color: #1e293b !important;
}

/* Skill tags in timeline */
#education .bg-blue-500\/20,
#education .bg-purple-500\/20,
#education .bg-pink-500\/20,
#education .bg-green-500\/20 {
    background: rgba(59, 130, 246, 0.15);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

#education .bg-blue-500\/20 span,
#education .bg-purple-500\/20 span,
#education .bg-pink-500\/20 span,
#education .bg-green-500\/20 span {
    color: #ffffff !important;
}

.light #education .bg-blue-500\/20 span,
.light #education .bg-purple-500\/20 span,
.light #education .bg-pink-500\/20 span,
.light #education .bg-green-500\/20 span {
    color: #1e293b !important;
}

/* Border colors for timeline cards */
#education .border-l-4.border-blue-500 {
    border-left-color: #3b82f6;
}

#education .border-r-4.border-purple-500 {
    border-right-color: #8b5cf6;
}

#education .border-l-4.border-purple-500 {
    border-left-color: #8b5cf6;
}

#education .border-r-4.border-pink-500 {
    border-right-color: #ec4899;
}

#education .border-l-4.border-pink-500 {
    border-left-color: #ec4899;
}

#education .border-r-4.border-orange-500 {
    border-right-color: #f97316;
}

/* Icon colors */
#education .fa-calendar-alt {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

/* Spacing adjustments */
#education .ml-16 {
    margin-left: 4rem;
}

@media (min-width: 768px) {
    #education .ml-16 {
        margin-left: 0;
    }
    
    #education .space-y-16 {
        space-y: 4rem;
    }
    
    #education .md\\:space-y-24 {
        space-y: 6rem;
    }
}

/* Hover effects for cards */
#education .hover\\:shadow-2xl:hover {
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.5);
}

/* Ensure text is always visible */
#education .text-white {
    color: #ffffff !important;
}

.light #education .text-white {
    color: #1e293b !important;
}

/* Background overlay for better text contrast */
#education .glass-card {
    position: relative;
    overflow: hidden;
}

#education .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent);
    pointer-events: none;
}

// Project data based on your CV
const projects = [
  {
    title: "🚨 911 Emergency Call Analysis",
    description: "Cleaned and processed 911 emergency call data using Python, resolving missing/inconsistent values and identifying key trends by call type, location, time, and priority. Built interactive Power BI dashboards with maps, filters, and drill-down visuals, improving analysis efficiency and data-driven decision-making accuracy significantly.",
    tech: ["Python", "Power BI", "EDA", "Data Visualization"],
    githubLink: "https://github.com/soamparkash/911-call-analysis"
  },
  {
    title: "🚗 Traffic Crash Analysis Dashboard",
    description: "Analyzed 7 years of accident data to identify high-risk locations, peak timings, and key contributing factors, delivering actionable insights for safety planning. Built an interactive Excel dashboard using Pivot Tables, slicers, and charts, improving reporting efficiency and highlighting patterns related to over speeding, vehicle types, and road conditions.",
    tech: ["MS Excel", "Pivot Tables", "Data Storytelling", "Dashboard Design"],
    githubLink: "https://github.com/soamparkash/traffic-crash-analysis"
  },
  {
    title: "🤖 TECH-BOT | Full-stack Chatbot",
    description: "Designed and developed a functional chatbot with Python logic integrated into a clean, interactive web interface, demonstrating full-stack fundamentals and real-time response handling. Enhanced user experience and deployment readiness by organizing modular code on GitHub, improving maintainability and showcasing practical development skills.",
    tech: ["Python", "HTML/CSS/JS", "Flask", "GitHub"],
    githubLink: "https://github.com/soamparkash/tech-bot"
  }
];

// Certifications data
const certifications = [
  { name: "Social Networks", issuer: "NPTEL", icon: "fab fa-python", date: "Nov'25" },
  { name: "Data Analytics Job Simulation", issuer: "Forage", icon: "fas fa-chart-line", date: "Sep'25" },
  { name: "Master Generative AI", issuer: "Udemy", icon: "fas fa-robot", date: "Aug'25" },
  { name: "Introduction to Hardware and Operating Systems", issuer: "Udemy", icon: "fas fa-microchip", date: "Sep'24" }
];

// Education data
const education = [
  {
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab",
    cgpa: "CGPA: 7.14",
    period: "Aug'23 – Present",
    location: "Phagwara, Punjab"
  },
  {
    degree: "Intermediate (PCM)",
    institution: "Indus Public School, Jind (Haryana)",
    percentage: "Percentage: 75%",
    period: "Mar'21 – May'22"
  },
  {
    degree: "Matriculation",
    institution: "Indus Public School, Jind",
    percentage: "Percentage: 85%",
    period: "Mar'19 – May'20"
  }
];

// Function to load projects dynamically
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map(project => `
      <div class="card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech">
          ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
        <a href="${project.githubLink}" target="_blank" class="card-link">
          View on GitHub <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `).join('');
  }
}

// Function to load certifications
function loadCertifications() {
  const certsGrid = document.getElementById('certsGrid');
  if (certsGrid) {
    certsGrid.innerHTML = certifications.map(cert => `
      <div class="cert-badge">
        <i class="${cert.icon}"></i>
        ${cert.name} | ${cert.issuer}
        <span style="font-size: 0.75rem; color: #14b8a6; margin-left: 6px;">${cert.date}</span>
      </div>
    `).join('');
  }
}

// Function to load education
function loadEducation() {
  const educationGrid = document.getElementById('educationGrid');
  if (educationGrid) {
    educationGrid.innerHTML = education.map(edu => `
      <div class="timeline-item">
        <h4>${edu.institution}</h4>
        <p>${edu.degree} | ${edu.cgpa || edu.percentage}</p>
        <div class="date">${edu.period} ${edu.location ? '| ' + edu.location : ''}</div>
      </div>
    `).join('');
  }
}

// Dark mode toggle functionality
function initDarkMode() {
  const toggleBtn = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
  }
}

// Resume download functionality
function initResumeDownload() {
  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Create a simple text resume or link to a PDF
      alert('Resume download feature: You can add your actual resume PDF file to the repository and link it here.\n\nFor now, you can view your CV details on this portfolio.');
      
      // Alternative: You can add a PDF file to your repo and link it:
      // window.open('resume.pdf', '_blank');
    });
  }
}

// Add smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Add animation on scroll
function initScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.card, .timeline-item, .cert-badge').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  loadCertifications();
  loadEducation();
  initDarkMode();
  initResumeDownload();
  initSmoothScroll();
  initScrollAnimation();
});

// Optional: Add console log to confirm script loaded
console.log('Portfolio script loaded successfully!');

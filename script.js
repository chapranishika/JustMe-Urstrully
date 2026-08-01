// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Header Scrollspy Navigation Active States
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        sections.forEach(sec => {
            let top = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            // Offset by 150px to trigger state change slightly before section reaches the top
            if (scrollPosition >= (top - 150) && scrollPosition < (top + height - 150)) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // Header Blur Effect on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Dark/Light Mode Theme Toggle
    const darkModeIcon = document.querySelector('#darkMode-icon');

    // Check saved theme in localStorage or default to system theme (dark)
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.body.classList.add('light-mode');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        document.body.classList.remove('light-mode');
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
    }

    darkModeIcon.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            darkModeIcon.classList.replace('bx-moon', 'bx-sun');
            localStorage.setItem('theme', 'light');
        } else {
            darkModeIcon.classList.replace('bx-sun', 'bx-moon');
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==========================================================================
    // ALL PROJECTS SECTION LOGIC
    // ==========================================================================
    const projectsGrid = document.querySelector('#projects-grid');
    const searchInput = document.querySelector('#project-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.querySelector('#project-modal');
    const modalContent = document.querySelector('#modal-project-content');
    const closeModalBtn = document.querySelector('.close-modal');

    let currentFilter = 'all';
    let currentSearch = '';

    // Render Projects Grid
    function renderProjects(filter = 'all', searchQuery = '') {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';
        
        const filteredProjects = projectsData.filter(proj => {
            const matchesFilter = filter === 'all' || proj.category === filter;
            const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 proj.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesFilter && matchesSearch;
        });

        if (filteredProjects.length === 0) {
            projectsGrid.innerHTML = `<div class="no-projects">No projects found matching "${searchQuery}".</div>`;
            return;
        }

        filteredProjects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-id', proj.id);
            
            const techBadges = proj.tags.map(t => `<span>${t}</span>`).join('');
            const githubLinkHTML = proj.github 
                ? `<a href="${proj.github}" target="_blank" class="card-github-link" title="View Source Code"><i class='bx bxl-github'></i></a>` 
                : '';
            
            card.innerHTML = `
                <div class="project-card-header">
                    <i class='bx ${proj.icon}'></i>
                    <span class="project-card-category">${proj.category.toUpperCase()}</span>
                </div>
                <h3>${proj.title}</h3>
                <p>${proj.summary}</p>
                <div class="project-card-tech">${techBadges}</div>
                <div class="project-card-actions">
                    <button class="view-details-btn btn" data-id="${proj.id}">Read Details</button>
                    ${githubLinkHTML}
                </div>
            `;
            
            projectsGrid.appendChild(card);
        });

        // Bind event listeners to details button inside projects grid only
        projectsGrid.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                openModal(id);
            });
        });
    }

    // Modal Functions
    function openModal(id) {
        if (!modal || !modalContent) return;
        const project = projectsData.find(p => p.id === id);
        if (!project) return;

        const techBadges = project.tags.map(t => `<span>${t}</span>`).join('');
        const bulletList = project.bullets.map(b => `<li><i class='bx bx-check-square'></i><span>${b}</span></li>`).join('');
        const githubBtn = project.github 
            ? `<a href="${project.github}" target="_blank" class="modal-github-btn btn"><i class='bx bxl-github'></i> View Code</a>` 
            : '';

        modalContent.innerHTML = `
            <div class="modal-header-row">
                <span class="modal-project-category">${project.category.toUpperCase()}</span>
                ${githubBtn}
            </div>
            <h2>${project.title}</h2>
            <div class="modal-project-tech">${techBadges}</div>
            <hr>
            <ul class="modal-bullets-list">
                ${bulletList}
            </ul>
        `;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scroll
        }
    }

    // Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            renderProjects(currentFilter, currentSearch);
        });
    }

    // Filter button listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            renderProjects(currentFilter, currentSearch);
        });
    });

    // Modal close listeners
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Bind event listeners to static slider details buttons once
    document.querySelectorAll('.slider .view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            openModal(id);
        });
    });

    // Initialize Grid on load
    renderProjects();



    // Custom Cursor tracking
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot) {
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        }
    });

    function updateRing() {
        if (ringX === -100 && mouseX !== -100) {
            ringX = mouseX;
            ringY = mouseY;
        } else {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
        }
        
        if (cursorRing) {
            cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
        requestAnimationFrame(updateRing);
    }
    updateRing();

    // Event delegation for expanding cursor ring on hover
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (
            target.closest('a') || 
            target.closest('button') || 
            target.closest('.clickable') || 
            target.closest('.slides') || 
            target.closest('.portfolio-prev') || 
            target.closest('.portfolio-next') ||
            target.closest('.project-card') ||
            target.closest('.filter-btn')
        ) {
            if (cursorRing) {
                cursorRing.classList.add('cursor-ring--active');
            }
        } else {
            if (cursorRing) {
                cursorRing.classList.remove('cursor-ring--active');
            }
        }
    });
});

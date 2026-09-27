const i18n = {
  en: {
    nav_about: "Profile",
    nav_projects: "Projects",
        nav_contact: "Contact",

    hero_eyebrow: "SOFTWARE DEVELOPMENT · BACKEND · DEVOPS · AUTOMATION",
    hero_role: "Software Developer · Backend Development · DevOps & Automation",
    hero_summary: "Software developer and MSc student in Machine Learning and Big Data with hands-on experience building backend services, containerized systems, desktop applications and distributed data pipelines. Strong in Python, FastAPI, Docker, Linux, SQL, GitHub Actions and Apache Spark, with practical experience taking software from implementation through testing and deployment.",
    cta_projects: "View selected projects",
    availability: "Based in Naples, Italy · Software Development · Backend · DevOps",

    focus_label: "PROFILE",
    focus_text: "MSc in Applied Computer Science, Machine Learning and Big Data at Università degli Studi di Napoli Parthenope. Focused on backend development, DevOps, automation and distributed data systems.",

    metric_projects: "Selected projects",
    metric_areas: "Machine Learning & Big Data",
    metric_ci: "Automated validation",
    metric_languages: "Portfolio languages",

    projects_eyebrow: "SELECTED WORK",
    projects_title: "Projects built around real problems",
    projects_intro: "Selected work across backend development, desktop software, connected applications and DevOps, with emphasis on practical implementation, maintainability, testing and deployment.",

    filter_all: "All",
    filter_web: "Sviluppo Web",
    filter_desktop: "Desktop Applications",
    filter_mobile: "Mobile & Wearables",
    filter_devops: "DevOps & Infrastructure",



    contact_eyebrow: "CONTACT",
    contact_title: "Professional contact",
    contact_text: "Based in Naples, Italy. Software development, backend systems, DevOps and automation.",
    contact_email_label: "Email",
    contact_phone_label: "Telefono",
    footer_text: "Software Development · Backend · DevOps · Automation",

    view_project: "View project",
    project_overview: "Project overview",
    engineering_highlights: "Engineering highlights",
    project_gallery: "Project evidence & screenshots",
    visit_project: "Open project",
    source_code: "View GitHub",
    private_project: "Private / internal software"
  },

  it: {
    nav_about: "Profilo",
    nav_projects: "Progetti",
        nav_contact: "Contatti",

    hero_eyebrow: "SOFTWARE DEVELOPMENT · BACKEND · DEVOPS · AUTOMATION",
    hero_role: "Software Developer · Backend Development · DevOps & Automation",
    hero_summary: "Sviluppatore software e studente MSc in Machine Learning e Big Data con esperienza pratica nello sviluppo di servizi backend, sistemi containerizzati, applicazioni desktop e pipeline di dati distribuite. Competenze in Python, FastAPI, Docker, Linux, SQL, GitHub Actions e Apache Spark, con esperienza nel portare il software dall’implementazione ai test e al deployment.",
    cta_projects: "Vedi i progetti",
    availability: "Napoli, Italia · Sviluppo Software · Backend · DevOps",

    focus_label: "PROFILO",
    focus_text: "MSc in Applied Computer Science, Machine Learning e Big Data presso l’Università degli Studi di Napoli Parthenope. Focus su sviluppo backend, DevOps, automazione e sistemi di dati distribuiti.",

    metric_projects: "Progetti selezionati",
    metric_areas: "Machine Learning & Big Data",
    metric_ci: "Validazione automatica",
    metric_languages: "Lingue del portfolio",

    projects_eyebrow: "PROGETTI SELEZIONATI",
    projects_title: "Progetti costruiti intorno a problemi reali",
    projects_intro: "Una selezione di lavori tra sviluppo backend, software desktop, applicazioni connesse e DevOps, con attenzione a implementazione pratica, manutenibilità, test e deployment.",

    filter_all: "Tutti",
    filter_web: "Sviluppo Web",
    filter_desktop: "Applicazioni Desktop",
    filter_mobile: "Mobile & Wearable",
    filter_devops: "DevOps & Infrastructure",



    contact_eyebrow: "CONTATTI",
    contact_title: "Contatti professionali",
    contact_text: "Napoli, Italia. Sviluppo software, sistemi backend, DevOps e automazione.",
    contact_email_label: "Email",
    contact_phone_label: "Telefono",
    footer_text: "Software Development · Backend · DevOps · Automation",

    view_project: "Vedi progetto",
    project_overview: "Panoramica",
    engineering_highlights: "Dettagli tecnici",
    project_gallery: "Screenshot ed evidenze",
    visit_project: "Apri progetto",
    source_code: "Vedi GitHub",
    private_project: "Software privato / interno"
  }
};

const categories = {
  web: { en: "Web Development", it: "Sviluppo Web" },
  desktop: { en: "Desktop Applications", it: "Applicazioni Desktop" },
  mobile: { en: "Mobile & Wearables", it: "Mobile & Wearable" },
  devops: { en: "DevOps & Infrastructure", it: "DevOps & Infrastructure" }
};

const projects = [
  {
    id: 7,
    category: "devops",
    featured: true,
    title: {
      en: "DevOps System Status API",
      it: "DevOps System Status API"
    },
    shortDesc: {
      en: "Containerized monitoring API with CI and resilient multi-container delivery.",
      it: "API di monitoraggio containerizzata con CI e delivery multi-container resiliente."
    },
    kicker: {
      en: "Docker · Nginx · GitHub Actions",
      it: "Docker · Nginx · GitHub Actions"
    },
    platform: "DevOps / Linux",
    technologies: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "Python", "FastAPI", "Linux", "Git", "Pytest"],
    url: "https://github.com/stive08/devops-system-status-api",
    urlType: "github",
    images: [
      { src: "assets/devops/diagram.jpg", caption: { en: "Multi-container architecture", it: "Architettura multi-container" } },
      { src: "assets/devops/ci-success.jpg", caption: { en: "Successful GitHub Actions CI run", it: "Pipeline CI GitHub Actions completata" } },
      { src: "assets/devops/test-container.jpg", caption: { en: "Container integration job and validation steps", it: "Job di integrazione container e validazioni" } },
      { src: "assets/devops/healthy.png", caption: { en: "Healthy API and Nginx services", it: "Servizi API e Nginx healthy" } },
      { src: "assets/devops/api.png", caption: { en: "FastAPI OpenAPI / Swagger interface", it: "Interfaccia OpenAPI / Swagger di FastAPI" } },
      { src: "assets/devops/recovery.png", caption: { en: "Automatic container recovery verification", it: "Verifica del recovery automatico del container" } },
      { src: "assets/devops/github.jpg", caption: { en: "Public GitHub repository and project structure", it: "Repository GitHub pubblico e struttura del progetto" } }
    ],
    overview: {
      en: "A reproducible DevOps project built around a FastAPI system-status service. The application is packaged as a non-root Docker container, placed behind Nginx, isolated on an internal Compose network and continuously validated with GitHub Actions.",
      it: "Un progetto DevOps riproducibile costruito attorno a un servizio FastAPI per lo stato del sistema. L'applicazione viene eseguita in un container Docker non-root, posta dietro Nginx, isolata su una rete Compose interna e validata continuamente con GitHub Actions."
    },
    highlights: {
      en: [
        "Designed a two-container architecture where Nginx is the only host-facing entry point and FastAPI remains internal on the Docker network.",
        "Implemented Docker health checks, service-name DNS discovery, restart policies and verified automatic recovery after terminating the API process.",
        "Applied non-root execution, no-new-privileges, CPU/memory/PID limits, security headers and Docker log rotation.",
        "Built a GitHub Actions pipeline with Python tests followed by full container integration: Compose validation, build, startup, health waiting, API checks, Docker DNS verification and Nginx validation.",
        "Validated reproducibility from a completely separate clean Git clone before publishing the repository."
      ],
      it: [
        "Progettata un'architettura a due container in cui Nginx è l'unico punto di ingresso esposto e FastAPI resta interno alla rete Docker.",
        "Implementati health check Docker, service discovery tramite DNS, restart policy e verifica del recovery automatico dopo l'arresto del processo API.",
        "Applicati esecuzione non-root, no-new-privileges, limiti CPU/memoria/PID, security header e rotazione dei log Docker.",
        "Creata una pipeline GitHub Actions con test Python seguiti da integrazione container completa: validazione Compose, build, avvio, attesa health, test API, verifica DNS Docker e validazione Nginx.",
        "Verificata la riproducibilità partendo da un clone Git pulito e separato prima della pubblicazione."
      ]
    }
  },

  {
    id: 3,
    category: "web",
    title: {
      en: "Ramassage Enviro",
      it: "Ramassage Enviro"
    },
    shortDesc: {
      en: "Corporate website for environmental services and lead generation.",
      it: "Sito corporate per servizi ambientali e acquisizione contatti."
    },
    kicker: {
      en: "Corporate Web · Frontend",
      it: "Sito Corporate · Frontend"
    },
    platform: "Web",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "http://ramassageenviro.com/",
    urlType: "live",
    images: [
      { src: "assets/enviro_main.jpg", caption: { en: "Corporate landing page", it: "Landing page corporate" } },
      { src: "assets/enviro_1.jpg", caption: { en: "Service presentation", it: "Presentazione servizi" } },
      { src: "assets/enviro_2.jpg", caption: { en: "Business content", it: "Contenuti business" } },
      { src: "assets/enviro_3.jpg", caption: { en: "Responsive layout", it: "Layout responsive" } }
    ],
    overview: {
      en: "A lightweight corporate website created to present environmental services clearly and provide a professional digital contact point for prospective clients.",
      it: "Un sito corporate leggero creato per presentare con chiarezza servizi ambientali e offrire un punto di contatto digitale professionale ai potenziali clienti."
    },
    highlights: {
      en: [
        "Translated business services into a clear, structured web experience.",
        "Used responsive layouts and semantic content organization.",
        "Reduced unnecessary dependencies for a lightweight frontend.",
        "Designed contact and service sections around business enquiries."
      ],
      it: [
        "Tradotti i servizi aziendali in un'esperienza web chiara e strutturata.",
        "Utilizzati layout responsive e contenuti organizzati semanticamente.",
        "Ridotte le dipendenze non necessarie per mantenere il frontend leggero.",
        "Progettate sezioni contatto e servizi per facilitare le richieste commerciali."
      ]
    }
  },

  {
    id: 4,
    category: "desktop",
    title: {
      en: "Gynaecology Practice Management",
      it: "Gestionale per Studio Ginecologico"
    },
    shortDesc: {
      en: "Local clinical workflow software with patient management and medical-device integration.",
      it: "Software locale per workflow clinici, gestione pazienti e integrazione con dispositivi medici."
    },
    kicker: {
      en: "Desktop · Workflow Automation",
      it: "Desktop · Automazione Workflow"
    },
    platform: "Desktop",
    technologies: ["Python", "FastAPI", "pywebview", "SQLite", "HTML/CSS/JS", "DICOM"],
    url: null,
    urlType: "private",
    images: [
      { src: "assets/gyno_main.jpg", caption: { en: "Practice management interface", it: "Interfaccia gestionale dello studio" } },
      { src: "assets/gyno_1.jpg", caption: { en: "Patient workflow", it: "Workflow paziente" } },
      { src: "assets/gyno_2.jpg", caption: { en: "Clinical records interface", it: "Interfaccia cartelle cliniche" } },
      { src: "assets/gyno_3.jpg", caption: { en: "Operational dashboard", it: "Dashboard operativa" } }
    ],
    overview: {
      en: "A local desktop application designed around the day-to-day workflow of a gynaecology practice, connecting the doctor, secretary, patient records and medical imaging workflow.",
      it: "Un'applicazione desktop locale progettata sui flussi quotidiani di uno studio ginecologico, collegando medico, segreteria, cartelle pazienti e workflow di imaging medico."
    },
    highlights: {
      en: [
        "Built separate doctor and secretary workflows around a shared local data model.",
        "Implemented patient records, consultations and operational scheduling.",
        "Integrated local FastAPI services with a desktop pywebview interface.",
        "Worked on DICOM connectivity for GE Voluson ultrasound workflows."
      ],
      it: [
        "Realizzati workflow separati per medico e segreteria su un modello dati locale condiviso.",
        "Implementate cartelle pazienti, consultazioni e pianificazione operativa.",
        "Integrati servizi FastAPI locali con interfaccia desktop pywebview.",
        "Sviluppata integrazione DICOM per workflow con ecografo GE Voluson."
      ]
    }
  },

  {
    id: 6,
    category: "mobile",
    title: {
      en: "Health Guard Ecosystem",
      it: "Ecosistema Health Guard"
    },
    shortDesc: {
      en: "Connected mobile and wearable health-monitoring concept with SOS workflows.",
      it: "Concept mobile e wearable per monitoraggio salute e workflow SOS."
    },
    kicker: {
      en: "Android · Wear OS · Connected Devices",
      it: "Android · Wear OS · Dispositivi Connessi"
    },
    platform: "Mobile / Wearable",
    technologies: ["Android", "Wear OS", "Java / Kotlin", "Sensors", "Data Layer"],
    url: "https://play.google.com/store/apps/details?id=com.bharathvishal.healthguardmobile",
    urlType: "live",
    images: [
      { src: "assets/health_main.jpg", caption: { en: "Health Guard mobile experience", it: "Esperienza mobile Health Guard" } },
      { src: "assets/health_1.jpg", caption: { en: "Health monitoring interface", it: "Interfaccia monitoraggio salute" } },
      { src: "assets/health_2.jpg", caption: { en: "Connected-device workflow", it: "Workflow dispositivi connessi" } },
      { src: "assets/health_3.jpg", caption: { en: "Wearable integration", it: "Integrazione wearable" } }
    ],
    overview: {
      en: "A connected health and safety concept linking mobile and wearable devices to explore sensor data, health-status communication and emergency-response workflows.",
      it: "Un concept connesso per salute e sicurezza che collega dispositivi mobile e wearable per esplorare dati dei sensori, comunicazione dello stato e workflow di emergenza."
    },
    highlights: {
      en: [
        "Worked with Android and Wear OS communication concepts.",
        "Used wearable sensor data as part of health-monitoring workflows.",
        "Designed SOS-oriented interactions and device-to-device data exchange.",
        "Focused on interoperability between phone and wearable experiences."
      ],
      it: [
        "Lavorato con concetti di comunicazione tra Android e Wear OS.",
        "Utilizzati dati dei sensori wearable nei workflow di monitoraggio.",
        "Progettate interazioni orientate all'SOS e scambio dati tra dispositivi.",
        "Focus sull'interoperabilità tra smartphone e wearable."
      ]
    }
  }
];

let currentLanguage = "en";
let currentFilter = "all";
let lastFocusedElement = null;

const portfolioGrid = document.getElementById("portfolioGrid");
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

function t(key) {
  return i18n[currentLanguage][key] ?? i18n.en[key] ?? key;
}

function categoryLabel(category) {
  return categories[category]?.[currentLanguage] ?? categories[category]?.en ?? category;
}

function localized(value) {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[currentLanguage] ?? value.en ?? "";
}

function renderStaticTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (i18n[currentLanguage][key]) {
      element.textContent = i18n[currentLanguage][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });

  document.getElementById("projectCount").textContent = projects.length;
}

function buildProjectCard(project) {
  const article = document.createElement("article");
  article.className = `project-card reveal${project.featured ? " featured" : ""}`;
  article.dataset.category = project.category;
  article.dataset.projectId = String(project.id);
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `${localized(project.title)} — ${t("view_project")}`);

  const topTech = project.technologies.slice(0, project.featured ? 6 : 4);

  article.innerHTML = `
    <div class="project-media">
      <img
        src="${project.images[0].src}"
        alt="${localized(project.title)}"
        loading="lazy"
        onerror="this.closest('.project-media').classList.add('image-missing'); this.style.display='none';"
      >
      <span class="project-category">${categoryLabel(project.category)}</span>
    </div>

    <div class="project-body">
      <div class="project-kicker">${localized(project.kicker)}</div>
      <h3 class="project-title">${localized(project.title)}</h3>
      <p class="project-desc">${localized(project.shortDesc)}</p>

      <div class="project-tech">
        ${topTech.map((tech) => `<span class="tech-chip">${tech}</span>`).join("")}
      </div>

      <div class="project-footer">
        <span class="project-link-text">${t("view_project")}</span>
        <span class="project-arrow" aria-hidden="true">↗</span>
      </div>
    </div>
  `;

  const open = () => openProjectModal(project.id);
  article.addEventListener("click", open);
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

  return article;
}

function renderProjects() {
  portfolioGrid.innerHTML = "";

  projects.forEach((project) => {
    const card = buildProjectCard(project);
    if (currentFilter !== "all" && project.category !== currentFilter) {
      card.classList.add("hidden");
    }
    portfolioGrid.appendChild(card);
  });

  observeReveals();
}

function applyFilter(filter) {
  currentFilter = filter;

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    const matches = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("hidden", !matches);
  });
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  lastFocusedElement = document.activeElement;

  const actionButton = project.url
    ? `<a class="btn btn-primary" href="${project.url}" target="_blank" rel="noopener noreferrer">
         ${project.urlType === "github" ? t("source_code") : t("visit_project")}
         <span aria-hidden="true">↗</span>
       </a>`
    : `<span class="btn btn-secondary" aria-disabled="true">${t("private_project")}</span>`;

  modalBody.innerHTML = `
    <header class="modal-header">
      <div class="project-kicker">${categoryLabel(project.category)} · ${project.platform}</div>
      <h2 id="modalTitle">${localized(project.title)}</h2>
      <p>${localized(project.overview)}</p>

      <div class="modal-meta">
        ${project.technologies.map((tech) => `<span class="tech-chip">${tech}</span>`).join("")}
      </div>

      <div class="modal-actions">
        ${actionButton}
      </div>
    </header>

    <section class="modal-section">
      <h3>${t("engineering_highlights")}</h3>
      <ul class="highlight-list">
        ${project.highlights[currentLanguage].map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="modal-section">
      <h3>${t("project_gallery")}</h3>
      <div class="modal-gallery">
        ${project.images.map((image, index) => `
          <button
            class="gallery-item"
            type="button"
            data-image="${image.src}"
            data-caption="${localized(image.caption).replace(/"/g, "&quot;")}"
            aria-label="${localized(image.caption)}"
          >
            <img
              src="${image.src}"
              alt="${localized(image.caption)}"
              loading="${index < 2 ? "eager" : "lazy"}"
              onerror="this.closest('.gallery-item').style.display='none';"
            >
          </button>
        `).join("")}
      </div>
    </section>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modal.querySelector(".modal-close").focus();

  modalBody.querySelectorAll(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(button.dataset.image, button.dataset.caption);
    });
  });
}

function closeProjectModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox.classList.contains("open")) {
      closeLightbox();
    } else if (modal.classList.contains("open")) {
      closeProjectModal();
    }
  }
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    localStorage.setItem("portfolio-language", currentLanguage);

    renderStaticTranslations();
    renderProjects();

    if (modal.classList.contains("open")) {
      closeProjectModal();
    }
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 8);
});

let revealObserver;

function observeReveals() {
  if (revealObserver) revealObserver.disconnect();

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

function init() {
  const savedLanguage = localStorage.getItem("portfolio-language");
  currentLanguage = savedLanguage === "it" ? "it" : "en";

  document.getElementById("year").textContent = new Date().getFullYear();

  renderStaticTranslations();
  renderProjects();
  applyFilter("all");
  observeReveals();
}

init();

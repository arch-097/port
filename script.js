const i18n = {
  en: {
    nav_about: "Profile",
    stack_label: "CORE STACK",
    go_top: "Go to top",
    primary_navigation: "Primary navigation",
    language_label: "Language",
    stack_aria: "Core technology stack",
    portfolio_summary: "Portfolio summary",
    filter_projects: "Filter projects",
    page_description: "Portfolio of Ouassim Abdelmoudjib Tlili — software engineering, machine learning and automation, with web and desktop applications, backend services and data pipelines.",
    nav_projects: "Projects",
        nav_contact: "Contact",

    hero_eyebrow: "SOFTWARE ENGINEER · MACHINE LEARNING & AUTOMATION",
    hero_role: "Software Engineer | Machine Learning & Automation",
    hero_summary: "Experience in software development, machine learning, and automation, working with Python, C#, FastAPI, Docker, Linux, SQL, GitHub Actions, and Apache Spark. Projects range from web and desktop applications to backend services and data pipelines, covering development, testing, and deployment.",
    cta_projects: "View selected projects",
    availability: "Based in Naples, Italy",

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
    filter_web: "Web Development",
    filter_desktop: "Desktop Applications",
    filter_mobile: "Mobile & Wearables",
    filter_devops: "DevOps & Infrastructure",



    contact_eyebrow: "CONTACT",
    contact_title: "Contact",
    contact_text: "Based in Naples, Italy.",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    footer_text: "Software Engineer · Machine Learning & Automation",

    view_project: "View project",
    project_overview: "Project overview",
    engineering_highlights: "Engineering highlights",
    project_gallery: "Project evidence & screenshots",
    visit_project: "Open project",
    source_code: "View GitHub",
    private_project: "Private / internal software",
    close_project: "Close project",
    close_image: "Close image",
    open_navigation: "Open navigation",
    close_navigation: "Close navigation"
  },

  it: {
    nav_about: "Profilo",
    stack_label: "STACK PRINCIPALE",
    go_top: "Torna all’inizio",
    primary_navigation: "Navigazione principale",
    language_label: "Lingua",
    stack_aria: "Tecnologie principali",
    portfolio_summary: "Riepilogo del portfolio",
    filter_projects: "Filtra i progetti",
    page_description: "Portfolio di Ouassim Abdelmoudjib Tlili — ingegneria del software, machine learning e automazione, con applicazioni web e desktop, servizi backend e pipeline di dati.",
    nav_projects: "Progetti",
        nav_contact: "Contatti",

    hero_eyebrow: "SOFTWARE ENGINEER · MACHINE LEARNING & AUTOMATION",
    hero_role: "Software Engineer | Machine Learning & Automation",
    hero_summary: "Esperienza nello sviluppo software, nel machine learning e nell’automazione, utilizzando Python, C#, FastAPI, Docker, Linux, SQL, GitHub Actions e Apache Spark. I progetti spaziano da applicazioni web e desktop a servizi backend e pipeline di dati, coprendo sviluppo, test e deployment.",
    cta_projects: "Vedi i progetti",
    availability: "Napoli, Italia",

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
    filter_devops: "DevOps e Infrastruttura",



    contact_eyebrow: "CONTATTI",
    contact_title: "Contatti",
    contact_text: "Napoli, Italia.",
    contact_email_label: "Email",
    contact_phone_label: "Telefono",
    footer_text: "Software Engineer · Machine Learning & Automation",

    view_project: "Vedi progetto",
    project_overview: "Panoramica",
    engineering_highlights: "Dettagli tecnici",
    project_gallery: "Screenshot ed evidenze",
    visit_project: "Apri progetto",
    source_code: "Vedi GitHub",
    private_project: "Software privato / interno",
    close_project: "Chiudi progetto",
    close_image: "Chiudi immagine",
    open_navigation: "Apri navigazione",
    close_navigation: "Chiudi navigazione"
  }
};

const categories = {
  web: { en: "Web Development", it: "Sviluppo Web" },
  desktop: { en: "Desktop Applications", it: "Applicazioni Desktop" },
  mobile: { en: "Mobile & Wearables", it: "Mobile & Wearable" },
  devops: { en: "DevOps & Infrastructure", it: "DevOps e Infrastruttura" }
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
      { src: "assets/devops/recovery.png", caption: { en: "Automatic container recovery verification", it: "Verifica del recovery automatico del container" } }
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
      en: "WordPress corporate website for environmental services and lead generation.",
      it: "Sito corporate WordPress per servizi ambientali e acquisizione contatti."
    },
    kicker: {
      en: "Corporate Web · WordPress",
      it: "Sito Corporate · WordPress"
    },
    platform: "WordPress",
    technologies: ["WordPress"],
    url: "http://ramassageenviro.com/",
    urlType: "live",
    images: [
      { src: "assets/enviro_main.jpg", caption: { en: "Corporate landing page", it: "Landing page corporate" } },
      { src: "assets/enviro_1.jpg", caption: { en: "Service presentation", it: "Presentazione servizi" } },
      { src: "assets/enviro_2.jpg", caption: { en: "Business content", it: "Contenuti business" } },
      { src: "assets/enviro_3.jpg", caption: { en: "Responsive layout", it: "Layout responsive" } }
    ],
    overview: {
      en: "A corporate website built with WordPress to present environmental services clearly and provide a professional digital contact point for prospective clients.",
      it: "Un sito corporate realizzato con WordPress per presentare con chiarezza servizi ambientali e offrire un punto di contatto digitale professionale ai potenziali clienti."
    },
    highlights: {
      en: [
        "Translated business services into a clear, structured web experience.",
        "Used responsive layouts and semantic content organization.",
        "Built the corporate website using WordPress.",
        "Designed contact and service sections around business enquiries."
      ],
      it: [
        "Tradotti i servizi aziendali in un'esperienza web chiara e strutturata.",
        "Utilizzati layout responsive e contenuti organizzati semanticamente.",
        "Realizzato il sito corporate utilizzando WordPress.",
        "Progettate sezioni contatto e servizi per facilitare le richieste commerciali."
      ]
    }
  },

  {
    "id": 8,
    "category": "desktop",
    "title": {
      "en": "VetMesh — Veterinary Clinic Management",
      "it": "VetMesh — Gestionale per Cliniche Veterinarie"
    },
    "shortDesc": {
      "en": "Windows clinic software connecting doctor and secretary workflows, animal records, billing and secure local-network synchronization.",
      "it": "Software Windows per cliniche veterinarie con workflow medico e segreteria, cartelle animali, fatturazione e sincronizzazione sicura in rete locale."
    },
    "kicker": {
      "en": "Desktop Applications · Veterinary Software",
      "it": "Applicazioni Desktop · Software Veterinario"
    },
    "platform": "Windows",
    "technologies": [
      "C#",
      ".NET 10",
      "Avalonia UI",
      "XAML",
      "SQLite",
      "CommunityToolkit.Mvvm",
      "TCP",
      "mDNS/DNS-SD",
      "AES-GCM",
      "FlashCap"
    ],
    "url": null,
    "urlType": "private",
    "images": [
      {
        "src": "assets/historiquemedicalvet.png",
        "caption": {
          "en": "VetMesh — animal medical history and care records",
          "it": "VetMesh — storia clinica e trattamenti degli animali"
        }
      },
      {
        "src": "assets/modiferpatientvet.png",
        "caption": {
          "en": "VetMesh — animal patient record editor",
          "it": "VetMesh — modifica della scheda paziente animale"
        }
      }
    ],
    "overview": {
      "en": "A Windows desktop application built around the daily workflow of a veterinary clinic. VetMesh connects dedicated doctor and secretary applications, bringing together client and animal records, medical histories, appointments, waiting-room management, stays, billing and payments. Built with C# and .NET 10, using Avalonia UI with XAML and an MVVM architecture. Data is stored locally in SQLite, with encrypted synchronization between paired computers on the clinic’s network and queued updates when a workstation is offline.",
      "it": "Un’applicazione desktop Windows costruita attorno al lavoro quotidiano di una clinica veterinaria. VetMesh collega applicazioni dedicate al medico e alla segreteria, riunendo anagrafiche clienti e animali, storie cliniche, appuntamenti, sala d’attesa, degenze, fatturazione e pagamenti. Sviluppata in C# e .NET 10 con Avalonia UI, XAML e architettura MVVM. I dati sono salvati localmente in SQLite, con sincronizzazione cifrata tra computer associati sulla rete della clinica e aggiornamenti in coda quando una postazione è offline."
    },
    "highlights": {
      "en": [
        "Built separate doctor and secretary workflows with role-specific controls and shared clinic data.",
        "Implemented detailed patient histories covering consultations, vaccinations, deworming, interventions, measurements and stays.",
        "Developed billing, payment confirmation, client credit/debt management and daily financial reporting.",
        "Added local-network discovery, secure device pairing and synchronization that resumes after reconnection.",
        "Integrated webcam photo capture, password-encrypted backups and machine-bound license activation."
      ],
      "it": [
        "Realizzati workflow separati per medico e segreteria con controlli specifici per ruolo e dati clinici condivisi.",
        "Implementate storie cliniche dettagliate con visite, vaccinazioni, sverminazioni, interventi, misurazioni e degenze.",
        "Sviluppati fatturazione, conferma dei pagamenti, gestione di crediti e debiti dei clienti e rendicontazione finanziaria giornaliera.",
        "Aggiunti rilevamento dei dispositivi in rete locale, associazione sicura e sincronizzazione con ripresa dopo la riconnessione.",
        "Integrati acquisizione di foto da webcam, backup cifrati con password e attivazione della licenza vincolata al computer."
      ]
    }
  },

  {
    "id": 4,
    "category": "desktop",
    "title": {
      "en": "LUMEN — Gynaecology Practice Management",
      "it": "LUMEN — Gestionale per Studi Ginecologici"
    },
    "shortDesc": {
      "en": "Upgraded Windows practice software unifying patient records, consultations, prescriptions, laboratory reports and ultrasound imaging.",
      "it": "Gestionale Windows evoluto che riunisce cartelle pazienti, visite, prescrizioni, referti di laboratorio e immagini ecografiche."
    },
    "kicker": {
      "en": "Desktop Applications · Gynaecology Software",
      "it": "Applicazioni Desktop · Software Ginecologico"
    },
    "platform": "Windows",
    "technologies": [
      "C#",
      ".NET 10",
      "WPF",
      "SQLite / SQLCipher",
      "ONNX Runtime",
      "DICOM / fo-dicom",
      "PDFsharp",
      "TLS"
    ],
    "url": null,
    "urlType": "private",
    "images": [
      {
        "src": "assets/dashboardlumen.jpg",
        "caption": {
          "en": "LUMEN — clinic dashboard and waiting room",
          "it": "LUMEN — dashboard dello studio e sala d’attesa"
        }
      },
      {
        "src": "assets/patientpagelumen.jpg",
        "caption": {
          "en": "LUMEN — patient workspace",
          "it": "LUMEN — spazio di lavoro della paziente"
        }
      },
      {
        "src": "assets/seancemedical.jpg",
        "caption": {
          "en": "LUMEN — unified medical-session viewer",
          "it": "LUMEN — visualizzatore unificato della sessione clinica"
        }
      },
      {
        "src": "assets/lumenlogin.jpg",
        "caption": {
          "en": "LUMEN — application sign-in",
          "it": "LUMEN — accesso all’applicazione"
        }
      }
    ],
    "overview": {
      "en": "An upgraded Windows desktop application that brings patient records, consultations, prescriptions, laboratory reports and ultrasound imaging into one workspace. Separate doctor and secretary applications support daily clinic operations, with offline functionality and synchronization over the local network. Built with C# and .NET 10, LUMEN uses WPF for its native interface, featuring translucent panels, animated transitions and detailed medical workspaces. Patient data is stored locally in an encrypted SQLite/SQLCipher database.",
      "it": "Un’applicazione desktop Windows evoluta che riunisce cartelle pazienti, visite, prescrizioni, referti di laboratorio e immagini ecografiche in un unico spazio di lavoro. Applicazioni separate per medico e segreteria supportano l’attività quotidiana dello studio, con funzionalità offline e sincronizzazione sulla rete locale. Sviluppata in C# e .NET 10, LUMEN utilizza WPF per l’interfaccia nativa, con pannelli traslucidi, transizioni animate e spazi di lavoro clinici dettagliati. I dati delle pazienti sono salvati localmente in un database SQLite/SQLCipher cifrato."
    },
    "highlights": {
      "en": [
        "Developed separate doctor and secretary workflows with role-based access and local synchronization.",
        "Built patient records, pregnancy tracking, consultation history, appointments and fee management.",
        "Created a unified medical-session viewer combining clinical notes, prescriptions, laboratory reports and ultrasound media.",
        "Integrated local OCR through ONNX Runtime to extract laboratory results and compare them with printed reference ranges.",
        "Implemented DICOM image reception, medical-image viewing and multi-frame playback.",
        "Added prescription printing and PDF export, encrypted storage, password protection and encrypted backups."
      ],
      "it": [
        "Sviluppati workflow separati per medico e segreteria con accesso basato sui ruoli e sincronizzazione locale.",
        "Realizzati cartelle pazienti, monitoraggio della gravidanza, storico delle visite, appuntamenti e gestione degli onorari.",
        "Creato un visualizzatore unificato delle sessioni cliniche con note mediche, prescrizioni, referti di laboratorio e contenuti ecografici.",
        "Integrato OCR locale tramite ONNX Runtime per estrarre i risultati di laboratorio e confrontarli con gli intervalli di riferimento stampati.",
        "Implementati ricezione di immagini DICOM, visualizzazione di immagini mediche e riproduzione multi-frame.",
        "Aggiunti stampa delle prescrizioni, esportazione PDF, archiviazione cifrata, protezione con password e backup cifrati."
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
      en: "Functional startup prototype for Android and Wear OS, featuring wearable sensor data, connected-device communication and SOS workflows.",
      it: "Prototipo funzionale per una startup su Android e Wear OS, con dati dei sensori wearable, comunicazione tra dispositivi e workflow SOS."
    },
    kicker: {
      en: "Startup Prototype · Android · Wear OS",
      it: "Prototipo Startup · Android · Wear OS"
    },
    platform: { en: "Mobile / Wearable", it: "Mobile / Dispositivi indossabili" },
    technologies: ["Android", "Wear OS", "Java / Kotlin", "Sensors", "Data Layer"],
    url: null,
    urlType: "prototype",
    status: { en: "Startup prototype", it: "Prototipo per startup" },
    images: [
      { src: "assets/health_main.jpg", caption: { en: "Health Guard mobile experience", it: "Esperienza mobile Health Guard" } },
      { src: "assets/health_1.jpg", caption: { en: "Health monitoring interface", it: "Interfaccia monitoraggio salute" } },
      { src: "assets/health_2.jpg", caption: { en: "Connected-device workflow", it: "Workflow dispositivi connessi" } },
      { src: "assets/health_3.jpg", caption: { en: "Wearable integration", it: "Integrazione wearable" } }
    ],
    overview: {
      en: "A functional startup prototype connecting Android smartphones and Wear OS devices for health-monitoring and safety workflows. The prototype implements wearable sensor data collection, health-status communication, SOS interactions and device-to-device data exchange, demonstrating the proposed product’s core functionality at the proof-of-concept stage.",
      it: "Un prototipo funzionale sviluppato per una startup, che collega smartphone Android e dispositivi Wear OS per flussi di monitoraggio della salute e sicurezza. Il prototipo implementa raccolta dei dati dei sensori wearable, comunicazione dello stato di salute, interazioni SOS e scambio di dati tra dispositivi, dimostrando le funzionalità principali del prodotto proposto nella fase di proof of concept."
    },
    highlights: {
      en: [
        "Implemented communication between Android and Wear OS devices within the startup prototype.",
        "Integrated wearable sensor data into prototype health-monitoring workflows.",
        "Implemented SOS-oriented interactions and device-to-device data exchange.",
        "Connected smartphone and wearable interfaces to demonstrate the proposed product’s core user journeys."
      ],
      it: [
        "Implementata la comunicazione tra dispositivi Android e Wear OS nel prototipo per startup.",
        "Integrati i dati dei sensori wearable nei flussi di monitoraggio del prototipo.",
        "Implementate interazioni SOS e scambio di dati tra dispositivi.",
        "Collegate le interfacce smartphone e wearable per dimostrare i principali percorsi utente del prodotto proposto."
      ]
    }
  }
];

let currentLanguage = "en";
let currentFilter = "all";
let lastFocusedElement = null;
let lastGalleryButton = null;

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
  document.querySelector('meta[name="description"]').setAttribute("content", t("page_description"));
  document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (i18n[currentLanguage][key]) {
      element.textContent = i18n[currentLanguage][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.lang === currentLanguage));
  });

  document.getElementById("projectCount").textContent = projects.length;
  modal.querySelector(".modal-close").setAttribute("aria-label", t("close_project"));
  lightbox.querySelector(".lightbox-close").setAttribute("aria-label", t("close_image"));
  navToggle.setAttribute("aria-label", t(mainNav.classList.contains("open") ? "close_navigation" : "open_navigation"));
}

// Use the dedicated LUMEN logo on both the project card and detail view.
function projectLogo(project) {
  return project.id === 4
    ? `<img class="project-logo" src="assets/lumendark.png" alt="" width="64" height="64" decoding="async">`
    : "";
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
        decoding="async"
        onerror="this.closest('.project-media').classList.add('image-missing'); this.style.display='none';"
      >
      <span class="project-category">${categoryLabel(project.category)}</span>
    </div>

    <div class="project-body">
      <div class="project-kicker">${localized(project.kicker)}</div>
      <div class="project-title-row">${projectLogo(project)}<h3 class="project-title">${localized(project.title)}</h3></div>
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
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
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
    : `<span class="btn btn-secondary" aria-disabled="true">${localized(project.status) || t("private_project")}</span>`;

  modalBody.innerHTML = `
    <header class="modal-header">
      <div class="project-kicker">${categoryLabel(project.category)} · ${localized(project.platform)}</div>
      <div class="project-title-row">${projectLogo(project)}<h2 id="modalTitle">${localized(project.title)}</h2></div>
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
              decoding="async"
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

  setBackgroundInert(true);
  modal.querySelector(".modal-dialog").scrollTop = 0;
  modal.querySelector(".modal-close").focus();

  modalBody.querySelectorAll(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      lastGalleryButton = button;
      openLightbox(button.dataset.image, button.dataset.caption);
    });
  });
}

function closeProjectModal() {
  if (lightbox.classList.contains("open")) closeLightbox();
  setBackgroundInert(false);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

function openLightbox(src, caption) {
  lightboxImage.src = src;
  lightboxImage.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  modal.inert = true;
  lightbox.querySelector(".lightbox-close").focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  modal.inert = false;
  if (lastGalleryButton?.isConnected) lastGalleryButton.focus();
}

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

function setBackgroundInert(value) {
  document.querySelectorAll(".site-header, main, body > footer").forEach(element => { element.inert = value; });
}

function closeNavigation() {
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", t("open_navigation"));
}

document.addEventListener("keydown", (event) => {
  const dialog = lightbox.classList.contains("open") ? lightbox : modal.classList.contains("open") ? modal : null;
  if (event.key === "Tab" && dialog) {
    const controls = [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')].filter(el => el.getClientRects().length);
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
      event.preventDefault();
      first?.focus();
    }
  }
  if (event.key === "Escape") {
    if (lightbox.classList.contains("open")) {
      closeLightbox();
    } else if (modal.classList.contains("open")) {
      closeProjectModal();
    } else if (mainNav.classList.contains("open")) {
      closeNavigation();
      navToggle.focus();
    }
  }
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    try { localStorage.setItem("portfolio-language", currentLanguage); } catch {}

    if (modal.classList.contains("open")) closeProjectModal();
    renderStaticTranslations();
    renderProjects();
    applyFilter(currentFilter);

  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", t(isOpen ? "close_navigation" : "open_navigation"));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeNavigation();
  });
});

document.addEventListener("click", event => {
  if (!event.target.closest(".nav-wrap")) closeNavigation();
});
window.matchMedia("(min-width: 761px)").addEventListener("change", event => {
  if (event.matches) closeNavigation();
});

window.addEventListener("scroll", () => {
  document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

let revealObserver;

function observeReveals() {
  if (revealObserver) revealObserver.disconnect();

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
  let savedLanguage;
  try { savedLanguage = localStorage.getItem("portfolio-language"); } catch {}
  currentLanguage = savedLanguage === "it" ? "it" : "en";

  document.getElementById("year").textContent = new Date().getFullYear();

  renderStaticTranslations();
  renderProjects();
  applyFilter("all");
  observeReveals();
}

init();

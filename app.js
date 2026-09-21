(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA was not found. Check that config.js loads before app.js.");
    return;
  }

  const qs = (selector, scope = document) => scope.querySelector(selector);
  const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const icons = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.5H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.1h-3.7v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.5H9.3V9Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1a9.7 9.7 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v11m0 0 4-4m-4 4-4-4M5 20h14"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16v12H4zM4 7l8 6 8-6"/></svg>'
  };

  function safeText(value) {
    return String(value ?? "");
  }

  function slug(value) {
    return safeText(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function setText(selector, value) {
    const node = qs(selector);
    if (node) node.textContent = safeText(value);
  }

  function linkOrHash(value) {
    const text = safeText(value).trim();
    return text || "#";
  }

  function isConfigured(value) {
    const v = safeText(value).trim();
    return v && !v.startsWith("YOUR_");
  }

  function renderNav() {
    const html = data.nav.map((item) => `<a href="${item.href}" data-nav="${item.href}">${item.label}</a>`).join("");
    qs("#desktopNav").innerHTML = html;
    qs("#mobileNav").innerHTML = data.nav.map((item) => `<a href="${item.href}"><span>${item.label}</span><span aria-hidden="true">↗</span></a>`).join("");
  }

  function renderHero() {
    document.title = `${data.personal.name} | IT Professional`;
    setText("#brandInitials", data.personal.initials);
    setText("#brandName", data.personal.name);
    setText("#heroName", data.personal.name);
    setText("#heroHeadline", data.personal.headline);
    setText("#heroIntro", data.personal.intro);
    setText("#heroLocation", `⌖ ${data.personal.location}`);
    setText("#availabilityText", data.personal.availability);
    setText("#footerInitials", data.personal.initials);
    setText("#footerName", data.personal.name);

    const card = qs("#profileCard");
    if (data.personal.profileImage) {
      card.innerHTML = `<img src="${data.personal.profileImage}" alt="${data.personal.name} profile photo" />`;
    } else {
      card.innerHTML = `<div class="profile-initials" aria-label="Profile placeholder">${data.personal.initials}</div>`;
    }

    qs("#metricGrid").innerHTML = data.metrics.map((metric) => `
      <article class="metric-card reveal">
        <strong>${metric.value}</strong>
        <span>${metric.label}</span>
      </article>
    `).join("");
  }

  function renderAbout() {
    setText("#aboutEyebrow", data.about.eyebrow);
    setText("#aboutTitle", data.about.title);
    qs("#aboutCopy").innerHTML = `
      ${data.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
      <div class="mini-stack"><span>Engineering</span><span>Support</span><span>Cloud</span><span>Design</span></div>
    `;
    qs("#principlesGrid").innerHTML = data.about.principles.map((item, index) => `
      <article class="panel principle-card reveal" style="--delay:${index * 70}ms">
        <span class="principle-icon" aria-hidden="true">${item.icon || "✦"}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  function renderExperience() {
    qs("#experienceTimeline").innerHTML = data.experience.map((item, index) => `
      <article class="timeline-item reveal">
        <div class="timeline-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="panel experience-card">
          <div class="experience-heading">
            <div>
              <p class="role-title">${item.role}</p>
              <h3>${item.company}</h3>
            </div>
            <div class="experience-meta"><span>◷ ${item.period}</span><span>⌖ ${item.location}</span></div>
          </div>
          <p class="experience-summary">${item.summary}</p>
          <ul>${item.achievements.map((a) => `<li>${a}</li>`).join("")}</ul>
          <div class="tag-row">${item.technologies.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
      </article>
    `).join("");
  }

  const skillCategories = ["All", ...new Set(data.skills.map((item) => item.category))];
  let activeSkill = "All";

  function renderSkillFilters() {
    qs("#skillFilters").innerHTML = skillCategories.map((category) => `
      <button class="filter-chip ${activeSkill === category ? "is-active" : ""}" type="button" role="tab" aria-selected="${activeSkill === category}" data-skill-filter="${category}">${category}</button>
    `).join("");
    qsa("[data-skill-filter]").forEach((button) => button.addEventListener("click", () => {
      activeSkill = button.dataset.skillFilter;
      renderSkillFilters();
      renderSkills();
    }));
  }

  function renderSkills() {
    const items = activeSkill === "All" ? data.skills : data.skills.filter((item) => item.category === activeSkill);
    qs("#skillsGrid").innerHTML = items.map((item, index) => `
      <article class="panel skill-card animate-in">
        <div class="skill-top"><span class="skill-index">${String(index + 1).padStart(2, "0")}</span><span class="level level-${slug(item.level)}">${item.level}</span></div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="skill-category">${item.category}</span>
      </article>
    `).join("");
  }

  const projectCategories = ["All", ...new Set(data.projects.map((item) => item.category))];
  let activeProject = "All";

  function renderProjectFilters() {
    qs("#projectFilters").innerHTML = projectCategories.map((category) => `
      <button class="filter-chip ${activeProject === category ? "is-active" : ""}" type="button" role="tab" aria-selected="${activeProject === category}" data-project-filter="${category}">${category}</button>
    `).join("");
    qsa("[data-project-filter]").forEach((button) => button.addEventListener("click", () => {
      activeProject = button.dataset.projectFilter;
      renderProjectFilters();
      renderProjects();
    }));
  }

  function projectVisual(project) {
    if (project.image) {
      return `<img src="${project.image}" alt="${project.title} project preview" loading="lazy" />`;
    }
    const icon = project.category === "Software" ? "</>" : project.category === "Support" ? "✦" : project.category === "Cloud" ? "☁" : "◇";
    return `<div class="project-grid-lines"></div><strong class="project-symbol">${icon}</strong><span>${project.category}</span>`;
  }

  function renderProjects() {
    const items = activeProject === "All" ? data.projects : data.projects.filter((item) => item.category === activeProject);
    qs("#projectsGrid").innerHTML = items.map((project, index) => `
      <article class="project-card animate-in ${project.featured ? "is-featured" : ""}" data-project-index="${data.projects.indexOf(project)}">
        <button class="project-button" type="button" aria-label="Open ${project.title} project details">
          <div class="project-visual project-${slug(project.category)}">${projectVisual(project)}</div>
          <div class="project-body">
            <div class="project-label"><span>${project.category}</span><b aria-hidden="true">↗</b></div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tag-row compact">${project.stack.slice(0, 4).map((t) => `<span>${t}</span>`).join("")}</div>
          </div>
        </button>
      </article>
    `).join("");

    qsa(".project-card").forEach((card) => {
      const button = qs(".project-button", card);
      button.addEventListener("click", () => openProject(Number(card.dataset.projectIndex)));
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        card.addEventListener("pointermove", (event) => tiltCard(card, event));
        card.addEventListener("pointerleave", () => resetTilt(card));
      }
    });
  }

  function tiltCard(card, event) {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rx", `${-y * 4}deg`);
    card.style.setProperty("--ry", `${x * 5}deg`);
  }

  function resetTilt(card) {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  }

  function openProject(index) {
    const project = data.projects[index];
    setText("#modalCategory", `${project.category} project`);
    setText("#modalTitle", project.title);
    setText("#modalDescription", project.description);
    setText("#modalImpact", project.impact);
    qs("#modalStack").innerHTML = project.stack.map((item) => `<span>${item}</span>`).join("");
    const actions = [];
    if (project.liveUrl) actions.push(`<a class="button button-small" href="${project.liveUrl}" target="_blank" rel="noreferrer">Live project ↗</a>`);
    if (project.sourceUrl) actions.push(`<a class="button button-small button-secondary" href="${project.sourceUrl}" target="_blank" rel="noreferrer">View source ↗</a>`);
    qs("#modalActions").innerHTML = actions.length ? actions.join("") : '<p class="modal-note">Add liveUrl or sourceUrl in config.js to show project links.</p>';
    const modal = qs("#projectModal");
    modal.hidden = false;
    document.body.classList.add("modal-open");
    qs("#modalClose").focus();
  }

  function closeProject() {
    qs("#projectModal").hidden = true;
    document.body.classList.remove("modal-open");
  }

  function renderContact() {
    setText("#contactEyebrow", data.contact.eyebrow);
    setText("#contactTitle", data.contact.title);
    setText("#contactIntro", data.contact.intro);
    setText("#responseTime", data.contact.responseTime);
    const direct = qs("#directEmail");
    direct.href = `mailto:${data.personal.email}`;
    direct.innerHTML = `${icons.mail}<span>${data.personal.email}</span>`;
  }

  function renderFooter() {
    qs("#socialLinks").innerHTML = `
      <a href="${linkOrHash(data.social.linkedin)}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icons.linkedin}</a>
      <a href="${linkOrHash(data.social.github)}" target="_blank" rel="noreferrer" aria-label="GitHub">${icons.github}</a>
      <a href="mailto:${data.personal.email}" aria-label="Email">${icons.mail}</a>
      <a href="${data.personal.resumeFile}" download aria-label="Download resume">${icons.download}</a>
    `;
    setText("#copyrightText", `© ${new Date().getFullYear()} ${data.personal.name}. All rights reserved.`);
  }

  function initTheme() {
    let saved = "";
    try {
      saved = localStorage.getItem("portfolio-theme") || "";
    } catch (_) {
      saved = "";
    }
    const theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
    updateThemeIcon();
    qs("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (_) {
        // Storage can be unavailable in strict privacy or embedded contexts.
      }
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    qs(".theme-icon").textContent = document.documentElement.dataset.theme === "dark" ? "☼" : "☾";
  }

  function initMenu() {
    const button = qs("#menuButton");
    const nav = qs("#mobileNav");
    button.addEventListener("click", () => {
      const opening = nav.hidden;
      nav.hidden = !opening;
      button.setAttribute("aria-expanded", String(opening));
      button.querySelector("span").textContent = opening ? "×" : "☰";
    });
    qsa("a", nav).forEach((link) => link.addEventListener("click", () => {
      nav.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.querySelector("span").textContent = "☰";
    }));
  }

  function initRoleRotator() {
    const roles = data.personal.roles || [];
    const node = qs("#roleRotator");
    if (!roles.length) return;
    let current = 0;
    node.textContent = roles[current];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || roles.length === 1) return;
    setInterval(() => {
      node.classList.add("role-out");
      setTimeout(() => {
        current = (current + 1) % roles.length;
        node.textContent = roles[current];
        node.classList.remove("role-out");
        node.classList.add("role-in");
        setTimeout(() => node.classList.remove("role-in"), 350);
      }, 220);
    }, 2500);
  }

  function initScrollEffects() {
    const progress = qs("#scrollProgress");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const ratio = max > 0 ? scrollY / max : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    qsa(".reveal").forEach((item) => observer.observe(item));

    const sections = data.nav.map((item) => qs(item.href)).filter(Boolean);
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      qsa("[data-nav]").forEach((link) => link.classList.toggle("is-active", link.dataset.nav === `#${visible.target.id}`));
    }, { rootMargin: "-30% 0px -58%", threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => navObserver.observe(section));
  }

  function initPointerGlow() {
    if (matchMedia("(pointer: coarse)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const glow = qs("#cursorGlow");
    addEventListener("pointermove", (event) => {
      glow.style.setProperty("--x", `${event.clientX}px`);
      glow.style.setProperty("--y", `${event.clientY}px`);
      glow.classList.add("is-active");
    }, { passive: true });
  }

  function initModal() {
    qs("#modalClose").addEventListener("click", closeProject);
    qs("#projectModal").addEventListener("mousedown", (event) => {
      if (event.target === event.currentTarget) closeProject();
    });
    addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !qs("#projectModal").hidden) closeProject();
    });
  }

  function initContactForm() {
    const form = qs("#contactForm");
    const button = qs("#submitButton");
    const status = qs("#formStatus");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      if (safeText(formData.get("company")).trim()) return;

      const emailjsConfig = data.emailjs || {};
      if (!isConfigured(emailjsConfig.serviceId) || !isConfigured(emailjsConfig.templateId) || !isConfigured(emailjsConfig.publicKey)) {
        status.className = "form-status warning";
        status.textContent = "EmailJS is not configured yet. Follow the included setup guide and update the emailjs section in config.js.";
        return;
      }

      if (!window.emailjs || typeof window.emailjs.send !== "function") {
        status.className = "form-status error";
        status.textContent = "EmailJS could not load. Check your internet connection or use the direct email link.";
        return;
      }

      button.disabled = true;
      button.innerHTML = '<span class="spinner" aria-hidden="true"></span> Sending...';
      status.className = "form-status";
      status.textContent = "";

      try {
        await window.emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: safeText(formData.get("from_name")),
            from_email: safeText(formData.get("from_email")),
            reply_to: safeText(formData.get("from_email")),
            subject: safeText(formData.get("subject")),
            message: safeText(formData.get("message")),
            to_name: data.personal.name
          },
          {
            publicKey: emailjsConfig.publicKey,
            limitRate: { id: "portfolio-contact", throttle: 10000 }
          }
        );
        form.reset();
        status.className = "form-status success";
        status.textContent = "Thanks. Your message has been sent successfully.";
      } catch (error) {
        console.error("EmailJS error:", error);
        status.className = "form-status error";
        status.textContent = "The message could not be sent. Please try again or use the direct email link.";
      } finally {
        button.disabled = false;
        button.innerHTML = 'Send message <span aria-hidden="true">↗</span>';
      }
    });
  }

  renderNav();
  renderHero();
  renderAbout();
  renderExperience();
  renderSkillFilters();
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderContact();
  renderFooter();
  initTheme();
  initMenu();
  initRoleRotator();
  initScrollEffects();
  initPointerGlow();
  initModal();
  initContactForm();
})();

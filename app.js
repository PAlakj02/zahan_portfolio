(function () {
  "use strict";

  const app = document.getElementById("app");
  const navList = document.getElementById("navList");
  const mainNav = document.getElementById("mainNav");
  const menuToggle = document.getElementById("menuToggle");

  const fullName = `${SITE.first} ${SITE.middle} ${SITE.last}`;
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Navigation ---------- */

  const NAV = [
    { label: "About", route: "about" },
    { label: "Education", route: "education" },
    { group: "leadership" },
    { group: "research" },
    { group: "community" },
    { group: "awards" },
    { label: "Beyond", route: "beyond" },
    { label: "Contact", route: "contact" },
  ];

  const caret =
    '<svg class="caret" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';

  function buildNav() {
    navList.innerHTML = NAV.map((n) => {
      if (!n.group) {
        return `<li class="nav-item" data-key="${n.route}"><a class="nav-link" href="#/${n.route}">${n.label}</a></li>`;
      }
      const g = GROUPS[n.group];
      const items = g.items
        .map(
          (it) =>
            `<li><a href="#/${n.group}/${it.id}"><span class="dd-title">${esc(it.nav || it.title)}</span><span class="dd-meta">${esc(it.navMeta || it.org)}</span></a></li>`
        )
        .join("");
      return `<li class="nav-item has-dd" data-key="${n.group}">
          <button class="nav-link" type="button" aria-expanded="false" aria-controls="dd-${n.group}">${g.label}${caret}</button>
          <ul class="dropdown" id="dd-${n.group}">${items}</ul>
        </li>`;
    }).join("");
  }

  function closeDropdowns(except) {
    navList.querySelectorAll(".has-dd.open").forEach((li) => {
      if (li === except) return;
      li.classList.remove("open");
      li.querySelector("button").setAttribute("aria-expanded", "false");
    });
  }

  navList.addEventListener("click", (e) => {
    const btn = e.target.closest(".has-dd > button");
    if (btn) {
      const li = btn.parentElement;
      const open = !li.classList.contains("open");
      closeDropdowns(li);
      li.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      return;
    }
    if (e.target.closest("a")) {
      closeDropdowns();
      setMenu(false);
      if (document.activeElement) document.activeElement.blur();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dd")) closeDropdowns();
  });

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  menuToggle.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
  document.getElementById("monogram").addEventListener("click", () => {
    setMenu(false);
    closeDropdowns();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeDropdowns();
    setMenu(false);
  });

  /* ---------- Views ---------- */

  const footer = () =>
    `<footer class="site-footer"><span>${SITE.monogram}</span><span>© 2026 ${fullName}</span></footer>`;

  const pageHead = (kicker, title, lead) => `
    <section class="page-head">
      <p class="kicker">${esc(kicker)}</p>
      <h1>${esc(title)}</h1>
      <span class="rule" aria-hidden="true"></span>
      ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
    </section>`;

  function viewHome() {
    return `
      <section class="hero">
        <div class="hero-stage">
          <div class="hero-text">
            <p class="kicker hero-kicker">Hello, I am</p>
            <h1 class="hero-name">
              <span class="hn">${SITE.first}</span>
              <span class="hn hn-mid">${SITE.middle}</span>
              <span class="hn">${SITE.last}</span>
            </h1>
            <span class="signature hero-sign" aria-hidden="true">${SITE.first}</span>
          </div>
          <figure class="hero-photo">
            <img src="${SITE.image}" alt="Portrait of ${esc(fullName)}">
          </figure>
        </div>
        <div class="hero-foot">
          <p class="hero-tag">${SITE.tagline}</p>
          <p class="hero-places">${SITE.places}</p>
        </div>
      </section>`;
  }

  function viewAbout() {
    return `
      ${pageHead("Who I am", "About Me", ABOUT.lead)}
      <section class="band">
        <div class="wrap two-col">
          <div class="prose">${ABOUT.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
          <aside class="glance">
            <h3>What I care about</h3>
            <ul class="tags">${ABOUT.interests.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
            <h3>At a glance</h3>
            <dl>${SITE.details.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          </aside>
        </div>
      </section>`;
  }

  function viewEducation() {
    const cards = EDUCATION.map(
      (e) => `
      <article class="edu">
        <header>
          <p class="kicker">${e.period}</p>
          <h2>${e.school}</h2>
          <p class="meta">${e.place} &nbsp;|&nbsp; ${e.stage}</p>
        </header>
        <p>${esc(e.text)}</p>
        ${e.subjects ? `<ul class="tags">${e.subjects.map((s) => `<li>${s}</li>`).join("")}</ul>` : ""}
        ${
          e.grades
            ? `<table class="grades"><tbody>${e.grades
                .map(([s, g]) => `<tr><td>${s}</td><td>${g}</td></tr>`)
                .join("")}</tbody></table>`
            : ""
        }
      </article>`
    ).join("");
    return `
      ${pageHead("Where I learn", "Education", "From Noida to Kent: twelve years at Step-by-Step and now my A Levels at Tonbridge.")}
      <section class="band"><div class="wrap edu-list">${cards}</div></section>`;
  }

  function viewItem(groupKey, item) {
    const g = GROUPS[groupKey];
    if (item.page === "honours") return viewHonours();
    return `
      ${pageHead(g.kicker, item.title, item.lead)}
      <section class="band">
        <div class="wrap two-col">
          <div class="prose">${item.body.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
          <aside class="glance">
            <h3>At a glance</h3>
            <dl>
              <div><dt>Role</dt><dd>${esc(item.title)}</dd></div>
              <div><dt>Where</dt><dd>${esc(item.org)}</dd></div>
              <div><dt>When</dt><dd>${esc(item.period)}</dd></div>
              ${item.badge ? `<div><dt>Result</dt><dd>${esc(item.badge)}</dd></div>` : ""}
            </dl>
          </aside>
        </div>
      </section>
      <section class="band band-alt">
        <div class="wrap">
          <p class="kicker center">In short</p>
          <h2 class="section-title">Highlights</h2>
          <span class="rule" aria-hidden="true"></span>
          <ol class="highlights">${item.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ol>
        </div>
      </section>`;
  }

  function viewHonours() {
    return `
      ${pageHead("Recognition", "Honours", "The academic honours and awards I have received so far.")}
      <section class="band">
        <div class="wrap">
          <ol class="honours">${HONOURS.map(
            ([t, d], i) =>
              `<li><span class="num">${String(i + 1).padStart(2, "0")}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></li>`
          ).join("")}</ol>
        </div>
      </section>`;
  }

  function viewBeyond() {
    return `
      ${pageHead("Beyond the classroom", "Beyond", "What keeps me busy when I am not reading, writing or debating.")}
      <section class="band">
        <div class="wrap grid-cards">${BEYOND.map(
          (b) => `<article class="card"><p class="kicker">${esc(b.period)}</p><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></article>`
        ).join("")}</div>
      </section>`;
  }

  function viewContact() {
    return `
      ${pageHead("Say hello", "Contact", "I am always happy to talk about economics, politics, MUN, writing or a new project.")}
      <section class="band">
        <div class="wrap contact">
          <p class="prose">The best way to reach me is by email. I read everything and I will get back to you as soon as I can.</p>
          <a class="contact-mail" href="mailto:${SITE.email}">${SITE.email}</a>
          <dl class="contact-meta">
            <div><dt>Based in</dt><dd>New Delhi, India</dd></div>
            <div><dt>At school in</dt><dd>Tonbridge, Kent, UK</dd></div>
          </dl>
        </div>
      </section>`;
  }

  /* ---------- Router ---------- */

  function resolve() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const [a, b] = parts;
    if (!a) return { key: "home", html: viewHome(), title: fullName };
    const simple = { about: viewAbout, education: viewEducation, beyond: viewBeyond, contact: viewContact };
    if (simple[a] && !b) return { key: a, html: simple[a](), title: a[0].toUpperCase() + a.slice(1) };
    const g = GROUPS[a];
    const item = g && g.items.find((i) => i.id === b);
    if (item) return { key: a, html: viewItem(a, item), title: item.title };
    return null;
  }

  function render() {
    const view = resolve();
    if (!view) {
      location.replace("#/");
      return;
    }
    const isHome = view.key === "home";
    document.body.classList.toggle("is-home", isHome);
    app.innerHTML = view.html + (isHome ? "" : footer());
    document.title = isHome ? fullName : `${view.title} | ${fullName}`;

    navList.querySelectorAll(".nav-item").forEach((li) => {
      li.classList.toggle("active", li.dataset.key === view.key);
    });
    navList.querySelectorAll(".dropdown a").forEach((a) => {
      a.classList.toggle("current", a.getAttribute("href") === location.hash);
    });

    window.scrollTo(0, 0);
    app.classList.remove("enter");
    void app.offsetWidth;
    app.classList.add("enter");
  }

  buildNav();
  window.addEventListener("hashchange", render);
  render();
})();

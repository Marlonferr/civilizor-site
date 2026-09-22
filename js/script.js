/*
  =========================================================
  CIVILIZOR — SCRIPT.JS
  Interações principais:
  1. Loader de entrada
  2. Header com estado ao rolar
  3. Menu mobile
  4. Hero carousel automático
  5. Renderização da página de soluções
  6. Renderização da página individual de produto
  =========================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initHeader();
  initMobileMenu();
  initHeroSlider();
  renderProductList();
  renderProductPage();
});

/* ---------- 1. LOADER ---------- */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  // O pequeno atraso deixa a animação de entrada perceptível.
  window.setTimeout(() => {
    loader.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
  }, 1550);
}

/* ---------- 2. HEADER ---------- */
function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

/* ---------- 3. MENU MOBILE ---------- */
function initMobileMenu() {
  const button = document.getElementById("menuButton");
  const header = document.getElementById("siteHeader");

  if (!button || !header) return;

  button.addEventListener("click", () => {
    header.classList.toggle("menu-open");
    button.textContent = header.classList.contains("menu-open") ? "×" : "☰";
  });
}

/* ---------- 4. HERO SLIDER ---------- */
function initHeroSlider() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dotsContainer = document.getElementById("heroDots");
  const next = document.getElementById("heroNext");
  const prev = document.getElementById("heroPrev");

  if (!slides.length || !dotsContainer) return;

  let current = 0;
  let timer;

  // Cria os indicadores de slide automaticamente.
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
    dot.addEventListener("click", () => {
      showSlide(index);
      restartTimer();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = [...dotsContainer.children];

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  function nextSlide() {
    showSlide(current + 1);
  }

  function restartTimer() {
    window.clearInterval(timer);
    timer = window.setInterval(nextSlide, 5500);
  }

  next?.addEventListener("click", () => {
    nextSlide();
    restartTimer();
  });

  prev?.addEventListener("click", () => {
    showSlide(current - 1);
    restartTimer();
  });

  showSlide(0);
  restartTimer();
}

/* ---------- 5. LISTA DE SOLUÇÕES ---------- */
function renderProductList() {
  const list = document.getElementById("productList");

  // A página inicial não possui #productList.
  if (!list || typeof products === "undefined") return;

  const entries = Object.entries(products);

  list.innerHTML = entries.map(([id, product], index) => `
    <a class="product-row" href="produto.html?id=${id}">
      <span class="product-number-row">${String(index + 1).padStart(2, "0")}</span>
      <h2>${product.name}</h2>
      <p>${product.short}</p>
      <span class="product-arrow">↗</span>
    </a>
  `).join("");
}

/* ---------- 6. PÁGINA INDIVIDUAL ---------- */
function renderProductPage() {
  const page = document.getElementById("productPage");

  // Só executa na página produto.html.
  if (!page || typeof products === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "c-key";
  const product = products[id] || products["c-key"];

  document.title = `Civilizor — ${product.name}`;

  const color = product.color || "#0AFFC2";
  document.documentElement.style.setProperty("--product-color", color);

  const painBlock = product.pain
    ? `
      <div class="key-pain-list">
        ${product.pain.map(item => `<li>${item}</li>`).join("")}
      </div>
    `
    : "";

  const noteBlock = product.note
    ? `
      <div class="product-note">
        <span>IDEIA CENTRAL</span>
        <p>“${product.note}”</p>
      </div>
    `
    : "";

  page.innerHTML = `
    <section class="product-hero">
      <div class="product-hero-inner">
        <div class="product-meta">
          <span class="product-dot"></span>
          <span>${product.category}</span>
        </div>

        <h1><span>${product.name}</span></h1>

        <p class="product-hero-description">${product.short}</p>

        <div class="product-hero-actions">
          <a class="button button-primary" href="mailto:civilizorinc@gmail.com">Falar sobre ${product.name} <span>→</span></a>
          <a class="button button-ghost" href="solucoes.html">Todas as soluções</a>
        </div>
      </div>
    </section>

    <section class="product-details">
      <div class="section">
        <div class="problem-layout">
          <div>
            <p class="eyebrow yellow">O PROBLEMA</p>
            <h2>Projetado para<br><em>resolver.</em></h2>
          </div>

          <div class="problem-copy">
            <p>${product.problem}</p>
            ${painBlock}
            ${noteBlock}
          </div>
        </div>

        <div class="detail-grid">
          ${product.details.map(detail => `
            <article class="detail-card">
              <span>${detail[0]}</span>
              <h3>${detail[1]}</h3>
              <p>${detail[2]}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="product-next">
      <p>PRÓXIMO PASSO</p>
      <h2>Quer entender como<br><em>isso pode funcionar?</em></h2>
      <br>
      <a class="button button-primary" href="mailto:civilizorinc@gmail.com">Falar com a Civilizor <span>↗</span></a>
    </section>
  `;
}

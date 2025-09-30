document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  // Botón Inicio
  document.getElementById("btn-home").addEventListener("click", (e) => {
    e.preventDefault();
    renderHome();
  });

  // Botón Productos
  document.getElementById("btn-products").addEventListener("click", (e) => {
    e.preventDefault();
    loadProducts();
  });

  // Botón Contacto
  document.getElementById("btn-contact").addEventListener("click", (e) => {
    e.preventDefault();
    renderContact();
  });

  // Pantalla de inicio
  function renderHome() {
    content.innerHTML = `
      <section class="home-section">
        <h2>Bienvenido a Concesionario Los Bross</h2>
        <p>Encuentra las mejores motos Yamaha con precios increíbles y promociones especiales.</p>
        <img src="img/banner.jpg" alt="Banner motos Yamaha" class="banner">
      </section>
    `;
  }

  // Pantalla de contacto
  function renderContact() {
    content.innerHTML = `
      <section class="contact-section">
        <h2>Contáctanos</h2>
        <p>Síguenos en nuestras redes sociales:</p>
        <ul class="social-list">
          <li><a href="#">Facebook: @ConcesionarioBross</a></li>
          <li><a href="#">Instagram: @BrossMotos</a></li>
          <li><a href="#">Twitter: @Bross_Yamaha</a></li>
          <li><a href="#">YouTube: Concesionario Los Bross</a></li>
          <li><a href="#">WhatsApp: +57 300 123 4567</a></li>
        </ul>
      </section>
    `;
  }

  // Cargar productos desde JSON
  async function loadProducts() {
    try {
      const res = await fetch("data/products.json");
      if (!res.ok) throw new Error("No se pudo cargar el archivo JSON");

      const products = await res.json();
      renderProductsWithTemplate(products);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      content.innerHTML = `<p style="color:red;">Error al cargar los productos.</p>`;
    }
  }

  // Renderizar productos
  function renderProductsWithTemplate(products) {
    content.innerHTML = `<h2>Catálogo de Motos Yamaha</h2><div id="products-list" class="products-grid"></div>`;

    const container = document.getElementById("products-list");
    const template = document.getElementById("product-template");

    products.forEach((product) => {
      const clone = template.content.cloneNode(true);

      const imgEl = clone.querySelector(".product-image");
      if (imgEl) {
        imgEl.src = product.image;
        imgEl.alt = product.name;
        imgEl.style.width = "250px";
        imgEl.style.height = "180px";
        imgEl.style.objectFit = "cover";
      }

      const nameEl = clone.querySelector(".product-name");
      if (nameEl) nameEl.textContent = product.name;

      const descEl = clone.querySelector(".product-description");
      if (descEl) descEl.textContent = product.description;

      const priceEl = clone.querySelector(".product-price");
      if (priceEl) priceEl.textContent = "💲" + product.price;

      container.appendChild(clone);
    });
  }
  // Mostrar pantalla inicial al cargar
  renderHome();
});

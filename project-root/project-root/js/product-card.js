class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    const price = this.getAttribute("price");
    const description = this.getAttribute("description");
    const image = this.getAttribute("image");

    
  }
}

customElements.define("product-card", ProductCard);

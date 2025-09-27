// main.js - Carga fragmentos, controla sesión y renderiza productos
(function(){
  function loadFragment(selector, path){
    // usar rutas relativas con ./ por claridad
    return fetch(path).then(resp => {
      if(!resp.ok) throw new Error('No se pudo cargar ' + path);
      return resp.text();
    }).then(html => {
      document.querySelector(selector).innerHTML = html;
    }).catch(err => console.error(err));
  }

  function checkAuth(){
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(!isLoggedIn){
      if(!location.pathname.endsWith('login.html')){
        location.href = './login.html';
      }
    }
  }

  function renderProductsWithTemplate(products){
    const listEl = document.getElementById('products-list');
    const tpl = document.getElementById('product-template');
    listEl.innerHTML = '';
    products.forEach(p => {
      const clone = tpl.content.cloneNode(true);
      clone.querySelector('.product-image').src = p.image;
      clone.querySelector('.product-image').alt = p.name;
      clone.querySelector('.product-name').textContent = p.name;
      clone.querySelector('.product-desc').textContent = p.description;
      clone.querySelector('.product-price').textContent = '$' + p.price;
      listEl.appendChild(clone);
    });
  }

  function renderProductsWithWebComponent(products){
    const wcList = document.getElementById('products-wc');
    wcList.innerHTML = '';
    products.forEach(p => {
      const el = document.createElement('product-card');
      el.setAttribute('name', p.name);
      el.setAttribute('price', p.price);
      el.setAttribute('description', p.description);
      el.setAttribute('image', p.image);
      wcList.appendChild(el);
    });
  }

  function loadProducts(){
    // ruta relativa al JSON
    fetch('./data/products.json')
      .then(r => {
        if(!r.ok) throw new Error('No se pudo cargar products.json');
        return r.json();
      })
      .then(products => {
        renderProductsWithTemplate(products);
        renderProductsWithWebComponent(products);
      })
      .catch(err => console.error(err));
  }

  document.addEventListener('DOMContentLoaded', function(){
    checkAuth();

    // cargar fragments con rutas relativas
    loadFragment('#header-root', './components/header.html');
    loadFragment('#sidebar-root', './components/sidebar.html');
    loadFragment('#footer-root', './components/footer.html').then(()=>{
      const yearEl = document.getElementById('year');
      if(yearEl) yearEl.textContent = new Date().getFullYear();
    });

    loadProducts();
  });

})();

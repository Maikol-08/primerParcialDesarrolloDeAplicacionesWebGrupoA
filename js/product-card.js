// product-card.js - Web Component con Shadow DOM
class ProductCard extends HTMLElement{
constructor(){
super();
this.attachShadow({mode:'open'});
}
 }

connectedCallback(){
const name = this.getAttribute('name') || 'Producto'
 }
import { LitElement, html, css } from "lit";  
import "./loaderComponent.js";
import "./HamburguerList.js";

export class mainComponent extends LitElement {
  static properties = {
    view: { type: String },
  };

  constructor() {
    super();
    this.view = "loader";
  }

  // Usamos el ciclo de vida para cambiar el loader ("montamos" componente lista de hamburguesas)
  firstUpdated() {
    setTimeout(() => {
      this.view = "shop";
    }, 2000);  
  }

  render() {
    return this.view === "loader"
      ? html`<loader-component></loader-component>`
      : html`<burguer-list></burguer-list>`;
  }
} 
customElements.define("main-app", mainComponent);
 

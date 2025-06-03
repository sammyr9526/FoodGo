import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
 
export class ImageComponent extends LitElement {
  static styles = [
    css`
     img { 
      object-fit: contain;
      border-radius: 14px;
      margin-bottom: 8px; 
    }
    `,
  ];

    ////propiedades que podremos cambiar usando el componente imagen 
  static properties = {
    size: { type: String },
    color: { type: String },
    source:{type:String}
  };

  constructor() {
    super();
    this.size = "20px"; 
    this.source = ""
  }

  render() {
    return html`   
    <img  class="logo"
      src=${this.source} style= "width:${this.size}; height:${this.size}; 
         
      " >
     `;
  }
}
customElements.define("image-component", ImageComponent);

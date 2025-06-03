import { LitElement, html, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        .logo {
          transform: translate(-50%, -50%);
          width: 100vw;
          text-align: center;
          font-family: "Lobster", sans-serif;
          font-weight: 400;
          font-style: normal;
          letter-spacing: 1.3px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          z-index: 3;
          user-select: none;
          font-weight: bold;
        }
      }
    `,
  ];

  static properties = {
    size: { type: String },
    color: { type: String },
  };

  constructor() {
    super();
    this.size = "20px";
    this.color = "#red";
  }

  render() {
    return html` <span
      class="logo"
      style="font-size: ${this.size}; color: ${this.color};"
      >Foodgo</span
    >`;
  }
}
customElements.define("logo-component", Logo);

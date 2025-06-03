import { LitElement, html, css } from "lit"; 
import "./logoComponent";

export class LoaderComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100vw;
      height: 100vh;
      min-height: 100svh;
      min-width: 100vw;
      position: relative;
      overflow: hidden;
    }
    .logo {
      position: absolute;
      top: 10%;
      left: 44%;
      z-index: 3;
    }
    .background-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; 
      z-index: 1;
      pointer-events: none;
      user-select: none;
      filter: brightness(0.88) saturate(1.2) blur(0.3px);
    }
    .overlay-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #ff939b 0%, #ef2a39 50%);
      z-index: 2;
      pointer-events: none;
    }
    .burgers {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 2vw 3vw 2vw;
      z-index: 3;
    }
    .burgers img {
      display: block;
      min-width: 120px;
      object-fit: contain;
      user-select: none;
    }
    .burguer1 {
      position: absolute;
      left: 20%;
      width: 150px;
    }
    .burguer2 {
      position: absolute;
      left: 30%;
      width: 120px;
    }

    .loader {
      position: absolute;
      top: 35%;
      left: 46%;
      width: 48px;
      height: 48px;
      border: 5px solid #fff;
      border-bottom-color: #ff3d00;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
      z-index: 3;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 480px) {
      .burguer1 {
        position: relative;
        left: -40px;
        top: 40px;
        width: 60vw;
      }
      .burguer2 {
        position: relative;
        left: -90px;
        top: 35px;
        width: 60vw;
      }
      .title {
        font-size: clamp(1.3rem, 8vw, 2.2rem);
      }
      .logo {
      position: absolute;
      top: 10%;
      left: 30%;
      z-index: 3;
    }
      .loader {
        top: 40%;
        left: 40%;
      }
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @media (orientation: landscape) and (max-height: 500px) {
      .title {
        top: 12%;
      }
      .burgers img {
        max-height: 17vw;
      }
    }
  `;

  render() {
    return html`
      <div class="overlay-gradient"></div>
      <div class="logo">
        <logo-component size="40px" color="#fafafa"></logo-component>
      </div>
      <span class="loader"></span>

      <div class="burgers">
        <img
          src="src/assets/burguer_1.png "
          class="burguer1"
          alt="burgerlogo1"
        />
        <img
          src="src/assets/burguer_2.png "
          class="burguer2"
          alt="burgerlogo2"
        />
      </div>
    `;
  }
}


customElements.define("loader-component", LoaderComponent);

import { LitElement, html, css } from "lit";

export class FooterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 110;
    }
    .footer-bar {
      position: relative;
      width: auto; 
      height: 32px;
      background: #ef2a39;
      border-radius: 22px 22px 0 0 / 36px 36px 0 0;
      display: flex;
      align-items: center;
      justify-content: center; 
      box-shadow: 0 -2px 24px -8px #bc404066;
    }

    .nav-content {
      display: flex;
      width: 80%;
      justify-content: space-around;
      align-items: center;
      padding: 0 8vw;
      z-index: 2;
    }

    .nav-item {
      color: #fff;
      font-size: 1.7em;
      opacity: 0.87;
      background: none;
      border: none;
      outline: none;
      padding: 0;
      cursor: pointer;
      transition: opacity 0.19s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
 
    .fab-btn {
      position: absolute;
      top: -33px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff;
      color: #ef2a39;
      width: 46px;
      height: 46px;
      border-radius: 50%;
      border: none;
      box-shadow: 0 4px 18px -6px #ef2a3999;
      font-size: 2.4em;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 3;
      outline: none;
    }
    .fab-btn:active {
      background: #ffe6e6;
    }
 
    span {
      width: 30px;
    }

    @media (max-width: 500px) {
      .footer-bar,
      .nav-content {
        padding: 0 8px;
        width: 90%;
      }
      .fab-btn {
        width: 49px;
        height: 49px;
        font-size: 2.1em;
        top: -28px;
      }
    }
  `;

  static get properties() {
    return {
      favoriteCounter: { type: Number },
    };
  }

  render() {
    return html`
      <div class="footer-bar">
         
        <button class="fab-btn" title="Agregar">      ${this.favoriteCounter}</button>
        <div class="nav-content">
          <button class="nav-item" title="Inicio">
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_102)">
                  <path
                    d="M22.9747 8.69514L15.8887 1.60916C13.7393 -0.534759 10.2602 -0.534759 8.11071 1.60916L1.02472 8.69514C0.366223 9.35013 -0.00286988 10.2413 -0.00029176 11.1701V21.5481C0.00191136 22.9027 1.1001 24 2.45473 24.0011H21.5447C22.8993 24 23.9975 22.9027 23.9997 21.5481V11.1701C24.0023 10.2413 23.6332 9.35013 22.9747 8.69514ZM20.9997 21.0011H15.9997V17.8191C15.9997 15.7105 14.2903 14.0011 12.1817 14.0011H11.8177C9.7091 14.0011 7.99971 15.7105 7.99971 17.8191V21.0011H2.9997V11.1701C3.00003 11.0375 3.05244 10.9104 3.14572 10.8161L10.2317 3.73015C11.2079 2.7537 12.7908 2.75352 13.7672 3.72969C13.7674 3.72983 13.7676 3.73001 13.7677 3.73015L20.8537 10.8161C20.9469 10.9104 20.9994 11.0375 20.9997 11.1701V21.0011H20.9997Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_102">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          <button class="nav-item" title="Perfil">
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_103)">
                  <path
                    d="M11.4524 14.0188C7.19063 14.404 3.94378 18.0051 4.00036 22.2838V22.5008C4.00036 23.3292 4.67194 24.0008 5.50036 24.0008C6.32878 24.0008 7.00036 23.3292 7.00036 22.5008V22.2238C6.95527 19.5967 8.89402 17.3564 11.5004 17.0238C14.2516 16.751 16.7031 18.7602 16.9759 21.5114C16.9921 21.6741 17.0002 21.8374 17.0003 22.0008V22.5008C17.0003 23.3292 17.6719 24.0008 18.5003 24.0008C19.3288 24.0008 20.0003 23.3292 20.0003 22.5008V22.0008C19.9955 17.5775 16.4057 13.9957 11.9825 14.0006C11.8057 14.0008 11.6288 14.0069 11.4524 14.0188Z"
                    fill="white"
                  />
                  <path
                    d="M12.0004 12C15.3141 12 18.0004 9.31369 18.0004 6C18.0004 2.68631 15.3141 0 12.0004 0C8.68674 0 6.00043 2.68631 6.00043 6C6.00371 9.31233 8.6881 11.9967 12.0004 12ZM12.0004 3C13.6573 3 15.0004 4.34316 15.0004 6C15.0004 7.65684 13.6573 9 12.0004 9C10.3436 9 9.00043 7.65684 9.00043 6C9.00043 4.34316 10.3436 3 12.0004 3Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_103">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button> 
           
         <button class="nav-item" title="Pedidos">
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_104)">
                  <path
                    d="M23.9998 11.2459C23.8548 8.90628 23.0283 6.66022 21.6223 4.7846C20.2163 2.90897 18.2922 1.48576 16.0871 0.690412C13.8821 -0.104941 11.4924 -0.237673 9.21287 0.308577C6.93329 0.854827 4.86338 2.05618 3.25828 3.76455C1.65318 5.47292 0.583065 7.61364 0.179837 9.92281C-0.223391 12.232 0.0578963 14.6087 0.989026 16.7599C1.92016 18.9112 3.46043 20.7429 5.41997 22.0294C7.37952 23.3159 9.67268 24.0009 12.0168 23.9999H18.4998C19.9579 23.9981 21.3558 23.418 22.3868 22.3869C23.4179 21.3559 23.9979 19.958 23.9998 18.4999V11.3399V11.2459ZM20.9998 18.4999C20.9998 19.1629 20.7364 19.7988 20.2676 20.2677C19.7987 20.7365 19.1628 20.9999 18.4998 20.9999H12.0168C10.7463 20.9992 9.49016 20.7306 8.33038 20.2118C7.1706 19.693 6.13319 18.9356 5.2858 17.9889C4.43465 17.0429 3.7956 15.9259 3.41151 14.7128C3.02742 13.4996 2.90716 12.2184 3.0588 10.9549C3.29806 8.96309 4.19322 7.10748 5.60324 5.68044C7.01326 4.2534 8.85799 3.33605 10.8468 3.07291C11.2359 3.02435 11.6277 2.99997 12.0198 2.99991C14.1159 2.99391 16.1474 3.72523 17.7588 5.06591C18.6982 5.84622 19.4697 6.80881 20.0267 7.89556C20.5837 8.98231 20.9148 10.1707 20.9998 11.3889V18.4999Z"
                    fill="white"
                  />
                  <path
                    d="M9.50012 11.0001H12.5001C12.8979 11.0001 13.2795 10.8421 13.5608 10.5608C13.8421 10.2795 14.0001 9.89795 14.0001 9.50012C14.0001 9.1023 13.8421 8.72077 13.5608 8.43946C13.2795 8.15816 12.8979 8.00012 12.5001 8.00012H9.50012C9.1023 8.00012 8.72077 8.15816 8.43946 8.43946C8.15816 8.72077 8.00012 9.1023 8.00012 9.50012C8.00012 9.89795 8.15816 10.2795 8.43946 10.5608C8.72077 10.8421 9.1023 11.0001 9.50012 11.0001Z"
                    fill="white"
                  />
                  <path
                    d="M16.5001 12.9999H9.50012C9.1023 12.9999 8.72077 13.1579 8.43946 13.4392C8.15816 13.7205 8.00012 14.1021 8.00012 14.4999C8.00012 14.8977 8.15816 15.2792 8.43946 15.5605C8.72077 15.8418 9.1023 15.9999 9.50012 15.9999H16.5001C16.8979 15.9999 17.2795 15.8418 17.5608 15.5605C17.8421 15.2792 18.0001 14.8977 18.0001 14.4999C18.0001 14.1021 17.8421 13.7205 17.5608 13.4392C17.2795 13.1579 16.8979 12.9999 16.5001 12.9999Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_104">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
          <button class="nav-item" title="Favoritos">
            <span
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_101)">
                  <path
                    d="M17.5 1.9165C16.3739 1.93402 15.2724 2.24836 14.3067 2.82778C13.341 3.40719 12.5453 4.23117 12 5.2165C11.4546 4.23117 10.6589 3.40719 9.6932 2.82778C8.7275 2.24836 7.62601 1.93402 6.49996 1.9165C4.7049 1.99449 3.01366 2.77976 1.79574 4.10074C0.577818 5.42171 -0.0677922 7.17103 -4.17093e-05 8.9665C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5996 10.8293 23.0125 12 23.0125C13.1706 23.0125 14.3037 22.5996 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.9665C24.0677 7.17103 23.4221 5.42171 22.2042 4.10074C20.9863 2.77976 19.295 1.99449 17.5 1.9165Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_101">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("footer-component", FooterComponent);

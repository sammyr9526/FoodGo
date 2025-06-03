import { LitElement, html, css } from 'lit';

export class PopMessage extends LitElement {
   
  static styles = css`
    .pop {
      background: #fff;
      border-radius: 28px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      padding: 48px 28px 32px 28px;
      max-width: 410px;
      margin: 40px auto; 
      flex-direction: column;
      align-items: center;
       position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;   
      z-index: 1001;
       
    }
    .icon-success {
      width: 96px;
      height: 96px;
      margin-bottom: 28px;
      background: #f53939;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-success svg {
      width: 52px;
      height: 52px;
      color: #fff;
    }
    .success-title {
      color: #f53939;
      font-weight: 700;
      font-size: 2rem;
      margin: 16px 0 12px 0;
      text-align: center;
    }
    .description {
      color: #8d8d8d;
      text-align: center;
      margin-bottom: 40px;
      font-size: 1.1rem;
      line-height: 1.4;
    }
    .boton {
      padding: 18px 0;
      background: #f53939;
      color: #fff;
      border: none;
      border-radius: 18px;
      font-size: 1.25rem;
      font-weight: 500;
      width: 100%;
      max-width: 300px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(245,57,57,0.13);
      transition: background 0.2s;
    }
    .boton:hover {
      background: #d63434;
    }
    .contador {
      margin-bottom: 15px;
      color: #7d7d7d;
      font-size: 1.13rem;
    }
  `;
    
  static properties = {
    amount: { type: Number },
    nombre: { type: String },
    openPop: { type: Boolean }
  };


  constructor() {
    super();
    this.openPop= false
    this.amount = 0;
    this.nombre = '';
  }

    _closePop() {
    this.dispatchEvent(new CustomEvent('close-pop', {
      bubbles: true, composed: true
    }));
  }

  render() {
     if (!this.openPop) return html``;
    return html`
      <div class="pop" @click=${e => e.stopPropagation() }>
        <div class="icon-success">
          <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#f53939"/><path d="M34 18L22 30L14 22" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="success-title">
          Success!
        </div>
        <div class="contador">
          ${this.nombre ? html`${this.nombre}: ` : ''}${this.amount}
        </div>
        <div class="description">
          Your payment was successful.<br>
          A receipt for this purchase has been sent to your email.
        </div>
        <button class="boton" @click=${this._closePop} >Go Back</button>
      </div>
    `;
  }
}

customElements.define('pop-message', PopMessage);
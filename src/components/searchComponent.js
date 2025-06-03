import { LitElement, html, css } from 'lit';

class BurguerSearch extends LitElement {
  static properties = { 
    search: { type: String },
  };

  constructor() {
    super(); 
    this.search = '';
  }

  static styles = css`
  :host{
    
      width:80%;
  }
    input{
      width:70%;
      background: #fafafc;
      padding: 0.7em 1.2em;
      outline: none;
      border-radius: 999px;
      border: none;
      font-size: 1.1rem;  
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  `;

  onInput(e) {
    this.search = e.target.value;
     // Creamos un evento personalizado con el término a buscar
    this.dispatchEvent(new CustomEvent('search-burguer', {
      detail: { word: this.search.trim() },
      bubbles: true, 
      composed: true
    }));
     
  }

 


  render() {
       return html`
      <input
        class="search-bar"
        type="text"
        .value=${this.search}
        placeholder="Buscar hamburguesa..."
        @input=${this.onInput} 
      />
      
    `;
  }
}

customElements.define('burguer-search', BurguerSearch);
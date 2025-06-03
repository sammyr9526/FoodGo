import { LitElement, html, css } from 'lit';
import "./popMessage"

export class BurguerModal extends LitElement {
    static styles = css`
    .modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      background: rgba(0,0,0,0.5);
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .contenido {
      background: white;
      padding: 24px;
      border-radius: 8px;
      min-width:180px;
      min-height: 150px;
      max-width:300px;
      box-shadow: 0 8px 32px #2225;
      position: relative;
      text-align: center;
    }
    .m-description{ 
        max-width: 450px;
        height:120px;
        margin:auto;
       
    
    }
    .m-description p{ 
        max-width: 450px; 
         text-align:left
    }
    .m-rating{  
      display: flex; 
      gap: 1.5px; 
    }
    .m-star{ 
      color: #fa9805;
      font-size: 1.03em; 
      gap: 1.5px;
      font-weight: bold;
    
    }
    .rating {
        color:#808080
    }
    .close {
      position: absolute;
      top: 8px;
      left: 12px;
      font-size: 20px;
      background: none;
      border: none;
      cursor: pointer;
      color: #888;
    }
    img {
      max-width: 150px;
      margin-bottom: 1em;
      border-radius: 6px;
    }
    strong {
      font-size: 1.2em;
    }
    .m-portions{
        width:20%;
        margin:auto;
        display:flex;
        flex-direction:row; 
        justify-content:space-evenly
    }
    .m-portions p{
        margin-left:2px;
        margin-right:2px ; 
        font-weight:500;
        font-size: 16px;
        margin-top:12px
        
    }
    .btn-add, .btn-reduce{
   width: 30px; 
   height:34px; 
   background-color: #EF2A39;
  color: white; 
  border:none;;
  border-radius:5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(245, 57, 57, 0.3); 
  margin:4px; 
  cursor: pointer;  
  transition: background-color 0.3s ease;
    }
    p{
        height:15px
    }
    .m-orders{
        margin-top:20px;
       display:flex;
        flex-direction:row; 
        justify-content:space-evenly
    }

   .btn-precio {
  background-color: #EF2A39;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(245, 57, 57, 0.3);
  font-weight: 600;
  user-select: none;
  transition: background-color 0.3s ease;
  min-width: 80px;
  text-align: center;
}

.btn-precio:hover {
  background-color: #d63434;
}

.btn-ordenar {
  background-color: #2d2424; 
  color: white;
  padding: 12px 32px;
  font-size: 16px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(45, 36, 36, 0.5);
  font-weight: 600;
  user-select: none;
  transition: background-color 0.3s ease;
  min-width: 150px;
  text-align: center;
}

.btn-ordenar:hover {
  background-color: #211a1a;
}
   @media (max-width: 500px) {
        .m-description{
        width:80%; 
        margin-bottom:60px;
    }

  `;

  static properties = {
    burguer: { type: Object },
    open: { type: Boolean },
    portions:{type:Number},
    minPortions:{type:Number},
    visiblePop:{type:Boolean}
    
  };

  constructor() {
    super();
    this.burguer = null;
    this.open = false; 
    this.portions=0
    this.minPortions=1 
    this.visiblePop = false;
  }

   
  //funcion que reduce el contador
  reduce() {
    if (this.portions > this.minPortions) {
      this.portions--;
    }
  }

  //funcion que aumenta el contador
  add() {
    this.portions++;
  }
  
  // Creamos un evento personalizado para cerrar el modal
  _close() {
    this.dispatchEvent(new CustomEvent('close-modal', {
      bubbles: true, composed: true
    }));
  }

 openPop() { 
    this.visiblePop = true;
  }

    // Funcion que cierra el Pop
  closePop() {
    this.visiblePop = false; 
  } 

  render() {
    if (!this.open || !this.burguer) return html``;
    const h = this.burguer;
    return html`
      <div class="modal" @click=${this._close}>
        <div class="contenido" @click=${e => e.stopPropagation() }>
          <button class="close" @click=${this._close}><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1666 6.24999H5.90812L8.75362 3.40449C9.08191 3.07635 9.26641 2.63124 9.26652 2.16707C9.26662 1.7029 9.08234 1.2577 8.7542 0.929407C8.42606 0.601114 7.98095 0.416619 7.51678 0.41651C7.05261 0.4164 6.60741 0.600685 6.27912 0.928824L2.09545 5.11249C1.33101 5.87903 0.901733 6.91742 0.901733 7.99999C0.901733 9.08256 1.33101 10.1209 2.09545 10.8875L6.27912 15.0712C6.60741 15.3993 7.05261 15.5836 7.51678 15.5835C7.98095 15.5834 8.42606 15.3989 8.7542 15.0706C9.08234 14.7423 9.26662 14.2971 9.26652 13.8329C9.26641 13.3687 9.08191 12.9236 8.75362 12.5955L5.90812 9.74999H16.1666C16.6307 9.74999 17.0759 9.56562 17.4041 9.23743C17.7322 8.90924 17.9166 8.46412 17.9166 7.99999C17.9166 7.53586 17.7322 7.09074 17.4041 6.76255C17.0759 6.43436 16.6307 6.24999 16.1666 6.24999Z" fill="#3C2F2F"/>
</svg>
</button>
          <image-component source=${h.imagen} size="250px"></image-component> 
          <div class="m-rating">
            <p class="m-star">★ </p> 
            <p class="rating">
            ${h.rating}- 26 mins
          </p>
          </div>
          <div class="m-description">
             <strong>${h.nombre}</strong>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit semper, nisl eros taciti augue vivamus interdum metus mauris </p>
                
          </div>
          <div class="m-portions">
           <button class="btn-add" @click=${this.reduce}>-</button>
                 <p>${this.portions}</p>
                 <button class="btn-reduce" @click=${this.add}>+</button>
            </div>
            <div class="m-orders">
                <button class="btn-precio" >${h.precio}</button> 
                 <button class= "btn-ordenar" @click=${() => this.openPop()} >ORDER NOW</button>
            </div>
          </div>
        </div>
        <pop-message  
        .openPop=${this.visiblePop}
        .amount=${this.portions}
        @close-pop=${this.closePop}></pop-message>>
            
        </pop-message>
      </div>
    `;
  }
}

customElements.define('description-modal', BurguerModal);
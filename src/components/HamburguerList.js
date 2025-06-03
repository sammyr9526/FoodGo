import { LitElement, html, css } from "lit";
import "./logoComponent";
import "./imageComponent"
import "./footerComponent";
import "./searchComponent"
import "./descriptionComponent"

const burgerList = [
  {
    nombre: "Cheeseburger",
    descripcion: "Wendy's Burguer",
    precio: 4.99, 
    favorito: true,
    rating: 4.9,
    imagen:
      "./src/assets/burguer_3.png",
  },
  {
    nombre: " Veggie Burguer",
    descripcion: "Veggie Burger",
    precio: 4.25, 
    favorito: false,
    rating: 4.8,
   imagen: "./src/assets/burguer_4.png",},
  {
    nombre: "Hamburger Chicken",
    descripcion: "Chicken Burger",
    precio: 4.6, 
    favorito: true,
    rating: 4.6,
    imagen:  "./src/assets/burguer_5.png",},
  {
    nombre: "Hamburger",
    descripcion: "Fried Chicken Burger",
    precio: 4.5, 
    favorito: false,
    rating: 4.5,
    imagen:  "./src/assets/burguer_6.png", },
];


export class BurguerList extends LitElement {
    static styles = css`
    :host {
      --main-radius: 16px;
      display: block;
      width: 100vw;
      min-height: 100vh;
      background: #fafbff;
      font-family: "Inter", "Segoe UI", Arial, sans-serif;
      color: #222;
      position: relative;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background: #fff;
      padding-bottom: 90px;
      display:flex;
      flex-direction:column;
      border-radius: var(--main-radius);
      min-height: 100vh;
      box-shadow: 0 6px 32px -6px rgba(40, 20, 40, 0.1);
      position: relative;
    }
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 28px 20px 8px 20px;
    }
    .header .avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #ffe1e1;
    } 
    
    logo-component {
      margin-top: -8px;
      margin-bottom: 0;
    }
    .search-bar {
      margin: 22px 18px 12px;
      display: flex;
      justify-content:space-between;
      gap: 8px;
      align-items: center;
    }
    .search-input { 
      max-width:70%;
      background: #fafafc;
      padding: 0.7em 1.2em;
      outline: none;
      border-radius: 999px;
      border: none;
      font-size: 1.1rem;
      box-shadow: 0 1px 4px #eee9;
    }
    .search-btn {
      background: #e94141;
      color: #fff;
      border: none;
      border-radius: 20px; 
      width:50px;
      height:50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      box-shadow: 0 2px 8px -3px #e9414180;
      margin-left: 0;
      cursor: pointer;
      transition: background 0.15s;
    }
    .filters {
      padding: 0 18px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 10px;
    }
    .filter-btn {
      background: #f0eaea;
      border: none;
      border-radius: 999px;
      color: #100f0f;
      font-size: 1.04em;
      padding: 0.6em 1.25em;
      cursor: pointer;
      transition: background 0.16s;
    }
    .filter-btn.selected,
    .filter-btn.active {
      background: #e94141;
      color: #fff;
      font-weight: bold;
    }
    .burger-list {
      display: flex;
      flex-direction:row;
      width:100%;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 8px 20px 24px 20px;
      justify-content: flex-start;
    }
    .burger-card {
      background: #fff;
      border-radius: 20px;   
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: calc(50% - 0.5rem);
      margin-bottom: 7px;
      padding: 10px 9px 13px 9px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width:200px;
      position: relative;
    }
    .burger-img {
      width: 84px;
      height: 72px;
      object-fit: contain;
      border-radius: 14px;
      margin-bottom: 8px;
    }
    .b-name {
      font-size: 1.02em;
      font-weight: bold;
      color: #222;
      margin-bottom: 1px;
      text-align: center;
    }
    .b-desc {
      color: #ed6d266a;
      font-size: 0.99em;
      margin-bottom: 7px;
      text-align: center;
      font-weight: 500;
    }
    .b-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 7px;
      width: 100%;
      margin-top: 0;
    }
    .b-price {
      color: #e94141;
      font-weight: bold;
      font-size: 1.09em;
    }
     .b-fav{
     cursor:pointer;
     }
    .b-rating {
      color: #fa9805;
      font-size: 1.03em;
      display: flex;
      align-items: center;
      gap: 1.5px;
      font-weight: bold;
    }
    .fab-btn {
      position: fixed;
      bottom: 80px;
      right: 32px;
      width: 55px;
      height: 55px;
      background: #e94141;
      color: #fff;
      border-radius: 50%;
      border: none;
      font-size: 2.5em;
      box-shadow: 0 3px 24px -5px #e941418f;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    } 

    .tab-bar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: 58px;
      background: #fff;
      border-radius: 16px 16px 0 0;
      box-shadow: 0 -2px 16px -8px #e9414150;
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 99;
    }
    .tab-bar .tab {
      color: #e94141;
      font-size: 1.5em;
      opacity: 0.6;
      transition: opacity 0.12s;
    }
    .tab-bar .tab.active {
      opacity: 1;
    }
    @media (max-width: 500px) {
      .container {
        max-width: 100vw;
        border-radius: 0;
      }

      .burger-list { 
      width:auto; 
      justify-content:center
    }
      .fab-btn {
        right: 18px;
      }
      .search-input{
        width:70%

      }
    }
  `;

   static properties = {
    burgers: { type: Array },
    filteredBurger: { type: Array },
    counter: {type:Number},
    selectedBurguer: { type: Object },
    visibleModal: { type: Boolean }
  };
  constructor() {
    super();
    this.burgers = burgerList;
    this.filteredBurger = [...this.burgers];
    this.counter = this.burgers.filter(h => h.favorito).length; 
     this.selectedBurguer = null;
    this.visibleModal = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('search-burguer', this.handleSearch); 
  }

  disconnectedCallback() {
    this.removeEventListener('search-burguer', this.handleSearch);
    super.disconnectedCallback();
  }

  handleSearch = (event) => {
    const termino = event.detail.word.toLowerCase();
    this.filteredBurger = this.burgers.filter(h =>
      h.nombre.toLowerCase().includes(termino)
    );

    console.log(this.filteredBurger)
  } 

     

   updated(changedProperties) {
  super.updated && super.updated(changedProperties);
  console.log('Componente renderizado. Estado de hamburguesas camiado:', this.burgers);
}

  toggleFavorite(index) {
    // Creamos un nuevo array para hacer uso de la reactividad de Lit
    const newList = this.burgers.map((item, i) =>
      i === index ? { ...item, favorito: !item.favorito } : item,
    );
    
    this.burgers = newList;
    this.filteredBurger=this.burgers
    
    // Actualizamos el contador global de favoritos 
    this.counter = this.burgers.filter(h => h.favorito).length 
     
  } 
 
    // Funcion que abre el modal
  openModal(burguer) {
    this.selectedBurguer = burguer;
    this.visibleModal = true;
  }

    // Funcion que cierra el modal
  closeModal() {
    this.visibleModal = false;
    this.selectedBurguer = null;
  }

  render() {
    
    return html`
      <div class="container">
        <div class="header"> 
          <div>
            <logo-component color="#3C2F2F" size="44px"></logo-component>
            <div class="subtitle">Order your favourite food!</div>
           
          </div>
          <img
            class="avatar"
            src="./src/assets/user.jpg"
            alt="avatar"
          />
        </div>
        <div class="search-bar">
          <burguer-search></burguer-search>
          
          <a class="search-btn">
            <span><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
   
<g clip-path="url(#clip0_1_36)">
<path d="M28.7 20.6254C28.4188 20.0275 27.9733 19.522 27.4155 19.168C26.8577 18.8139 26.2107 18.6259 25.55 18.6259C24.8893 18.6259 24.2423 18.8139 23.6845 19.168C23.1267 19.522 22.6812 20.0275 22.4 20.6254H19.5C19.1022 20.6254 18.7206 20.7834 18.4393 21.0647C18.158 21.346 18 21.7275 18 22.1254V22.1254C18 22.5232 18.158 22.9047 18.4393 23.186C18.7206 23.4673 19.1022 23.6254 19.5 23.6254H22.395C22.6762 24.2232 23.1217 24.7287 23.6795 25.0828C24.2373 25.4368 24.8843 25.6249 25.545 25.6249C26.2057 25.6249 26.8527 25.4368 27.4105 25.0828C27.9683 24.7287 28.4138 24.2232 28.695 23.6254H40.5C40.8978 23.6254 41.2794 23.4673 41.5607 23.186C41.842 22.9047 42 22.5232 42 22.1254C42 21.7275 41.842 21.346 41.5607 21.0647C41.2794 20.7834 40.8978 20.6254 40.5 20.6254H28.7Z" fill="white"/>
<path d="M34.455 26.4994C33.7944 26.5006 33.1477 26.6891 32.5899 27.0431C32.0321 27.3971 31.5863 27.9021 31.304 28.4994H19.5C19.1022 28.4994 18.7206 28.6574 18.4393 28.9387C18.158 29.22 18 29.6016 18 29.9994V29.9994C18 30.3972 18.158 30.7787 18.4393 31.06C18.7206 31.3413 19.1022 31.4994 19.5 31.4994H31.3C31.5812 32.0972 32.0267 32.6027 32.5845 32.9568C33.1423 33.3109 33.7893 33.4989 34.45 33.4989C35.1107 33.4989 35.7577 33.3109 36.3155 32.9568C36.8733 32.6027 37.3188 32.0972 37.6 31.4994H40.5C40.8978 31.4994 41.2794 31.3413 41.5607 31.06C41.842 30.7787 42 30.3972 42 29.9994C42 29.6016 41.842 29.22 41.5607 28.9387C41.2794 28.6574 40.8978 28.4994 40.5 28.4994H37.605C37.3228 27.9022 36.8771 27.3974 36.3195 27.0434C35.762 26.6894 35.1154 26.5007 34.455 26.4994Z" fill="white"/>
<path d="M25.545 34.3744C24.8846 34.3758 24.238 34.5644 23.6805 34.9184C23.1229 35.2724 22.6772 35.7773 22.395 36.3744H19.5C19.1022 36.3744 18.7206 36.5324 18.4393 36.8137C18.158 37.095 18 37.4766 18 37.8744V37.8744C18 38.2722 18.158 38.6537 18.4393 38.935C18.7206 39.2163 19.1022 39.3744 19.5 39.3744H22.395C22.6762 39.9722 23.1217 40.4777 23.6795 40.8318C24.2373 41.1859 24.8843 41.3739 25.545 41.3739C26.2057 41.3739 26.8527 41.1859 27.4105 40.8318C27.9683 40.4777 28.4138 39.9722 28.695 39.3744H40.5C40.8978 39.3744 41.2794 39.2163 41.5607 38.935C41.842 38.6537 42 38.2722 42 37.8744C42 37.4766 41.842 37.095 41.5607 36.8137C41.2794 36.5324 40.8978 36.3744 40.5 36.3744H28.7C28.4175 35.7765 27.9709 35.2711 27.4124 34.9171C26.8539 34.563 26.2063 34.3748 25.545 34.3744Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_36">
<rect width="24" height="24" fill="white" transform="translate(18 18)"/>
</clipPath>
</defs>
</svg>
 
</span>
          </a>
        </div>
        <div class="filters">
          <button class="filter-btn selected">All</button>
          <button class="filter-btn">Combos</button>
          <button class="filter-btn">Sliders</button>
          <button class="filter-btn">Classic</button>
        </div>
        <div class="burger-list">
          
          ${ this.filteredBurger.length>0 ?  this.filteredBurger.map(
            (b, i) => html`
              <div class="burger-card" >
                <image-component source=${b.imagen} size="100px" alt="${b.nombre}"  @click=${() => this.openModal(b)}> </image-component>  
                <span class="b-name  @click=${() => this.openModal(b)}">${b.nombre} </span>
                <span class="b-desc">${b.descripcion}</span>
                <div class="b-details"> 
                  <span class="b-rating">★${b.rating}</span>
                  <a 
                    @click=${() => this.toggleFavorite(i)}
                  >
                    <span class="b-fav">
                      
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path d="M21 8.99998C21 12.7539 15.7156 17.9757 12.5857 20.5327C12.2416 20.8137 11.7516 20.8225 11.399 20.5523C8.26723 18.1523 3 13.1225 3 8.99998C3 2.00001 12 2.00002 12 8C12 2.00001 21 1.99999 21 8.99998Z" stroke="#000000" fill=${b.favorito === true ? "gold" : "white"} stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                     
                    </span>
                     
                   </a>
                </div>
              </div>
            
              
      

            `
          ) : html `No se encontraron hamburguesas.`
         }
        </div>
        </div> 
         <description-modal
        .burguer=${this.selectedBurguer}
        .open=${this.visibleModal}
        @close-modal=${this.closeModal}>
      </description-modal>
      <footer-component .favoriteCounter=${this.counter}></footer-component>
    `;
  }
}

customElements.define("burguer-list", BurguerList); 
 
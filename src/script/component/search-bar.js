class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 5px;
           display: flex;
           position: sticky;
           top: 10px;
           background-color: #f38ba0;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid #b5eaea;
           font-weight: bold;
           font-family: 'Marck Script', cursive;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid #ffbcbc;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: #ffbcbc;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: #b5eaea;
           color: white;
           border: 0;
           text-transform: uppercase;
           font-family: 'Marck Script', cursive;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
               font-family: 'Marck Script', cursive;
           }
      
           .search-container > button {
               width: 100%;
               font-family: 'Marck Script', cursive;
           }
       }
       @media screen and (max-width: 768px){
        .search-container {
            flex-direction: column;
            position: static;
        }
   
        .search-container > input {
            width: 100%;
            margin-bottom: 12px;
            font-family: 'Marck Script', cursive;
            
        }
   
        .search-container > button {
            width: 100%;
            font-family: 'Marck Script', cursive;
        }
    }

       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search food " id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
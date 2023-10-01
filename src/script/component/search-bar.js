class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
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
          background-color: white;
        }
        
        .search-container > input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid brown;
          font-weight: bold;
        }
        
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid brown;
        }
        
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        
        .search-container >  input::placeholder {
          color: Brown;
          font-weight: normal;
        }
        
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: brown;
          color: white;
          border: 0;
          text-transform: uppercase;
        }
        .text{
            max-width: 1140px;
            margin: 0 auto;
        }
        .text > h2{
          text-align: center;
        }
        .text > p{
          margin-bottom : 30px;
          text-align : center;
          padding: 20px;
          border-bottom: 5px solid brown;
        }
        
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
            position: static;
          }
          
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          
          .search-container > button {
            width: 100%;
          }
        }
        </style>
        <div class= "text">           
                <h2>Welcome To the Meal Recipe</h2>
                <p>Hi all, this is a web of special recipes from around the world. so, do a search and we'll walk you through the steps in detail. thank you.</p>
        </div>
          <div id="search-container" class="search-container">
            <input placeholder="Search Your favorite Meal" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);

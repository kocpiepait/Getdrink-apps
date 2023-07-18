class SearchBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
      }

    get value() {
        return this.querySelector('#cari').value;
      }
   
    render() {
      this.innerHTML = `
      <div class="search-container">
        <div class="search-wrap">
          <input type="search" placeholder="Search Your Drink...." id="cari" class="inpt">
          <button type="submit" class="btn" id="btn-cari">Search</button>
        </div>
     </div>
      `;

      this.querySelector('#btn-cari').addEventListener('click', this._clickEvent);
    }
  }

customElements.define('search-bar', SearchBar);
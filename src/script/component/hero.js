class Jumbotron extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `<div class="hero">
      <h2>Welcome To The GETDRINK</h2>
    </div>`;
    }
  }
   
  customElements.define('jumbotron-hero', Jumbotron);
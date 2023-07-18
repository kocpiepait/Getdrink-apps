class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `<h1>GETDRINK</h1>`;
    }
  }
   
  customElements.define('app-bar', AppBar);
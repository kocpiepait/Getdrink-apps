import "./script/component/search-bar.js";
// import "./script/component/hero.js";
import DataSource from "./script/data/data-source.js";

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const drinkListElement = document.querySelector('#drink');
    
    const onButtonSearchClicked = async () => {
      try {
        const result = await DataSource.searchDrink(searchElement.value);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };
   
    const renderResult = results => {
      drinkListElement.innerHTML = '';
      results.forEach(drink =>{
        const {strDrink,strDrinkThumb} =drink;
   
        const drinkElement = document.createElement('div');
        drinkElement.setAttribute('class', 'drink');
   
        drinkElement.innerHTML = `
          <img class="img-drink" src="${strDrinkThumb}" alt="Img Drink">
          <div class="drink-name">
          <h5>${strDrink}</h5>
          </div>
          `;
        drinkListElement.appendChild(drinkElement);
      });
    };
    
    const fallbackResult = message => {
      drinkListElement.innerHTML = '';
      drinkListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };
   
    searchElement.clickEvent = onButtonSearchClicked;
  };

  export default main;
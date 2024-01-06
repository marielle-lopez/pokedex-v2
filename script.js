import { getPokemon, filterPokemon } from "./scripts/pokemon.js";
import { displayCards, displayPageNumbers } from "./scripts/dom.js";

window.addEventListener("DOMContentLoaded", async () => {
  await getPokemon(1).then((res) => {
    displayCards(res[0]);
    displayPageNumbers(res[1]);
  });

  document
    .querySelector(".search__form__btn--reset")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      await getPokemon(1).then((res) => {
        document.querySelector(".search__form__textbox").value = "";
        displayCards(res[0]);
        displayPageNumbers(res[1]);
      });
    });

  document
    .querySelector(".search__form__btn--search")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const query = document.querySelector(".search__form__textbox").value;

      if (query) {
        await filterPokemon(query).then((res) => {
          displayCards(res);
        });
      }
    });
});

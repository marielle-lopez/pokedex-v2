import { getPokemon } from "./scripts/pokemon.js";
import { displayCards, displayPageNumbers } from "./scripts/dom.js";

window.addEventListener("DOMContentLoaded", async () => {
  await getPokemon(1).then((res) => {
    displayCards(res[0]);
    displayPageNumbers(res[1]);
  });
});

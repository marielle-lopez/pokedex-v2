import { getPokemon } from "./scripts/pokemon.js";
import { displayCards } from "./scripts/dom.js";

window.addEventListener("DOMContentLoaded", async () => {
  await getPokemon(1).then((res) => displayCards(res));
});

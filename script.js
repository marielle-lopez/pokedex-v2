import { getAllPokemon } from "./scripts/pokemon.js";

window.addEventListener("DOMContentLoaded", async () => {
  await getAllPokemon(1).then((res) => console.log(res));
});

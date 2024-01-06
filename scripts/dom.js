import { getPokemon } from "./pokemon.js";

const displayModal = (name) => {
  console.log("Clicked!");

  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  const closeBtn = document.querySelector(".modal__top-bar__close");
  closeBtn.addEventListener("click", (event) => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  const nameElement = document.querySelector(".modal__top-bar__name");
  const nameTextNode = document.createTextNode(name);
  nameElement.append(nameTextNode);

  // const typeElement = document.querySelector(".modal__top-bar__type");
  // const typeTextNode = document.createTextNode()
};

export const displayPageNumbers = (totalPagesNumber) => {
  const pagesContainer = document.querySelector(".pagination-container");
  pagesContainer.replaceChildren();

  Array.from(Array(totalPagesNumber).keys()).map((number) => {
    const textNode = document.createTextNode(number + 1);
    const elementNode = document.createElement("button");

    elementNode.classList.add("page-btn");

    elementNode.append(textNode);

    pagesContainer.appendChild(elementNode);
    elementNode.addEventListener("click", async () => {
      await getPokemon(number + 1).then((res) => {
        document.querySelector(".cards").replaceChildren();
        document.querySelector(".pagination-container").replaceChildren();
        displayCards(res[0]);
        displayPageNumbers(res[1]);
      });
    });
  });
};

export const createCard = (pokemonName, imgURL, type) => {
  const card = document.createElement("div");

  const textNodeName = document.createTextNode(pokemonName);
  const textNodeType = document.createTextNode(type.join(", "));

  const elementNodeName = document.createElement("p");
  const elementNodeImg = document.createElement("img");
  const elementNodeType = document.createElement("p");

  elementNodeImg.src = imgURL;

  elementNodeName.append(textNodeName);
  elementNodeType.append(textNodeType);

  card.classList.add("card");
  card.id = pokemonName;
  elementNodeName.classList.add("card__name");
  elementNodeImg.classList.add("card__img");
  elementNodeType.classList.add("card__type");

  card.appendChild(elementNodeName);
  card.appendChild(elementNodeImg);
  card.appendChild(elementNodeType);

  card.addEventListener("click", (event) => {
    displayModal(pokemonName);
  });

  return card;
};

export const displayCards = (pokemon) => {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.replaceChildren();

  pokemon.map((item) => {
    const card = createCard(item.name, item.imgURL, item.type);
    cardsContainer.appendChild(card);
  });
};

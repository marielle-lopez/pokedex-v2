import { getPokemon } from "./pokemon.js";

const displayModal = async (pokemon) => {
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
  nameElement.replaceChildren();
  const nameTextNode = document.createTextNode(pokemon.name);
  nameElement.append(nameTextNode);

  const typeContainer = document.querySelector(".modal__top-bar__type");
  typeContainer.replaceChildren();

  pokemon.type.map((type) => {
    const typeElement = document.createElement("img");
    typeElement.classList.add("modal__top-bar__type__item");
    typeElement.src = `../resources/images/${type}.png`;
    typeElement.alt = `${type} type symbol`;
    typeContainer.appendChild(typeElement);
  });

  const imgElement = document.querySelector(".modal__info__sprite");
  imgElement.src = pokemon.imgURL;
  imgElement.alt = pokemon.name;

  const abilitiesPromises = pokemon.abilities.map((ability) =>
    fetch(ability.url)
  );

  const data = await Promise.all(abilitiesPromises);

  const typesContainer = document.querySelector(".modal__info__abilities");
  typesContainer.replaceChildren();

  data.map(async (item) => {
    const itemObj = await item.json();
    const name = itemObj.name;
    const description = itemObj["effect_entries"].filter(
      (property) => property.language.name === "en"
    )[0]["short_effect"];

    const typeContainer = document.createElement("div");
    typeContainer.classList.add("modal__info__abilities__ability");

    const nameTextNode = document.createTextNode(name);
    const nameElement = document.createElement("p");
    nameElement.append(nameTextNode);

    const descriptionTextNode = document.createTextNode(description);
    const descriptionElement = document.createElement("p");
    descriptionElement.append(descriptionTextNode);

    typeContainer.appendChild(nameElement);
    typeContainer.appendChild(descriptionElement);

    typesContainer.appendChild(typeContainer);
  });
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

export const createCard = (pokemon) => {
  const card = document.createElement("div");

  const textNodeName = document.createTextNode(pokemon.name);
  const textNodeType = document.createTextNode(pokemon.type.join(", "));

  const elementNodeName = document.createElement("p");
  const elementNodeImg = document.createElement("img");
  const elementNodeType = document.createElement("p");

  elementNodeImg.src = pokemon.imgURL;

  elementNodeName.append(textNodeName);
  elementNodeType.append(textNodeType);

  card.classList.add("card");
  card.id = pokemon.name;
  elementNodeName.classList.add("card__name");
  elementNodeImg.classList.add("card__img");
  elementNodeType.classList.add("card__type");

  card.appendChild(elementNodeName);
  card.appendChild(elementNodeImg);
  card.appendChild(elementNodeType);

  card.addEventListener("click", (event) => {
    displayModal(pokemon);
  });

  return card;
};

export const displayCards = (pokemon) => {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.replaceChildren();

  pokemon.map((item) => {
    const card = createCard(item);
    cardsContainer.appendChild(card);
  });
};

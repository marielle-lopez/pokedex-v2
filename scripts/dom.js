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
  elementNodeName.classList.add("card__name");
  elementNodeImg.classList.add("card__img");
  elementNodeType.classList.add("card__type");

  card.appendChild(elementNodeName);
  card.appendChild(elementNodeImg);
  card.appendChild(elementNodeType);

  return card;
};

export const displayCards = (pokemon) => {
  const cardsContainer = document.querySelector(".cards");

  pokemon.map((item) => {
    const card = createCard(item.name, item.imgURL, item.type);
    cardsContainer.appendChild(card);
  });
};

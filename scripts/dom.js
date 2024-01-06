export const createCard = (pokemonName, imgURL, type) => {
  const textNodeName = document.createTextNode(pokemonName);
  const textNodeType = document.createTextNode(type.join(", "));

  const elementNodeName = document.createElement("p");
  const elementNodeImg = document.createElement("img");
  const elementNodeType = document.createElement("p");

  elementNodeImg.src = imgURL;

  elementNodeName.append(textNodeName);
  elementNodeType.append(textNodeType);

  const card = document.createElement("div");
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

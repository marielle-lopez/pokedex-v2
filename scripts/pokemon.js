export const getAllPokemon = async (pageNumber) => {
  let offset = 0;

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`;

  const firstPageData = await fetch(url).then((res) => res.json());

  const totalPages = Math.ceil(firstPageData.count / 40);

  const remainingPagesPromises = [];

  for (let i = 2; i <= totalPages; i++) {
    offset += 40;
    const promise = fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=40`
    ).then((res) => res.json());
    remainingPagesPromises.push(promise);
  }

  const remainingPages = await Promise.all(remainingPagesPromises);
  const allPages = [firstPageData, ...remainingPages];

  const pokemonURLs = allPages.map((page) =>
    page.results.map((item) => item.url)
  );

  const pokemonInfoPromises = pokemonURLs[pageNumber - 1].map((url) =>
    fetch(url).then((res) => res.json())
  );

  const allPokemonData = await Promise.all(pokemonInfoPromises);

  const allPokemon = allPokemonData.map((pokemon) => {
    return {
      name: pokemon.name,
      type: pokemon.types.map((type) => type.name),
      imgURL: pokemon.sprites["front_default"],
    };
  });

  console.log(allPokemon);
};

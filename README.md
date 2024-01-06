# Pokedex v2

## Task Completion History

### January 7, 2024

- Implemented functional pagination
- Added basic search functionality
- Added reset functionality to the search feature

The original project didn't have pagination, which I have successfully added to this version! One of the things I've encountered whilst learning web development is to avoid the use of `.innerHTML` as it's not the best for high-performance. This is because it utilises the browser's HTML parser, as mentioned from [this Stack Overflow answer](https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript). The second-highest voted answer offered a better alternative to `.innerHTML`, which was to use the `.replaceChildren()` API.

The main goal of this project was achieved - the search functionality! The implementation is quite basic and not as clean as it could be; nonetheless, it works! The reset feature of the search function has also been implemented.

### January 6, 2024

- Allowed Pokémon to display on the page
- Added page numbers based on response from PokéAPI

Applied DOM manipulation to display Pokémon and page numbers.

### January 5, 2024

- Added foundational HTML and styling
- Added function that retrieves Pokémon data from API based on specified offset and limit for pagination reasons

Restarting a [not-too-long-ago project](https://github.com/marielle-lopez/pokedex) from scratch, which had the purpose of being a Pokédex that utilised the free [PokéAPI](https://pokeapi.co/). I currently do not have a complete set of features to implement in mind, except the product to at least be able to search for any Pokémon. So, this will be my first big goal!

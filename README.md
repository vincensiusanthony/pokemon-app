# Pokémon App
![Markdown](https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png)

A responsive mobile web app built using Vite , React TypeScript , and Chakra UI . The app allows users to browse and view detailed information about Pokémon using data from the [PokéAPI](https://pokeapi.co/?spm=a2ty_o01.29997173.0.0.23c85426Remvpj)

## Features
- Responsive Design : Optimized for mobile, tablet, and desktop.
- Pokémon Grid : Displays a grid of Pokémon cards with images and names.
- Detailed View : Click on a Pokémon card to view detailed information such as height, type, and sprite.
- Search & Filter : Includes a header with options for sorting and filtering (basic implementation).
- TypeScript : Ensures type safety and better developer experience.
- Routing : Uses React Router for navigation between pages.

## Technologies Used
- Frontend Framework : React with TypeScript
- CSS Framework : Chakra UI
- Routing : React Router DOM
- Build Tool : Vite
- API : PokéAPI

## Setup Instructions
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username pokemon-app.git 
cd pokemon-app
```

2. Install dependencies:
```bash
npm run dev
```
3. Start the development server:
```bash
npm run dev
```

4. Open the app in your browser:
```bash
http://localhost:[follow local port shows in the command line] ex:5173
```

## Usage
- Home Page : Displays a grid of Pokémon cards fetched from the PokéAPI.
- Details Page : Click on a Pokémon card to view detailed information about the Pokémon.
- Header : Includes a search icon and dropdown menu for sorting/filtering options.

## Future Enhancements
- Add infinite scrolling or pagination for large datasets.
- Implement advanced search and filtering features.
- Add animations and transitions for a smoother user experience.
- Integrate unit tests using Jest or React Testing Library.
- Optimize API calls using caching or state management libraries like Redux or Zustand.

## Acknowledgments
- [PokéAPI](https://pokeapi.co/?spm=a2ty_o01.29997173.0.0.23c85426Remvpj) : For providing the Pokémon data.
- [Chakra UI](https://chakra-ui.com/?spm=a2ty_o01.29997173.0.0.23c85426Remvpj) : For the responsive and accessible UI components.
- [Vite](https://vitejs.dev/?spm=a2ty_o01.29997173.0.0.23c85426Remvpj) : For the fast and modern build tool.  
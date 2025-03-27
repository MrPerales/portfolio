export const AngularScreenFakeStore = [
  "src/assets/screenApps/Angular/FakeStore/FakeStoreHome.jpg",
  "src/assets/screenApps/Angular/FakeStore/ProductDetail.jpg",
  "src/assets/screenApps/Angular/FakeStore/storeCar.jpg",
];
export const AngularScreenTrello = [
  "src/assets/screenApps/Angular/trello/trelloLogin.jpg",
  "src/assets/screenApps/Angular/trello/trelloRegister.jpg",
  "src/assets/screenApps/Angular/trello/trelloBoards.jpg",
  "src/assets/screenApps/Angular/trello/trelloBoard.jpg",
];
export const ReactScreenMovie = [
  "src/assets/screenApps/React/movieApp/movieAppHome.jpg",
  "src/assets/screenApps/React/movieApp/movieDetail.jpg",
  "src/assets/screenApps/React/movieApp/categories.jpg",
];
export const ReactScreenTodo = [
  "src/assets/screenApps/React/todoApp/todoAppHome.jpg",
  "src/assets/screenApps/React/todoApp/todoAppAddTask.jpg",
  "src/assets/screenApps/React/todoApp/editTask.jpg",
];
export const NativcScreenGame = [
  "src/assets/screenApps/React Native/MemoryGame/home.jpg",
  "src/assets/screenApps/React Native/MemoryGame/game.jpg",
  "src/assets/screenApps/React Native/MemoryGame/game.jpg",
  "src/assets/screenApps/React Native/MemoryGame/score.jpg",
];
export const NativeScreenPokeDex = [
  "src/assets/screenApps/React Native/Pokedex/pokedex.jpg",
  "src/assets/screenApps/React Native/Pokedex/detail.jpg",
  "src/assets/screenApps/React Native/Pokedex/favorites.jpg",
  "src/assets/screenApps/React Native/Pokedex/account.jpg",
];
export const projects = [
  {
    id: 1,
    title: "Fake Store",
    alt: "Captura de pantalla del proyecto Fake Store en Angular",
    technologies: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "taildwindCss",
      },
      {
        id: 3,
        name: "Angular",
      },
    ],
    description:
      " A e-commerce where do you can add the product to shopphing car and see their description, developed with angular and tailwindCss for the website design",
    desktop: true,
    screens: [
      "/projects/Angular/FakeStore/FakeStoreHome.webp",
      "/projects/Angular/FakeStore/ProductDetail.webp",
      "/projects/Angular/FakeStore/storeCar.webp",
      "/projects/Angular/FakeStore/ProductDetail.webp",
      "/projects/Angular/FakeStore/storeCar.webp",
    ],
    repository: "https://github.com/MrPerales/storeAngular",
    rowReverse: false,
  },
  {
    id: 2,
    title: "Trello Clon",
    alt: "Captura de pantalla del proyecto Trello Clon en Angular",
    technologies: [
      {
        id: 1,
        name: "TypeScript",
      },
      {
        id: 2,
        name: "taildwindCss",
      },
      {
        id: 3,
        name: "Angular",
      },
    ],
    description:
      " Trello clone,developed with Angular Cdk components to imitate the interface and consuming fake-trello-api for user verification and task posting",
    desktop: true,
    screens: [
      "/projects/Angular/trello/trelloLogin.webp",
      "/projects/Angular/trello/trelloRegister.webp",
      "/projects/Angular/trello/trelloBoards.webp",
      "/projects/Angular/trello/trelloBoard.webp",
    ],
    repository: "https://github.com/MrPerales/trelloClone",
    rowReverse: false,
  },
  {
    id: 3,
    title: "Movie App",
    alt: "Captura de pantalla del proyecto Movie App en React",
    technologies: [
      {
        id: 4,
        name: "JavaScript",
      },
      {
        id: 5,
        name: "React",
      },
    ],
    description:
      "A movie app developed with react framework,where would you find a lot of movies with their description, rating and other filters, using components and states to share the information got from API",
    desktop: true,
    screens: [
      "/projects/React/movieApp/movieAppHome.webp",
      "/projects/React/movieApp/movieDetail.webp",
      "/projects/React/movieApp/categories.webp",
    ],
    repository: "https://github.com/MrPerales/Movie-App",
    rowReverse: true,
  },
  {
    id: 4,
    title: "Todo App",
    alt: "Captura de pantalla del proyecto Todo App en React",
    technologies: [
      {
        id: 4,
        name: "JavaScript",
      },
      {
        id: 5,
        name: "React",
      },
    ],
    description:
      " A task management app , you can add ,edit and check the task.developed with React framework , using states and hooks to save the all task on local storage",
    desktop: false,
    screens: [
      "/projects/React/todoApp/todoAppHome.webp",
      "/projects/React/todoApp/todoAppAddTask.webp",
      "/projects/React/todoApp/editTask.webp",
    ],
    repository: "https://github.com/MrPerales/My-task-App-",
    rowReverse: true,
  },
  {
    id: 5,
    title: "Pokedex",
    alt: "Captura de pantalla del proyecto Pokedex en React Native",

    technologies: [
      {
        id: 4,
        name: "JavaScript",
      },
      {
        id: 6,
        name: "React Native",
      },
    ],
    description:
      " A pokedex app , where would you find all pokemons , save your Favorites pokes , and see their stats with a friendly interface ,developed with ReactNative",
    desktop: false,
    screens: [
      "/projects/React Native/Pokedex/pokedex.webp",
      "/projects/React Native/Pokedex/detail.webp",
      "/projects/React Native/Pokedex/favorites.webp",
      "/projects/React Native/Pokedex/account.webp",
    ],
    repository: "https://github.com/MrPerales/PokeDex",
    rowReverse: false,
  },
  {
    id: 6,
    title: "Memory Game",
    alt: "Captura de pantalla del proyecto Memory Game en React Native",
    technologies: [
      {
        id: 4,
        name: "JavaScript",
      },
      {
        id: 6,
        name: "React Native",
      },
    ],
    description:
      " A memory game , is a classic board game but this is a virtual version developed with React Native where the objective and rulesare same that board game",
    desktop: false,
    screens: [
      "/projects/React Native/MemoryGame/home.webp",
      "/projects/React Native/MemoryGame/game.webp",
      "/projects/React Native/MemoryGame/game.webp",
      "/projects/React Native/MemoryGame/score.webp",
    ],
    repository: "https://github.com/MrPerales/memoryGame",
    rowReverse: false,
  },
];

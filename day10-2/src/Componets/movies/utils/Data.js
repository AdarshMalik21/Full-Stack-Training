const moviesData = [
  {
    id: 1,
    name: "Inception",
    image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    releaseDate: "2010-07-16",
    description:
      "A skilled thief enters people's dreams to steal secrets and is given a chance at redemption.",
  },
  {
    id: 2,
    name: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    releaseDate: "2014-11-07",
    description:
      "A team of astronauts travels through a wormhole in space to ensure humanity’s survival.",
  },
  {
    id: 3,
    name: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    releaseDate: "2008-07-18",
    description:
      "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into chaos.",
  },
  {
    id: 4,
    name: "Avengers: Endgame",
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    releaseDate: "2019-04-26",
    description:
      "The Avengers assemble one final time to undo Thanos’ actions and restore balance.",
  },
  {
    id: 5,
    name: "Titanic",
    image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    releaseDate: "1997-12-19",
    description:
      "A romantic story set against the tragic sinking of the RMS Titanic.",
  },
  {
    id: 6,
    name: "The Matrix",
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    releaseDate: "1999-03-31",
    description:
      "A hacker discovers the shocking truth about reality and his role in the war against machines.",
  },
  {
    id: 7,
    name: "Gladiator",
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    releaseDate: "2000-05-05",
    description:
      "A former Roman general seeks revenge after being betrayed and enslaved.",
  },
  {
    id: 8,
    name: "Forrest Gump",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    releaseDate: "1994-07-06",
    description:
      "The life journey of a simple man who witnesses and influences historic events.",
  },
  {
    id: 9,
    name: "The Shawshank Redemption",
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    releaseDate: "1994-09-23",
    description:
      "Two imprisoned men bond over years, finding hope and redemption.",
  },
  {
    id: 10,
    name: "Fight Club",
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    releaseDate: "1999-10-15",
    description: "An insomniac office worker forms an underground fight club.",
  },
  {
    id: 11,
    name: "Joker",
    image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    releaseDate: "2019-10-04",
    description:
      "A failed comedian descends into madness and becomes Gotham’s infamous villain.",
  },
  {
    id: 12,
    name: "Parasite",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    releaseDate: "2019-05-30",
    description:
      "A poor family schemes to infiltrate a wealthy household with unexpected consequences.",
  },
  {
    id: 13,
    name: "The Lion King",
    image: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    releaseDate: "1994-06-24",
    description:
      "A young lion prince flees his kingdom only to learn the true meaning of responsibility.",
  },
  {
    id: 14,
    name: "Avatar",
    image: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    releaseDate: "2009-12-18",
    description:
      "A marine on an alien planet becomes torn between duty and protecting a new world.",
  },
  {
    id: 15,
    name: "The Godfather",
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    releaseDate: "1972-03-24",
    description:
      "The powerful story of a crime family and the rise of its reluctant successor.",
  },
  {
    id: 16,
    name: "Jurassic Park",
    image: "https://image.tmdb.org/t/p/w500/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg",
    releaseDate: "1993-06-11",
    description:
      "Dinosaurs are brought back to life in a theme park that spirals out of control.",
  },
  {
    id: 17,
    name: "Spider-Man: No Way Home",
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    releaseDate: "2021-12-17",
    description:
      "Spider-Man faces multiverse chaos when villains from other worlds appear.",
  },
  {
    id: 18,
    name: "Dune",
    image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    releaseDate: "2021-10-22",
    description:
      "A young nobleman navigates political intrigue and destiny on a desert planet.",
  },
  {
    id: 19,
    name: "Black Panther",
    image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    releaseDate: "2018-02-16",
    description: "The king of Wakanda rises to defend his nation and legacy.",
  },
  {
    id: 20,
    name: "The Social Network",
    image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    releaseDate: "2010-10-01",
    description:
      "The story behind the creation of Facebook and the conflicts it sparked.",
  },
];

export default moviesData;

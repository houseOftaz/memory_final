import Seed from "../models/Seed.model.js";

export const seedDB = async (req, res) => {
  const images = [
    {
      name: "cat.webp",
      picture: "cat.webp",
      alt: "cat",
      id: 1,
    },
    {
      name: "cow.webp",
      picture: "cow.webp",
      alt: "cow",
      id: 1,
    },
    {
      name: "dog.webp",
      picture: "dog.webp",
      alt: "dog",
      id: 1,
    },
    {
      name: "eagle.webp",
      picture: "eagle.webp",
      alt: "eagle",
      id: 1,
    },
    {
      name: "elephant.webp",
      picture: "elephant.webp",
      alt: "elephant",
      id: 1,
    },
    {
      name: "monkey.webp",
      picture: "monkey.webp",
      alt: "monkey",
      id: 1,
    },
    {
      name: "panda.webp",
      picture: "panda.webp",
      alt: "panda",
      id: 1,
    },
    {
      name: "parrot.webp",
      picture: "parrot.webp",
      alt: "parrot",
      id: 1,
    },
    {
      name: "shark.webp",
      picture: "shark.webp",
      alt: "shark",
      id: 1,
    },
    {
      name: "snake.webp",
      picture: "snake.webp",
      alt: "snake",
      id: 1,
    },
    {
      name: "america.webp",
      picture: "america.webp",
      alt: "america",
      id: 3,
    },
    {
      name: "batman.webp",
      picture: "batman.webp",
      alt: "batman",
      id: 3,
    },
    {
      name: "flash.webp",
      picture: "flash.webp",
      alt: "flash",
      id: 3,
    },
    {
      name: "greenlantern.webp",
      picture: "greenlantern.webp",
      alt: "greenlantern",
      id: 3,
    },
    {
      name: "hawkman.webp",
      picture: "hawkman.webp",
      alt: "hawkman",
      id: 3,
    },
    {
      name: "hulk.webp",
      picture: "hulk.webp",
      alt: "hulk",
      id: 3,
    },
    {
      name: "ironman.webp",
      picture: "ironman.webp",
      alt: "ironman",
      id: 3,
    },
    {
      name: "spiderman.webp",
      picture: "spiderman.webp",
      alt: "spiderman",
      id: 3,
    },
    {
      name: "superman.webp",
      picture: "superman.webp",
      alt: "superman",
      id: 3,
    },
    {
      name: "wonderwoman.webp",
      picture: "wonderwoman.webp",
      alt: "wonderwoman",
      id: 3,
    },
    {
      name: "agkor.webp",
      picture: "agkor.webp",
      alt: "agkor",
      id: 4,
    },
    {
      name: "china.webp",
      picture: "china.webp",
      alt: "china",
      id: 4,
    },
    {
      name: "china2.webp",
      picture: "china2.webp",
      alt: "china2",
      id: 4,
    },
    {
      name: "coliseum.webp",
      picture: "coliseum.webp",
      alt: "coliseum",
      id: 4,
    },
    {
      name: "egypt.webp",
      picture: "egypt.webp",
      alt: "egypt",
      id: 4,
    },
    {
      name: "jordany.webp",
      picture: "jordany.webp",
      alt: "jordany",
      id: 4,
    },
    {
      name: "machupiccu.webp",
      picture: "machupiccu.webp",
      alt: "machupiccu",
      id: 4,
    },
    {
      name: "mexico.webp",
      picture: "mexico.webp",
      alt: "mexico",
      id: 4,
    },
    {
      name: "rio.webp",
      picture: "rio.webp",
      alt: "rio",
      id: 4,
    },
    {
      name: "tajmahal.webp",
      picture: "tajmahal.webp",
      alt: "tajmahal",
      id: 4,
    },
  ];
  await Seed.seedDB(images);
};

export const seedBackCards = async (req, res) => {
  const images = [
    {
      name: "back-card-1.webp",
      picture: "back-card-1.webp",
      alt: "back-card-1",
      id: 1,
    },

import { v4 as uuid } from "uuid";
import {
  image1,
  image6,
  image7,
  image8,
  image9,
  image10,
} from "assets/images/index";

export const products = [
  {
    _id: uuid(),
    name: "Madhubani Art",
    image: image7,
    ratings: 5,
    price: 399,
    original: 1299,
    discounted: 80,
    description: "Exclusively from Bihar",
    categoryName: "painting",
  },
  {
    _id: uuid(),
    name: "Toy Car",
    image: image1,
    ratings: 3,
    price: 199,
    original: 990,
    discounted: 56,
    description: "Exclusive wooden Toy",
    categoryName: "toys",
  },
  {
    _id: uuid(),
    name: "Wind Chyme",
    image: image6,
    ratings: 4,
    price: 299,
    original: 1000,
    discounted: 70,
    description: "Exclusively from Gujrat",
    categoryName: "decorations",
  },
  {
    _id: uuid(),
    name: "Basket",
    image: image8,
    ratings: 4,
    price: 99,
    original: 200,
    discounted: 50,
    description: "Environment Friendly Baskets",
    categoryName: "home",
  },
  {
    _id: uuid(),
    name: "Wind Chyme",
    image: image9,
    ratings: 3.5,
    price: 390,
    original: 999,
    discounted: 75,
    description: "For your dream home",
    categoryName: "decorations",
  },
  {
    _id: uuid(),
    name: "Marble Pot",
    image: image10,
    ratings: 5,
    price: 190,
    original: 500,
    discounted: 60,
    description: "Made from Marbles",
    categoryName: "decorations",
  },
];

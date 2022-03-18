import { v4 as uuid } from "uuid";

import { image2, image4, image5 } from "assets/images/index";

export const carousels = [
  {
    _id: uuid(),
    name: "Toys",
    image: image5,
    minPrice: 299,
    originalPrice: 499,
    discount: 50,
    categoryName: "Toys",
  },
  {
    _id: uuid(),
    name: "Wall Decors",
    image: image4,
    minPrice: 199,
    originalPrice: 499,
    discount: 40,
    categoryName: "home",
  },
  {
    _id: uuid(),
    name: "Beautiful Paintings",
    image: image2,
    minPrice: 499,
    originalPrice: 999,
    discount: 50,
    categoryName: "paintings",
  },
];

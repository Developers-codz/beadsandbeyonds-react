import { v4 as uuid } from "uuid";

import { image1, image2, image3, image4 } from "assets/images/index";

export const categories = [
  {
    _id: uuid(),
    image: image3,
    categoryName: "decorations",
  },
  {
    _id: uuid(),
    image: image1,
    categoryName: "toys",
  },
  {
    _id: uuid(),
    image: image2,
    categoryName: "painting",
  },
  {
    _id: uuid(),
    image: image4,
    categoryName: "home",
  },
];

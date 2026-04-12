import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Wonder 1 - Great Wall of China",
    src: photo1,
    photographer: "Photographer",
    location: "China",
  },
  {
    id: "2",
    name: "Wonder 2 - Petra",
    src: photo2,
    photographer: "Photographer",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Wonder 3 - Colosseum",
    src: photo3,
    photographer: "Photographer",
    location: "Italy",
  },
  {
    id: "4",
    name: "Wonder 4 - Chichen Itza",
    src: photo4,
    photographer: "Photographer",
    location: "Mexico",
  },
  {
    id: "5",
    name: "Wonder 5 - Machu Picchu",
    src: photo5,
    photographer: "Photographer",
    location: "Peru",
  },
  {
    id: "6",
    name: "Wonder 6 - Taj Mahal",
    src: photo6,
    photographer: "Photographer",
    location: "India",
  },
  {
    id: "7",
    name: "Wonder 7 - Christ the Redeemer",
    src: photo7,
    photographer: "Photographer",
    location: "Brazil",
  },
];

export default wondersImages;
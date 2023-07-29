import c1 from "../../assets/collections/c1.jpg";
import acc from "../../assets/collections/acc.jpg";
import fcc from "../../assets/collections/fcc.mp4";

type SliderType = {
  id: number;
  imgSrc: string | undefined;
  text: string | undefined;
  text2: string | undefined;
  video: boolean;
};

export const sliderData: SliderType[] = [
  {
    id: 0,
    imgSrc: c1,
    text: "Collection",
    text2: "Modern Elegance",
    video: false,
  },
  {
    id: 1,
    imgSrc: fcc,
    text: "Collection",
    text2: "Refined Casuals",
    video: true,
  },
  {
    id: 2,
    imgSrc: acc,
    text: "New Arrival",
    text2: "Accesories",
    video: false,
  },
];

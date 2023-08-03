import col1 from '../../assets/collect/col1.jpg';
import col2 from "../../assets/collect/col2.jpg";
import col3 from "../../assets/collect/col3.jpg";

interface collection {
    id: number,
    title: string,
    src: string,
    alt: string
}

export const CollectData: collection[] = [
  {
    id: 0,
    title: "Radiant Chic",
    src: col1,
    alt: "model",
  },
  {
    id: 1,
    title: "Refined Casuals",
    src: col2,
    alt: "model",
  },
  {
    id: 2,
    title: "Modern Elegance",
    src: col3,
    alt: "model",
  },
];
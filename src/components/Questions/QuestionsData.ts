import faq1 from "../../assets/faq/faq1.jpg";
import faq2 from "../../assets/faq/faq2.jpg";
import faq3 from "../../assets/faq/faq3.mp4";
import faq4 from "../../assets/faq/faq4.jpg";
import faq5 from "../../assets/faq/faq5.jpg";

interface Column {
  id: number;
  title?: string;
  isImage: boolean;
  content?: string;
  isVid: boolean;
  imgSrc?: string;
}

export const QuestionsData: Column[] = [
  {
    id: 0,
    isImage: true,
    isVid: false,
    imgSrc: faq1,
  },
  {
    id: 1,
    title: "What are the sizes available for your products?",
    isImage: false,
    isVid: false,
    content:
      "We offer a wide range of sizes, including XS, S, M, L, and XL. We also provide detailed size charts for each item to help you choose the right size.",
  },
  {
    id: 2,
    isImage: true,
    isVid: false,
    imgSrc: faq2,
  },
  {
    id: 3,
    title: "What payment methods do you accept?",
    isImage: false,
    isVid: false,
    content:
      "We accept credit and debit card payments (Visa, Mastercard, American Express) as well as payments through PayPal and Apple Pay.",
  },
  {
    id: 4,
    isImage: false,
    isVid: true,
    imgSrc: faq3,
  },
  {
    id: 5,
    isImage: false,
    isVid: false,
    title: "What are your return and exchange policies?",
    content:
      "We offer a 30-day return and exchange policy from the date of purchase. The item must be in its original packaging and without any signs of use. For more information, please refer to our return and exchange policy on our website.",
  },
  {
    id: 6,
    isImage: true,
    isVid: false,
    imgSrc: faq4,
  },
  {
    id: 7,
    isImage: false,
    isVid: false,
    title: "Do you offer any discounts or promotions?",
    content:
      "Yes, we periodically offer discounts and promotions. To stay updated on our latest offers, you can sign up for our newsletter or follow us on social media.",
  },
  {
    id: 8,
    isImage: true,
    isVid: false,
    imgSrc: faq5,
  },
];

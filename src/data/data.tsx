import { FaRegLightbulb } from "react-icons/fa";
import client1 from "../assets/clients/client-logo-1.png";
import client2 from "../assets/clients/client-logo-2.png";
import client4 from "../assets/clients/client-logo-4.png";
interface Item {
  id: number;
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface Itemclient {
  id: number;
  image: string;
}

export const workItems: Item[] = [
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];

export const Clients: Itemclient[] = [
  {
    id: 1,
    image: client1,
  },
  {
    id: 2,
    image: client2,
  },
  {
    id: 4,
    image: client4,
  },
];

export const cards = [
  {
    id: 1,
    title: "Chul Urina",
    category: "Mockup",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Chul Urina",
    category: "Mockup",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Aura Dione",
    category: "Graphic Design",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Aura Dione",
    category: "Graphic Design",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Astronaut",
    category: "Logo",
    imgSrc: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Astronaut",
    category: "Logo",
    imgSrc: "https://via.placeholder.com/300",
  },
];
export const blogs = [
  {
    id: 1,
    image: "https://via.placeholder.com/300", // Replace with your image URLs
    date: "September 12, 2023",
    category: "Learn",
    title: "How To Own Your Audience By Creating An Email List.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300", // Replace with your image URLs
    date: "September 12, 2023",
    category: "Learn",
    title: "How To Own Your Audience By Creating An Email List.",
  },
  {
    id: 1,
    image: "https://via.placeholder.com/300", // Replace with your image URLs
    date: "September 12, 2023",
    category: "Learn",
    title: "How To Own Your Audience By Creating An Email List.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300", // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300", // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300", // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
  },
];

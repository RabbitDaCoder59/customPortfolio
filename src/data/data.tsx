import { FaRegLightbulb } from "react-icons/fa";
import client1 from "../assets/clients/client-logo-1.png"
import client2 from "../assets/clients/client-logo-2.png"
import client4 from "../assets/clients/client-logo-4.png"
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
    image:client1,
  },
  {
    id: 2,
    image:client2
  },
  {
    id: 4,
    image:client4
  },
  
]

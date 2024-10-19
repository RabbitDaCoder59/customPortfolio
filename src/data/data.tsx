import { FaRegLightbulb } from "react-icons/fa";
import client1 from "../assets/clients/client-logo-1.png";
import client2 from "../assets/clients/client-logo-2.png";
import client4 from "../assets/clients/client-logo-4.png";
import placeholderImg from "../assets/placeholderImg.png"
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
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    icon: <FaRegLightbulb className="text-4xl text-[#C594D8] mx-auto" />, // JSX for the icon
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
    imgSrc: placeholderImg,
  },
  {
    id: 6,
    title: "Chul Urina",
    category: "Mockup",
    imgSrc: placeholderImg,
  },
  {
    id: 2,
    title: "Aura Dione",
    category: "Graphic Design",
    imgSrc: placeholderImg,
  },
  {
    id: 3,
    title: "Aura Dione",
    category: "Graphic Design",
    imgSrc: placeholderImg,
  },
  {
    id: 4,
    title: "Astronaut",
    category: "Logo",
    imgSrc: placeholderImg,
  },
  {
    id: 5,
    title: "Astronaut",
    category: "Logo",
    imgSrc: placeholderImg,
  },
];
export const blogs = [
  {
    id: 1,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Learn",
    title: "How To Own Your Audience By Creating An Email List.",
    description: "Building an email list is one of the most effective ways to take control of your audience and engage them directly. This blog will guide you through the steps of creating and growing an email list, why it matters, and how it can improve your marketing efforts."
  },
  {
    id: 5,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Learn",
    title: "How To Own Your Audience By Creating An Email List.",
    description: "Learn the importance of owning your audience through email marketing. Explore tips and strategies to create and maintain a successful email list for long-term engagement."
  },
  {
    id: 2,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
    description: "Web accessibility ensures your content is available to all users, including those with disabilities. This blog covers key principles and best practices for making your website accessible to everyone."
  },
  {
    id: 3,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
    description: "Discover why web accessibility is crucial for the modern web and learn how to implement it. From guidelines to tools, get a comprehensive overview to make your website inclusive."
  },
  {
    id: 4,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
    description: "This blog dives into web accessibility and its importance in creating inclusive online environments. Learn how to make your digital content accessible to all users."
  },
  {
    id: 6,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
    description: "This blog dives into web accessibility and its importance in creating inclusive online environments. Learn how to make your digital content accessible to all users."
  },
  {
    id: 7,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
    description: "This blog dives into web accessibility and its importance in creating inclusive online environments. Learn how to make your digital content accessible to all users."
  },
  {
    id: 8,
    image: placeholderImg, // Replace with your image URLs
    date: "September 12, 2023",
    category: "Education",
    title: "Everything You Need To Know About Web Accessibility.",
    description: "This blog dives into web accessibility and its importance in creating inclusive online environments. Learn how to make your digital content accessible to all users."
  },
];

export const education = [
  {
    id: 1,
    date:"2021 - 2023",
    degree:"Ph.D in Horribleness",
    school:"University",
    city:"Los Angeles, CA"
  },
  {
    id: 2,
    date:"2017 - 2021",
    degree:"Computer Science",
    school:"Imperialize",
    city:"Los Angeles, CA"
  },
  {
    id: 3,
    date:"2015 - 2017",
    degree:"Graphic Designer",
    school:"Web Graphy",
    city:"Los Angeles, CA"
  },
]

export const experience = [
  {
    id: 1,
    date:"2019 - Present",
    job:"Sr. Software Tester",
    company:"Google Inc.",

  },
  {
    id: 2,
    date:"2015 - 2017",
    job:"Cr. Web Developer",
    company:"ib-themes ltd.",

  },
  {
    id: 3,
    date:"2014 - 2015",
    job:"Jr. Web Developer",
    company:"Creative Gigs.",

  },
]
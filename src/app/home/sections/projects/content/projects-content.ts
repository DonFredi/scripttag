import FigmaIcon from "../icon/FigmaIcon";
import GithubIcon from "../icon/GithubIcon";
import WebIcon from "../icon/WebIcon";
import { JSX } from "react";

export interface Project {
  id: number;
  title: string;
  image: string;
  stack: string;
  description: string;
  tags: string[];
  actions: {
    label: string;
    icon: () => JSX.Element;
    href: string;
  }[];
}
[];

export const projects: Project[] = [
  {
    id: 1,
    title: "Airstream Cooling Systems",
    image: "/images/airstream_img.png",
    stack: "frontend",
    description:
      "A modern company platform built for Airstream Cooling Systems Ltd, enabling customers to easily request HVAC and refrigeration services online.",
    tags: ["Next JS", "React JS", "Tailwind CSS", "Typescript", "Shadcn-UI"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/4LNv7iDhzfJibrMmHAUVQ7/Alphy1027?node-id=0-1&t=mNOuN6HjQuNMUAc7-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/air-stream",
      },
      {
        label: "demo",
        icon: WebIcon,
        href: "https://www.airstreamke.co.ke/",
      },
    ],
  },
  {
    id: 2,
    title: "Car Upholstery Website",
    image: "/images/upholstery_img.png",
    stack: "frontend",
    description:
      "A modern, responsive website designed for a car upholstery business to showcase custom interior services, premium materials, and completed projects. The site features a user-friendly interface with service pages, an interactive gallery, and a contact form for booking consultations.",
    tags: ["Next JS", "React JS", "Tailwind CSS", "Typescript"],
    actions: [
      /* {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      }, 
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/DonFredi/YogaStudio",
      },*/
      {
        label: "demo",
        icon: WebIcon,
        href: "https://upholstery-template.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    title: "Nova Ink",
    image: "/images/nova-ink_img.png",
    stack: "frontend",
    description:
      "Modern website for a tattoo business to showcase their work and services which offers clients with a feature to book available session through the site.",
    tags: ["Node JS", "Express JS", "MongoDB", "Mongoose", "Javascript", "JWT Auth"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app-backend",
      },
      {
        label: "demo",
        icon: WebIcon,
        href: "https://script-tattoo.vercel.app/",
      },
    ],
  },
  {
    id: 4,
    title: "Silvara",
    image: "/images/silvara_img.png",
    stack: "frontend",
    description:
      "Modern website for a jewelry business to showcase their products which clients are able to browse details and prices.",
    tags: ["Node JS", "Express JS", "MongoDB", "Mongoose", "Javascript", "JWT Auth"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app-backend",
      },
      {
        label: "demo",
        icon: WebIcon,
        href: "https://silvara-jewels.vercel.app/",
      },
    ],
  },
  {
    id: 5,
    title: "Fralon Peanuts",
    image: "/images/fralon-peanuts_img.png",
    stack: "frontend",
    description:
      "Still in progress web app for a peanut butter store which will enable users to browse products, place orders and make payments online. Will also feature a dashboard site for the admin.",
    tags: ["Node JS", "Express JS", "MongoDB", "Mongoose", "Javascript", "JWT Auth"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/scripttagg/fralon-peanuts",
      },
      {
        label: "demo",
        icon: WebIcon,
        href: "https://fralon-peanuts.vercel.app",
      },
    ],
  },
  {
    id: 6,
    title: "Kavijoy Safari Resort",
    image: "/images/kavijoy_img.png",
    stack: "frontend",
    description:
      "Modern website built for Kavijoy safari resort which enables potential customers looking for gateaway resort to browse services, facilities and activities.",
    tags: ["Node JS", "Express JS", "MongoDB", "Mongoose", "Javascript", "JWT Auth"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app-backend",
      },
      {
        label: "demo",
        icon: WebIcon,
        href: "https://kavijoy-safari-resort.netlify.app",
      },
    ],
  },

  {
    id: 7,
    title: "Yoga Studio",
    image: "/images/yoga-flow_img.png",
    stack: "frontend",
    description:
      "The Yoga Flow website is a modern, user-friendly platform designed to offer a seamless experience for yoga enthusiasts.",
    tags: ["Next JS", "React JS", "Tailwind CSS", "Typescript"],
    actions: [
      /* {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/1qoXQpgzS69ugJAEX3tIZ9/alphy.dev-portfolio?t=WQGbaKkWsJ9LujIy-1",
      }, 
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/DonFredi/YogaStudio",
      },*/
      {
        label: "demo",
        icon: WebIcon,
        href: "https://yogalandingpage.netlify.app/",
      },
    ],
  },
  {
    id: 8,
    title: "Airstream Ad Page",
    image: "/images/airstream-lead-gen_img.png",
    stack: "frontend",
    description:
      "This is an advertisement landing page for the airstream project, specifically focused on conversion of leads.",
    tags: ["React", "Tailwind CSS", "Typescript", "Axios", "Tanstack Query", "Framer Motion"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/kJYDGdfkF29EkeNqclm6sF/Fralon-Design?node-id=0-1&t=IZ5zKkdzV6P1QN66-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app",
      },
      {
        label: "demo",
        icon: WebIcon,
        href: "https://www.airstreamke.co.ke/ac-repair-nairobi",
      },
    ],
  },

  /* {
    id: 4,
    title: "Fralon Peanuts",
    image: "",
    stack: "frontend",
    description:
      "A responsive and user-friendly frontend for Fralon Peanuts, a small family-run business selling peanut butter and groundnut-based products.This web application allows users to browse products, log in or sign up, manage their cart, and place orders. Built with a scalable frontend architecture and mobile-first UI.",
    tags: ["React", "Tailwind CSS", "Typescript", "Axios", "Tanstack Query", "Framer Motion"],
    actions: [
      {
        label: "figma",
        icon: FigmaIcon,
        href: "https://www.figma.com/design/kJYDGdfkF29EkeNqclm6sF/Fralon-Design?node-id=0-1&t=IZ5zKkdzV6P1QN66-1",
      },
      {
        label: "github",
        icon: GithubIcon,
        href: "https://github.com/alphy1027/fralon-peanuts-app",
      },
      {
        label: "web",
        icon: WebIcon,
        href: "https://fralon-peanuts.netlify.app/",
      },
    ],
  }, */
];

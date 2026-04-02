import portfolioImg01 from "../images/portfolio1.png";
import portfolioImg02 from "../images/portfolio2.png";
import portfolioImg03 from "../images/portfolio3.png";
import portfolioImg04 from "../images/portfolio4.png";
import portfolioImg05 from "../images/portfolio5.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Tour Booking Website",
    description:
      "This is a Tour Booking website to help people choose destinations for their holidays",
    technologies: ["React", "Node Js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Car Showing Website",
    description:
      "This is a website used to show cars with features such as Filter, Search and server-side rendering processing",
    technologies: ["React", "Tailwind css", "Typescript", "Next JS 14"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "E-Commerce Website",
    description:
      "This is a E-Commerce website which has some functions: Register, Login, Add products to cart, Checkout cart and Product Details",
    technologies: ["React", "Redux Toolkit", "Firebase v9"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Ux",
    title: "Comestic Application UI",
    description:
      "This is a UI/UX of a Android mobile application we have design to code this project.",
    technologies: ["Figma"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Tour Booking Website",
    description:
      "This also a destination showing project to help people book for their tour in holidays ",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  }
];

export default portfolios;
import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer,  FaTools, FaNodeJs, FaFire, FaDatabase,  FaHtml5, FaJs } from 'react-icons/fa';
import calculator from "./calculator.png"
import react from "./react.svg";
import sagheer from "./sagheer.jpeg"
import { FaCss } from 'react-icons/fa6';



export const assets = {
    sagheer,
    calculator,
    react
};


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', ]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', ]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL', 'Firebase']
  },
 
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', ]
  }
];



export const projects = [
  {
    title: "javascript-calculator",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: calculator.png,
    tech: ["html", "css", "javascript",],
    icons: [FaHtml5, FaCss, FaJs],
    demo: "#",
    code: "#",
  },
  
];

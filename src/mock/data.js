import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Paddy | Jnr Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Patrick Hoveman',
  subtitle: 'Junior Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne:
    'Creative and driven full stack developer with a keen interest in designing user friendly products.',
  paragraphTwo:
    'Technical skills include: HTML, CSS (and SASS), Javascript (ES6), AJAX, Ruby, Ruby on Rails, Databases (SQL), PostgreSQL, Git, Github and Figma. Have also used Javascript frameworks including React, NextJS and Redux.',
  paragraphThree: 'Always looking for the next challenge.',
  resume: 'https://drive.google.com/file/d/1uL4_ommjtW9jQ8RDxYti9pU4auTmHhMk/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'foodie_1.png',
    title: 'Foodie',
    info: 'A blog-like application for anyone to talk/share their experiences with food.',
    info2: 'Uses Next.js, Chakra-UI, Firebase Auth & Realtime DB',
    url: 'https://foodie-2.vercel.app/',
    repo: 'https://github.com/patchinator/foodie_2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'currency_1.png',
    title: 'Currency Converter',
    info: 'A simple currency converter built using React Native.',
    info2: 'Uses React Native, Chakra-UI, Currency Converter API.',
    url: 'https://currency-converter-git-master-patchinator.vercel.app/',
    repo: 'https://github.com/patchinator/currency-converter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spotter_1_big.png',
    title: 'Spotter',
    info: 'An app and community for skateboarders to share skate spots and videos, intended for mobile browsers.',
    info2: 'Uses Ruby on Rails, PostgreSQL, AWS, Google maps API, SCSS',
    url: 'https://www.spotter.cc/',
    repo: 'https://github.com/tmoore95/Spotter', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'youboat_1.png',
    title: 'YouBoat',
    info: 'Airbnb clone for renting boats.',
    info2: 'Uses Ruby on Rails, Cloudinary, PostgreSQL, Google maps API, SCSS',
    url: 'https://youboat.herokuapp.com/users/sign_in',
    repo: 'https://github.com/tmoore95/youboat', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'email',
  email: 'patrickhoveman@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patrickhoveman/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/patchinator',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

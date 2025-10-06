import { PageData } from "~/types";
import { getPageDataBySlug } from "./getPageDataBySlug";

type ProjectData = PageData & {
  date?: string;
  image?: string;
  links?: { name: string; to: string }[];
};

export const projects: Record<string, ProjectData> = {
  "ways-of-knowing": {
    slug: "ways-of-knowing",
    title: "ways of knowing",
    description: [
      "Ways of Knowing / كيف منعرف is an experimental immersive platform for mapping Palestinian knowledge through storytelling, memory, and place. focusing on generational exchange, the project gathers stories, practices, and visions of the past, present, and future.",
    ],
    date: "IN DEVELOPMENT",
    image: "/wok.png",
  },
  "everything-is-beautiful-and-nothing-hurts": {
    slug: "everything-is-beautiful-and-nothing-hurts",
    title: "everything is beautiful and nothing hurts",
    description: [
      "queer, post-romantic, low energy sci-fi film where two lovers try to connect in an underwater city.",
    ],
    date: "2023",
    image: "/ebnh.jpg",
    links: [
      {
        name: "teaser",
        to: "https://vimeo.com/manage/videos/760388746",
      },
    ],
  },
  "one-night-on-saturn": {
    slug: "one-night-on-saturn",
    title: "one night on saturn",
    description: ["two boys come down beside the river."],
    date: "2019 / 2024",
    image: "/onos.jpg",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/manage/videos/586399410",
      },
    ],
  },
  "looking-for-albion-remastered": {
    slug: "looking-for-albion-remastered",
    title: "looking for albion remastered",
    description: [
      "post-rave, post-brexit, post-internet hyperscape in which two boys, sharing a suit made from torn up, WW2 era British flags, slip in and out of reality in the search for a perfectly square, perfectly green field.",
    ],
    date: "2025",
    image: "/l4ar.jpg",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/manage/videos/695794488",
      },
    ],
  },
  "looking-for-albion": {
    slug: "looking-for-albion",
    title: "looking for albion",
    description: [
      "post-rave, post-brexit, post-internet hyperscape in which two boys, sharing a suit made from torn up, WW2 era British flags, slip in and out of reality in the search for a perfectly square, perfectly green field.",
    ],
    date: "2018",
    image: "/l4a.jpg",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/manage/videos/695794488",
      },
    ],
  },
  "young-boy-dancing-group": {
    slug: "young-boy-dancing-group",
    title: "young boy dancing group",
    description: [
      "collaboration with Young Boy Dancing Group and Evita Manji.",
    ],
    date: "2023",
    image: "/ybdg.png",
  },
  "stones-in-hand": {
    slug: "stones-in-hand",
    title: "stones in hand",
    description: [
      "new Palestinian short film “Stones in hand” directed by Mo'min Swaitat. it is a surreal short film which draws on the artist's experiences as a Palestinian Bedouin who moved from the West Bank to London and their memories of a childhood spent between weddings and intifadas (popular uprisings).",
    ],
    date: "Mo'min Swaitat 2021",
    image: "/sih.jpg",
  },
  "slicing-the-scry": {
    slug: "slicing-the-scry",
    title: "slicing the scry",
    description: [
      "noise performance at Tom Hardwick-Allan's exhibition Scrying the Slice, to which sory.world contributed a text by Lucy, read by Georgie Edmonds.",
    ],
    date: "2022",
    image: "/sts.png",
    links: [
      {
        name: "read",
        to: "https://docs.google.com/document/d/1hBr07L94xMuRVMGDvXX4VxjYQWZ-CJj6dSoqQLpVwqU/edit?usp=sharing",
      },
    ],
  },
  yonner: {
    slug: "yonner",
    title: "yonner",
    description: [
      "with work shut and the city quiet, Ben's decided to go home. made in conjunction with Foreign Body Productions and the Albany in Deptford, as part of their ongoing Open Source Collaborations project.",
    ],
    date: "2021",
    image: "/ynr.png",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/531391814",
      },
    ],
  },
  zvezda: {
    slug: "zvezda",
    title: "zvezda",
    description: [" documentary about the making of Alien Intimacy."],
    date: "Ioannis Papadakis 2022",
  },
  "take-ur-hand": {
    slug: "take-ur-hand",
    title: "take **ur hand",
    description: ["music video for sewage, directed by r seventeen."],
    date: "2022",
    image: "/tyh.png",
    links: [
      {
        name: "watch",
        to: "https://www.youtube.com/watch?v=IF8vXKzLNlA&ab_channel=Sewage",
      },
    ],
  },
  untitled: {
    slug: "untitled",
    title: "untitled",
    description: [
      "driftings of a metal box. The first collaboration between R Seventeen and Lucy.",
    ],
    date: "2015",
    image: "/utld.png",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/manage/videos/164825679",
      },
    ],
  },
  "alien-intimacy": {
    slug: "alien-intimacy",
    title: "alien intimacy",
    description: [
      "zanya leaves a life behind to sleep beneath the sleepless screen of an abandoned cinema. the film was made throughout a bitter winter and bright spring in belgrade, during which the filmmakers, an army of waifs and strays, lived in the cinema where it is set. this was our film school. it's not finished yet. we lost our minds and broke our hearts making it. it was, is, a labour of love. alien intimacy established, both positively and negatively, the place from which our visions occur and the techniques by which we put them into practice. in all our subsequent work we are still there, in that haunted, freezing theatre, staring down the blank face of the screen and listening to the snowflakes falling onto the seats. we would love for you to join us.",
    ],
    date: "IN DEVELOPMENT",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/530808748/f3286f47be",
      },
    ],
  },
  Ω: {
    slug: "Ω",
    title: "Ω",
    description: [
      "Y is an androgynous humanoid apparently being preserved in a depthless white, virtual space. Frank is an aging man who monitors them from another room. Y dreams of an empty Venice. Frank narrates these dreams. it seems that Frank and Y are the last people left on earth, except for a mysterious figure that begins appearing in Y's dreams.",
    ],
    date: "IN DEVELOPMENT",
    image: "/Ω.png",
    links: [
      {
        name: "watch",
        to: "https://vimeo.com/manage/videos/530546367",
      },
    ],
  },
  // nhs: {
  //   slug: "nhs",
  //   title: "nhs",
  //   description: ["IN DEVELOPMENT"],
  // },
  deadlunds: {
    slug: "deadlunds",
    title: "deadlunds",
    description: [
      "the poet Leighton Redman returns to his homeland for inspiration and to see his parents. he finds neither.",
    ],
    date: "IN DEVELOPMENT",
    image: "/dl.png",
    links: [
      {
        name: "watch",
        to: "https://www.youtube.com/channel/UCigvmgFK3R2sEwoXiV84TVg/videos",
      },
    ],
  },
  // "in-the-night-darkly": {
  //   slug: "in-the-night-darkly",
  //   title: "in the night darkly",
  //   description: ["IN DEVELOPMENT"],
  // },
  // "no-country": {
  //   slug: "no-country",
  //   title: "no country",
  //   description: ["IN DEVELOPMENT"],
  // },
};

export function getProjectBySlug(slug: string | undefined) {
  return getPageDataBySlug<ProjectData>(slug, projects);
}

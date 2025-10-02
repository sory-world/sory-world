import { PageData } from "~/types";
import { getPageDataBySlug } from "./getPageDataBySlug";

type ProjectData = PageData & {
  date: string;
  image?: string;
};

export const projects: Record<string, ProjectData> = {
  "everything-is-beautiful-and-nothing-hurts": {
    slug: "everything-is-beautiful-and-nothing-hurts",
    title: "everything is beautiful and nothing hurts",
    description: [
      "queer, post-romantic, low energy sci-fi film where two lovers try to connect in an underwater city.",
    ],
    date: "2023",
    image: "/public/projects/ebnh.jpg",
  },
  "one-night-on-saturn": {
    slug: "one-night-on-saturn",
    title: "one night on saturn",
    description: ["two boys come down beside the river."],
    date: "2019 / 2024",
    image: "/public/projects/onos.jpg",
  },
  "looking-for-albion-remastered": {
    slug: "looking-for-albion-remastered",
    title: "looking for albion remastered",
    description: [
      "post-rave, post-brexit, post-internet hyperscape in which two boys, sharing a suit made from torn up, WW2 era British flags, slip in and out of reality in the search for a perfectly square, perfectly green field.",
    ],
    date: "2025",
    image: "/public/projects/l4ar.jpg",
  },
  "looking-for-albion": {
    slug: "looking-for-albion",
    title: "looking for albion",
    description: [
      "post-rave, post-brexit, post-internet hyperscape in which two boys, sharing a suit made from torn up, WW2 era British flags, slip in and out of reality in the search for a perfectly square, perfectly green field.",
    ],
    date: "2018",
    image: "/public/projects/l4a.jpg",
  },
  "young-boy-dancing-group": {
    slug: "young-boy-dancing-group",
    title: "young boy dancing group",
    description: [
      "collaboration with Young Boy Dancing Group and Evita Manji.",
    ],
    date: "2023",
    image: "/public/projects/ybdg.png",
  },
  "stones-in-hand": {
    slug: "stones-in-hand",
    title: "stones in hand",
    description: [
      "new Palestinian short film “Stones in hand” directed by Mo'min Swaitat. it is a surreal short film which draws on the artist's experiences as a Palestinian Bedouin who moved from the West Bank to London and their memories of a childhood spent between weddings and intifadas (popular uprisings).",
    ],
    date: "Mo'min Swaitat 2021",
    image: "/public/projects/sih.jpg",
  },
  "slicing-the-scry": {
    slug: "slicing-the-scry",
    title: "slicing the scry",
    description: [
      "noise performance at Tom Hardwick-Allan's exhibition Scrying the Slice, to which sory.world contributed a text by Lucy, read by Georgie Edmonds.",
    ],
    date: "2022",
    image: "/public/projects/stsc.jpg",
  },
  yonner: {
    slug: "yonner",
    title: "yonner",
    description: [
      "with work shut and the city quiet, Ben's decided to go home. made in conjunction with Foreign Body Productions and the Albany in Deptford, as part of their ongoing Open Source Collaborations project.",
    ],
    date: "2021",
    image: "/public/projects/ynr.png",
  },
  zvezda: {
    slug: "zvezda",
    title: "zvezda",
    description: [" documentary about the making of Alien Intimacy."],
    date: "Ioannis Papadakis 2022",
  },
  untitled: {
    slug: "untitled",
    title: "untitled",
    description: ["documentary about the making of Alien Intimacy."],
    date: "Ioannis Papadakis 2022",
    image: "/public/projects/utld.jpg",
  },
  "alien-intimacy": {
    slug: "alien-intimacy",
    title: "alien intimacy",
    description: ["placeholder."],
    date: "Ioannis Papadakis 2022",
  },
  Ω: {
    slug: "Ω",
    title: "Ω",
    description: ["placeholder."],
    date: "Ioannis Papadakis 2022",
    image: "/public/projects/Ω.jpg",
  },
  nhs: {
    slug: "nhs",
    title: "nhs",
    description: ["placeholder."],
    date: "Ioannis Papadakis 2022",
  },
  deadlunds: {
    slug: "deadlunds",
    title: "deadlunds",
    description: ["placeholder."],
    date: "Ioannis Papadakis 2022",
    image: "/public/projects/dl.png",
  },
  "in-the-night-darkly": {
    slug: "in-the-night-darkly",
    title: "in the night darkly",
    description: ["placeholder."],
    date: "Ioannis Papadakis 2022",
  },
  "no-country": {
    slug: "no-country",
    title: "no country",
    description: ["placeholder."],
    date: "Ioannis Papadakis 2022",
  },
};

export function getProjectBySlug(slug: string | undefined) {
  return getPageDataBySlug<ProjectData>(slug, projects);
}

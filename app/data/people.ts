import { PageData } from "~/types";
import { getPageDataBySlug } from "./getPageDataBySlug";

type PersonData = PageData & {
  links?: { name: string; to: string }[];
};

export const projects: Record<string, PersonData> = {
  "r-seventeen": {
    slug: "r-seventeen",
    title: "r seventeen",
    description: [
      "r seventeen is an artist, filmmaker and founder of sory.world. they are based between Mexico City and Europe. they have screened at festivals such as Bolton (2024), the London Short Film Festival (2023) and Tallinn Black Nights Film Festival (2022). they have exhibited in events and galleries such as Art Basel (2021), Carlos Ishikawa (2020) and Hot Wheels Athens (2019). collaborating with artists such as Young Boy Dancing Group, Lloyd Corporation (2020) and Tim Yip (2019)",
    ],
    links: [
      { name: "@rseventeen_", to: "https://www.instagram.com" },
      { name: "r17@sory.wold", to: "mailto:r17@sory.world" },
      { name: "showreel", to: "https://vimeo.com" },
    ],
  },
  "soko-silberbach": {
    slug: "soko-silberbach",
    title: "soko silberbach",
    description: ["placeholder"],
  },
  "patrick-lucy": {
    slug: "patrick-lucy",
    title: "patrick lucy",
    description: [
      "lucy is a writer as well as an occasional actor and para-academic interested in aesthetic and political philosophy.",
    ],
    links: [
      {
        name: "patricklucy1312@gmail.com",
        to: "mailto:patricklucy1312@gmail.com",
      },
    ],
  },
};

export function getPersonBySlug(slug: string | undefined) {
  return getPageDataBySlug<PersonData>(slug, projects);
}

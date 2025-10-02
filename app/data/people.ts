import { PageData } from "~/types";
import { getPageDataBySlug } from "./getPageDataBySlug";

type PersonData = PageData & {
  links?: { name: string; to: string }[];
};

export const projects: Record<string, PersonData> = {
  "r-seventeen": {
    slug: "r-seventeen",
    title: "r seventeen",
    description: ["placeholder"],
    links: [{ name: "instagram", to: "https://www.instagram.com" }],
  },
  "soko-silberbach": {
    slug: "soko-silberbach",
    title: "soko silberbach",
    description: ["placeholder"],
  },
  "patrick-lucy": {
    slug: "patrick-lucy",
    title: "patrick lucy",
    description: ["placeholder"],
  },
};

export function getPersonBySlug(slug: string | undefined) {
  return getPageDataBySlug<PersonData>(slug, projects);
}

import { PageData } from "~/types";
import { getPageDataBySlug } from "./getPageDataBySlug";

export const projects: Record<string, PageData> = {
  "cinema-and-dreamz": {
    slug: "cinema-and-dreamz",
    title: "cinema and dreamz",
    description: ["placeholder"],
  },
  "the-hospital-and-the-forest": {
    slug: "the-hospital-and-the-forest",
    title: "the hospital and the forest",
    description: ["placeholder"],
  },
  "a-cautious-manifesto": {
    slug: "a-cautious-manifesto",
    title: "a cautious manifesto",
    description: ["placeholder"],
  },
};

export function getNoteBySlug(slug: string | undefined) {
  return getPageDataBySlug(slug, projects);
}

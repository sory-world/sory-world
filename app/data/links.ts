import { NavData } from "~/types";

export const NAV: NavData = {
  groups: {
    projects: [
      {
        name: "everything is beautiful and nothing hurts",
        to: "/projects/everything-is-beautiful-and-nothing-hurts",
      },
      { name: "one night on saturn", to: "/projects/one-night-on-saturn" },
      {
        name: "looking for albion remastered",
        to: "/projects/looking-for-albion-remastered",
      },
      { name: "looking for albion", to: "/projects/looking-for-albion" },
      {
        name: "young boy dancing group",
        to: "/projects/young-boy-dancing-group",
      },
      { name: "stones in hand", to: "/projects/stones-in-hand" },
      { name: "slicing the scry", to: "/projects/slicing-the-scry" },
      { name: "yonner", to: "/projects/yonner" },
      { name: "zvezda", to: "/projects/zvezda" },
      { name: "untitled", to: "/projects/untitled" },
      { name: "alien intimacy", to: "/projects/alien-intimacy" },
      { name: "Ω", to: "/projects/Ω" },
      { name: "nhs", to: "/projects/nhs" },
      { name: "deadlunds", to: "/projects/deadlunds" },
      { name: "in the night darkly", to: "/projects/in-the-night-darkly" },
      { name: "no country", to: "/projects/no-country" },
    ],
    connect: [
      { name: "email", to: "mailto:info@sory.world" },
      { name: "instagram", to: "https://www.instagram.com/sory.world/" },
      { name: "patreon", to: "https://www.patreon.com/" },
    ],
    people: [
      { name: "r seventeen", to: "/people/r-seventeen" },
      { name: "soko silberbach", to: "/people/soko-silberbach" },
      { name: "(patrick) lucy", to: "/people/patrick-lucy" },
    ],
    notes: [
      { name: "cinema and dreamz", to: "/notes/cinema-and-dreamz" },
      {
        name: "the hospital and the forest",
        to: "/notes/the-hospital-and-the-forest",
      },
      { name: "a cautious manifesto", to: "/notes/a-cautious-manifesto" },
    ],
  },
  pages: [{ name: "info", to: "/info" }],
};

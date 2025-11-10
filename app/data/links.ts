import { NavData } from "~/types";

export const NAV: NavData = {
  groups: {
    projects: [
      { name: "ways of knowing", to: "/wok" },
      {
        name: "everything is beautiful and nothing hurts",
        to: "/ebnh",
      },
      { name: "one night on saturn", to: "/onos" },
      { name: "looking for albion", to: "/l4a" },
      {
        name: "young boy dancing group",
        to: "/lbdg",
      },
      { name: "stones in hand", to: "/sih" },
      { name: "slicing the scry", to: "/sts" },
      { name: "take **ur hand", to: "/tyh" },
      { name: "yonner", to: "/ynr" },
      { name: "zvezda", to: "/zvda" },
      { name: "untitled", to: "/utld" },
      { name: "alien intimacy", to: "/ai" },
      { name: "Ω", to: "/Ω" },
      // { name: "nhs", to: "/nhs" },
      { name: "deadlunds", to: "/dl" },
      // { name: "in the night darkly", to: "/in-the-night-darkly" },
      // { name: "no country", to: "/no-country" },
    ],
    connect: [
      { name: "email", to: "mailto:info@sory.world" },
      { name: "instagram", to: "https://www.instagram.com/sory.world" },
      // { name: "patreon", to: "https://www.patreon.com/" },
    ],
    people: [
      { name: "r seventeen", to: "/r-seventeen" },
      { name: "(patrick) lucy", to: "/patrick-lucy" },
      { name: "matt congdon", to: "/matt-congdon" },
      { name: "toby elwes", to: "/toby-elwes" },
      { name: "ben woodward", to: "/ben-woodward" },
      { name: "clemente lohr", to: "/clemente-lohr" },
    ],
    notes: [
      {
        name: "cinema and dreamz",
        to: "/cinema-and-dreamz",
      },
      {
        name: "the hospital and the forest",
        to: "/the-hospital-and-the-forest",
      },
      {
        name: "a cautious manifesto",
        to: "/a-cautious-manifesto",
      },
    ],
  },
  pages: [{ name: "info", to: "/info" }],
};

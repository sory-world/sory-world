import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: [
    "/",
    "/info",
    // notes
    "/notes/cinema-and-dreamz",
    "/notes/the-hospital-and-the-forest",
    "/notes/a-cautious-manifesto",
    // people
    "/people/r-seventeen",
    "/people/soko-silberbach",
    "/people/patrick-lucy",
    // projects
    "/projects/everything-is-beautiful-and-nothing-hurts",
    "/projects/one-night-on-saturn",
    "/projects/looking-for-albion-remastered",
    "/projects/looking-for-albion",
    "/projects/young-boy-dancing-group",
    "/projects/stones-in-hand",
    "/projects/slicing-the-scry",
    "/projects/yonner",
    "/projects/zvezda",
    "/projects/take-ur-hand",
    "/projects/untitled",
    "/projects/alien-intimacy",
    "/projects/Ω",
    "/projects/nhs",
    "/projects/deadlunds",
    "/projects/in-the-night-darkly",
    "/projects/no-country",
  ],
} satisfies Config;

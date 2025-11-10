import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: [
    "/",
    "/info",
    // notes
    "/cinema-and-dreamz",
    "/the-hospital-and-the-forest",
    "/a-cautious-manifesto",
    // people
    "/r-seventeen",
    "/patrick-lucy",
    "/matt-congdon",
    "/toby-elwes",
    "/ben-woodward",
    "/clemente-lohr",
    // projects
    "/wok",
    "/ebnh",
    "/onos",
    "/l4a",
    "/lbdg",
    "/sih",
    "/sts",
    "/ynr",
    "/zvda",
    "/tyh",
    "/utld",
    "/ai",
    "/Ω",
    // "/nhs",
    "/dl",
    // "/in-the-night-darkly",
    // "/no-country",
  ],
} satisfies Config;

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
      "R Seventeen is an artist, filmmaker and founder of sory.world. they are based between Mexico City and Europe. they have screened at festivals such as Bolton (2024), the London Short Film Festival (2023) and Tallinn Black Nights Film Festival (2022). they have exhibited in events and galleries such as Art Basel (2021), Carlos Ishikawa (2020) and Hot Wheels Athens (2019), collaborating with artists such as Young Boy Dancing Group, Lloyd Corporation (2020) and Tim Yip (2019)",
    ],
    links: [
      { name: "instagram", to: "https://www.instagram.com/r.seventeen__" },
      { name: "email", to: "mailto:r17@sory.world" },
    ],
  },
  "soko-silberbach": {
    slug: "soko-silberbach",
    title: "soko silberbach",
    description: ["~"],
    links: [{ name: "website", to: "https://sokora.neocities.org" }],
  },
  "patrick-lucy": {
    slug: "patrick-lucy",
    title: "patrick lucy",
    description: [
      "Lucy is a writer as well as an occasional actor and para-academic interested in aesthetic and political philosophy.",
    ],
    links: [
      {
        name: "email",
        to: "mailto:patricklucy1312@gmail.com",
      },
    ],
  },
  "matt-congdon": {
    slug: "matt-congdon",
    title: "matt congdon",
    description: [
      "Matt Congdon is an artist, software engineer and researcher. as an artist, his work examines symbol systems through the perception of communication, history and anomalous experience. as an engineer, he has built and contributed to large scale applications for the public and private sector. as a researcher, his interests include philosophical theology, systems theory and metaphysics.",
    ],
    links: [
      {
        name: "website",
        to: "https://www.mattcongdon.co.uk",
      },
      {
        name: "instagram",
        to: "https://www.instagram.com/mattcong",
      },
    ],
  },
  "toby-elwes": {
    slug: "toby-elwes",
    title: "toby elwes",
    description: [
      "Toby Elwes is a cinematographer. he has been nominated at the BSC short film awards and Camerimage cinematography festival, and was awarded the Panalux Best Short Film Cinematography Award, with the jury praising 'bold choices demonstrating genuine expertise of the craft'. his narrative work has had success at Oscar and Bafta qualifying festivals. he studied Cinematography at The National Film and Television School.",
    ],
    links: [{ name: "website", to: "https://www.tobyelwes.com" }],
  },
  "ben-woodward": {
    slug: "ben-woodward",
    title: "ben woodward",
    description: [
      "Ben Woodward is a trade unionist, a peace activist and a poet from Oldham Greater Manchester. his work focuses on public transport, his feelings and how it is to work in England.",
    ],
  },
  "clemente-lohr": {
    slug: "clemente-lohr",
    title: "clemente lohr",
    description: [
      "since joining the industry in 2019, Clemente has written 7 short films, 2 features as well as a draft pilot for a TV show. he has directed 5 short films, 3 music videos and been commissioned to direct a film piece for an art installation. whilst occasionally directing other people's writing, most of his work has been self written and his films have gone on to win awards and been selected in festivals across the world. his short CANNED won 'Best Experimental' at BFI Future Fest, 'Best Emerging Talent' at New Renaissance Film Festival, official selection at Aesthetica Film Festival and was a finalist in the British Short Film Awards. his short film MUDLARK was nominated for 'Best UK Short at Raindance Film Festival in 2021. his 2022 short film THROUGH THE MOTIONS was selected to play at the United Nations COP 27 Climate Change Conference. although only recently completed, his most recent film THE STORM (2023) has already been awarded 'Best Uk Comedy' at NRFF and selections at LSFF, Bremen IFF, Snowdance FF and more. additionally Clemente founded and runs a monthly short film night at Peckhamplex Cinema, London, which gives local, young or independent filmmakers an opportunity to show their films for free.",
    ],
    links: [{ name: "website", to: "https://clementelohr.com" }],
  },
};

export function getPersonBySlug(slug: string | undefined) {
  return getPageDataBySlug<PersonData>(slug, projects);
}

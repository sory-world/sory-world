import { PageData } from "~/types";
import { getPageDataBySlug } from "./getPageDataBySlug";

const cinemaAndDreamz = [
  "strange object time that moves between our lips",
  "where things move and silence is hurried",
  "holds u like a child in arms",
  "shivering at the threshold of ur sentence.",
  "",
  "white light on a bare white wall",
  "where nothing hurts but decays",
  "nothing stirs but the hand tracing ur absence",
  "in the little depths they call ur heart.",
  "",
  "strange warm life that slips between the void",
  "sinks below cold soft un-void flapping",
  "like a bird in hands",
  "sings in the vacuum u prepared for it",
  "bleeds and encircles you",
  "",
  "motionless day of photograph",
  "sings the throat",
  "cool as the universe on summer nights.",
  "br",
  "br",
  "br",
  "br",
  "Sleep and dreams are inaccessible to each other. It is impossible to dream of being asleep. Sleep is a shallow black hole in which the body, placed out of reach from itself, is restored to inner density. Dreams assume the position abandoned by sleep. While the keeper of the dream is asleep, the dreamer is turned over to the dream of the other, is inside the other's gaze. There is so much noise and each sound is discernible: every detail is a brick in the wall of the dream, which doesn't cast a single shadow and offers no respite.",
  "The classical experience of cinema roughly corresponds to the above schema: the body of the spectator is removed while their brain is exposed to phantoms, which occur with a kind of startling clarity.",
  "Our cinema confronts a world in which sleep and dreams have been dissociated. In these pages I will use the word 'dreamz' to mean dreams disconnected from sleep, sleep disconnected from itself.",
];

const theHospitalAndTheForest = [
  "What the forest is to German folklore, Twin Peaks etc, the hospital is for us: a frightening and a sheltering place, out of which things are born and into which things go to die. A site of transformation and purification. You enter with your troubles, and emerge in some way othered. As with the hospital, the person who enters the forest is never quite the same as the one who leaves it. Our films occur inside this threshold. One of the reasons why you can never quite get to know our characters–why they are always in some sense broken–is that we meet them in an inaccessible place of transformation.",

  "The forest has a hold over the village. In those old stories there are always people warning you not to go in there; to be careful because you don't know what spectres lurk. Under the spell of a permanent night, the forest, like the hospital-itself suspended in time by being permanently invested with warmth and brightness–is a place where miraculous forces conjugate and strange visions occur.",

  "The layout of a forest is literally rhizomatic. Like a hospital it has no privileged centre, but is a patchwork of simultaneous interactions. The centre of the hospital is wherever you are or are meant to be. If you have cancer, it'’'s the cancer department; if you are incontinent, it'’'s the toilet, etc. The beautiful thing is that, unless you are hallucinating, you are still aware, even as you die, that you are not at the centre of the hospital, but in just another burrow.",

  "As a forest is full of strange organic forms, a hospital is full of strange instruments. Furthermore, in the hospital, like in the forest, you can never see that far ahead of you; your perspective is always partial and delimited. In the hospital you feel your body acutely; if you are sick, obviously, but also if you'’'re not. Long corridors, squeamish implements, the bright white light that never goes out, the medical stare that never retreats.",

  "One of the classic tropes of the forest is that you can't find your way out; for us, the same is true of the hospital. Our characters keep appearing in strange, medical rooms. It is not always literally a hospital: in our films, the world is a massive, fragmented hospital.",
];

const aCautiousManifesto = [
  "1. All films should both begin and end with a silent black screen.",
  "2. Express things bluntly in such a way that the poetry is a latent effect of the image.",
  "3. Play the images off against each other. There is a conflict at the heart of the film. Like the images contradict each other, throw each other into uncertainty.",
  "4. Making work for children.",
  "5. Propaganda.",
  "6. To make films that unfold with the strangeness and the vitality of a dream; to make the world strange, as it is in dreams, in order to give a kind of clarity.  ",
  "7. What the forest is in German folklore, David Lynch etc, the hospital is for us.",
  "8. What a tree was for a romantic poet, a psychiatrist's report is for us.",
];
export const projects: Record<string, PageData> = {
  "cinema-and-dreamz": {
    slug: "cinema-and-dreamz",
    title: "cinema and dreamz",
    description: cinemaAndDreamz,
  },
  "the-hospital-and-the-forest": {
    slug: "the-hospital-and-the-forest",
    title: "the hospital and the forest",
    description: theHospitalAndTheForest,
  },
  "a-cautious-manifesto": {
    slug: "a-cautious-manifesto",
    title: "a cautious manifesto",
    description: aCautiousManifesto,
  },
};

export function getNoteBySlug(slug: string | undefined) {
  return getPageDataBySlug(slug, projects);
}

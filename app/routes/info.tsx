import type { Route } from "./+types/info";
import { useNavigate } from "react-router";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `info: sory.world` },
    { name: "description", content: "info" },
  ];
};

export default function ProjectPage() {
  const navigate = useNavigate();
  const controls = useAnimationControls();

  const paragraphs = [
    "sory.world is an Event company specialising in media production. we also do funerals and children's parties.",
    "sory.world was founded in a pub in peckham in 2016 in order to formalise the collaboration between soko silberbach and r seventeen. at the time, silberbach and seventeen were working alongside Lucy on Looking for Albion, a post brexit film about a man looking for a perfectly green perfectly square field. shortly after, r seventeen and lucy moved into Zvezda, an abandoned cinema in belgrade, to make a film in which silberbach stars as a vampire who sleeps beneath the screen. since then, sory.world has become a catalyst for art production.",
    "sory.world also houses the cinematic, philosophical and literary output of r seventeen and lucy, a writer/director duo interested in world-building, un(reality), marginal storytelling, queering and the dance of truth and fiction.",
  ];

  useEffect(() => {
    controls.set({ opacity: 0 });
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  const handleBack = async () => {
    await controls.start({
      opacity: 0,
      transition: { duration: 0.1 },
    });
    navigate("/");
  };

  return (
    <div className="home">
      <motion.div animate={controls} initial={{ opacity: 0 }}>
        <div className="page__bar">
          <button className="nav__link" onClick={handleBack}>
            {`<<<`}
          </button>
        </div>
        <div>
          {paragraphs.map((text) => (
            <p key={text.slice(0, 20)}>{text}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

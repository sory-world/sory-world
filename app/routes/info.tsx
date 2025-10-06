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
    "sory.world was founded in a pub in Peckham in 2016 in order to formalise the collaboration between Soko Silberbach and R Seventeen. at the time, Silberbach and Seventeen were working alongside Lucy on Looking for Albion, a post brexit film about a man looking for a perfectly green field. shortly after, R Seventeen and Lucy moved into an abandoned cinema in Belgrade where Silberbach stars as a vampire who sleeps beneath the screen. since then, sory.world has become a catalyst for art production.",
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

import type { Route } from "./+types/projects.$project";
import { Link, useLoaderData, useNavigate } from "react-router";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { getProjectBySlug } from "~/data/projects";
import BackButton from "~/components/BackButton";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const project = getProjectBySlug(params.project);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return project;
};

export const meta: Route.MetaFunction = ({ loaderData }) => {
  if (!loaderData) {
    return [
      { title: "Not found" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
  }

  return [
    { title: `${loaderData.title}: sory.world` },
    { name: "description", content: loaderData.title },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function ProjectPage() {
  const project = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const controls = useAnimationControls();

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
      <motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        className="project__content"
      >
        <div className="page__bar">
          <BackButton handleBack={handleBack} contrast />
        </div>
        <h2>
          <span className="contrast-text">{project.title}</span>
        </h2>
        <div>
          {project.description.map((paragraph: string, index: number) => (
            <p key={`${project.slug}-paragraph-${index}`}>
              <span className="contrast-text">{paragraph}</span>
            </p>
          ))}
        </div>
        <br />
        <div>
          <p>
            <span className="contrast-text">{project.date}</span>
          </p>
          {project.links?.map((link) => (
          <Link className="body__link" key={link.name} to={link.to} target="_blank">
            <span className="contrast-text">{link.name}</span>
          </Link>
        ))}
        </div>
        {project.image && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            src={project.image}
            className="project-image"
          />
        )}
      </motion.div>
    </div>
  );
}

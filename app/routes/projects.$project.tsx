import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { getProjectBySlug } from "~/data/projects";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = getProjectBySlug(params.project);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return project;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Project not found" }];
  }

  return [
    { title: `${data.title}: sory.world` },
    { name: "description", content: data.title },
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
          <button className="nav__link" onClick={handleBack}>
            <span className="contrast-text">back</span>
          </button>
        </div>
        <h2>
          <span className="contrast-text">{project.title}</span>
        </h2>
        <div>
          {project.description.map((paragraph, index) => (
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
        </div>
        {project.image && (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        )}
      </motion.div>
    </div>
  );
}

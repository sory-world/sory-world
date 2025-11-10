import type { Route } from "./+types/$slug";
import { Link, useLoaderData, useNavigate } from "react-router";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { getProjectBySlug } from "~/data/projects";
import { getNoteBySlug } from "~/data/notes";
import { getPersonBySlug } from "~/data/people";
import BackButton from "~/components/BackButton";

type LoaderData = {
  type: "project" | "note" | "person";
  data: any;
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const slug = params.slug;
  
  // Try to find in projects first
  const project = getProjectBySlug(slug);
  if (project) {
    return { type: "project" as const, data: project };
  }
  
  // Then try notes
  const note = getNoteBySlug(slug);
  if (note) {
    return { type: "note" as const, data: note };
  }
  
  // Finally try people
  const person = getPersonBySlug(slug);
  if (person) {
    return { type: "person" as const, data: person };
  }
  
  // If nothing found, throw 404
  throw new Response("Not Found", { status: 404 });
};

export const meta: Route.MetaFunction = ({ loaderData }) => {
  if (!loaderData) {
    return [
      { title: "Not found" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
    ];
  }

  return [
    { title: `${loaderData.data.title}: sory.world` },
    { name: "description", content: loaderData.data.title },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function SlugPage() {
  const { type, data } = useLoaderData<typeof loader>();
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

  // Render project
  if (type === "project") {
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
            <span className="contrast-text">{data.title}</span>
          </h2>
          <div>
            {data.description.map((paragraph: string, index: number) => (
              <p key={`${data.slug}-paragraph-${index}`}>
                <span className="contrast-text">{paragraph}</span>
              </p>
            ))}
          </div>
          <br />
          <div>
            <p>
              <span className="contrast-text">{data.date}</span>
            </p>
            {data.links?.map((link: any) => (
              <Link className="body__link" key={link.name} to={link.to} target="_blank">
                <span className="contrast-text">{link.name}</span>
              </Link>
            ))}
          </div>
          {data.image && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              src={data.image}
              className="project-image"
            />
          )}
        </motion.div>
      </div>
    );
  }

  // Render note
  if (type === "note") {
    return (
      <div className="home">
        <motion.div animate={controls} initial={{ opacity: 0 }}>
          <div className="page__bar">
            <BackButton handleBack={handleBack} />
          </div>
          <h2>{data.title}</h2>
          <div>
            {data.description.map((paragraph: string, index: number) =>
              paragraph === "br" ? (
                <br key={`${data.slug}-paragraph-${index}`} />
              ) : (
                <p key={`${data.slug}-paragraph-${index}`}>{paragraph}</p>
              )
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Render person
  if (type === "person") {
    return (
      <div className="home">
        <motion.div animate={controls} initial={{ opacity: 0 }}>
          <div className="page__bar">
            <BackButton handleBack={handleBack} />
          </div>
          <h2>{data.title}</h2>
          <div>
            {data.description.map((paragraph: string) => (
              <p key={paragraph.slice(0, 15)}>{paragraph}</p>
            ))}
          </div>
          <br />
          {data.links?.map((link: any) => (
            <Link className="body__link" key={link.name} to={link.to} target="_blank">
              {link.name}
            </Link>
          ))}
        </motion.div>
      </div>
    );
  }

  return null;
}


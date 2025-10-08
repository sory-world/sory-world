import type { Route } from "./+types/people.$person";
import { Link, useLoaderData, useNavigate } from "react-router";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { getPersonBySlug } from "~/data/people";
import BackButton from "~/components/BackButton";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const person = getPersonBySlug(params.person);
  if (!person) {
    throw new Response("Not Found", { status: 404 });
  }
  return person;
};

export const meta: Route.MetaFunction = ({ loaderData }) => {
  if (!loaderData) {
    return [{ title: "Not found" }];
  }

  return [
    { title: `${loaderData.title}: sory.world` },
    { name: "description", content: loaderData.title },
  ];
};

export default function ProjectPage() {
  const person = useLoaderData<typeof loader>();
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
      <motion.div animate={controls} initial={{ opacity: 0 }}>
        <div className="page__bar">
          <BackButton handleBack={handleBack} />
        </div>
        <h2>{person.title}</h2>
        <div>
          {person.description.map((paragraph: string) => (
            <p key={paragraph.slice(0, 15)}>{paragraph}</p>
          ))}
        </div>
        <br />
        {person.links?.map((link) => (
          <Link className="body__link" key={link.name} to={link.to} target="_blank">
            {link.name}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

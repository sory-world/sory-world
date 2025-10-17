import type { Route } from "./+types/notes.$note";
import { useLoaderData, useNavigate } from "react-router";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { getNoteBySlug } from "~/data/notes";
import BackButton from "~/components/BackButton";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const note = getNoteBySlug(params.note);
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return note;
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
  const note = useLoaderData<typeof loader>();
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
        <h2>{note.title}</h2>
        <div>
          {note.description.map((paragraph: string, index: number) =>
            paragraph === "br" ? (
              <br key={`${note.slug}-paragraph-${index}`} />
            ) : (
              <p key={`${note.slug}-paragraph-${index}`}>{paragraph}</p>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

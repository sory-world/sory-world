import { motion } from "framer-motion";
import { Nav } from "~/components/Nav/Nav";

export default function Index() {
  return (
    <motion.main
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Nav />
    </motion.main>
  );
}

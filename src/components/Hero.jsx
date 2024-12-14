import { HERO } from "../constants";
import harshImg from "../assets/Harsh1.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col md:flex-row items-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mb-8"
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        {/* Download Resume Button */}
        <a
          href="https://drive.google.com/file/d/11-2OLsamrgcI1r_Bh2XBQZNtDdXG4DS-/view?usp=sharing"
          download="Harsh_Tiwari_Resume"
          className="inline-block rounded-lg bg-blue-950 px-6 py-3 text-white hover:bg-blue-700"
        >
          Download Resume
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={harshImg}
            width={550}
            height={550}
            alt="Harsh Tiwari"
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

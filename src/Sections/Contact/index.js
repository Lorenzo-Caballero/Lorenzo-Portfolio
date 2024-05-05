import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IconJs, IconReact, IconMongoDB, IconHtml5, IconCss3, IconTailwindCSS, IconExpress, IconHuggingFace, IconSql, IconBootstrap, IconSass, IconNodejs, IconPhp, IconLaravel, IconTypescript } from "./Icons";
import "./index.css";

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    const scrollAnimation = async () => {
      while (true) {
        await controls.start({ x: -100 }); // Cambiamos a desplazamiento horizontal
        await controls.start({ x: 0, transition: { duration: 10 } });
      }
    };
    scrollAnimation();

    return () => controls.stop();
  }, [controls]);

  return (
    <section className="w-full py-44 bg-gray-900">
      <h1 className="text-white text-2xl mb-6 text-center relative">
        Tecnologías!
        <span className="absolute h-1 w-1/2 left-1/2 bottom-0 transform -translate-x-1/2 bg-pink-500"></span>
      </h1>
      <div className="scroll-container">
        <motion.div className="carousel-primary" animate={controls}>
          <div className="icon-container">
            <IconJs className="icon" />
            <IconTypescript className="icon" />
            <IconReact className="icon" />
            <IconHtml5 className="icon" />
            <IconCss3 className="icon" />
            <IconSass className="icon" />
            <IconTailwindCSS className="icon" />
            <IconBootstrap className="icon" />
            <IconMongoDB className="icon" />
            <IconSql className="icon" />
            <IconNodejs className="icon" />
            <IconExpress className="icon" />
            <IconPhp className="icon" />
            <IconLaravel className="icon" />
            <IconHuggingFace className="icon" />
          </div>
        </motion.div>
        <motion.div className="carousel-secondary" animate={controls} style={{ animationDelay: "10s" }}>
          <div className="icon-container">
            <IconJs className="icon" />
            <IconTypescript className="icon" />
            <IconReact className="icon" />
            <IconHtml5 className="icon" />
            <IconCss3 className="icon" />
            <IconSass className="icon" />
            <IconTailwindCSS className="icon" />
            <IconBootstrap className="icon" />
            <IconMongoDB className="icon" />
            <IconSql className="icon" />
            <IconNodejs className="icon" />
            <IconExpress className="icon" />
            <IconPhp className="icon" />
            <IconLaravel className="icon" />
            <IconHuggingFace className="icon" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a dedicated <span className="font-medium">Full-Stack Developer</span>  currently pursuing a <span className="font-medium">B.Tech</span>  in 
        Computer Science  Engineering at the <span className="font-medium">r. A. P. J. Abdul Kalam Technical University, Kanpur.</span> {" "}<br/>
        My primary tech stack revolves around the <span className=" font-medium">MERN (MongoDB, Express.js, React, Node.js)</span>  stack. 
        With a strong foundation in <span className=" font-medium">data structures, algorithms, and various programming languages</span>, I have a deep passion for creating innovative web applications.<br/>
        I love learning new things and solving problems and determined to explore the endless possibilities in web development.
      </p>

      <p>
        I am actively  <span className=" font-semibold">seeking a 6-month internship</span>  to further hone my skills and gain practical experience
      </p>
    </motion.section>
  );
}

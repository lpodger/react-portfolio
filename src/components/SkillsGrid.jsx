import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SkillsGrid({variants}) {

  const iconVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 10, ease: "easeInOut" } },
  };

  return (
    <div className="flex justify-center">
      <motion.div className="grid grid-cols-2 gap-8 p-10 text-center font-bold md:grid-cols-7 lg:scale-125"
      variants={variants}
      whileInView={"animate"}
      initial="initial"
      viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaHtml5 className="icon" />
          <p>HTML</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaCss3Alt className="icon" />
          <p>CSS</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <IoLogoJavascript className="icon " />
          <p>JavaScript</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaReact className="icon " />
          <p>React</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <SiTailwindcss className="icon " />
          <p>Tailwind</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaGitAlt className="icon " />
          <p>Git</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaWordpress className="icon " />
          <p>WordPress</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaSass className="icon " />
          <p>Sass</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaMobileAlt className="icon " />
          <p>Responsive</p>
          <p>Design</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaPhp className="icon " />
          <p>PHP</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <TbFileTypeSql className="icon " />
          <p>SQL</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaPython className="icon " />
          <p>Python</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <SiAdobephotoshop className="icon " />
          <p>Photoshop</p>
        </motion.div>
        <motion.div className="flex flex-col items-center" variants={iconVariants}>
          <FaFigma className="icon " />
          <p>Figma</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

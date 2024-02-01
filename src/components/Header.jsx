import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header({ onClick, isClicked }) {
  const textVariants = {
    initial: {
      y: 15,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 1.2, 
      },
    },
  };

  return (
    <motion.header
      className="px-5 py-3 flex flex-col md:flex-row md:justify-between"
      initial="initial"
      animate="animate"
      variants={textVariants}
    >
      <div className="flex justify-between items-center">
        <motion.a
          initial="initial"
          animate="animate"
          variants={textVariants}
          href="https://lachlanpodger.com/"
          className="text-lg text-white uppercase font-black"
        >
          Lachlan Podger
        </motion.a>
        <motion.div
          initial="initial"
          animate="animate"
          variants={textVariants}
          id="hamburger"
          className={`flex flex-col scale-75 md:hidden ${
            isClicked ? "diam" : ""
          }`}
          onClick={onClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
      <motion.nav
        className="ml-auto hidden md:block text-lg"
        initial="initial"
        animate="animate"
        variants={textVariants}
      >
        <ul className="list-none text-white flex gap-8 md:flex-row ">
          <li className="hover:text-accent hover:cursor-pointer transition duration-300">
            <Link to="projects" smooth={true} duration={500} offset={-400}>
              Projects
            </Link>
          </li>
          <li className="hover:text-accent hover:cursor-pointer transition duration-300">
            <Link to="about" smooth={true} duration={500} offset={-500}>
              About
            </Link>
          </li>
          <li className="hover:text-accent hover:cursor-pointer transition duration-300">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}

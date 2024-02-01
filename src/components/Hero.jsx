import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";

export default function Hero({ textVariants, windowWidth, lgScreen }) {
  return (
    <section className="px-5  h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="max-w-[300px] md:max-w-[550px] md:mr-[20%]"
      >
        <motion.div className="flex flex-col text-center md:align-bottom md:flex-row md:gap-2 ">
          <span className="text-white md:self-end md:text-xl">Hello, I'm</span>
          <h1 className=" tracking-wide font-semibold uppercase text-white text-2xl md:self-end md:text-5xl">
            Lachlan Podger.
          </h1>
        </motion.div>
        <motion.div>
          <ReactTyped
            className="text-center font-semibold text-3xl tracking-wide text-accent md:text-left md:text-5xl block md:pt-6"
            strings={["&lt;Front-end Developer/&gt;"]}
            typeSpeed={40}
            backSpeed={50}
            showCursor
            typeHtmlChars
            startDelay={1500}
            variants={textVariants}
          />
        </motion.div>
        <motion.p
          variants={textVariants}
          className="text-sm mt-4 text-center mb-4 text-white md:text-left md:text-xl md:pt-3 md:max-w-xl "
        >
          I'm passionate about crafting dynamic user experiences. From sleek
          designs to seamless development, I bring creativity and functionality
          together.
        </motion.p>
        <motion.div
          variants={textVariants}
          className="flex pt-4 items-center justify-center gap-10 md:justify-start md:pt-6"
        >
          <div className="hidden md:block">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={windowWidth < lgScreen ? -300 : -600}
              className="text-accent border-2 border-accent p-3 hover:text-dblue hover:border-dblue text-xl hover:bg-accent rounded cursor-pointer transition duration-300"
            >
              Learn More
            </Link>
          </div>
          <SocialMedia />
        </motion.div>
      </motion.div>
    </section>
  );
}

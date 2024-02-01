import BackToTopBtn from "./BackToTopBtn";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

export default function Footer({
  windowWidth,
  mobileBreakpoint,
}) {

  
  const fadeInVariants = {
    initial: {
      y: -15,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 1.2,
         staggerChildren: 0.2,
      },
    },
  };
  return (
    
    <motion.footer
      className="bg-dblue text-center py-10 px-4 text-white overflow-hidden"
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.8}}

    >
      <SocialMedia />
      <div className="flex flex-row pt-10 justify-between items-center">
        <span className="text-sm md:text-base block mx-auto">
          Lachlan Podger &copy;2024
        </span>

        <BackToTopBtn
          className="ml-auto"
          windowWidth={windowWidth}
          mobileBreakpoint={mobileBreakpoint}
        />
      </div>
    </motion.footer>
  
  );
}

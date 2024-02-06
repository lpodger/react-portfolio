import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Project({
  title,
  description,
  explanation,
  skills,
  siteLink,
  codeLink,
  imageSrc,
  index,
}) {
  const modalVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 16 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const fadeInVariants = {
    initial: {
      y: 25,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const imgFadeInVariants = {
    initial: {
      y: 35,
      opacity: 0,
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const mobileBreakpoint = 768;
  const tabletBreakpoint = 1024;
  const modalRef = useRef();
  

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickAway = (event) => {
      const isClickInsideModal =
        modalRef.current && modalRef.current.contains(event.target);
   

      
      if (!isClickInsideModal) {
        closeModal();
      
      }
    };
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickAway);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [isOpen]);

  return (
    <motion.div
      className={`flex flex-col items-center p-4 max-w-lg m-auto pt-20 lg:pt-40 md:max-w-7xl md:justify-between md:gap-20" ${
        index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
      whileInView={"animate"}
      initial="initial"
      variants={fadeInVariants}
      viewport={{
        once: true,
        amount:
          window.innerWidth < mobileBreakpoint
            ? 0.2
            : window.innerWidth < tabletBreakpoint
            ? 0.5
            : 0.7,
      }}
    >
      <motion.div
        variants={imgFadeInVariants}
        className="object-fit max-w-[600px] hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out lg:opacity-70 hover:opacity-100 rounded relative"
        onClick={openModal}
        whileHover={"hover"}
      >
        <img className="relative" src={imageSrc} alt={title}></img>
      </motion.div>
      <div className="max-w-lg">
        <motion.h3
          className="text-center pb-8 pt-8 text-2xl md:text-3xl font-semibold"
          variants={fadeInVariants}
        >
          {title}
        </motion.h3>

        <motion.p className="text-sm md:text-xl" variants={fadeInVariants}>
          {description}
        </motion.p>

        <motion.div
          className="flex gap-2 flex-wrap pt-8 uppercase text-center"
          variants={fadeInVariants}
        >
          {skills.map((skill, index) => (
            <span key={index} className="bg-accent p-1 px-2 min-w-[60px]">
              {skill}
            </span>
          ))}
        </motion.div>
        <motion.button
          className="mt-10 text-accent border-2 border-accent p-3 hover:text-dblue hover:border-dblue text-lg hover:bg-accent transition duration-300"
          onClick={openModal}
          initial={{ opacity: 0.7, y: 20 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          animate={{ opacity: 1, y: 0 }}
        >
          Learn More
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop">
              <motion.dialog
              ref={modalRef}
                className="md:max-w-[900px] md:max-h-[700px] bg-dblue text-white border p-10 block z-[9999] absolute max-h-[100vh] overflow-y-auto"
                initial={{ opacity: 0, y: "-100%" }}
                animate={isOpen ? "open" : "closed"}
                variants={modalVariants}
                exit={"closed"}
              >
                <div className="flex">
                  <h3 className="text-center pb-4 pt-4 text-2xl md:text-4xl font-semibold flex-grow">
                    {title}
                  </h3>
                  <motion.button
                    onClick={closeModal}
                    className="ml-auto p-3 hover:text-accent border-none text-3xl transition duration-300 "
                    whileTap={{ scale: 0.8 }}
                  >
                    X
                  </motion.button>
                </div>
                <section className="pb-10"></section>
                {explanation}
                <div className="flex justify-center gap-10 md:text-xl mt-8 ">
                  <div>
                    <a
                      href={siteLink}
                      className="hover:text-accent transition duration-300 hovered-link"
                      target="_blank"
                    >
                      Visit Site
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="pl-1"
                        />
                      </span>
                    </a>
                    <div className="underline-div bg-white h-0.5 transition duration-300"></div>
                  </div>

                  <div>
                    <a
                      href={codeLink}
                      className="hover:text-accent hovered-link transition duration-300 "
                      target="_blank"
                    >
                      View Code
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="scale-[1.2] pl-1"
                        />
                      </span>
                    </a>
                    <div className="underline-div bg-white h-0.5 transition duration-300"></div>
                  </div>
                </div>
              </motion.dialog>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

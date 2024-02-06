import { useState, useRef, useEffect } from "react";
import "./index.css";
import { useClickAway } from "react-use";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillsGrid from "./components/SkillsGrid";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import Contact from "./components/Contact";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);
  const mobileBreakpoint = 768;
  const lgScreen = 2560;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Simulate a delay
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 3100);
  }, []);

  function handleClick(event) {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  }

  useClickAway(ref, (event) => {
    // Check if hamburger
    if (event.target.id === "hamburger" || event.target.closest("#hamburger")) {
      return;
    }
    setIsClicked(false);
  });

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < mobileBreakpoint) {
        setIsClicked(false);
      }
    }

    window.addEventListener("resize", handleResize);
    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textVariants = {
    initial: {
      y: 15,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.4,
        duration: 1.2,
        staggerChildren: 0.1,
      },
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
         staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="app">
      {isLoading ? (
        <motion.div className="bg-dblue h-screen flex justify-center items-center">
          <span className="loader"></span>
        </motion.div>
      ) : (
        <>
          <div className="landing">
            <Header onClick={handleClick} isClicked={isClicked} lgScreen={lgScreen} windowWidth={windowWidth} />
            <MobileNav
              ref={ref}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />

            <Hero textVariants={textVariants} windowWidth={windowWidth} lgScreen={lgScreen} />
          </div>
          <main>
            <div className="bg-white">
              <motion.section
                className="max-w-screen-lg flex flex-col mx-auto lg:flex-row lg:pt-40 lg:pb-28 lg:items-center md:min-h-[600px]"
                variants={fadeInVariants}
                whileInView={"animate"}
                initial="initial"
                viewport={{ once: true, amount: 0.5}}
              >
                <Element name="about" id="about">
                  <motion.h2
                    className="text-accent text-3xl p-10 font-black text-center md:text-5xl md:p-20 md:pb-10 lg:text-left lg:text-7xl lg:pr-0"
                    variants={fadeInVariants}
                  >
                    A little about me.
                  </motion.h2>
                </Element>
                <div className="flex flex-col items-center m-auto max-w-2xl">
                  <div className="text-sm opacity-80 md:text-xl">
                    <motion.p className="p-4" variants={fadeInVariants}>
                      Hi, I'm Lachlan, a web developer based in Perth
                      specialising in Front-end Development.
                    </motion.p>
                    <motion.p className="p-4" variants={fadeInVariants}>
                      My journey into the realm of IT began with a bold decision
                      to transition from a non-technical background. Progressing
                      from a Cert III, I ultimately earned a diploma in
                      Front-end Web Development at North Metropolitan TAFE.
                    </motion.p>
                    <motion.p className="p-4" variants={fadeInVariants}>
                      Throughout this time, I cultivated my collaborative
                      skills, working with diverse teams of developers and
                      gaining a deeper understanding of client needs. Now, as I
                      embark on the next phase of my journey, I'm excited to
                      apply my skills and contribute to innovative web projects.
                    </motion.p>
                  </div>
                </div>
              </motion.section>
            </div>

            <div className="bg-white overflow-hidden">
              <motion.section
                className="text-dblue flex flex-col items-center bg-white lg:min-h-[600px] lg:pb-32 md:pb-10"
                variants={fadeInVariants}
                whileInView={"animate"}
                initial="initial"
                viewport={{ once: true, amount: (window.innerWidth < mobileBreakpoint) ? 0 : 0.6 }}
              >
                <motion.h2
                  className="p-10 text-dblue text-center px-1 pb-2 text-3xl font-extrabold md:text-5xl lg:text-6xl"
                  variants={fadeInVariants}
                >
                  Some of my skills and technologies.
                </motion.h2>
                <motion.p
                  className="text-center opacity-80 pt-4 md:text-xl md:pb-10 lg:pb-15 md:pt-8"
                  variants={fadeInVariants}
                >
                  How I turn ideas into{" "}
                  <span className="font-black text-dblue">reality</span>.
                </motion.p>
                <SkillsGrid variants={fadeInVariants} />
              </motion.section>
            </div>

            <section id="projects" className="bg-dblue text-white overflow-hidden">
              <motion.h2
                className="text-3xl p-10 font-black text-center md:text-4xl md:pt-20 pb-0 lg:p-4 lg:text-6xl small-underline lg:pt-40"
                variants={fadeInVariants}
                whileInView={"animate"}
                initial="initial"
                viewport={{ once: true, amount: 0.6 }}
              >
                Projects I've worked on.
              </motion.h2>
              <Projects  />
            </section>
            <Contact />
          </main>
          <Footer windowWidth={windowWidth} mobileBreakpoint={mobileBreakpoint} fadeInVariants={fadeInVariants}/>
        </>
      )}
    </div>
  );
}

export default App;

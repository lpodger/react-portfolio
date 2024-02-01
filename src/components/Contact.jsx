import { useRef } from "react";
import ContactForm from "./ContactForm";
import { motion, useInView } from "framer-motion";
import { useState } from "react";

const variants = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      staggerChildren: 0.05,
    },
  },
};

export default function Contact() {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const [animationComplete, setAnimationComplete] = useState(false);
  function handleAnimationComplete() {
    setAnimationComplete(true);
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center lg:flex-row md:gap-2 bg-dblue text-white md:justify-center lg:items-start pt-10 md:pt-20 lg:pt-40 lg:pb-32 md:pb-10 overflow-hidden"
    >
      <motion.div
        className="flex flex-col lg:max-w-lg"
        variants={variants}
        initial="initial"
        whileInView="animate"
        ref={ref}
        viewport={{ once: true, amount: 0.5}}
      >
        <motion.h2
          className="text-3xl font-black text-center pb-10 md:pb-0 md:text-5xl small-underline lg:text-7xl md:text-left pt-10"
          variants={variants}
        >
          Let's have a conversation.
        </motion.h2>
        <motion.p
          className="text-center md:text-xl md:pt-8 underline-offset-2 md:text-left"
          variants={variants}
        >
          Have a question? Want to work together?
        </motion.p>
      </motion.div>

      
        <ContactForm variants={variants} onAnimationComplete={handleAnimationComplete} />
      
    </section>
  );
}

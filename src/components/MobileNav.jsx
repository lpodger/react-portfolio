import { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import { Link } from "react-scroll";

const MobileNav = forwardRef(function ({ isClicked, setIsClicked }, ref) {
  function closeMenu() {
    if (isClicked) {
      setIsClicked(false);
    }
  }
  return (
    <AnimatePresence>
      {isClicked && (
        <nav
          className={classnames("md:hidden text-white", {
            "p-4 fixed top-15 w-[35%]": isClicked,
          })}
        >
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            ref={ref}
          >
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="mb-2 pb-2 border-b border-gray-600 hover:text-accent hover:scale-110 hover:border-accent "
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
              className="pt-3 mb-2 pb-2 border-b border-gray-600 hover:text-accent hover:scale-110 hover:border-accent"
            >
              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3,
              }}
              className="pt-3 mb-2 pb-2 border-b border-gray-600 hover:text-accent hover:scale-110 hover:border-accent"
            >
              <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
      )}
    </AnimatePresence>
  );
});

export default MobileNav;

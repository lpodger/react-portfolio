import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function BackToTopBtn ({windowWidth, mobileBreakpoint}) {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="hover:text-accent text-white"
      onClick={scrollToTop}
    >
      <MdKeyboardDoubleArrowUp  className={windowWidth < mobileBreakpoint ? "hidden" : 'w-[40px] h-[40px] hover:scale-125  transition duration-300' } />
    </button>
  );
};

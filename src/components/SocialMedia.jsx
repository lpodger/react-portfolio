import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <ul className="flex justify-center gap-4 group md:gap-8">
      <li>
        <a
          href="https://github.com/lpodger"
          className="group-hover:text-accent"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="transform scale-[1.3] text-white hover:text-accent hover:scale-[1.5] transition duration-300 md:scale-[1.8] md:hover:scale-[2]"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lachlan-podger-59289aa1/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="transform scale-[1.3] text-white hover:text-accent hover:scale-[1.5] transition duration-300 md:scale-[1.8] md:hover:scale-[2]"
          />
        </a>
      </li>
    </ul>
  );
}

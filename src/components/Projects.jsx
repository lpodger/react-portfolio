import Project from "./Project";

export default function Projects({ variants }) {
  const projectsData = [
    {
      title: "Please Level Up My Skills",
      description:
        "PLUMS is a student aptitude test I've worked on as an assignment at North Metropolitan TAFE. It was developed as a custom theme according to the client's specifications as a modular WordPress site.",
      explanation: (
        <div>
          <p className="pb-4  md:text-lg">
            A major challenge during PLUMS development involved coordinating a
            team of five developers amid external commitments. Weekly scrum
            meetings and Microsoft Teams facilitated communication, progress
            updates, and collaborative document work. This agile approach
            ensured successful completion of this project on time and to the
            specifications required.
          </p>
          <p className="pb-4  md:text-lg">
            Addressing diverse client visions for PLUMS involved categorizing
            components into core features and desirable functionalities during
            client meetings. This enabled prioritization of essential elements
            to address immediate needs, with plans to incorporate additional
            features in later development stages.
          </p>
          <p className="pb-4  md:text-lg">
            After documenting the project requirements, each team member crafted
            individual designs to offer a diverse selection for client
            consideration. I used Figma during the design process and went
            through several iterations of design, it was rewarding to create
            solutions that resonated with both the clients and myself,
            effectively addressing their challenges.
          </p>
          <p className="pb-4  md:text-lg">
            This is my prototype and design made into a custom wordpress theme.
          </p>
        </div>
      ),

      skills: [
        "UX/UI Design",
        "Figma",
        "WordPress",
        "PHP",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      siteLink: "https://plums.lachlanpodger.com/",
      codeLink: "https://github.com/lpodger/PLUMS2",
      imageSrc: "./images/plums.png",
    },
    {
      title: "Portfolio Site V2",
      description:
        "I created this second version of my portfolio to learn and apply new libraries. I explored React for component-based development, delved into Framer Motion for dynamic animations, and embraced Tailwind CSS for rapid styling.",
      explanation: (
        <div>
          <p className="pb-4  md:text-lg">
            This project has been a fantastic learning journey, especially when
            it comes to the complexities of state management and component
            handling. One major breakthrough was reorganizing the project
            section to let each component handle its own state, leading to
            cleaner and more maintainable code.
          </p>
          <p className="pb-4  md:text-lg">
            Exploring Framer Motion was an exciting part of the project. Using
            whileInView allowed precise control, animating elements as they
            entered the viewport. Setting initial states with initial ensured
            smooth transitions, improving the user experience. The thoughtful
            use of viewport and variants effectively managed timings, scrolling
            behaviors, and animations, enhancing the project's visual appeal and
            user interaction.
          </p>
          <p className="pb-4  md:text-lg">
            The project provided me with hands-on experience in utilizing various technologies, including
            Tailwind and other dependencies. I also gained experience in
            determining which parts of the codebase could be made reusable and
            when it made sense to handle components individually. Overall, the
            project has served as a comprehensive exploration of state
            management, component design, animations, and the integration of
            different libraries, significantly contributing to my growth as a
            frontend developer.
          </p>
        </div>
      ),

      skills: [
        "UX/UI Design",
        "Figma",
        "React",
        "Framer Motion",
        "Tailwind",
        "HTML",
        "CSS",
      ],
      siteLink: "https://lachlanpodger.com/",
      codeLink: "https://github.com/lpodger/react-portfolio",
      imageSrc: "./images/portfolio.png",
    },
    {
      title: "George's Garden Shop",
      description:
        "George's Garden Shop is a Bootstrap project, crafted to enhance my skills with the framework. Developed to meet specific requirements, it showcases practical applications of responsive design and effective use of Bootstrap in real-world scenarios.",
      explanation: (
        <div>
          <p className="pb-4  md:text-lg">
            This project involved the design and development of a responsive
            website for George's Garden Shop, a fictional client, as part of my
            studies at North Metropolitan TAFE. The website aimed to showcase
            the client's services and products while providing an intuitive user
            experience.
          </p>
          <p className="pb-4  md:text-lg">
            Using Figma and Bootstrap 5, I designed and prototyped the website
            to ensure a cohesive and user-friendly interface. I then developed
            the website to be fully responsive, allowing users to access the
            site from various devices.
          </p>
          <p className="pb-4  md:text-lg">
            After using Bootstrap, my preference leans towards Tailwind CSS and
            Sass. Tailwind's utility-first approach allows for more granular
            control, while Sass offers powerful features for enhanced code
            organization. These choices align with my preference for dynamic and
            adaptable styling solutions in web development.
          </p>
        </div>
      ),

      skills: ["Bootstrap", "Figma", "HTML", "UX/UI Design", "CSS"],
      siteLink: "https://lpodger.github.io/garden-shop/",
      codeLink: "https://github.com/lpodger/garden-shop/",
      imageSrc: "./images/george.png",
    },
  ];

  return (
    <div>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} index={index} />
      ))}
    </div>
  );
}

import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
      “Talk is cheap. Show me the code.”<br/>
     💡 Say no more! I'm excited to show you some of the most
      exciting projects I've been working on, each one pushing
      the boundaries of innovation and creativity. Whether you're
      looking to be inspired or just curious about what’s possible,
      these projects will showcase the power of code in action.
      From cutting-edge tools to game-changing applications,
      you'll see how imagination turns into reality.
     🔧 Let's dive into the code and bring ideas to life!
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Cake's Shop",
    desc: "My cake shop where you can checkout lots of flavoured delicious cake and enjoy.",
    url: "https://cake-cyan.vercel.app/",
  },
  {
    id: 2,
    title: "Luminosity Drone",
    desc: "A Drone which can navigate the area and detects the organism present there in that particular area with silent features just like detective.",
    url: "https://github.com/pranjalee30/Luminousity-Drone",
  },
  {
    id: 3,
    title: "Dev Detective",
    desc: "A page where you can navigate anyone github  profile by username and visit their favourite Repositories",
    url: "https://devdetective-by-pranjal.vercel.app/",
  },
  {
    id: 4,
    title: "Growify",
    desc: "A blog app where you can read awesome blogs with features of adding comments blog posting with awesome features",
    url: "https://blog-pranjal-3006.up.railway.app/",
  },
];

export default Projects;

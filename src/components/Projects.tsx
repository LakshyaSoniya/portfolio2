import Jigyasa from '../assets/Jigyasa.png'
import Edemy from '../assets/Edemy.png'
import { Eye } from "lucide-react";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  mainStack: string[];
  link: string;
  github: string;
  gradient: string;
  demoImg?: {
    src: string;
    alt: string;
  };
}


function Projects() {
  
  const data : ProjectData[] = [
    {
      id: 1,
      title: "Jigyasa Online Survey Platform",
      description:
        "A full-stack survey management platform with real-time analytics and data visualization capabilities.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Chart.js",
        "Tailwind CSS",
        "JWT Authentication",
      ],
      mainStack: ["React", "Node.js", "MongoDB"],
      link: "https://jigyasa-online-survey-mangement.vercel.app",
      github:
        "https://github.com/Lakshya-jangid-08/Jigyasa_Online-survey-mangement",
      gradient: "from-slate-500 to-slate-600",
      demoImg: {
        src: Jigyasa,
        alt: "Jigyasa Project Screenshot",
      },
    },
    {
      id: 2,
      title: "PyroShield Firestation Dashboard",
      description:
        "Real-time emergency management dashboard for fire stations with vehicle tracking and incident management.",
      technologies: ["React", "Node.js", "SQL", "Tailwind CSS"],
      mainStack: ["React", "Node.js", "SQL"],
      link: "/",
      github: "https://github.com/Lakshya-jangid-08/PyroShield",
      gradient: "from-slate-600 to-slate-700",
    },
    {
      id: 3,
      title: "Edemy Learning Management System",
      description:
        "Comprehensive LMS with secure authentication, course management, and real-time notifications.",
      technologies: ["MERN", "Clerk", "Svix", "Tailwind CSS"],
      mainStack: ["React", "Node.js", "MongoDB"],
      link: "https://lmsfrontend-two.vercel.app/",
      github: "https://github.com/Lakshya-jangid-08/LMS_Website",
      gradient: "from-slate-500 to-slate-700",
      demoImg: {
        src: Edemy,
        alt: "Edemy",
      },
    },
    {
      id: 4,
      title: "Chat Web App Group Messaging",
      description:
        "Real-time messaging platform with group chat functionality and persistent message storage.",
      technologies: ["EJS", "Express.js", "Node.js", "MongoDB", "Socket.io"],
      mainStack: ["Node.js", "Socket.io", "MongoDB"],
      link: "/",
      github: "https://github.com/Lakshya-jangid-08/CHAT.WEB.APP",
      gradient: "from-slate-600 to-slate-800",
    },
    {
      id: 5,
      title: "Uber Clone Ride-Hailing App",
      description:
        "Complete ride-hailing solution with real-time tracking, fare calculation, and driver-rider matching.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      mainStack: ["React.js", "Node.js", "MongoDB"],
      link: "/",
      github: "https://github.com/Lakshya-jangid-08/Uber-Clone-Application",
      gradient: "from-slate-500 to-slate-800",
    },
  ];

  const glowColors = [
    "shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]", // blue
    "shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]", // purple
    "shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)]",   // green
    "shadow-[0_0_25px_rgba(239,68,68,0.35)] hover:shadow-[0_0_50px_rgba(239,68,68,0.7)]",  // red
    "shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)]" // amber
  ];

  return (
    <div id="Projects" className="bg-background text-foreground border-t border-border px-4 sm:px-6 md:px-10 py-6 md:py-8">
      <div className="
        bg-card 
        border border-gray-700
        shadow-[0_0_25px_rgba(59,130,246,0.25)]
        hover:shadow-[0_0_45px_rgba(59,130,246,0.5)]
        transition-all duration-500
        w-full h-full 
        px-4 sm:px-5 md:px-6 
        py-6 md:py-8 
        rounded-xl
      ">   
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {data.map((project, index) => {
            return (
              <div
                key={index}
                className={`
                  bg-secondary 
                  border border-gray-700
                  rounded-xl 
                  overflow-hidden 
                  flex flex-col h-full
                  transition-all duration-500
                  hover:-translate-y-1
                  ${glowColors[index % glowColors.length]}
                `}
              >
              {project.demoImg ?
                  <img src={project.demoImg?.src} alt={project.demoImg?.alt} className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105" />
                  :
                  <div className={`w-full h-40 sm:h-48 md:h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <Eye className="text-secondary-foreground w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 z-10" />
                  </div>
                }
                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow space-y-2 sm:space-y-3">
                  <h1 className="font-bold text-base sm:text-lg md:text-xl text-secondary-foreground tracking-tight line-clamp-2">{project.title}</h1>
                  
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-secondary-foreground">Main Stack:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.mainStack.map((stack, index2) => (
                        <>
                        {index2 == 0 ? 
                          <></>
                        : 
                          <span>|</span>
                        }
                        <span key={index2} className="px-2 py-1 text-xs rounded-md text-blue-400 border font-semibold">
                          {stack}
                        </span>
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-secondary-foreground">Technologies:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech, index2) => (
                      <>
                        {index2 == 0 ? 
                          <></>
                        : 
                          <span>|</span>
                        }
                        <span key={index2} className="px-2 py-1 text-xs font-medium rounded-md text-purple-400 border ">
                          {tech} 
                        </span>
                        </>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 flex-grow">{project.description}</p>

                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-700 text-xs sm:text-sm">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-medium transition ${
                        project.link !== "/"
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      {project.link !== "/" ? "Live Demo" : "Demo N/A"}
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-400 hover:text-blue-300 transition"
                    >
                      GitHub →
                    </a>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
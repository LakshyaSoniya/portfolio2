import { useState } from "react";
import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa";
import { MdComputer, MdNetworkWifi, MdSecurity } from "react-icons/md";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiGo,
  SiGit,
  SiPostman,
  SiVercel,
  SiRender,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiOverleaf,
  SiRedis
} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

function AboutMe() {

  const [skillsData, setSkillsData] = useState<SkillCategory[]>([
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Go", icon: SiGo, color: "#00ADD8" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
        { name: "Clerk", icon: MdSecurity, color: "#6C47FF" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Render", icon: SiRender, color: "#46E3B7" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Overleaf", icon: SiOverleaf, color: "#47A141" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database & CS Fundamentals",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Redis", icon: SiRedis, color: "#D82C20" },
        { name: "DSA", icon: FaDatabase, color: "#FF6B6B" },
        { name: "OS", icon: MdComputer, color: "#4ECDC4" },
        { name: "Computer Networks", icon: MdNetworkWifi, color: "#45B7D1" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ]);


  return (
    <div id="AboutMe" className="w-full bg-background text-foreground border-t border-border px-4 sm:px-6 md:px-10 py-6 md:py-8">
     <div className="
        bg-card 
        border border-gray-700
        shadow-[0_0_25px_rgba(59,130,246,0.25)]
        hover:shadow-[0_0_45px_rgba(59,130,246,0.5)]
        transition-all duration-500
        flex flex-col lg:flex-row 
        w-full h-full justify-between 
        px-4 sm:px-5 md:px-6 
        py-6 md:py-8 
        rounded-xl
        gap-6
      ">        
        <div className="flex-grow lg:pr-6">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-4 font-bold tracking-tight">About Myself</h1>
          <div className="mx-auto max-w-2xl text-left space-y-3 sm:space-y-4 mt-4">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Hello! I'm Lakshya Jangid, a passionate software developer and Computer Science undergraduate at IIIT Vadodara. I love building full-stack web applications and solving real-world problems through code.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Over the years, I've gained hands-on experience by working on various projects—from online survey platforms and chat apps to dashboards and ride-hailing apps. I also completed a software development internship at P2PExperts, where I worked on cloud-based solutions using C++ and JavaScript.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              I enjoy working with the MERN stack and constantly explore new tools to sharpen my skills. I'm also active in competitive programming, with over 250 problems solved on LeetCode.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full lg:w-auto lg:min-w-0">
          {skillsData.map((skills, index) => (
            <div
              key={index}
              className="bg-secondary border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg flex flex-col"
            >
              <h1 className="text-base sm:text-lg font-semibold tracking-wide text-center mb-4">
                {skills.title}
              </h1>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {skills.skills.map((skill, index2) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={index2}
                      className="flex flex-col items-center justify-center group cursor-pointer"
                    >
                      <Icon
                        style={{ color: skill.color }}
                        className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 transition-transform duration-300 group-hover:scale-125"
                      />
                      <h1 className="text-xs font-semibold sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center line-clamp-2">
                        {skill.name}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default AboutMe
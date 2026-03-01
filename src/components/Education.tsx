import { useState } from "react"
import { MdTouchApp } from "react-icons/md"

interface EducationData {
  Degree : String,
  Institution : String,
  Period : String,
  Description : String,
  Align : String,
  Status : String
}

function Education() {

  const data : EducationData[] = [
      {
        Degree : "Computer Science and Engineering",
        Institution : "Indian Institute of Information Technology, Vadodara",
        Period : "2023 - Persent",
        Description : "Pursuing B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies. Currently in Pre - final year.",
        Align : "Right",
        Status : "Present"
      },
      {
        Degree : "Senior Secondary Education ( 12th )",
        Institution : "Rajasthan State Board (RBSE)",
        Period : "2021 - 2022",
        Description : "Completed higher secondary education with Science stream, focusing on Mathematics, Physics, Biology, and Chemistry.",
        Align : "Left",
        Status : "Completed"
      },
      {
        Degree : "Secondary Education ( 10th )",
        Institution : "Rajasthan State Board (RBSE)",
        Period : "2019 - 2020",
        Description : "Completed Secondary Education with outstanding academic performance across all subjects..",
        Align : "Right",
        Status : "Completed"
      },
  ]

  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const toggleCard = (num : number) => {
    setActiveIndex((prev) => 
      prev.includes(num) ?  prev.filter((i)=> i !== num) : [... prev, num]
    )
  }

  return (
    <div id="Education" className="bg-background text-foreground border-t border-border px-4 sm:px-6 md:px-10 py-6 md:py-8">
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
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-8">
          Education
        </h1>
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>
          {data.map((edu, index) => {
            const isActive = activeIndex.includes(index);
            return (
              <div key={index} className="mb-8 md:mb-10 w-full flex">
              
              {/* LEFT SIDE */}
              {edu.Align === "Left" && (
                <div className="w-1/2 pr-6 cursor-pointer [perspective:1000px]" onClick={() => toggleCard(index)}>
                  <div
                    className={`relative w-full min-h-[200px] transition-transform duration-700 [transform-style:preserve-3d] ${
                      isActive ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* FRONT */}
                      <div className="
                        absolute inset-0 
                        bg-gradient-to-br from-secondary to-secondary/80
                        border border-gray-700 
                        rounded-lg 
                        p-4 
                        flex items-center justify-center 
                        shadow-[0_0_15px_rgba(59,130,246,0.2)]
                        hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                        hover:scale-[1.02]
                        transition-all duration-500
                        [backface-visibility:hidden]
                      ">
                      <div className="absolute top-2 right-2 text-blue-400 text-lg sm:text-xl animate-pulse">
                        <MdTouchApp />
                      </div>
                      <h2 className="text-sm sm:text-lg font-semibold text-center text-secondary-foreground">
                        {edu.Degree}
                      </h2>
                    </div>
                    <div className="
                      absolute inset-0 
                      bg-secondary 
                      border border-gray-700 
                      rounded-lg 
                      p-4 
                      shadow-[0_0_15px_rgba(59,130,246,0.2)]
                      hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                      transition-all duration-500
                      [transform:rotateY(180deg)] 
                      [backface-visibility:hidden]
                    ">
                      <h2 className="font-semibold text-lg sm:text-2xl text-secondary-foreground">{edu.Degree}</h2>
                      <p className="text-sm sm:text-lg font-semibold text-secondary-foreground">{edu.Institution}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.Description}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.Period}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.Status}</p> 
                    </div>
                    {/* BACK */}

                  </div>
                </div>
              )}

              {/* CENTER LINE SPACE */}
              <div className="w-1/2"></div>

              {/* RIGHT SIDE */}
              {edu.Align === "Right" && (
                <div className="w-1/2 pl-6 cursor-pointer [perspective:1000px]" onClick={() => toggleCard(index)}>
                  <div
                    className={`relative w-full min-h-[200px] transition-transform duration-700 [transform-style:preserve-3d] ${
                      isActive ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* FRONT */}
                      <div className="
                        absolute inset-0 
                        bg-gradient-to-br from-secondary to-secondary/80
                        border border-gray-700 
                        rounded-lg 
                        p-4 
                        flex items-center justify-center 
                        shadow-[0_0_15px_rgba(59,130,246,0.2)]
                        hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                        hover:scale-[1.02]
                        transition-all duration-500
                        [backface-visibility:hidden]
                      ">
                      <div className="absolute top-2 right-2 text-blue-400 text-lg sm:text-xl animate-pulse">
                        <MdTouchApp />
                      </div>
                      <h2 className="text-sm sm:text-lg font-semibold text-center text-secondary-foreground">
                        {edu.Degree}
                      </h2>                    
                    </div>
                    <div className="
                      absolute inset-0 
                      bg-secondary 
                      border border-gray-700 
                      rounded-lg 
                      p-4 
                      shadow-[0_0_15px_rgba(59,130,246,0.2)]
                      hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                      transition-all duration-500
                      [transform:rotateY(180deg)] 
                      [backface-visibility:hidden]
                    ">
                      <h2 className="font-semibold text-lg sm:text-2xl text-secondary-foreground">{edu.Degree}</h2>
                      <p className="text-sm sm:text-lg font-semibold text-secondary-foreground">{edu.Institution}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.Description}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.Period}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{edu.Status}</p> 
                    </div>
                    {/* BACK */}

                  </div>
                </div>
              )}

            </div>
            )
        })}

        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {data.map((edu, index) => {
            const isActive = activeIndex.includes(index);
            return (
            <div key={index} className="cursor-pointer" onClick={() => toggleCard(index)}>
              <div
                className={`relative w-full min-h-40 transition-transform duration-700 [transform-style:preserve-3d] ${
                  isActive ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 bg-secondary border border-border rounded-lg p-4 flex items-center justify-center [backface-visibility:hidden]">
                  <div className="absolute top-2 right-2 text-blue-400 text-lg animate-pulse">
                    <MdTouchApp />
                  </div>
                  <h2 className="text-sm font-semibold text-center text-secondary-foreground">
                    {edu.Degree}
                  </h2>
                </div>
                {/* BACK */}
                <div className="
                  absolute inset-0 
                  bg-secondary 
                  border border-gray-700 
                  rounded-lg 
                  p-5
                  flex flex-col justify-between
                  shadow-[0_0_12px_rgba(59,130,246,0.2)]
                  [transform:rotateY(180deg)] 
                  [backface-visibility:hidden]
                ">
                <div>
                  <h2 className="font-semibold text-lg text-blue-400">
                    {edu.Degree}
                  </h2>

                  <p className="text-sm font-medium text-secondary-foreground mt-1">
                    {edu.Institution}
                  </p>

                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {edu.Description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-muted-foreground">
                    {edu.Period}
                  </span>

                  <span className={`text-xs px-2 py-1 rounded-full ${
                    edu.Status === "Present"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}>
                    {edu.Status}
                  </span>
                </div>
              </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Education
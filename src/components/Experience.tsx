import { useState } from "react"
import { MdTouchApp } from "react-icons/md";

interface ExperienceData {
  Role : String,
  Company : String,
  Period : String,
  Description : String,
  Align : String,
}

function Experience() {

    const data : ExperienceData[] = [
        {
          Role : "Software Development Intern",
          Company : "P2PXperts",
          Period : "May 2025 - July 2025",
          Description : "Contributed to the Ariba procurement platform, enhancing enterprise-level cloud modules using C++ and JavaScript. Improved performance by 40% through code optimization.",
          Align : "Right",
        },
        {
          Role : "Full Stack Developer",
          Company : "Independent Projects",
          Period : "2023 - Present",
          Description : "Developed full-stack applications with Node.js, Express, and MongoDB. Implemented RESTful APIs and integrated third-party services.",
          Align : "Left",
        },
  ]

  
  const [activeIndex, setActiveIndex] = useState<number[]>([])

  const toggleCard = (num : number) => {
    setActiveIndex((prev) => 
      prev.includes(num) ?  prev.filter((i)=> i !== num) : [... prev, num]
    )
   }

  return (
    <div id="Experience" className="bg-background text-foreground border-t border-border px-4 sm:px-6 md:px-10 py-6 md:py-8">
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
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 md:mb-10">
          Experience
        </h1>
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>
          {data.map((work, index) => {
            const isActive = activeIndex.includes(index);
            
            return (
              <div key={index} className="mb-8 md:mb-10 w-full flex">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-background shadow-lg"></div>
                {/* LEFT SIDE */}
                {work.Align === "Left" && (
                  <>
                    <div
                      className="w-1/2 pr-6 cursor-pointer [perspective:1000px]"
                      onClick={() => toggleCard(index)}
                    >
                      <div
                        className={`relative w-full min-h-[200px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                          isActive ? "[transform:rotateY(180deg)]" : ""
                        }`}
                      >
                        {/* FRONT */}
                          <div className="
                            absolute inset-0 
                            bg-gradient-to-br from-secondary to-secondary/80
                            border border-gray-700 
                            rounded-lg 
                            p-5 sm:p-6
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
                            {work.Role}
                          </h2>
                        </div>

                        {/* BACK */}
                        <div className="
                          absolute inset-0 
                          bg-secondary 
                          border border-gray-700 
                          rounded-lg 
                          p-5 sm:p-6
                          flex flex-col justify-between
                          shadow-[0_0_12px_rgba(59,130,246,0.2)]
                          [transform:rotateY(180deg)] 
                          [backface-visibility:hidden]
                        ">
                          <div>
                            <h2 className="font-semibold text-lg text-blue-400 tracking-wide">
                              {work.Role}
                            </h2>

                            <p className="text-sm font-medium text-secondary-foreground mt-1">
                              {work.Company}
                            </p>

                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                              {work.Description}
                            </p>
                          </div>

                          <p className="text-xs text-muted-foreground mt-4">
                            {work.Period}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Empty Right Space */}
                    <div className="w-1/2"></div>
                  </>
                )}

                {/* RIGHT SIDE */}
                {work.Align === "Right" && (
                  <>
                    {/* Empty Left Space */}
                    <div className="w-1/2"></div>

                    <div
                      className="w-1/2 pl-6 cursor-pointer [perspective:1000px]"
                      onClick={() => toggleCard(index)}
                    >
                      <div
                        className={`relative w-full min-h-[200px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                          isActive ? "[transform:rotateY(180deg)]" : ""
                        }`}
                      >
                        {/* FRONT */}
                          <div className="
                            absolute inset-0 
                            bg-gradient-to-br from-secondary to-secondary/80
                            border border-gray-700 
                            rounded-lg 
                            p-5 sm:p-6
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
                            {work.Role}
                          </h2>
                        </div>

                        {/* BACK */}
                        <div className="
                          absolute inset-0 
                          bg-secondary 
                          border border-gray-700 
                          rounded-lg 
                          p-5 sm:p-6
                          flex flex-col justify-between
                          shadow-[0_0_12px_rgba(59,130,246,0.2)]
                          [transform:rotateY(180deg)] 
                          [backface-visibility:hidden]
                        ">
                          <div>
                            <h2 className="font-semibold text-lg text-blue-400 tracking-wide">
                              {work.Role}
                            </h2>

                            <p className="text-sm font-medium text-secondary-foreground mt-1">
                              {work.Company}
                            </p>

                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                              {work.Description}
                            </p>
                          </div>

                          <p className="text-xs text-muted-foreground mt-4">
                            {work.Period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

              </div>
            );
          })}


        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {data.map((work, index) => {
            const isActive = activeIndex.includes(index);
            return (
            <div key={index} className="cursor-pointer" onClick={() => toggleCard(index)}>
              <div
                className={`relative w-full min-h-40 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                  isActive ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT */}
                <div className="
                          absolute inset-0 
                          bg-secondary 
                          border border-gray-700 
                          rounded-lg 
                            p-5 sm:p-6
                          flex items-center justify-center 
                          shadow-[0_0_15px_rgba(59,130,246,0.2)]
                          hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                          transition-all duration-500
                          [backface-visibility:hidden]
                        ">
                  <div className="absolute top-2 right-2 text-blue-400 text-lg animate-pulse">
                    <MdTouchApp />
                  </div>
                  <h2 className="text-sm font-semibold text-center text-secondary-foreground">
                    {work.Role}
                  </h2>
                </div>
                {/* BACK */}
                <div className="
                          absolute inset-0 
                          bg-secondary 
                          border border-gray-700 
                          rounded-lg 
                          p-5 sm:p-6
                          shadow-[0_0_15px_rgba(59,130,246,0.2)]
                          hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]
                          transition-all duration-500
                          [transform:rotateY(180deg)] 
                          [backface-visibility:hidden]
                        ">
                  <h2 className="font-semibold text-base sm:text-lg text-secondary-foreground tracking-wide">
                    {work.Role}
                  </h2>

                  <p className="text-sm font-medium text-blue-400 mt-1">
                    {work.Company}
                  </p>

                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {work.Description}
                  </p>

                  <p className="text-xs text-muted-foreground mt-3 mb-3">
                    {work.Period}
                  </p>
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

export default Experience
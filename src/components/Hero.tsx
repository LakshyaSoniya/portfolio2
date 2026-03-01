import { TypeAnimation } from "react-type-animation"
import logo from "../assets/DP.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return isMobile;
  }
  const mobileDevice = useIsMobile();

  return (
    <div id="Hero" className='w-full bg-background text-foreground px-4 sm:px-6 md:px-10 py-8 md:py-10'>
      <div className="
        bg-card 
        border border-gray-700
        shadow-[0_0_25px_rgba(59,130,246,0.35)]
        hover:shadow-[0_0_45px_rgba(59,130,246,0.65)]
        transition-all duration-500
        flex flex-col md:flex-row 
        px-4 sm:px-6 md:px-10 
        py-6 md:py-8 
        h-full w-full justify-between 
        items-center
        rounded-lg sm:rounded-xl lg:rounded-2xl 
        gap-6
      ">
          {
            mobileDevice
          ?
          <>
            <img 
              src={logo} 
              alt="png" 
              className="
                object-cover 
                w-32 sm:w-40 md:w-48 lg:w-56 
                h-32 sm:h-40 md:h-48 lg:h-56 
                rounded-full 
                flex-shrink-0 
                self-center md:self-start
                transition-all duration-500
                shadow-[0_0_15px_rgba(59,130,246,0.3)]
                hover:shadow-[0_0_45px_rgba(59,130,246,0.8)]
                hover:scale-105
              "
            />
            <div className="h-full flex  flex-col gap-3 sm:gap-4 flex-1 md:min-w-0">
              <h1 className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground font-semibold">
                Final Year B.Tech CSE Student at IIIT Vadodara
              </h1>
              <div>
                <h1 className="text-base sm:text-xl md:text-2xl">Hi, I'm</h1>
                <h1 className="mb-2 text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  LAKSHYA JANGID
                </h1>
                <h1>
                  <TypeAnimation 
                    sequence={['Software Developer', 2000, 'ML Engineer',2000, 'Full Stack Web Developer', 2000]}
                     wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-base sm:text-lg md:text-xl font text-blue-400 font-semibold"
                  />
                </h1>
                <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                  Aspiring <span className="font-semibold text-foreground">Software Engineer </span> 
                  and <span className="font-semibold text-foreground">MERN Stack Developer</span>, 
                  currently pursuing a B.Tech in Computer Science at 
                  <span className="font-semibold text-foreground"> IIIT Vadodara</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <a href="https://www.linkedin.com/in/lakshyajangid/" target="_blank" className="border border-border bg-primary text-primary-foreground rounded-md px-3 py-2 flex gap-2 items-center font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"> <IoLogoLinkedin className="text-sky-400 text-xl"/> Visit LinkedIn</a>
                  <a href="https://drive.google.com/file/d/1f66gFBCN_qOyRUhsBbkg4vS4HVNJmNut/view?usp=sharing" target="_blank" className="border border-border bg-secondary text-foreground rounded-md px-3 py-2 flex gap-2 items-center font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"> <FaExternalLinkAlt/> See Resume</a>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className="h-full flex  flex-col gap-3 sm:gap-4 flex-1 md:min-w-0">
              <h1 className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground font-semibold">
                Final Year B.Tech CSE Student at IIIT Vadodara
              </h1>
              <div>
                <h1 className="text-base sm:text-xl md:text-2xl">Hi, I'm</h1>
                <h1 className="mb-2 text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  LAKSHYA JANGID
                </h1>
                <h1>
                  <TypeAnimation 
                    sequence={['Software Developer', 2000, 'ML Engineer',2000, 'Full Stack Web Developer', 2000]}
                     wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-base sm:text-lg md:text-xl font text-blue-400 font-semibold"
                  />
                </h1>
                <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                  Aspiring <span className="font-semibold text-foreground">Software Engineer </span> 
                  and <span className="font-semibold text-foreground">MERN Stack Developer</span>, 
                  currently pursuing a B.Tech in Computer Science at 
                  <span className="font-semibold text-foreground"> IIIT Vadodara</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <a href="https://www.linkedin.com/in/lakshyajangid/" target="_blank" className="border border-border bg-primary text-primary-foreground rounded-md px-3 py-2 flex gap-2 items-center font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"> <IoLogoLinkedin className="text-sky-400 text-xl"/> Visit LinkedIn</a>
                  <a href="https://drive.google.com/file/d/1f66gFBCN_qOyRUhsBbkg4vS4HVNJmNut/view?usp=sharing" target="_blank" className="border border-border bg-secondary text-foreground rounded-md px-3 py-2 flex gap-2 items-center font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"> <FaExternalLinkAlt/> See Resume</a>
                </div>
              </div>
            </div>
            <img 
              src={logo} 
              alt="png" 
              className="
                object-cover 
                w-32 sm:w-40 md:w-48 lg:w-56 
                h-32 sm:h-40 md:h-48 lg:h-56 
                rounded-full 
                flex-shrink-0 
                self-center md:self-start
                transition-all duration-500
                shadow-[0_0_15px_rgba(59,130,246,0.3)]
                hover:shadow-[0_0_45px_rgba(59,130,246,0.8)]
                hover:scale-105
              "
            />
          </>
            
          }
      </div>
    </div>
  )
}

export default Hero
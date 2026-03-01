import logo from '../assets/Icon.png'
import { useTheme } from '../context/ThemeContext'
import sun from '../assets/sun2.webp'
import moon from '../assets/moon.png'
import { useEffect, useState } from "react"

function Header() {
    const { isDark, toggleTheme } = useTheme()
    const [show, setShow] = useState(true)

    useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
        const currentScroll = window.scrollY

        if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false)
        } else {
        setShow(true)
        }

        lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
    <div
        className={`fixed top-0 left-0 w-full z-50
        bg-background text-foreground
        px-5 sm:px-8 md:px-10 py-4 sm:py-5
        flex justify-between items-center
        border-b border-border
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
        <div className='flex items-center gap-2 sm:gap-3'>
            <img src={logo} className='w-10 sm:w-12' />
            <div className='min-w-0'>
                <h1 className="text-lg sm:text-2xl font-bold truncate">
                    Lakshya Jangid
                </h1>
                <h1 className="text-xs sm:text-lg text-muted-foreground font-medium truncate">
                    Software Developer
                </h1>
            </div>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
            <div className="hidden sm:flex gap-2 sm:gap-3">
                <a href='#Hero' className="text-sm sm:text-lg cursor-pointer hover:underline font-medium">Home</a>
                <a href='#Education' className="text-sm sm:text-lg cursor-pointer hover:underline font-medium">Education</a>
                <a href='#Experience' className="text-sm sm:text-lg cursor-pointer hover:underline font-medium">Experience</a>
                <a href='#Projects' className="text-sm sm:text-lg cursor-pointer hover:underline font-medium">Projects</a>
                <a href='#Contact' className="text-sm sm:text-lg cursor-pointer hover:underline font-medium">Contact</a>
            </div>
            <button
                onClick={toggleTheme}
                className={`relative w-14 h-8 flex items-center rounded-full transition-all duration-500
                bg-muted border border-border ${isDark ? "bg-sky-300" : "bg-slate-900"}`}
                >
                {/* Moving Circle */}
                <div
                    className={`absolute w-6 h-6 rounded-full shadow-md transform transition-all duration-500 flex items-center justify-center
                    ${isDark ? "translate-x-7 bg-slate-900" : "translate-x-1 bg-sky-300"}`}
                >
                    <img
                    src={isDark ? moon : sun}
                    alt="theme icon"
                    className="w-4 h-4"
                    />
                </div>
            </button>
        </div>   
    </div>
  )
}

export default Header
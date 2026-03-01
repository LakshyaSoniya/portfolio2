import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import ProfileHandle from './components/ProfileHandle'
import Projects from './components/Projects'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Header/>
      <div className="pt-24">
      <Hero/>
      <ProfileHandle/>
      <AboutMe/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
    </ThemeProvider>
  )
}

export default App
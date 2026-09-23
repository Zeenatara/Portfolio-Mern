import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { HiOutlineCloud } from 'react-icons/hi2'

const stack = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'FastAPI', icon: <SiFastapi /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Oracle Cloud', icon: <HiOutlineCloud /> },
]

export default function TechStack() {
  return (
    <section>
      <div className="container">
        <h2 className="tech-heading">TECH STACK</h2>
        <div className="tech-grid">
          {stack.map((item) => (
            <div className="tech-chip" key={item.name}>
              <span className="tech-icon">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

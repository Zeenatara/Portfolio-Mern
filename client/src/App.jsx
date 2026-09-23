import Navbar from './components/Navbar.jsx'
import SocialRail from './components/SocialRail.jsx'
import CornerLink from './components/CornerLink.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Hero from './components/Hero.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import Timeline from './components/Timeline.jsx'
import Work from './components/Work.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <SocialRail />
      <CornerLink />
      <Hero />
      <WhatIDo />
      <Timeline />
      <Work/>
      <TechStack />
      <Contact />
    </>
  )
}

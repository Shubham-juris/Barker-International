import React from 'react'
import AboutHero from '../components/aboutcomponents/AboutHero'
import { MissionVision } from '../components/aboutcomponents/MissionVision'
import { WhyChooseUs } from '../components/aboutcomponents/WhyChooseUs'
import { TeamSection } from '../components/aboutcomponents/TeamSection'

const AboutPage = () => {
  return (
    <>
    <AboutHero/>
    <MissionVision/>
    <WhyChooseUs/>
    <TeamSection/>
    </>
  )
}

export default AboutPage

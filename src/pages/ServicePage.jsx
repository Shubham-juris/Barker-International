import React from 'react'
import ServiceHero from '../components/servicecomponent/ServiceHero'
import { ServiceCards } from '../components/servicecomponent/ServiceCards'
import { HowWeWork } from '../components/servicecomponent/HowWeWork'
import { ServiceCTA } from '../components/servicecomponent/ServiceCTA'

const ServicePage = () => {
  return (
    <>
     <ServiceHero/> 
     <ServiceCards/>
     <HowWeWork/>
     <ServiceCTA/>
    </>
  )
}

export default ServicePage

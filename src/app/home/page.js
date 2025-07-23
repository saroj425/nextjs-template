import React from 'react'
import HeroSection from '../common/Herosecton'
import CreativeFeatures from './CreativeFeatures'
import Creativeideas from './Creativeideas'
import Creativeservices from './Creativeservices'
import WebMobileDevelopment from './WebMobileDevelopment'
import Whychooseus from './Whychooseus'
import Projectssection from './Projectssection'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <CreativeFeatures/>
      <Creativeideas/>
      <Creativeservices/>
      <WebMobileDevelopment/>
      <Whychooseus/>
      <Projectssection/>
    </div>
  )
}

export default page

import React from 'react'
import HeroSection from '../common/Herosecton'
import CreativeFeatures from './CreativeFeatures'
import Creativeideas from './Creativeideas'
import Creativeservices from './Creativeservices'
import WebMobileDevelopment from './WebMobileDevelopment'
import Whychooseus from './Whychooseus'
import Projectssection from './Projectssection'
import Blogsection from './Blogsection'

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
      <Blogsection/>
    </div>
  )
}

export default page

import React from 'react'
import CampaignInormation from '../Campaign/CampaignInormation'
import Contact from '../ContactInformation/contact'
import Category from '../Category/Category'

const Homepage = () => {
  return (
    <>
      <CampaignInormation />
      <Category/>
      <Contact/>
    </>
  )
}

export default Homepage
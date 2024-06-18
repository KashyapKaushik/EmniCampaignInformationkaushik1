import React from 'react'
import './CampaignCard.css'
interface CampaingnDetails{
  campaignName:string,
  startDate:string,
  endDate:string,
  budget:string,
}

interface CampaignCardProps{
  details:CampaingnDetails
}
const CampaignCard:React.FC<CampaignCardProps> = ({details}) => {
  return (
    <>
    <div className='campaign-card'>
        <h3>{details.campaignName}</h3>
        <p>Start Date :{details.startDate}</p>
        <p>End Date :{details.endDate}</p>
        <p>Budget : {details.budget}</p>
    </div>
    </>
  )
}

export default CampaignCard
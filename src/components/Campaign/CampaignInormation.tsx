import React, { useState } from 'react'
interface Campaign{
    name:string;
    startDate:string;
    endDate:string;
    budget:string;
}

const CampaignInormation = () => {
    const [campaginName, setCampaginName] = useState<string>('');
    const [startDate, setStartDate] = useState<string>();
    const [endDate, setEndDate] = useState<string>();
    const [budget, setBudget] = useState<string>();
    const [campaigns,setCampaigns]=useState<Campaign[]>([]);

    const handleAddButton= (event :React.FormEvent) => {

        event.preventDefault();

        const newcampaign:Campaign ={
            name: campaginName,
            startDate,
            endDate,
            budget   
        }

    return (
        <>
            <div className="campagin-container">
                <div className="campaign-content">
                    <h2>Campaign Information</h2>
                    <form>
                        <input type='text' placeholder='Enter Campagin Name'
                            value={campaginName} onChange={(e) => setCampaginName(e.target.value)} />
                        <input type='text' placeholder='Enter Start Date'
                            value={statDate} onChange={(e) => setStartDate(e.target.value)} />
                        <input type='text' placeholder='Enter End Date'
                            value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        <input type='text' placeholder='Enter Budget'
                            value={budget} onChange={(e) => setBudget(e.target.value)} />
                        <button>Add</button>    
                    </form>
                </div>
            </div>
        </>
    )
}

export default CampaignInormation

// import React, { useState } from 'react';
// import './CampaignInformation.css';

// interface Campaign {
//   name: string;
//   startDate: string;
//   endDate: string;
//   budget: string;
// }

// const CampaignInformation = () => {
//   const [campaignName, setCampaignName] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');
//   const [budget, setBudget] = useState<string>('');
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);

//   const handleAddCampaign = (event: React.FormEvent) => {
//     event.preventDefault();

//     const newCampaign: Campaign = {
//       name: campaignName,
//       startDate,
//       endDate,
//       budget,
//     };

//     setCampaigns([...campaigns, newCampaign]);
//     setCampaignName('');
//     setStartDate('');
//     setEndDate('');
//     setBudget('');
//   };

//   return (
//     <>
//       <div className="campaign-container">
//         <div className="campaign-content">
//           <h2>Campaign Information</h2>
//           <form onSubmit={handleAddCampaign}>
//             <input
//               type="text"
//               placeholder="Enter Campaign Name"
//               value={campaignName}
//               onChange={(e) => setCampaignName(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               placeholder="Enter Start Date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               required
//             />
//             <input
//               type="date"
//               placeholder="Enter End Date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               required
//             />
//             <input
//               type="number"
//               placeholder="Enter Budget"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//               required
//             />
//             <button type="submit">Add Campaign</button>
//           </form>

//           <div className="campaign-list">
//             {campaigns.map((campaign, index) => (
//               <div className="campaign-card" key={index}>
//                 <h3>{campaign.name}</h3>
//                 <p>Start Date: {campaign.startDate}</p>
//                 <p>End Date: {campaign.endDate}</p>
//                 <p>Budget: {campaign.budget}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CampaignInformation;

// import React, { useState } from 'react';
// import './CampaignInformation.css';
// import CampaignCard from '../CampaignCard/CampaignCard';

// interface Campaign {
//   name: string;
//   startDate: string;
//   endDate: string;
//   budget: string;
// }

// const CampaignInformation = () => {
//   const [campaignName, setCampaignName] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');
//   const [budget, setBudget] = useState<string>('');
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);

//   const handleAddCampaign = (event: React.FormEvent) => {
//     event.preventDefault();

//     const newCampaign: Campaign = {
//       name: campaignName,
//       startDate,
//       endDate,
//       budget,
//     };

//     setCampaigns([...campaigns, newCampaign]);
//     setCampaignName('');
//     setStartDate('');
//     setEndDate('');
//     setBudget('');
//   };

//   return (
//     <>
//       <div className="campaign-container">
//         <div className="campaign-content">
//           <h2>Campaign Information</h2>
//           <form onSubmit={handleAddCampaign}>
//             <div className="form-group">
//               <div className="form-field">
//                 <label htmlFor="campaignName">Campaign Name</label>
//                 <input
//                   id="campaignName"
//                   type="text"
//                   placeholder="Enter Campaign Name"
//                   value={campaignName}
//                   onChange={(e) => setCampaignName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-field">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   id="startDate"
//                   type="date"
//                   placeholder="Enter Start Date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-field">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   id="endDate"
//                   type="date"
//                   placeholder="Enter End Date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-field">
//                 <label htmlFor="budget">Budget</label>
//                 <input
//                   id="budget"
//                   type="number"
//                   placeholder="Enter Budget"
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>
//             <button type="submit">Add Campaign</button>
//           </form>

//           <div className="campaign-list">
//             {campaigns.map((campaign, index) => (
//               <div className="campaign-card" key={index}>
//                 <h3>{campaign.name}</h3>
//                 <p>Start Date: {campaign.startDate}</p>
//                 <p>End Date: {campaign.endDate}</p>
//                 <p>Budget: {campaign.budget}</p>
//               </div>
//             ))}
//           </div>
//           <CampaignCard/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CampaignInformation;

import React, { useState } from 'react';
import './CampaignInformation.css';
import { ColumnDirective,
   ColumnsDirective, GridComponent
   ,Page,Inject ,Filter,Edit,
   EditSettingsModel,Toolbar,ToolbarItems
  
  } from '@syncfusion/ej2-react-grids';

interface Campaign {
  campaignName: string;
  startDate: string;
  endDate: string;
  budget: string;
}

const CampaignInformation: React.FC = () => {

  const editOption: EditSettingsModel={ allowEditing: true , allowAdding: true, allowDeleting:true , mode:'Dialog'};
  const toolbaroption: ToolbarItems[]=["Add" ,"Edit","Delete"]
  // const [campaignName, setCampaignName] = useState<string>('');
  // const [startDate, setStartDate] = useState<string>('');
  // const [endDate, setEndDate] = useState<string>('');
  // const [budget, setBudget] = useState<string>('');
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  // const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  return (
    <>
      <div className="campaign-container">
        <div>
          <h2>Campaign Information</h2>
        </div>
       
        <div className="information-content">
          <GridComponent
           dataSource={campaigns} allowPaging={true} 
           pageSettings={{ pageSize: 5 }} allowFiltering={true}  editSettings={editOption}
           toolbar={toolbaroption}
           >
            <ColumnsDirective>
              <ColumnDirective field='campaignName' headerText='Campaign Name' width='150' />
              <ColumnDirective field='startDate' headerText='Start Date' width='100' editType='datepickeredit' format='yM d' />
              <ColumnDirective field='endDate' headerText='End Date' width='100' editType='datepickeredit' format='yMd' />
              <ColumnDirective field='budget' headerText='Budget' width='100' editType='numericedit'/>
            </ColumnsDirective>
            <Inject services={[Page,Filter,Edit,Toolbar]}/>
          </GridComponent>
        </div>
      </div>

    
    </>
  );
};

export default CampaignInformation;



// import React, { useState } from 'react';
// import './CampaignInformation.css';

// interface Campaign {
//   campaignName: string;
//   startDate: string;
//   endDate: string;
//   budget: string;
// }

// const CampaignInformation: React.FC = () => {
//   const [campaignName, setCampaignName] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');
//   const [budget, setBudget] = useState<string>('');
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);

//   const handleAdd = (event: React.FormEvent) => {
//     event.preventDefault();

//     const newCampaign: Campaign = {
//       campaignName,
//       startDate,
//       endDate,
//       budget,
//     };

//     setCampaigns([...campaigns, newCampaign]);
//     clearForm();
//   };

//   const handleUpdate = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (editingIndex !== null) {
//       const updatedCampaign: Campaign = {
//         campaignName,
//         startDate,
//         endDate,
//         budget,
//       };

//       const updatedCampaigns = campaigns.map((campaign, index) =>
//         index === editingIndex ? updatedCampaign : campaign
//       );
//       setCampaigns(updatedCampaigns);
//       setEditingIndex(null);
//       clearForm();
//     }
//   };

//   const handleEdit = (index: number) => {
//     const campaignToEdit = campaigns[index];
//     setCampaignName(campaignToEdit.campaignName);
//     setStartDate(campaignToEdit.startDate);
//     setEndDate(campaignToEdit.endDate);
//     setBudget(campaignToEdit.budget);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index: number) => {
//     const filteredCampaigns = campaigns.filter((_, i) => i !== index);
//     setCampaigns(filteredCampaigns);
//   };

//   const clearForm = () => {
//     setCampaignName('');
//     setStartDate('');
//     setEndDate('');
//     setBudget('');
//   };

//   return (
//     <>
//       <div className="campaign-container">
//         <div className="campaign-section">
//           <div className="campaign-content">
//             <form onSubmit={editingIndex !== null ? handleUpdate : handleAdd}>
//               <h2>Campaign Information</h2>
//               <div className="inputdiv">
//                 <label htmlFor="campaignName">Campaign Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Campaign Name"
//                   value={campaignName}
//                   onChange={(e) => setCampaignName(e.target.value)}
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   type="date"
//                   placeholder="Enter Start Date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)}
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   type="date"
//                   placeholder="Enter End Date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)}
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="budget">Budget</label>
//                 <input
//                   type="number"
//                   placeholder="Enter Budget"
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)}
//                 />
//               </div>
//               <div className="submitdiv">
//                 <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="information-content">
//           <div className="grid-header">
//             <div>Campaign Name</div>
//             <div>Start Date</div>
//             <div>End Date</div>
//             <div>Budget</div>
//             <div>Actions</div>
//           </div>
//           {campaigns.map((campaign, index) => (
//             <div key={index} className="grid-row">
//               <div>{campaign.campaignName}</div>
//               <div>{campaign.startDate}</div>
//               <div>{campaign.endDate}</div>
//               <div>{campaign.budget}</div>
//               <div>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CampaignInformation;

// using syncfusion

// import React, { useState } from 'react';
// import './CampaignInformation.css';
// import Modal from '../Modal/Modal';
// import { ColumnDirective,
//    ColumnsDirective, GridComponent
//    ,Page,Inject ,Filter,Edit,
//    EditSettingsModel,Toolbar,ToolbarItems
  
//   } from '@syncfusion/ej2-react-grids';

// interface Campaign {
//   campaignName: string;
//   startDate: string;
//   endDate: string;
//   budget: string;
// }

// const CampaignInformation: React.FC = () => {

//   const editOption: EditSettingsModel={ allowEditing: true , allowAdding: true, allowDeleting:true , mode:'Dialog'};
//   const toolbaroption: ToolbarItems[]=["Add" ,"Edit","Delete"]
//   const [campaignName, setCampaignName] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');
//   const [budget, setBudget] = useState<string>('');
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const handleAdd = (event: React.FormEvent) => {
//     event.preventDefault();

//     const newCampaign: Campaign = {
//       campaignName,
//       startDate,
//       endDate,
//       budget,
//     };

//     setCampaigns([...campaigns, newCampaign]);
//     clearForm();
//   };

//   const handleUpdate = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (editingIndex !== null) {
//       const updatedCampaign: Campaign = {
//         campaignName,
//         startDate,
//         endDate,
//         budget,
//       };

//       const updatedCampaigns = campaigns.map((campaign, index) =>
//         index === editingIndex ? updatedCampaign : campaign
//       );
//       setCampaigns(updatedCampaigns);
//       setEditingIndex(null);
//       clearForm();
//       setIsModalOpen(false);
//     }
//   };

//   const handleEdit = (index: number) => {
//     const campaignToEdit: Campaign = campaigns[index];
//     setCampaignName(campaignToEdit.campaignName);
//     setStartDate(campaignToEdit.startDate);
//     setEndDate(campaignToEdit.endDate);
//     setBudget(campaignToEdit.budget);
//     setEditingIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (index: number) => {
//     const filteredCampaigns = campaigns.filter((_, i) => i !== index);
//     setCampaigns(filteredCampaigns);
//   };
//   const closeModal = () => {
//     clearForm();
//     setIsModalOpen(false);
//   }

//   const clearForm = () => {
//     setCampaignName('');
//     setStartDate('');
//     setEndDate('');
//     setBudget('');
//   };

//   return (
//     <>
//       <div className="campaign-container">
//         <div className="campaign-section">
//           <div className="campaign-content">
//             <form onSubmit={handleAdd}>
//               <h2>Campaign Information</h2>
//               <div className="inputdiv">
//                 <label htmlFor="campaignName">Campaign Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Campaign Name"
//                   value={campaignName}
//                   onChange={(e) => setCampaignName(e.target.value)} required
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   type="date"
//                   placeholder="Enter Start Date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)} required
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   type="date"
//                   placeholder="Enter End Date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)} required
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="budget">Budget</label>
//                 <input
//                   type="number"
//                   placeholder="Enter Budget"
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)}required
//                 />
//               </div>
//               <div className="submitdiv">
//                 <button type="submit">Add</button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="information-content">
//           <GridComponent
//            dataSource={campaigns} allowPaging={true} 
//            pageSettings={{ pageSize: 5 }} allowFiltering={true}  editSettings={editOption}
//            toolbar={toolbaroption}
//            >
//             <ColumnsDirective>
//               <ColumnDirective field='campaignName' headerText='Campaign Name' width='150' />
//               <ColumnDirective field='startDate' headerText='Start Date' width='100' editType='datepickeredit' format='yM d' />
//               <ColumnDirective field='endDate' headerText='End Date' width='100' editType='datepickeredit' format='yMd' />
//               <ColumnDirective field='budget' headerText='Budget' width='100' editType='numericedit'/>
//             </ColumnsDirective>
//             <Inject services={[Page,Filter,Edit,Toolbar]}/>
//           </GridComponent>
//           {/* <div className="grid-header">
//             <div>Campaign Name</div>
//             <div>Start Date</div>
//             <div>End Date</div>
//             <div>Budget</div>
//             <div>Actions</div>
//           </div>
//           {campaigns.map((campaign, index) => (
//             <div key={index} className="grid-row">
//               <div>{campaign.campaignName}</div>
//               <div>{campaign.startDate}</div>
//               <div>{campaign.endDate}</div>
//               <div>{campaign.budget}</div>
//               <div>
//                 <button onClick={() => handleEdit(index)}>Edit</button>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </div>
//             </div>
//           ))} */}
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
//         <form onSubmit={handleUpdate}>
//           <h2>Edit Campaign Information</h2>
//           <div className="inputdiv">
//             <label htmlFor="campaignName">Campaign Name</label>
//             <input
//               type="text"
//               placeholder="Enter Campaign Name"
//               value={campaignName}
//               onChange={(e) => setCampaignName(e.target.value)}
//             />
//           </div>
//           <div className="inputdiv">
//             <label htmlFor="startDate">Start Date</label>
//             <input
//               type="date"
//               placeholder="Enter Start Date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </div>
//           <div className="inputdiv">
//             <label htmlFor="endDate">End Date</label>
//             <input
//               type="date"
//               placeholder="Enter End Date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//           <div className="inputdiv">
//             <label htmlFor="budget">Budget</label>
//             <input
//               type="number"
//               placeholder="Enter Budget"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//             />
//           </div>
//           <div className="submitdiv">
//             <button type="submit">Update</button>
//           </div>
//         </form>
//       </Modal>
//     </>
//   );
// };

// export default CampaignInformation;




// Modalpopby without syncfusion

// import React, { useState } from 'react';
// import './CampaignInformation.css';
// import Modal from '../Modal/Modal';
// import { ColumnDirective, ColumnsDirective, GridComponent, Page, Inject, Filter } from '@syncfusion/ej2-react-grids';

// interface Campaign {
//   campaignName: string;
//   startDate: string;
//   endDate: string;
//   budget: string;
// }

// interface ActionTemplateProps {
//   campaignName: string;
//   startDate: string;
//   endDate: string;
//   budget: string;
// }

// const CampaignInformation: React.FC = () => {
//   const [campaignName, setCampaignName] = useState<string>('');
//   const [startDate, setStartDate] = useState<string>('');
//   const [endDate, setEndDate] = useState<string>('');
//   const [budget, setBudget] = useState<string>('');
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);
//   const [editingIndex, setEditingIndex] = useState<number | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const handleAdd = (event: React.FormEvent) => {
//     event.preventDefault();

//     const newCampaign: Campaign = {
//       campaignName,
//       startDate,
//       endDate,
//       budget,
//     };

//     setCampaigns([...campaigns, newCampaign]);
//     clearForm();
//   };

//   const handleUpdate = (event: React.FormEvent) => {
//     event.preventDefault();

//     if (editingIndex !== null) {
//       const updatedCampaign: Campaign = {
//         campaignName,
//         startDate,
//         endDate,
//         budget,
//       };

//       const updatedCampaigns = campaigns.map((campaign, index) =>
//         index === editingIndex ? updatedCampaign : campaign
//       );
//       setCampaigns(updatedCampaigns);
//       setEditingIndex(null);
//       clearForm();
//       setIsModalOpen(false);
//     }
//   };

//   const handleEdit = (index: number) => {
//     const campaignToEdit: Campaign = campaigns[index];
//     setCampaignName(campaignToEdit.campaignName);
//     setStartDate(campaignToEdit.startDate);
//     setEndDate(campaignToEdit.endDate);
//     setBudget(campaignToEdit.budget);
//     setEditingIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (index: number) => {
//     const filteredCampaigns = campaigns.filter((_, i) => i !== index);
//     setCampaigns(filteredCampaigns);
//   };

//   const closeModal = () => {
//     clearForm();
//     setIsModalOpen(false);
//   };

//   const clearForm = () => {
//     setCampaignName('');
//     setStartDate('');
//     setEndDate('');
//     setBudget('');
//   };

//   const actionTemplate = (props: ActionTemplateProps) => {
//     const index = campaigns.findIndex(campaign => campaign.campaignName === props.campaignName);
//     return (
//       <div>
//         <button onClick={() => handleEdit(index)}>Edit</button>
//         <button onClick={() => handleDelete(index)}>Delete</button>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="campaign-container">
//         <div className="campaign-section">
//           <div className="campaign-content">
//             <form onSubmit={handleAdd}>
//               <h2>Campaign Information</h2>
//               <div className="inputdiv">
//                 <label htmlFor="campaignName">Campaign Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Campaign Name"
//                   value={campaignName}
//                   onChange={(e) => setCampaignName(e.target.value)} required
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="startDate">Start Date</label>
//                 <input
//                   type="date"
//                   placeholder="Enter Start Date"
//                   value={startDate}
//                   onChange={(e) => setStartDate(e.target.value)} required
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="endDate">End Date</label>
//                 <input
//                   type="date"
//                   placeholder="Enter End Date"
//                   value={endDate}
//                   onChange={(e) => setEndDate(e.target.value)} required
//                 />
//               </div>
//               <div className="inputdiv">
//                 <label htmlFor="budget">Budget</label>
//                 <input
//                   type="number"
//                   placeholder="Enter Budget"
//                   value={budget}
//                   onChange={(e) => setBudget(e.target.value)} required
//                 />
//               </div>
//               <div className="submitdiv">
//                 <button type="submit">Add</button>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="information-content">
//           <GridComponent
//             dataSource={campaigns}
//             allowPaging={true}
//             pageSettings={{ pageSize: 5 }}
//             allowFiltering={true}
//           >
//             <ColumnsDirective>
//               <ColumnDirective field='campaignName' headerText='Campaign Name' width='150' />
//               <ColumnDirective field='startDate' headerText='Start Date' width='100' />
//               <ColumnDirective field='endDate' headerText='End Date' width='100' />
//               <ColumnDirective field='budget' headerText='Budget' width='100' />
//               <ColumnDirective headerText='Actions' width='150' template={actionTemplate} />
//             </ColumnsDirective>
//             <Inject services={[Page, Filter]} />
//           </GridComponent>
//         </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
//         <form onSubmit={handleUpdate}>
//           <h2>Edit Campaign Information</h2>
//           <div className="inputdiv">
//             <label htmlFor="campaignName">Campaign Name</label>
//             <input
//               type="text"
//               placeholder="Enter Campaign Name"
//               value={campaignName}
//               onChange={(e) => setCampaignName(e.target.value)}
//             />
//           </div>
//           <div className="inputdiv">
//             <label htmlFor="startDate">Start Date</label>
//             <input
//               type="date"
//               placeholder="Enter Start Date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </div>
//           <div className="inputdiv">
//             <label htmlFor="endDate">End Date</label>
//             <input
//               type="date"
//               placeholder="Enter End Date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </div>
//           <div className="inputdiv">
//             <label htmlFor="budget">Budget</label>
//             <input
//               type="number"
//               placeholder="Enter Budget"
//               value={budget}
//               onChange={(e) => setBudget(e.target.value)}
//             />
//           </div>
//           <div className="submitdiv">
//             <button type="submit">Update</button>
//           </div>
//         </form>
//       </Modal>
//     </>
//   );
// };

// export default CampaignInformation;

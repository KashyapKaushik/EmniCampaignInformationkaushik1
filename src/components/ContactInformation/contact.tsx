import React, { useState } from 'react';
import './contact.css';
import { ColumnDirective,
   ColumnsDirective, GridComponent
   ,Page,Inject ,Filter,Edit,
   EditSettingsModel,Toolbar,ToolbarItems
 
  } from '@syncfusion/ej2-react-grids';
 
interface Contact{
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
}
 
const Contact: React.FC = () => {
 
  const editOption: EditSettingsModel={ allowEditing: true , allowAdding: true, allowDeleting:true , mode:'Dialog'};
  const toolbaroption: ToolbarItems[]=["Add" ,"Edit","Delete"]
  // const [campaignName, setCampaignName] = useState<string>('');
  // const [startDate, setStartDate] = useState<string>('');
  // const [endDate, setEndDate] = useState<string>('');
  // const [budget, setBudget] = useState<string>('');
  const [contact, setContact] = useState<Contact[]>([]);
  // const [editingIndex, setEditingIndex] = useState<number | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
 
  return (
    <>
      <div className="contact-container">
        <div>
          <h2>Contact Information</h2>
        </div>
       
        <div className="information-content">
          <GridComponent
           dataSource={contact} allowPaging={true}
           pageSettings={{ pageSize: 5 }} allowFiltering={true}  editSettings={editOption}
           toolbar={toolbaroption}
           >
            <ColumnsDirective>
              <ColumnDirective field='Id' headerText='ID' width='150' />
              <ColumnDirective field='name' headerText='NAME' width='100'  />
              <ColumnDirective field='email' headerText='E-MAIL' width='100'  />
             <ColumnDirective field='Phone' headerText='PHONE' width='100' editType='numericedit' />
            <ColumnDirective field='Address' headerText='ADDRESS' width='150' />
            <ColumnDirective field='city' headerText='CITY' width='150' />
             <ColumnDirective field='state' headerText='STATE' width='150' />
            </ColumnsDirective>
            <Inject services={[Page,Filter,Edit,Toolbar]}/>
          </GridComponent>
        </div>
      </div>
 
   
    </>
  );
};
 
export default Contact;
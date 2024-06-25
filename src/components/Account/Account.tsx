import React, { useState } from 'react';
import './Account.css';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Toolbar, ToolbarItems, Page, Edit, Inject, Filter, ForeignKey } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { data, campaigns, contacts, categories,accounttype } from '../../Data/data'; // Adjust the import path as needed

interface Account {
    id: number;
    campaignname: number;
    accountname: number;
    category: number;
    amount: number;
    date: Date;
    accounttype: string;
}

const Account: React.FC = () => {
    const editOption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    const toolbarOption: ToolbarItems[] = ["Add", "Edit", "Delete", "Update", "Cancel"];
    const [account, setAccount] = useState<Account[]>(data);

    const dropdownParams = (dataSource: any) => ({
        params: {
            dataSource: dataSource.length ? dataSource : [{ id: '', name: 'No Records' }],
            fields: { text: 'name', value: 'id' },
            allowFiltering: true,
            placeholder: 'Select an option'
        }
    });

    const typeDropdownParams = {
        params: {
            dataSource: [
                { text: 'Debit', value: 'Debit' },
                { text: 'Credit', value: 'Credit' }
            ],
            fields: { text: 'text', value: 'value' },
            allowFiltering: true,
            placeholder: 'Select an option'
        }
    };

    const dateParams = {
        params: {
            format: 'dd/MM/yyyy'
        }
    };

    return (
        <>
            <div className="account-container">
                <div>
                    <h2>Account Details</h2>
                </div>
                <div className='information-container'>
                    <GridComponent
                        dataSource={account}
                        pageSettings={{ pageSize: 5 }}
                        allowFiltering={true}
                        allowPaging={true}
                        editSettings={editOption}
                        toolbar={toolbarOption}
                    >
                        <ColumnsDirective>
                            <ColumnDirective field='campaignname' headerText='Campaign Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={campaigns} edit={dropdownParams(campaigns)} />
                            <ColumnDirective field='accountname' headerText='Account Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={contacts} edit={dropdownParams(contacts)} />
                            <ColumnDirective field='category' headerText='Category' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={categories} edit={dropdownParams(categories)} />
                            <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' />
                            <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' edit={dateParams} />
                            <ColumnDirective field='accounttype' headerText='Type' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={accounttype} edit={dropdownParams(accounttype)} />
                        </ColumnsDirective>
                        <Inject services={[Page, Edit, Filter, Toolbar,ForeignKey]} />
                    </GridComponent>
                </div>
            </div>
        </>
    );
};

export default Account;

// import React, { useState } from 'react';
// import './Account.css';
// import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Toolbar, ToolbarItems, Page, Edit, Inject, Filter, ForeignKey } from '@syncfusion/ej2-react-grids';
// import { data, campaigns, contacts, categories ,accounttype} from '../../Data/data'; // Adjust the import path as needed

// interface Account {
//     id: number;
//     campaignname: number;
//     accountname: number;
//     category: number;
//     amount: number;
//     date: Date;
//     accounttype: string;
// }

// const Account: React.FC = () => {
//     const editOption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
//     const toolbarOption: ToolbarItems[] = ["Add", "Edit", "Delete", "Update", "Cancel"];
//     const [account, setAccount] = useState<Account[]>(data);

//     const dropdownParams = (dataSource: any) => ({
//         params: {
//             dataSource: dataSource,
//             fields: { text: 'name', value: 'id' },
//             allowFiltering: true
//         }
//     });

//     const typeDropdownParams = {
//         params: {
//             dataSource: [
//                 { text: 'Debit', value: 'Debit' },
//                 { text: 'Credit', value: 'Credit' }
//             ],
//             fields: { text: 'text', value: 'value' },
//             allowFiltering: true
//         }
//     };

//     const dateParams = {
//         params: {
//             format: 'dd/MM/yyyy'
//         }
//     };

//     return (
//         <>
//             <div className="account-container">
//                 <div>
//                     <h2>Account Details</h2>
//                 </div>
//                 <div className='information-container'>
//                     <GridComponent
//                         dataSource={account}
//                         pageSettings={{ pageSize: 5 }}
//                         allowFiltering={true}
//                         allowPaging={true}
//                         editSettings={editOption}
//                         toolbar={toolbarOption}
//                     >
//                         <ColumnsDirective>
//                             <ColumnDirective field='campaignname' headerText='Campaign Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={campaigns} edit={dropdownParams(campaigns)} />
//                             <ColumnDirective field='accountname' headerText='Account Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={contacts} edit={dropdownParams(contacts)} />
//                             <ColumnDirective field='category' headerText='Category' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={categories} edit={dropdownParams(categories)} />
//                             <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' />
//                             <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' edit={dateParams} />
//                             <ColumnDirective field='accounttype' headerText='Type' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={accounttype} edit={typeDropdownParams} />
//                         </ColumnsDirective>
//                         <Inject services={[Page, Edit, Filter, Toolbar,ForeignKey]} />
//                     </GridComponent>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Account;

// import React, { useState } from 'react';
// import './Account.css';
// import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Toolbar, ToolbarItems, Page, Edit, Inject, Filter } from '@syncfusion/ej2-react-grids';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { data, campaigns, contacts, categories } from '../../Data/data'; // Adjust the import path as needed

// interface Account {
//     id: number;
//     campaignname: number;
//     accountname: number;
//     category: number;
//     amount: number;
//     date: Date;
//     accounttype: string;
// }

// const Account: React.FC = () => {
//     const editOption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
//     const toolbarOption: ToolbarItems[] = ["Add", "Edit", "Delete", "Update", "Cancel"];
//     const [account, setAccount] = useState<Account[]>(data);

//     const dropdownParams = (dataSource: any) => ({
//         params: {
//             dataSource: dataSource,
//             fields: { text: 'name', value: 'id' },
//             allowFiltering: true
//         }
//     });

//     const typeDropdownParams = {
//         params: {
//             dataSource: [
//                 { text: 'Debit', value: 'Debit' },
//                 { text: 'Credit', value: 'Credit' }
//             ],
//             fields: { text: 'text', value: 'value' }
//         }
//     };

//     const dateParams = {
//         params: {
//             format: 'dd/MM/yyyy'
//         }
//     };

//     return (
//         <>
//             <div className="account-container">
//                 <div>
//                     <h2>Account Details</h2>
//                 </div>
//                 <div className='information-container'>
//                     <GridComponent
//                         dataSource={account}
//                         pageSettings={{ pageSize: 5 }}
//                         allowFiltering={true}
//                         allowPaging={true}
//                         editSettings={editOption}
//                         toolbar={toolbarOption}
//                     >
//                         <ColumnsDirective>
//                             <ColumnDirective field='campaignname' headerText='Campaign Name' width='150' editType='dropdownedit' edit={dropdownParams(campaigns)} />
//                             <ColumnDirective field='accountname' headerText='Account Name' width='150' editType='dropdownedit' edit={dropdownParams(contacts)} />
//                             <ColumnDirective field='category' headerText='Category' width='150' editType='dropdownedit' edit={dropdownParams(categories)} />
//                             <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' />
//                             <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' edit={dateParams} />
//                             <ColumnDirective field='accounttype' headerText='Type' width='150' editType='dropdownedit' edit={typeDropdownParams} />
//                         </ColumnsDirective>
//                         <Inject services={[Page, Edit, Filter, Toolbar]} />
//                     </GridComponent>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Account;


// import React, { useState } from 'react'
// import './Account.css'
// import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent,Toolbar,ToolbarItems ,
//     Page,Edit,Inject,Filter
// } from '@syncfusion/ej2-react-grids'

// interface Account{
//     campaignname:string;
//     accountname:string;
//     category:string;
//     amount:number;
//     date:string;
//     accounttype:string

// }

// const Account:React.FC = () => {
//     const editOption:EditSettingsModel={allowEditing: true,allowAdding: true, allowDeleting: true, mode: 'Dialog'}
//     const toolbaroption:ToolbarItems[]=["Add","Edit","Delete"];
//     const [account,setAccount]=useState<Account[]>([]);
//   return (
//     <>
//     <div className="account-container">
//         <div>
//         <h2>Account Details</h2>
//         </div>
//         <div className='information-container'>
//             <GridComponent 
//             dataSource={account} pageSettings={{pageSize:5}} 
//             allowFiltering={true} allowPaging={true} editSettings={editOption}
//             toolbar={toolbaroption}>
//                 <ColumnsDirective>
//                 <ColumnDirective field=''/>
//                 </ColumnsDirective>
//                 <Inject services={[Page,Edit,Filter,Toolbar]}/>
//             </GridComponent>

//         </div>
//     </div>
//     </>
//   )
// }

// export default Account
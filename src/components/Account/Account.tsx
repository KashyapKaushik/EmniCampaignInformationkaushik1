import React, { useState } from 'react';
import './Account.css';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Toolbar, ToolbarItems, Page, Edit, Inject, Filter, ForeignKey, Group, Sort, PdfExport, ExcelExport, FilterSettingsModel } from '@syncfusion/ej2-react-grids';
import { ComboBoxComponent, DropDownListComponent, ToolbarSettings } from '@syncfusion/ej2-react-dropdowns';
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
    const toolbarOption: ToolbarItems[] = ["Add", "Edit", "Delete", "Update", "Cancel", "ExcelExport", "PdfExport"];
    const [account, setAccount] = useState<Account[]>(data);
  
    let gridComponent: GridComponent | null;
    const toolbarClick: any = ["pdfExport", "ExcelExport"];
    const toolbarBtnClick = (args: any) => {
        if (gridComponent) { 
            if (args.item.id.includes("pdfexport")) {
              gridComponent.pdfExport({
                   fileName: "CampaignInformation.pdf",
                    exportType: "CurrentPage",
                    pageOrientation: 'Landscape', 
                    header: {
                        fromTop: 0,
                        height: 100,
                        contents: [{
                            type: 'Text',
                            value: 'Account Report',
                            position: { x: 0, y: 0 },
                            style: { fontSize: 15 },
                        }]
                    },
                    footer: {
                        contents: [{
                            type: 'Text',
                            value: 'Thankyou!!',
                            position: { x: 0, y: 50 },
                            style: { fontSize: 18 }
                        }],
                        fromBottom: 100,
                        height: 120
                    },
                    theme: {
                        header: {
                            fontSize: 12,
                            bold: true,
                        },
                        record: {
                            fontSize: 10,
                            fontColor: "#6751b9",
                            fontName: "Calibri",
                        }
                    },
              });
                          } else if (args.item.id.includes("excelexport")) {
                gridComponent.excelExport({
                    fileName: "CampaignInform.xlsx",
                    theme: {
                        header: {
                            fontSize: 12,
                            bold: true,
                        },
                        record: {
                            fontSize: 12,
                            fontColor: "#6751b9",
                        }
                    },
                    header: {
                        headerRows: 1,
                        rows: [{
                            cells: [{
                                colSpan: 4,
                                value: "Account Report",
                                style: { fontSize: 20, hAlign: "Right", bold: true }
                            }]
                        }]
                    },
                    footer: {
                        footerRows: 1,
                        rows: [{
                            cells: [{
                                colSpan: 4,
                                value: "THANKYOU!!!",
                                style: { fontSize: 15, hAlign: "Center", bold: true }
                            }]
                        }]
                    }
                });
            }
        }
    }

    const dropdownParams = (dataSource: any) => ({
        params: {
            dataSource: dataSource.length ? dataSource : [{ id: '', name: 'No Records' }],
            fields: { text: 'name', value: 'id' },
            allowFiltering: true,
            placeholder: 'Select an option'
        }
    });

    // const typeDropdownParams = {
    //     params: {
    //         dataSource: [
    //             { text: 'Debit', value: 'Debit' },
    //             { text: 'Credit', value: 'Credit' }
    //         ],
    //         fields: { text: 'text', value: 'value' },
    //         allowFiltering: true,
    //         placeholder: 'Select an option'
    //     }
    // };

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
                    <GridComponent ref={gc => gridComponent = gc}
                        dataSource={account}
                        height={270}
                        pageSettings={{ pageSize: 5 }}
                        filterSettings={filterSettings}
                        allowFiltering={true}
                        allowPaging={true}
                        allowGrouping={true}
                        editSettings={editOption}
                        toolbar={toolbarOption}
                        allowExcelExport={true}
                        allowPdfExport={true}
                        allowSorting={true}
                        toolbarClick={toolbarBtnClick}
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
// import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Toolbar, ToolbarItems, Page, Edit, Inject, Filter, ForeignKey, Group, Sort, PdfExport, ExcelExport   } from '@syncfusion/ej2-react-grids';
// import { DropDownListComponent, ToolbarSettings } from '@syncfusion/ej2-react-dropdowns';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { data, campaigns, contacts, categories,accounttype } from '../../Data/data'; // Adjust the import path as needed
// import { DataManager, ODataV4Adaptor, Query, DataOptions } from '@syncfusion/ej2-data';
// import { ClickEventArgs  } from '@syncfusion/ej2-react-buttons';


// interface Account {
    
//     id: number;
//     campaignname: number;
//     accountname: number;
//     category: number;
//     amount: number;
//     date: Date;
//     accounttype: string;
    
// }
// // eslint-disable-next-line no-label-var


// const Account: React.FC = () => {
    
//     const editOption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
//     const toolbarOption: ToolbarItems[] = ["Add", "Edit", "Delete", "Update", "Cancel" , "ExcelExport" , "PdfExport"];
//     const [account, setAccount] = useState<Account[]>(data);
    
  
  
//           let gridComponent: GridComponent | null;
//           const toolbarClick: any = ["pdfExport" , "ExcelExport "];
//           const toolbarBtnClick = (args: any) => {
//             if (gridComponent) { 
//               if (args.item.id.includes("pdfexport")) {
//                 gridComponent.pdfExport({
//                   fileName: "CampaignInformation.pdf",
//                   exportType: "CurrentPage",
//                   theme: {
//                     header: {
//                       fontSize: 12,
//                       bold: true,
                      
//                     },
//                     record: {
//                       fontSize: 8,
//                       fontColor: "#6751b9",
//                       fontName: "Calibri",

//                     }

//                   },
//                   header: {
//                     fromTop: 0,
//                     height: 100,
                  
//                     contents: [{
//                       type: 'Text',
//                       value: 'Account Report ',
//                       position: { x: 0, y: 0 },
//                       style: { fontSize: 15 },
                      
//                     }]
//                   },
//                   footer: {
//                     contents: [{
//                       type: 'Text',
//                       value: 'Thankyou!! ',
//                       position: { x: 0, y: 50 },
//                       style:{fontSize:18}
//                     }],
//                     fromBottom: 100,
//                     height:120
//                   }
                  
                  
//                 });
              
//               }
//               else if (args.item.id.includes("excelexport")) {
//                 gridComponent.excelExport({
//                   fileName: "CampaignInform.xlsx",
//                   theme: {
//                     header: {
//                       fontSize: 12,
//                       bold:true,
//                     },
//                     record: {
//                       fontSize: 12,
//                       fontColor: "#6751b9",
                      

//                     }

//                   },
//                   header: {
//                     headerRows: 1,
//                     rows:[{
//                       cells: [{
//                         colSpan: 4,
//                         value: "Account Report",
//                         style:{fontSize:20,hAlign:"Right",bold:true}
//                       }]
//                     }]
//                   },
//                   footer: {
//                     footerRows: 1,
//                     rows:[{
//                       cells: [{
//                         colSpan: 4,
//                         value: "THANKYOU!!!",
//                         style:{fontSize:15,hAlign:"Center",bold:true}
//                       }]
//                     }]
//                   }
//                 });
//               }
//           }
//           }
          
  
 

   
    
    
    
   

    

//     const dropdownParams = (dataSource: any) => ({
//         params: {
//             dataSource: dataSource.length ? dataSource : [{ id: '', name: 'No Records' }],
//             fields: { text: 'name', value: 'id' },
//             allowFiltering: true,
//             placeholder: 'Select an option'
//         }
//     });

//     const typeDropdownParams = {
//         params: {
//             dataSource: [
//                 { text: 'Debit', value: 'Debit' },
//                 { text: 'Credit', value: 'Credit' }
//             ],
//             fields: { text: 'text', value: 'value' },
//             allowFiltering: true,
//             placeholder: 'Select an option'
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
//                     <GridComponent ref={gc=> gridComponent=gc}
//               dataSource={account}
//               height={270}
//                         pageSettings={{ pageSize: 5 }}
//                         allowFiltering={true}
//                         allowPaging={true}
//                          allowGrouping={true}
//                         editSettings={editOption}
//                          toolbar={toolbarOption} 
//                         allowExcelExport={true}
//                         allowPdfExport={true}
//                         allowSorting={true}
//                        toolbarClick={toolbarBtnClick} 

                       
                        
//                     >
//                         <ColumnsDirective>
//                             <ColumnDirective field='campaignname' headerText='Campaign Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={campaigns} edit={dropdownParams(campaigns)}  />
//                             <ColumnDirective field='accountname' headerText='Account Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={contacts} edit={dropdownParams(contacts)} />
//                             <ColumnDirective field='category' headerText='Category' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={categories} edit={dropdownParams(categories)} />
//                             <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' />
//                             <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' edit={dateParams}  />
//                             <ColumnDirective field='accounttype' headerText='Type' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={accounttype} edit={dropdownParams(accounttype)} />
//                         </ColumnsDirective>
//                         <Inject services={[Page, Edit, Toolbar,ForeignKey, Sort , Group, Filter, PdfExport , ExcelExport]} />
//                     </GridComponent>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Account;


// function getPdfExportProperties(): import("@syncfusion/ej2-react-grids").PdfExportProperties | undefined {
//     throw new Error('Function not implemented.');
// }
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
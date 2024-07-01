
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Sort,
    Edit, Inject, DialogEditEventArgs, FilterSettingsModel, Filter,
    EditSettingsModel,
    ToolbarItems,ForeignKey
} from '@syncfusion/ej2-react-grids';
import './Account2.css';
import { data as orderData, campaigns, contacts, categories,accounttype } from '../../Data/data'; // Adjust the import path as needed

import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataUtil } from '@syncfusion/ej2-data';
import { Browser, extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
// import './dialog-temp.css';
import { useState } from 'react';

interface Account {
    id: number;
    campaignname: number;
    accountname: number;
    category: number;
    amount: number;
    date: Date;
    accounttype: string;
    isAdd?: boolean;
}

const Account: React.FC = () => {
    const editOption: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' , template: dialogTemplate };
    const toolbarOption: ToolbarItems[] = ["Add", "Edit", "Delete", "Update", "Cancel"];
    const [account, setAccount] = useState<Account[]>(orderData);


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

    function dialogTemplate(props: Account): any {
      return (<DialogFormTemplate {...props} />);
  }

  function actionComplete(args: DialogEditEventArgs): void {
    if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
        if (Browser.isDevice && args.dialog) {
            args.dialog.height = window.innerHeight - 90 + 'px';
            (args.dialog as any).dataBind();
        }
    }
    
}
    // const requiredRule = { required: true, message: 'This field is required' };
    // const numberRule = { required: true, number: true, min: 1, message: 'Please enter a valid number' };
    // const dateRule = { required: true, message: 'Please select a valid date' };
    // const typeRule = { required: true, message: 'Please select Debit or Credit' };
  

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
                        actionComplete={actionComplete.bind(this)}
                    >
                        <ColumnsDirective>
                                    <ColumnDirective field='campaignname' headerText='Campaign Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={campaigns} edit={dropdownParams(campaigns)}  validationRules={{required:true}}  />
                                    <ColumnDirective field='accountname' headerText='Account Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={contacts} edit={dropdownParams(contacts)} validationRules={{required:true}} />
                                    <ColumnDirective field='category' headerText='Category' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={categories} edit={dropdownParams(categories)} validationRules={{required:true}}  />
                                    <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' validationRules={{required:true}} />
                                    <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' type='date' format={"yMd"} validationRules={{required:true}}  />
                                    <ColumnDirective field='accounttype' headerText='Type' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={accounttype} edit={dropdownParams(accounttype)} validationRules={{required:true}} />
                        </ColumnsDirective>
                        <Inject services={[Page, Edit, Filter, Toolbar,ForeignKey]} />
                    </GridComponent>
                </div>
            </div>
        </>
    );
};


function DialogFormTemplate(props: any) {

  const campaignnameDistinctData: any = DataUtil.distinct(campaigns, 'campaignname', true);
    const accountnameDistinctData: any = DataUtil.distinct(orderData, 'accountname', true);
    let campaignname: HTMLInputElement;
    let accountname:HTMLInputElement;

    const [val, setval] = React.useState(extend({}, {}, props, true));
    function onChange(args: any): void {
        let key: string = args.target.name;
        let value: string = args.target.value;
        setval(prevVal => ({ ...prevVal, [key]: value }));
    }

    

    interface Data {
        isAdd?: boolean; // Use `?` if `isAdd` is optional
        [key: string]: any; // Allow other properties with any type
      }
      
      function isNullOrUndefined(value: any): boolean {
        return value === null || value === undefined;
      }
      
      // Then, use this interface to type your `data` variable.
      let data = val as Data;
      
      if (data.isAdd) {
        let keys: string[] = Object.keys(data);
        for (let i: number = 0; i < keys.length; i++) {
          if (keys[i] !== 'isAdd' && isNullOrUndefined(data[keys[i]])) {
            data[keys[i]] = '';
          }
        }
      }
      
    // react warning error purpose
    // if (data.isAdd) {
    //     let keys: string[] = Object.keys(data);
    //     for (let i: number = 0; i < keys.length; i++) {
    //         if (data[keys[i]] !== 'isAdd' && isNullOrUndefined(data[keys[i]])) {
    //           data[keys[i]] = '';
    //         }
    //     }
    // }


   return(
    <div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper">
                <DropDownListComponent id="campaignname" dataSource={campaigns}
                    fields={{ text: 'name', value: 'id' }} placeholder="Campaign Name"
                    popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
                </div>
            </div>
            <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper" >
                <DropDownListComponent id="accountname" dataSource={contacts} 
                    fields={{ text: 'name', value: 'id' }} placeholder="Accounts Name"
                    popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
        
                </div>
            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
                <div className="e-float-input e-control-wrapper" >
                <DropDownListComponent id="accountname" dataSource={categories} 
                    fields={{ text: 'name', value: 'id' }} placeholder="Category"
                    popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
                </div>
            </div>
            <div className="form-group col-md-6">
            <NumericTextBoxComponent id="Freight" type='numericedit'   placeholder="Amount" floatLabelType='Always'></NumericTextBoxComponent>

            </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
            <div className="form-group col-md-6">
                <DatePickerComponent id="date"  placeholder="Date" floatLabelType='Always'></DatePickerComponent>
            </div>
            <div className="e-float-input e-control-wrapper" >
                <DropDownListComponent id="accountname" dataSource={accounttype} 
                    fields={{ text: 'name', value: 'id' }} placeholder="Type"
                    popupHeight='300px' floatLabelType='Always'></DropDownListComponent>
                </div>
            </div>
        </div>

         <div className="form-row">
        <div className="form-group col-md-12">
            <UploaderComponent></UploaderComponent>
           
            </div>
        </div>
         
        
    </div>
   );
}


export default Account;

// import React, { useState } from 'react';
// import './Account.css';
// import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Toolbar, ToolbarItems, Page, Edit, Inject, Filter, ForeignKey} from '@syncfusion/ej2-react-grids';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { data as orderData, campaigns, contacts, categories,accounttype } from '../../Data/data'; // Adjust the import path as needed
// import { toBeRequired } from '@testing-library/jest-dom/matchers';


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
//     const [account, setAccount] = useState<Account[]>(orderData);


//     const dropdownParams = (dataSource: any) => ({
//         params: {
//             dataSource: dataSource.length ? dataSource : [{ id: '', name: 'No Records' }],
//             fields: { text: 'name', value: 'id' },
//             allowFiltering: true,
//             placeholder: 'Select an option'
//         }
//     });

//     // const typeDropdownParams = {
//     //     params: {
//     //         dataSource: [
//     //             { text: 'Debit', value: 'Debit' },
//     //             { text: 'Credit', value: 'Credit' }
//     //         ],
//     //         fields: { text: 'text', value: 'value' },
//     //         allowFiltering: true,
//     //         placeholder: 'Select an option'
//     //     }
//     // };

//     const dateParams = {
//         params: {
//             format: 'dd/MM/yyyy'
//         }
//     };
//     // const requiredRule = { required: true, message: 'This field is required' };
//     // const numberRule = { required: true, number: true, min: 1, message: 'Please enter a valid number' };
//     // const dateRule = { required: true, message: 'Please select a valid date' };
//     // const typeRule = { required: true, message: 'Please select Debit or Credit' };
  

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
//                                     <ColumnDirective field='campaignname' headerText='Campaign Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={campaigns} edit={dropdownParams(campaigns)}  validationRules={{required:true}}  />
//                                     <ColumnDirective field='accountname' headerText='Account Name' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={contacts} edit={dropdownParams(contacts)} validationRules={{required:true}} />
//                                     <ColumnDirective field='category' headerText='Category' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={categories} edit={dropdownParams(categories)} validationRules={{required:true}}  />
//                                     <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' validationRules={{required:true}} />
//                                     <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' type='date' format={"yMd"} validationRules={{required:true}}  />
//                                     <ColumnDirective field='accounttype' headerText='Type' width='150' editType='dropdownedit' foreignKeyValue='name' foreignKeyField='id' dataSource={accounttype} edit={dropdownParams(accounttype)} validationRules={{required:true}} />
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


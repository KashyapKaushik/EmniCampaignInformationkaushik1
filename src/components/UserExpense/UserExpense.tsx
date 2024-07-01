// import React, { useEffect, useState } from 'react';
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page,
//   Inject,
//   Toolbar,
//   Edit,
//   EditSettingsModel,
//   ActionEventArgs,
// } from '@syncfusion/ej2-react-grids';

// // Define the data structure
// interface ExpenseData {
//   id: number;
//   date: string;
//   description: string;
//   debit: number;
//   credit: number;
//   balance: number;
// }

// const UserExpense: React.FC = () => {
//   const [data, setData] = useState<ExpenseData[]>([]);

//   useEffect(() => {
//     // Fetch JSON data (replace the URL with your data source)
//     fetch('/data/expense-data.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(fetchedData => {
//         const updatedData = calculateBalances(fetchedData);
//         setData(updatedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const calculateBalances = (data: ExpenseData[]): ExpenseData[] => {
//     let currentBalance = 0;
//     return data.map(item => {
//       currentBalance += item.credit - item.debit;
//       return { ...item, balance: currentBalance };
//     });
//   };

//   const handleActionComplete = (args: ActionEventArgs) => {
//     if (args.requestType === 'save' || args.requestType === 'delete') {
//       const updatedData = calculateBalances([...args.data as ExpenseData[]]);
//       setData(updatedData);
//     }
//   };

//   const handleAdd = () => {
//     const newEntry: ExpenseData = {
//       id: data.length + 1,
//       date: formatDate(new Date().toString()),
//       description: 'New Entry',
//       debit: 0,
//       credit: 0,
//       balance: 0,
//     };
//     const updatedData = calculateBalances([...data, newEntry]);
//     setData(updatedData);
//   };

//   const formatDate = (date: string) => {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
//     return new Date(date).toLocaleDateString('en-US', options);
//   };

//   const editSettings: EditSettingsModel = {
//     allowEditing: true,
//     allowAdding: true,
//     allowDeleting: true,
//     mode: 'Normal',
//   };

//   return (
//     <div>
//       <GridComponent
//         dataSource={data}
//         toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
//         editSettings={editSettings}
//         allowPaging={true}
//         pageSettings={{ pageSize: 10 }}
//         actionComplete={handleActionComplete}
//         toolbarClick={args => {
//           if (args.item.id.includes('grid_add')) {
//             handleAdd();
//           }
//         }}
//       >
//         <ColumnsDirective>
//           <ColumnDirective field='id' headerText='ID' isPrimaryKey={true} width='100' textAlign='Right' />
//           <ColumnDirective field='date' headerText='Date' width='150' textAlign='Center' format='MM/dd/yyyy' editType='datepickeredit' />
//           <ColumnDirective field='description' headerText='Description' width='200' />
//           <ColumnDirective field='debit' headerText='Debit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='credit' headerText='Credit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='balance' headerText='Balance' width='150' textAlign='Right' format='C2' allowEditing={false} />
//         </ColumnsDirective>
//         <Inject services={[Page, Toolbar, Edit]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default UserExpense;

// import React, { useEffect, useState } from 'react';
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page,
//   Inject,
//   Toolbar,
//   Edit,
//   EditSettingsModel,
//   ToolbarItems,
// } from '@syncfusion/ej2-react-grids';

// // Define the data structure
// interface ExpenseData {
//   id: number;
//   date: string;
//   description: string;
//   debit: number;
//   credit: number;
//   balance: number;
// }

// const UserExpense: React.FC = () => {
//   const [data, setData] = useState<ExpenseData[]>([]);

//   useEffect(() => {
//     // Fetch JSON data (replace the URL with your data source)
//     fetch('/data/expense-data.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(fetchedData => {
//         const updatedData = calculateBalances(fetchedData);
//         setData(updatedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const calculateBalances = (data: ExpenseData[]): ExpenseData[] => {
//     let currentBalance = 0;
//     return data.map(item => {
//       currentBalance += item.credit - item.debit;
//       return { ...item, balance: currentBalance };
//     });
//   };

//   const handleActionComplete = (args: any) => {
//     if (args.requestType === 'save' || args.requestType === 'delete') {
//       const updatedData = calculateBalances(data);
//       setData([...updatedData]);
//     }
//   };

//   const addEntry = (modelData: ExpenseData) => {
//     let jsonArrayObject: ExpenseData[] = [...data];
//     jsonArrayObject.push(modelData);
//     const updatedData = calculateBalances(jsonArrayObject);
//     setData(updatedData);
//   };

//   const formatDate = (date: string) => {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
//     return new Date(date).toLocaleDateString('en-US', options);
//   };

//   const editSettings: EditSettingsModel = {
//     allowEditing: true,
//     allowAdding: true,
//     allowDeleting: true,
//     mode: 'Normal',
//   };

//   const toolbarClick = (args: any) => {
//     if (args.item.id === 'Add') {
//       const newEntry: ExpenseData = {
//         id: data.length + 1,
//         date: formatDate(new Date().toString()),
//         description: 'New Entry',
//         debit: 0,
//         credit: 0,
//         balance: 0,
//       };
//       addEntry(newEntry);
//     }
//   };

//   return (
//     <div>
//       <GridComponent
//         dataSource={data}
//         toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
//         editSettings={editSettings}
//         allowPaging={true}
//         pageSettings={{ pageSize: 10 }}
//         actionComplete={handleActionComplete}
//         toolbarClick={toolbarClick}
//       >
//         <ColumnsDirective>
//           <ColumnDirective field='id' headerText='ID' isPrimaryKey={true} width='100' textAlign='Right' />
//           <ColumnDirective field='date' headerText='Date' width='150' textAlign='Center' format='MM/dd/yyyy' editType='datepickeredit' />
//           <ColumnDirective field='description' headerText='Description' width='200' />
//           <ColumnDirective field='debit' headerText='Debit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='credit' headerText='Credit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='balance' headerText='Balance' width='150' textAlign='Right' format='C2' allowEditing={false} />
//         </ColumnsDirective>
//         <Inject services={[Page, Toolbar, Edit]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default UserExpense;

// import React, { useEffect, useState } from 'react';
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page,
//   Inject,
//   Toolbar,
//   Edit,
//   EditSettingsModel,
// } from '@syncfusion/ej2-react-grids';

// // Define the data structure
// interface ExpenseData {
//   id: number;
//   date: string;
//   description: string;
//   debit: number;
//   credit: number;
//   balance: number;
// }

// const UserExpense: React.FC = () => {
//   const [data, setData] = useState<ExpenseData[]>([]);

//   useEffect(() => {
//     // Fetch JSON data (replace the URL with your data source)
//     fetch('/data/expense-data.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(fetchedData => {
//         const updatedData = calculateBalances(fetchedData);
//         setData(updatedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const calculateBalances = (data: ExpenseData[]): ExpenseData[] => {
//     let currentBalance = 0;
//     return data.map(item => {
//       currentBalance += item.credit - item.debit;
//       return { ...item, balance: currentBalance };
//     });
//   };

//   const handleActionComplete = (args: any) => {
//     if (args.requestType === 'save' || args.requestType === 'delete') {
//       const updatedData = calculateBalances(data);
//       setData([...updatedData]);
//     }
//   };

//   const editSettings: EditSettingsModel = {
//     allowEditing: true,
//     allowAdding: true,
//     allowDeleting: true,
//     mode: 'Normal',
//   };

//   return (
//     <div>
//       <GridComponent
//         dataSource={data}
//         toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
//         editSettings={editSettings}
//         allowPaging={true}
//         pageSettings={{ pageSize: 10 }}
//         actionComplete={handleActionComplete}
//       >
//         <ColumnsDirective>
//           <ColumnDirective field='id' headerText='ID' isPrimaryKey={true} width='100' textAlign='Right' />
//           <ColumnDirective field='date' headerText='Date' width='150' textAlign='Center' editType='datepickeredit' />
//           <ColumnDirective field='description' headerText='Description' width='200' />
//           <ColumnDirective field='debit' headerText='Debit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='credit' headerText='Credit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='balance' headerText='Balance' width='150' textAlign='Right' format='C2' allowEditing={false} />
//         </ColumnsDirective>
//         <Inject services={[Page, Toolbar, Edit]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default UserExpense;

// import React, { useEffect, useState } from 'react';
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page,
//   Inject,
//   Toolbar,
//   Edit,
//   EditSettingsModel,
// } from '@syncfusion/ej2-react-grids';
// import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// // Define the data structure
// interface ExpenseData {
//   id: number;
//   date: string;
//   description: string;
//   debit: number;
//   credit: number;
//   balance: number;
// }

// const UserExpense: React.FC = () => {
//   const [data, setData] = useState<ExpenseData[]>([]);

//   useEffect(() => {
//     // Fetch JSON data (replace the URL with your data source)
//     fetch('../../Data/expense-data.json')
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const editSettings: EditSettingsModel = {
//     allowEditing: true,
//     allowAdding: true,
//     allowDeleting: true,
//     mode: 'Normal',
//   };

//   return (
//     <div>
//       <GridComponent
//         dataSource={data}
//         toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
//         editSettings={editSettings}
//         allowPaging={true}
//         pageSettings={{ pageSize: 10 }}
//       >
//         <ColumnsDirective>
//           <ColumnDirective field='id' headerText='ID' isPrimaryKey={true} width='100' textAlign='Right' />
//           <ColumnDirective field='date' headerText='Date' width='150' textAlign='Center' editType='datepickeredit' />
//           <ColumnDirective field='description' headerText='Description' width='200' />
//           <ColumnDirective field='debit' headerText='Debit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='credit' headerText='Credit' width='150' textAlign='Right' format='C2' />
//           <ColumnDirective field='balance' headerText='Balance' width='150' textAlign='Right' format='C2' />
//         </ColumnsDirective>
//         <Inject services={[Page, Toolbar, Edit]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default UserExpense;


import React from 'react'

const UserExpense = () => {
  return (
    <div>UserExpense</div>
  )
}

export default UserExpense
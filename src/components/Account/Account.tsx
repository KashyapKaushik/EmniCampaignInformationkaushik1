import React, { useState, useRef, useEffect } from 'react';
import './Account.css';
import {
  ColumnDirective,
  ColumnsDirective,
  EditSettingsModel,
  GridComponent,
  ToolbarItems,
  Page,
  Edit,
  Inject,
  Filter,
  ForeignKey,
  Group,
  Sort,
  PdfExport,
  ExcelExport,
  FilterSettingsModel,
  Toolbar,
} from '@syncfusion/ej2-react-grids';
import { data, campaigns, contacts, categories, accounttype } from '../../Data/data'; // Adjust the import path as needed
import * as XLSX from 'xlsx';

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
  const toolbarOption: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExcelExport', 'PdfExport'];
  const [account, setAccount] = useState<Account[]>(data);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const gridComponent = useRef<GridComponent>(null);

  const toolbarBtnClick = (args: any) => {
    if (gridComponent.current) {
      if (args.item.id.includes('pdfexport')) {
        gridComponent.current.pdfExport({
          fileName: 'CampaignInformation.pdf',
          exportType: 'CurrentPage',
          pageOrientation: 'Landscape',
          header: {
            fromTop: 0,
            height: 100,
            contents: [
              {
                type: 'Text',
                value: 'Account Report',
                position: { x: 0, y: 0 },
                style: { fontSize: 15 },
              },
            ],
          },
          footer: {
            contents: [
              {
                type: 'Text',
                value: 'Thank you!!',
                position: { x: 0, y: 50 },
                style: { fontSize: 18 },
              },
            ],
            fromBottom: 100,
            height: 120,
          },
          theme: {
            header: {
              fontSize: 12,
              bold: true,
            },
            record: {
              fontSize: 10,
              fontColor: '#6751b9',
              fontName: 'Calibri',
            },
          },
        });
      } else if (args.item.id.includes('excelexport')) {
        gridComponent.current.excelExport({
          fileName: 'CampaignInform.xlsx',
          theme: {
            header: {
              fontSize: 12,
              bold: true,
            },
            record: {
              fontSize: 12,
              fontColor: '#6751b9',
            },
          },
          header: {
            headerRows: 1,
            rows: [
              {
                cells: [
                  {
                    colSpan: 4,
                    value: 'Account Report',
                    style: { fontSize: 20, hAlign: 'Right', bold: true },
                  },
                ],
              },
            ],
          },
          footer: {
            footerRows: 1,
            rows: [
              {
                cells: [
                  {
                    colSpan: 4,
                    value: 'THANK YOU!!!',
                    style: { fontSize: 15, hAlign: 'Center', bold: true },
                  },
                ],
              },
            ],
          },
        });
      }
    }
  };

  const dropdownParams = (dataSource: any) => ({
    params: {
      dataSource: dataSource.length ? dataSource : [{ id: '', name: 'No Records' }],
      fields: { text: 'name', value: 'id' },
      allowFiltering: true,
      placeholder: 'Select an option',
    },
  });

  const typeDropdownParams = {
    params: {
      dataSource: [
        { text: 'Debit', value: 'Debit' },
        { text: 'Credit', value: 'Credit' },
      ],
      fields: { text: 'text', value: 'value' },
      allowFiltering: true,
      placeholder: 'Select an option',
    },
  };

  const dateParams = {
    params: {
      format: 'dd/MM/yyyy',
    },
  };

  const filterSettings: FilterSettingsModel = { type: 'Excel' };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json<Account>(sheet);
        console.log('Uploaded JSON Data: ', jsonData);
        setAccount((prevAccount) => {
          const combinedData = [...prevAccount, ...jsonData];
          console.log('Combined Data: ', combinedData);
          return combinedData;
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  useEffect(() => {
    if (gridComponent.current) {
      gridComponent.current.dataSource = account;
    }
  }, [account]);

  return (
    <>
      <div className='account-container'>
        <div>
          <h2>Account Details</h2>
          <button onClick={handleUploadClick}>Upload File</button>
          <input
            type='file'
            accept='.xlsx, .xls'
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
        <div className='information-container'>
          <GridComponent
            ref={gridComponent}
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
              <ColumnDirective
                field='campaignname'
                headerText='Campaign Name'
                width='150'
                editType='dropdownedit'
                foreignKeyValue='name'
                foreignKeyField='id'
                dataSource={campaigns}
                edit={dropdownParams(campaigns)}
              />
              <ColumnDirective
                field='accountname'
                headerText='Account Name'
                width='150'
                editType='dropdownedit'
                foreignKeyValue='name'
                foreignKeyField='id'
                dataSource={contacts}
                edit={dropdownParams(contacts)}
              />
              <ColumnDirective
                field='category'
                headerText='Category'
                width='150'
                editType='dropdownedit'
                foreignKeyValue='name'
                foreignKeyField='id'
                dataSource={categories}
                edit={dropdownParams(categories)}
              />
              <ColumnDirective field='amount' headerText='Amount' width='150' editType='numericedit' />
              <ColumnDirective field='date' headerText='Date' width='150' editType='datepickeredit' type='date' format='yMd' />
              <ColumnDirective
                field='accounttype'
                headerText='Type'
                width='150'
                editType='dropdownedit'
                foreignKeyValue='name'
                foreignKeyField='id'
                dataSource={accounttype}
                edit={dropdownParams(accounttype)}
              />
            </ColumnsDirective>
            <Inject services={[Page, Edit, Toolbar, ForeignKey, Sort, Group, Filter, PdfExport, ExcelExport]} />
          </GridComponent>
        </div>
      </div>
    </>
  );
};

export default Account;

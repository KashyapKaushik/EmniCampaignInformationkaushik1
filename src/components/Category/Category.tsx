import React, { useState } from 'react'
import './Category.css'
import { ColumnDirective,
    ColumnsDirective, GridComponent
    ,Page,Inject ,Filter,Edit,
    EditSettingsModel,Toolbar,ToolbarItems
   
   } from '@syncfusion/ej2-react-grids';
 
 interface Category {
   id: number;
   name: string;
 }

const Category:React.FC = () => {
    const editOption: EditSettingsModel={ allowEditing: true , allowAdding: true, allowDeleting:true , mode:'Dialog'};
  const toolbaroption: ToolbarItems[]=["Add" ,"Edit","Delete"];
  const [category, setCategory] = useState<Category[]>([]);
  return (
    <>
      <div className="category-container">
        <div>
          <h2>Category Information</h2>
        </div>
       
        <div className="information-content">
          <GridComponent
           dataSource={category} allowPaging={true} 
           pageSettings={{ pageSize: 5 }} allowFiltering={true}  editSettings={editOption}
           toolbar={toolbaroption}
           >
            <ColumnsDirective>
              <ColumnDirective field='id' headerText='Id' width='100' editType='number' />
              <ColumnDirective field='name' headerText='Name' width='150' />

            </ColumnsDirective>
            <Inject services={[Page,Filter,Edit,Toolbar]}/>
          </GridComponent>
        </div>
      </div>

    
    
    </>
  )
}

export default Category
import React from 'react';
import './App.css';
import {RangeDirective, RangesDirective, SheetDirective, SheetsDirective, 
  SpreadsheetComponent, ColumnsDirective,ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import {OrderDetails} from './data';
function App() {
  let SSObj: SpreadsheetComponent;
  const insertSheetModel = [{
    index: 1,
    name: "Order Details",
    ranges: [{dataSource: OrderDetails}],
    columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }]
  }]
  const onBtnClick=()=>{
    // SSObj.insertSheet(0, 2)
    // SSObj.moveSheet(0,[1])
    // SSObj.delete();
    // SSObj.duplicateSheet();
    // SSObj.refresh();
    // SSObj.startEdit();
    // SSObj.endEdit();
    //SSObj.closeEdit();
  };
  const onCreate=()=>{
    SSObj.insertSheet(insertSheetModel)
  };
  const onCellEdit=(args:any)=>{
    if (args.address.includes('E')) {
      args.cancel = true;
    }
  }
  return (
    <div className="App">
      <button className='e-btn custom' onClick={onBtnClick}>Insert Sheet</button>
      <SpreadsheetComponent ref={((s:SpreadsheetComponent)=>SSObj=s)} created={onCreate}
        cellEdit={onCellEdit}>
        <SheetsDirective>
          <SheetDirective showHeaders={false} showGridLines={false}>
            <RangesDirective>
              <RangeDirective dataSource={OrderDetails}></RangeDirective>
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={120}></ColumnDirective>
              <ColumnDirective width={110}></ColumnDirective>
              <ColumnDirective width={100}></ColumnDirective>
              <ColumnDirective width={180}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
              <ColumnDirective width={130}></ColumnDirective>
            </ColumnsDirective>
          </SheetDirective>
          <SheetDirective state={'VeryHidden'}></SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    </div>
  );
}

export default App;

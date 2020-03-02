import React from 'react';
import { connect } from 'react-redux';
import  { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Table extends React.Component{
    colDefs = [
        {field: "name"},
        {field: "username"},
        {field: "email"},
        {field: "website"}
      ];

    render(){
     const { data=[] , loading ,error} = this.props.data || {}
        return (
          <React.Fragment>
             <div className="ag-theme-balham"  style={{
        height: '450px',
        width: '800px' }} >
             {loading ?'i am loading':(data.length?<AgGridReact 
             columnDefs={this.colDefs}
             rowData={data}
            >
             </AgGridReact>:'')}

            </div>
             {error && error}
          </React.Fragment>
          
        )
    }
}

const mapStateToProps= state =>({
  data:state.apiData
})

export default connect(mapStateToProps,null,null,{forwardRef:true})(Table)
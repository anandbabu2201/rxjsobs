import React , { Component} from 'react'
import { connect } from 'react-redux';
import { getData }  from '../actions/dataActions'

class Button extends Component {

    render(){
        const { data=[] , loading} = this.props.data || {}
        const items = data.map(e=> <div key={e.id}>{e.name}</div>);
        return (
            <React.Fragment>
            <button onClick={this.props.getData}> Get Data </button>
            <div>
             {loading?'i am loading':''}
             {items}
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
  data : state.apiData
})
export default connect(mapStateToProps,{getData})(Button);
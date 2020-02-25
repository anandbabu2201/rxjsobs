import React , { Component} from 'react'
import { connect } from 'react-redux';
import { getData }  from '../actions/dataActions'

class Button extends Component {

    render(){
        return (
            <React.Fragment>
            <button onClick={this.props.getData}> Get Data </button>
            <div>

            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
  data : state.apiData
})
export default connect(mapStateToProps,{getData})(Button);
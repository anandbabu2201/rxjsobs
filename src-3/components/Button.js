import React , { Component} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUser }  from '../actions/dataActions';

const StyledButton = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  cursor : pointer;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class Button extends Component {

    render(){
        return (
            <React.Fragment>
            <StyledButton primary onClick={this.props.getUser}> Get Data </StyledButton>
            </React.Fragment>
        )
    }
}


export default connect(null,{getUser})(Button);
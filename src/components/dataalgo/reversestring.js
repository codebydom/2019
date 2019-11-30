import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
const Styles = styled.div`
    button{
        margin:5px;
    }
    ol{
        text-align:left;
        margin: auto;
        font-size:18px;
    }

`;
export class ReverseString extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.reverse = this.reverse.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    reverse(event){
        event.preventDefault();
        let reversed
        if(this.state.value!==""){
            reversed = this.state.value.split('').reverse().join('')
        }
        ReactDOM.render(
            <div>
            <h2>{reversed}</h2>
            {/* <h4><u>Three Ways to do this</u></h4>
            <ol>
                <li>
                string.split('').reverse().join('')
                </li>
                <li>
                for(let char in string) > reversed = char + reversed
                </li>
                <li>
                used .reduce() with for loop logic above
                </li>
            </ol> */}
            </div>
            , document.getElementById('out')
        )
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
	render() {
		return (
            <Styles>
            <form className="form-group" onSubmit={this.reverse}>
            <label className="col-form-label" >Reverse String</label>
            <input type="text" className="form-control" placeholder="string to reverse" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Reverse</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default ReverseString
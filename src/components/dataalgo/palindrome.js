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
export class Palindrome extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.testpalindrome = this.testpalindrome.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    testpalindrome(event){
        event.preventDefault();
        let test
        if(this.state.value!==""){
            if (this.state.value.split('').reverse().join('') === this.state.value){
                test="True!"
            } else {
                test="False!"
            }
        }
        ReactDOM.render(
            <div>
            <h2>{test}</h2>
            <h4><u>Ways to do this</u></h4>
                <li>
                 if string.split('').reverse().join('') === string
                </li>
                <li>
                return str.split('').every((char,i)=>
        return char === str[str.length - i - 1]
                </li>
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
            <form className="form-group" onSubmit={this.testpalindrome}>
            <label className="col-form-label" >Palindrome Test</label>
            <input type="text" className="form-control" placeholder="return true or false to see if input is palindrome" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Palindrome?</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Palindrome
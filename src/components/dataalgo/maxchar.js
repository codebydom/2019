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
export class MaxChar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.maxchar = this.maxchar.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    maxchar(event){
        event.preventDefault();
        let str = ""
        let maxChar = ""
        if(this.state.value!==""){
            str = this.state.value
            const charMap={}
            let max = 0
            for (let char of str){
                if (charMap[char]){
                    charMap[char]++;
                } else {
                    charMap[char]=1;
                }
            }
            for(let char in charMap){
                if (charMap[char]>max){
                    max = charMap[char]
                    maxChar = char
                }
            }
        }
        ReactDOM.render(
            <div>
            <h2>Max: {maxChar}</h2>
            <h4><u>Three Ways to do this</u></h4>
            <ol>
                <li>
                
                </li>
            </ol>
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
            <form className="form-group" onSubmit={this.maxchar}>
            <label className="col-form-label" >Find Most Common Character in String</label>
            <input type="text" className="form-control" placeholder="enter string" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Find Max</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default MaxChar
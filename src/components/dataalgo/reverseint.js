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
export class ReverseInt extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.reverseInt = this.reverseInt.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    reverseInt(event){
        event.preventDefault();
        let reversed = 0
        let rev = 0
        if(Number.isInteger(parseInt(this.state.value))){
            rev = this.state.value.toString().split('').reverse().join('')
            console.log(rev)
            reversed = rev 
        }
        else{
            reversed = "Not an Integer try again"
        }
        ReactDOM.render(
            <div>
            <h2>{reversed}</h2>
            {/* <h4><u>Ways to do this</u></h4>
            <ol>
                <li>
                rev = n.toString().split('').reverse().join('')
                if n > 0 
                return parseInt(rev)
                else
                return -parseInt(rev)
                </li>
                <li>
                rev = n.toString().split('').reverse().join('')
                return rev * Math.sign(n)
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
            <form className="form-group" onSubmit={this.reverseInt}>
            <label className="col-form-label" >Reverse Integer</label>
            <input type="text" className="form-control" placeholder="enter positive integer to reverse" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Reverse</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default ReverseInt
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
export class FizzBuzz extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.FizzBuzz = this.FizzBuzz.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    FizzBuzz(event){
        event.preventDefault();
        let i = 0
        let out = ""
        if(Number.isInteger(parseInt(this.state.value))){
            for (i=1;i<=parseInt(this.state.value);i++){
                if (i%3===0 && i%5===0){
                    out += "fizzbuzz "
                }
                else if (i%3===0){
                    out += "fizz "
                } 
                else if(i%5===0){
                    out += "buzz " 
                } else {
                    out += i+" "
                }
            }
        }
        else{
            window.alert("Not an Integer try again")
        }
        ReactDOM.render(
            <div>
            <h2>{out}</h2>
            {/* <h4><u>Way to do this</u></h4>
            <p>
                if (i%3==0 && i%5==0)
                    console.log(fizzbuzz)
                <br></br>
                else if (i%3==0)
                console.log(fizz)
                <br></br>
                else if (i%5==0)
                console.log(buzz)
                <br></br>
                else 
                int
                </p> */}
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
            <form className="form-group" onSubmit={this.FizzBuzz}>
            <label className="col-form-label" >Going through range, will print fizz every 3 and buzz every 5 and fizzbuzz for multiples of 3 and 5</label>
            <input type="text" className="form-control" placeholder="enter integer to check" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">FIZZBUZZ</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default FizzBuzz
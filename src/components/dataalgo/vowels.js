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
export class Vowels extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.Vowels = this.Vowels.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    Vowels(event){
        event.preventDefault();
        let Vowels = 0
        if(this.state.value!==""){
            const matches = this.state.value.match(/[aeiou]/gi)
            Vowels = matches ? matches.length : 0;
        }
        ReactDOM.render(
            <div>
            <h2>{Vowels}</h2>
            {/* <h4><u>Way to do this</u></h4>
            <ol>
            const matches = str.match(/[aeiou]/gi)
            <br/>
            return matches ? matches.length : 0;
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
            <form className="form-group" onSubmit={this.Vowels}>
            <label className="col-form-label" >Count vowels in string</label>
            <input type="text" className="form-control" placeholder="enter string" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Count Vowels!</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Vowels
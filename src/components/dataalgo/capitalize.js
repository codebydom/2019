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
export class Capitalize extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.Capitalize = this.Capitalize.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    Capitalize(event){
        event.preventDefault();
        let str = ""
        let Capitalize = ""
        if(this.state.value!==""){
            str = this.state.value
            const words = [];
            for (let word of str.split(' ')){
                words.push(word[0].toUpperCase()+word.slice(1));
            }
            Capitalize = words.join(' ');
        }
        ReactDOM.render(
            <div>
            <h2>{Capitalize}</h2>
            {/* <h4><u>Ways to do this</u></h4>
            <ol>
                <li>
                for (let word of str.split(' '))
                <br></br>
                 words.push(word[0].toUpperCase()+word.slice(1));
                <br></br>
                return words.join(' ');
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
            <form className="form-group" onSubmit={this.Capitalize}>
            <label className="col-form-label" >Make Ever Word in Sentence start with capital letter</label>
            <input type="text" className="form-control" placeholder="enter sentence to capitalize" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Capitalize!</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Capitalize
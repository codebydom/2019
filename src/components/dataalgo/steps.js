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
export class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.Steps = this.Steps.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    Steps(event){
        event.preventDefault();
        let i = 0
        let out = ""
        let hout= ""
        let n=0
        if(Number.isInteger(parseInt(this.state.value))){
            n = this.state.value
            if(n<50){
            out=""
            for(i=1;i<=n;i++){
                if(i<n){
                    out="#".repeat(i)+" ".repeat(n-i)+"\n"
                } else if(i===n){
                    out="#".repeat(i)+"\n"
                }
                hout+=out
            }
            console.log(hout)
            hout = "Check Console Log!"
        } else {
            window.alert("Integer needs to be less than 50")
        }
        } else {
            window.alert("Not an Integer try again")
        }
        ReactDOM.render(
            <div>
            <h6>
                {hout}
            </h6>
            {/* <h5>Way to do this</h5>
            n = this.state.value
            <br/>
            if(n)
            <br/>
            out=""
            <br/>
            for(i=1;ilessthan=n;i++)
            <br/>
                if(i gthan n)
                <br/>
                    out="#".repeat(i)+" ".repeat(n-i)+"\n"
                    <br/>
                 else if(i==n)
                 <br/>
                    out="#".repeat(i)+"\n"
                    <br/>
                hout+=out
                <br/>
            console.log(hout)
            <br/>
            hout = "Check Console Log!"
            <br/> */}
            </div>,
            document.getElementById('out'))
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
	render() {
		return (
            <Styles>
            <form className="form-group" onSubmit={this.Steps}>
            <label className="col-form-label" >Print out Hashtag stepping sequence</label>
            <input type="text" className="form-control" placeholder="enter integer lower than 50 to see steps" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Steps!</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Steps
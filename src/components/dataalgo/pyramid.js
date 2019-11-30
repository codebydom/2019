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
export class Pyramid extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.Pyramid = this.Pyramid.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    Pyramid(event){
        event.preventDefault();
        let i = 0
        let out = ""
        let hout= ""
        let n=0
        let pnum=1
        if(Number.isInteger(parseInt(this.state.value))){
            n = this.state.value
            if (n<50){
            for(i=1;i<=n;i++){
                if(i===1){
                    out = " ".repeat(n-i)+"#".repeat(pnum)+" ".repeat(n-i)
                } else if (i<n){
                    pnum=pnum+2
                    out = " ".repeat(n-i)+"#".repeat(pnum)+" ".repeat(n-i)
                } else if(i===n){
                    out="#".repeat(pnum+2)
                }
                console.log(out)
                hout="Check the console log!"
            }
        } else {
            window.alert("Enter an Integer less than 50")
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
            out=""
            <br/>
    pnum=1
    <br/>
    for(i=1;i less than =n;i++)
    <br/>
        if(i===1)
        <br/>
            out = " ".repeat(n-i)+"#".repeat(pnum)+" ".repeat(n-i)
            <br/>
         else if (i less than n)
         <br/>
            pnum=pnum+2
            <br/>
            out = " ".repeat(n-i)+"#".repeat(pnum)+" ".repeat(n-i)
        
            <br/>
            else if(i===n)<br/>
            out="#".repeat(pnum+2)
            <br/>
        }
        <br/>
        console.log(out)
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
            <form className="form-group" onSubmit={this.Pyramid}>
            <label className="col-form-label" >Print out Hashtag stepping sequence</label>
            <input type="text" className="form-control" placeholder="enter integer lower than 50 to see Pyramid" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Pyramid!</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Pyramid
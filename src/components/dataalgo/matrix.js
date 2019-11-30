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
    img{
        width:500px;
    }

`;
export class Matrix extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.Matrix = this.Matrix.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    Matrix(event){
        event.preventDefault();
        let out = ""
        let n = ""
        if(Number.isInteger(parseInt(this.state.value))){
            n = this.state.value
            if(n<=15){
            const results = [];
            for(let i=0; i < n; i++){
                results.push([]);
            }
            let count = 1 
            let startColumn = 0;
            let endColumn = n-1;
            let startRow = 0;
            let endRow = n -1 ;
            while (startColumn<=endColumn && startRow <= endRow){
                //top row
                for(let i = startColumn; i<= endColumn; i++ ){
                    results[startRow][i]= count
                    count++
                }
                startRow++
                //right column
                for (let i = startRow; i <= endRow; i++){
                    results[i][endColumn] = count
                    count++
                }
                endColumn--
                //bottom row
                for(let i = endColumn;i>=startColumn;i--){
                    results[endRow][i] = count 
                    count++
                }
                endRow--
                // start column
                for(let i = endRow; i >=startRow;i--){
                    results[i][startColumn] = count
                    count++
                }
                startColumn++
            }
            console.log(results)
        }else{
            window.alert("Need smaller integer");
        }
        }
        else{
            window.alert("Not an Integer try again")
        }
        ReactDOM.render(
            <div>
            <h2>{out}</h2>
            <h4><u>Way to do this</u></h4>
                <img src={require('../../assets/matrixd.png')}></img>
                <br/>
                <img src={require('../../assets/matrixcode.png')}></img>
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
            <form className="form-group" onSubmit={this.Matrix}>
            <label className="col-form-label" >Enter a number a in the console log a spiral matrix will be printed out that relate to # of rows inputed</label>
            <input type="text" className="form-control" placeholder="enter number of rows under 15" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Matrix</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Matrix
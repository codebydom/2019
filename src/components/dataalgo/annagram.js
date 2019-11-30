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
export class Annagram extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.Annagram = this.Annagram.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    Annagram(event){
        event.preventDefault();
        let Annagram = ""
        let aCharMap = {}
        let bCharMap = {}
        let list = []
        list = this.state.value.split(",")
        if(list.length>=2){
            Annagram = ""
            for (let char of list[0].replace(/[^\w]/g,"").toLowerCase()){
                aCharMap[char] = aCharMap[char]+1 || 1;
            }
            for (let char of list[1].replace(/[^\w]/g,"").toLowerCase()){
                bCharMap[char] = bCharMap[char]+1 || 1;
            }
            if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
                Annagram="False"
            }
            for (let char in aCharMap){
                if (aCharMap[char]!==bCharMap[char]){
                    Annagram="False"
                } 
            }
            if(Annagram!=="False"){
                Annagram="True"
            }
       
        } else {
            window.alert("Need to have comma seperating 'sting 1, string 2' in input")
        }
        ReactDOM.render(
            <div>
            <h2>{Annagram}</h2>
            {/* <h4><u>Ways to do this</u></h4>
            <ol>
                <li>
                var sa = stringA.replace(/[^\w]/g,"").toLowerCase();
                <br></br>
                var sb = stringB.replace(/[^\w]/g,"").toLowerCase();
                <br></br>
                if (sa.length===sb.length)
                <br></br>
                    obj = 
                    <br></br>
                    obj2 = 
                    <br></br>
                for (let char of sa)<br></br>
                    obj[char]=sa.split(char).length-1
                    <br></br>
                for (let char2 of sb)<br></br>
                    obj2[char2]=sb.split(char2).length-1
                    <br></br>
                for (let char of sa)
                <br></br>
                    if (obj[char]===obj2[char])
                    <br></br>
                        continue
                        <br></br>
                    else
                    <br></br>
                        return false
                        <br></br>
                return true
                </li>
                <li>
                return cleanString(stringA) === cleanString(stringB)
                <br></br>
                function cleanString(str)
                    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')

                    </li>
            </ol> */}
            </div>
            , document.getElementById('out')
        )
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    buildCharMap(str){
        const charMap = {}
        for (let char of str.replace(/[^\w]/g,"").toLowerCase()){
            charMap[char] = charMap[char]+1 || 1;
        }
        return charMap
    }
	render() {
		return (
            <Styles>
            <form className="form-group" onSubmit={this.Annagram}>
            <label className="col-form-label" >See if two words are annagrams</label>
            <input type="text" className="form-control" placeholder="enter string 1, string 2 into input" id="inputDefault" onChange={this.handleChange} value={this.state.value}></input>
            <button type="submit" className="btn btn-success">Annagram?</button>
            </form>
            <div id="out"></div>
            </Styles>
        )
        }
    }
export default Annagram
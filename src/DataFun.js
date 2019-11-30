import React , { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {ReverseString} from './components/dataalgo/reversestring'
import Palindrome from './components/dataalgo/palindrome';
import ReverseInt from './components/dataalgo/reverseint';
import MaxChar from './components/dataalgo/maxchar';
import FizzBuzz from './components/dataalgo/fizzbuzz';
import Annagram from './components/dataalgo/annagram';
import Capitalize from './components/dataalgo/capitalize'
import Steps from './components/dataalgo/steps'
import Pyramid from './components/dataalgo/pyramid'
import Vowels from './components/dataalgo/vowels'
import Matrix from './components/dataalgo/matrix'
const Styles = styled.div`

    #right{
        float:right;
        padding: 30px;
    }
    #left{
        float:left;
        padding: 30px;
        
    }
    #content{
        margin: auto;
        width: 100%;
        height: 50%;  
    }
    #center{
        padding: 30px;
        text-align:center;
        margin-top:30px;
    }
    h1{
        color:white
        font-weight:900;
        font-size:70px;
        text-shadow: 0 1px 0 #bbb, 
                 0 2px 0 #c9c9c9,
                 0 3px 0 #bbb,
                 0 4px 0 #b9b9b9,
                 0 5px 0 #aaa,
                 0 6px 1px rgba(0,0,0,.1),
                 0 0 5px rgba(0,0,0,.1),
                 0 1px 3px rgba(0,0,0,.3),
                 0 3px 5px rgba(0,0,0,.2),
                 0 5px 10px rgba(0,0,0,.25),
                 0 10px 10px rgba(0,0,0,.2),
                 0 20px 20px rgba(0,0,0,.15);
      }
      h1 span{
          font-size:13px;
          text-shadow: 0 1px 0 #bbb, 
                 0 2px 0 #c9c9c9,
      }
      .center{
          text-align:center;
      }
    `;
export class DataFun extends Component {


reverseString(){
    ReactDOM.render(
        <ReverseString></ReverseString>,
        document.getElementById('content'))
}
palindrome(){
    ReactDOM.render(
        <Palindrome></Palindrome>,
        document.getElementById('content')
    )
}
reverseInt(){
    ReactDOM.render(
        <ReverseInt></ReverseInt>,
        document.getElementById('content'))
}
MaxChar(){
    ReactDOM.render(
        <MaxChar></MaxChar>,
        document.getElementById('content')
    )
}
FizzBuzz(){
    ReactDOM.render(
        <FizzBuzz></FizzBuzz>,
        document.getElementById('content')
    )
}
Annagram(){
    ReactDOM.render(
        <Annagram></Annagram>,
        document.getElementById('content')
    )
}
Capitalize(){
    ReactDOM.render(
        <Capitalize></Capitalize>,
        document.getElementById('content')
    )
}
Steps(){
    ReactDOM.render(
        <Steps></Steps>,
        document.getElementById('content')
    )
}
Pyramid(){
    ReactDOM.render(
        <Pyramid></Pyramid>,
        document.getElementById('content')
    )
}
Vowels(){
    ReactDOM.render(
        <Vowels></Vowels>,
        document.getElementById('content')
    )
}
Matrix(){
    ReactDOM.render(
        <Matrix></Matrix>,
        document.getElementById('content')
    )
}
Reset(){
    ReactDOM.render(
        <div>
            <p>Select a Data Function</p>
        </div>,
        document.getElementById('content')
    )
}
// things to add
// runtime complexity
// queue data structure 
// stack data structure 
// stacks acting like a queue
// linked lists
//
//
//
// also add shiny thing to linkedin

render() {
    return (<Styles>
        <div className="center">
        <h1>DATA FUN<span>ctions</span></h1>
        <div id="left" className="btn-group-vertical" data-toggle="buttons">
        <button type="button" className="btn btn-success" onClick={this.reverseString} >Reverse String</button>
        <button type="button" className="btn btn-success" onClick={this.reverseInt}>Reverse Integer</button>
        <button type="button" className="btn btn-success" onClick={this.FizzBuzz}>FizzBuzz</button>
        <button type="button" className="btn btn-success" onClick={this.Capitalize}>Capitalize</button>
        <button type="button" className="btn btn-success" onClick={this.Pyramid}>Pyramid</button>
        <button type="button" className="btn btn-success" onClick={this.Matrix}>Spiral Matrix</button>
        </div>
        <div id="right" className="btn-group-vertical" data-toggle="buttons">
        <button type="button" className="btn btn-success" onClick={this.palindrome}>Palindrome</button>
        <button type="button" className="btn btn-success" onClick={this.MaxChar}>Maximum Character</button>
        <button type="button" className="btn btn-success" onClick={this.Annagram}>Annagram</button>
        <button type="button" className="btn btn-success" onClick={this.Steps}>Steps</button>
        <button type="button" className="btn btn-success" onClick={this.Vowels}>Vowels</button>
        <button type="button" className="btn btn-success" onClick={this.Reset}>Reset</button>

        </div>
        </div>
        <div  id="center" className="card border-secondary mb-3" >
        <div className="card-body" id="content">
        <p>Select a Data Function</p>
        </div>
        </div>
        </Styles>
    )
}
}
export default DataFun
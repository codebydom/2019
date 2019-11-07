import React from 'react'
import styled, { css } from 'styled-components';
const Styles = styled.div`
    div{
        text-align:center;
    }
    .cbdbrand{
        font-size:60px;
        font-weight:999;
        color: #39ff14;
        text-shadow: 
                0 1px 0 #000, 
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
    .cbdbrand a{
    text-shadow: 
                0 1px 0 #000;
    }
    .button-container{
        display:flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100%;
        perspective: 1000px;
        .button-flipper{
           transition: .8s cubic-bezier(.775, .07, .575, .995);
           transform-style: preserve-3d;
           position: absolute;
           &:hover{
              transform: rotateX(180deg);
           }
        }
        .front-button{
           cursor: pointer;
           width: 500px;
           height: 60px;
           background-color: white;
           border-color: dark grey;
           border-width:.5px;
           font-size: 3em;
           color: black;
           backface-visibility: hidden;
           z-index: 2;
           transform: rotateX(0deg);
           position: absolute;
           box-shadow: 0px 8px 12px #ccc;
           border: solid 1px limegreen;
           border-radius:30px;
           
        }
        .back-button{
           cursor: pointer;
           width: 500px;
           height: 60px;
           background-color: #4e4e4e;
           color: #39ff14;
            text-shadow: 
                0 1px 0 #000, 
                0 2px 0 #000,
                0 3px 0 #000, 
                0 4px 0 #000;
           border: none;
           font-size: 3em;
           backface-visibility: hidden;
           transform: rotateX(-180deg);
           position: relative;
           box-shadow: 0px 8px 12px #ccc;
           border: solid 1px limegreen;
           border-radius:30px;
        }
     }
     .linkedin{
        cursor: pointer;
        width: 500px;
        background-color: white;
        position: relative;
           box-shadow: 0px 8px 12px #ccc;
           border: solid 1px limegreen;
           border-radius:30px;
     }
     .linkedin img{
        width:200px;
        padding:5px;
     }
     .linkedin img:hover{
     
     }
     .linkedin:hover{
         border:1.5px solid #4875B4
         
     }
    `
    ;

export const Contact = () => (
        <Styles>
            <div class="button-container">
   
            <div class="button-flipper">
                <button class="front-button">Email</button>
                <a href="mailto:dompizzano14@gmail.com"><button class="back-button">DomPizzano14@gmail.com</button></a>
            </div>
            
            </div>
        <div>
            <a href="https://www.linkedin.com/in/dom-pizzano" target="_blank" rel="noopener noreferrer"><button class="linkedin" ><img src={require('./assets/LI-Logo.png')} alt="Card image"></img></button></a>
            
        </div>
        
            
            
            
        
        </Styles> 
    )
    

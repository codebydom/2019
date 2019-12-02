import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    h1{
        color:limegreen;
        font-weight:900;
        font-size:34px;
        text-shadow: 
                0 1px 0 #000, 
                0 2px 0 #000;
                
    }
    .hit-the-floor {
        color: #fff;
        font-size: 5em;
        font-weight: bold;
        font-family: Helvetica;
        text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
        }
        
        .hit-the-floor {
          text-align: center;
        }
        
        body {
          background-color: #f1f1f1;
        }
    .centerd{
        margin: auto
        
    }
    p{
        font-size:16px;
    }
    .tc{
        text-align:center;
    }
    
    `;

export const About = () => (
    <Styles>
    
    <div className="hit-the-floor">About</div>
    <div className="container">
        <h1>Code By Dom</h1>
        <br></br>
        <p> is a website used to showcase video and interactive demos of software created by myself (Dom). First implemented in January 2018,
             code by dom has now been recreated from a html and javascript website to a react app. 
        </p>
        <p>
            The software displayed within code by dom was developed using experience from working at comapnies such as <a href="https://www.veritasgenetics.com/" target="_blank" rel="noopener noreferrer"> Veritas Genetics</a>, <a href="https://www.optum.com/" target="_blank" rel="noopener noreferrer">Optum</a>, and <a href="https://www.sunquestinfo.com/" target="_blank" rel="noopener noreferrer">Sunquest Information Systems</a> and doing projects for <a href="https://www.ge.com/" target="_blank" rel="noopener noreferrer">GE</a> and <a href="https://roadmap-tech.com/" target="_blank" rel="noopener noreferrer">RoadMap Technologies</a>.
        </p>
        <p>
            As my experience grows, so does code by dom, and even if I may not be able to update this website accordingly to show all of my current software engineering expertise, I enjoy sharing the projects I can.
            Thank you for taking the time to visit code by dom, please continue exploring the software and website. If you have any feeback, dont hesitate to contact :)  
        </p>
        <a href="/" ><img className="display centerd" style={{height: '375px', width: '600px', display: 'block'}} src={require('./assets/icodebydom.jpg')} alt="Card image"></img></a>
        <p className="tc "><em>January 2018</em></p>    
    </div>
    </Styles>
    )
    

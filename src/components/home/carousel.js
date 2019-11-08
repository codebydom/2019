import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import makeCarousel from 'react-reveal/makeCarousel';

// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
const Styles = styled.div`
    .display{
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    .display:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
    h1{
      color:white;
      font-weight:900;
      font-size:70px;
      text-shadow: 
                0 1px 0 #bbb, 
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
      width:100%;
    }
    .green{
      text-shadow: 0 -1px 0 rgb(91,149,82),
      0 1px 0 rgb(91,149,82),
      0 1px 0 #bbb, 
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
    .blue{
      text-shadow: 0 -1px 0 rgb(72,149,236),
      0 1px 0 rgb(72,149,236),
      0 1px 0 #bbb, 
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
    button{
      margin:3px;
      background-color:white;
    }
    `;
const width = '100%', height='610px';
const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  text-align: center;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.div`
  width: ${width};
  z-index: 100;
  text-align: center;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container style={{border: '1px solid lightgrey',borderRadius:'100px',margin:'20px'}}>
    <br></br>
      <div >
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
    </div>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export const CarouselDom = () => (
  <Styles>
    <Carousel className="d-flex p-2">
                <Slide right>
      <div >
        <h1 className="green">GeneSearch</h1>
        <p>Clinical Genetic Research tool to find DNA information about medical contitions</p>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/GeneSearch"}><img className="display" style={{height: '375px', width: '50%', display: 'block'}} src={require('../../assets/genesearch-shot.png')} alt="Card image"></img></a>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/GeneSearch"}><button type="button" class="btn btn-outline-success">Live Demo</button></a>
        <a href={process.env.PUBLIC_URL+"/#/genesearchinfo"}><button type="button" class="btn btn-outline-success">More Info</button></a>
      </div>
      
    </Slide>
    <Slide right>
      <div>
        <h1 className="blue">RoadMap 360 Dashboards</h1>
        <p>Interactive Data Analytics Dashboard created to analyze Pharmaceutical, Patient, and Genetic Data</p>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/roadmap"}><img className="display" style={{height: '375px', width: '50%', display: 'block'}} src={require('../../assets/roadmap-dash1.png')} alt="Card image"></img></a>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/roadmap"}><button type="button" class="btn btn-outline-primary">More Info</button></a>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1 className="green">Plazy</h1>
        <p>An audio/video add-on that allows users to search through audio/video for specific words spoken</p>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/plazy"}><img className="display" style={{height: '375px', width: '50%', display: 'block'}} src={require('../../assets/plazy.png')} alt="Card image"></img></a>
        <br></br>
        <a href="https://codebydom.com/plazyv.html" ><button type="button" class="btn btn-outline-success">Live Demo</button></a>
        <a href={process.env.PUBLIC_URL+"/#/plazy"} ><button type="button" class="btn btn-outline-success">More Info</button></a>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1 className="blue">JoselSantos.com</h1>
        <p>Art website for local boston artist Joe Santos</p>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/artsite"}><img className="display" style={{height: '375px', width: '50%', display: 'block'}} src={require('../../assets/jose.png')} alt="Card image"></img></a>
        <br></br>
        <a href="https://joselsantos.com" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-primary">Link to Website</button></a>
        <a href={process.env.PUBLIC_URL+"/#/artsite"} ><button type="button" class="btn btn-outline-primary">More Info</button></a>
      </div>
    </Slide>
    <Slide right>
      <div>
        <h1 className="green">CodeByDom 2018</h1>
        <p>First version of CodeByDom.com created in 2018</p>
        <br></br>
        <a href={process.env.PUBLIC_URL+"/#/v1"}><img className="display" style={{height: '375px', width: '50%', display: 'block'}} src={require('../../assets/cbd.png')} alt="Card image"></img></a>
        <br></br>
        <a href="https://codebydom.com" target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-success">Link to Website</button></a>
        <a href={process.env.PUBLIC_URL+"/#/v1"} ><button type="button" class="btn btn-outline-success">More Info</button></a>
      </div>
    </Slide>
    </Carousel>
    </Styles>
)
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
    `;

export const Contact = () => (
        <Styles>
        <div className="cbdbrand">
            <p><a href="mailto:dompizzano14@gmail.com">DomPizzano14@gmail.com</a></p>
            <p><a href="https://linkedin.com/in/dom-pizzano-4b85a0103/" target="_blank">LinkedIn By Dom</a></p>
            
        </div>
        </Styles> 
    )
    

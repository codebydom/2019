import React from 'react';
import {Search} from './components/genesearch/Search';
import styled from 'styled-components';
const Styles = styled.div`
    div{
        text-align:center;
    }
    h1{
      color:white;
      font-weight:900;
      font-size:40px;
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
    `;
export const GeneSearch = () => (
        <Styles>
        <div>
            <h1>GeneSearch</h1>
            <div className="container">
            <Search/>
            </div>
        </div>
        </Styles>
    )
    

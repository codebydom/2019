import React from 'react';
import styled from 'styled-components';
const Styles = styled.div`
    
    h3{
  
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
        
    }
    .centerd{
        margin: 10px auto
    }
    tcenter{

    }
    iframe{
        display:block;
        margin: 0 auto;
    }
    .badge{
        font-size:12px;
    }
    .list-group-item p{
        font-size:12px;
    }
    `;
export const josesite = () => (
    <Styles>
        <div className='centerd'>
            
            
    <div class="card mb-3">
  <h3 class="card-header tcenter" style={{textAlign:"center"}}>JoselSantos.com</h3>
  <div class="card-body">
  <a href="https://joselsantos.com/" target="_blank"><img className="display centerd" style={{height: '375px', width: '600px', display: 'block'}} src={require('./assets/jose.png')} alt="Card image"></img></a>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <h6>Description:</h6>
        <p>Professional Website for Jose L Santos, a local of Boston artist and member of the Fort Point Arts Community.</p>
    </li>
    <li class="list-group-item">
    <h6>Technologies:</h6>
        <p>
        <span class="badge badge-primary">WordPress</span>
        </p>
    </li>
  </ul>
  <div class="card-body">
    <h6>Link:</h6>
    <a href="https://joselsantos.com/" target="_blank" class="card-link">Jose L Santos Website</a>
  </div>
  <div class="card-footer text-muted">
    January 2019
  </div>
</div>
        </div>
    </Styles>
    )
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
export const genesearchinfo = () => (
    <Styles>
        <div className='centerd'>
            
            
    <div class="card mb-3">
  <h3 class="card-header tcenter" style={{textAlign:"center"}}>GeneSearch</h3>
  <div class="card-body">
  <a href="/genesearch" ><img className="display centerd" style={{height: '375px', width: '600px', display: 'block'}} src={require('./assets/genesearch-shot.png')} alt="Card image"></img></a>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <h6>Description:</h6>
        <p>This software is to be used as a clinical genetics research tool, giving the user the ability to find
            genetic mutations relating to the user's searched medical condition. Included are link outs to an interactive ui
            of the location of the genetic mutation, along with the clinical aritcle or publication relating to that variant.
            The user can scroll through the list of mutation, save specific selected mutations for later, and copy and paste them 
            into their research notes. The user can also clear thier list of saved mutations.
        </p>
    </li>
    <li class="list-group-item">
    <h6>Technologies:</h6>
        <p>
        <span class="badge badge-primary">JavaScript</span>
        <span class="badge badge-success">HTML</span>
        <span class="badge badge-info">CSS</span>
        <span class="badge badge-warning">AXIOS</span>
        <span class="badge badge-danger">React</span>
        <span class="badge badge-secondary">Bootstrap</span>
        </p>
    </li>
  </ul>
  <div class="card-body">
    <a href="/GeneSearch" class="card-link">Live Demo</a>
  </div>
  <div class="card-footer text-muted">
    June 2018
  </div>
</div>
        </div>
    </Styles>
    )
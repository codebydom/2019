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
export const roadmap = () => (
    <Styles>
        <div className='centerd'>
            
            
    <div class="card mb-3">
  <h3 class="card-header tcenter" style={{textAlign:"center"}}>Roadmap 360 Dashboards</h3>
  <div class="card-body">
  <iframe align="middle"  width="800" height="460" src="https://www.youtube.com/embed/jyIsQBnotak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <h6>Description:</h6>
        <p>This software is a data analytics dashboard which allows the user to drilldown and analyze complex pharmaceutical and patient data.
            In this demo we are using hundreds of thousands of generated patient records to give insights into how the drug humira is used
            across certain patient cohorts and locations. The ability to visualize this data allows healthcare companies to better monitor 
            how their products are being used by their patients.</p>
    </li>
    <li class="list-group-item">
    <h6>Technologies:</h6>
        <p>
        <span class="badge badge-primary">Elastic Search</span>
        <span class="badge badge-success">Logstash</span>
        <span class="badge badge-info">Kibana</span>
        <span class="badge badge-warning">Ms SQL</span>
        <span class="badge badge-danger">HTML</span>
        <span class="badge badge-secondary">CSS</span>
        <span class="badge badge-light">Markdown</span>
        </p>
    </li>
  </ul>
  <div class="card-body">
  <h6>Link:</h6>
    <a href="https://roadmap-tech.com/" target="_blank" class="card-link">Roadmap Technologies Website</a>
  </div>
  <div class="card-footer text-muted">
    December 2017
  </div>
</div>
        </div>
    </Styles>
    )
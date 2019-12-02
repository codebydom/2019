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
export const plazy = () => (
    <Styles>
        <div className='centerd'>
            
            
    <div className="card mb-3">
  <h3 className="card-header tcenter" style={{textAlign:"center"}}>Plazy</h3>
  <div className="card-body">
  <iframe width="800" height="460" src="https://www.youtube.com/embed/sxvtW5c-tVw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
        <h6>Description:</h6>
        <p>Plazy is a video/audio add-on that allows the user to search through long videos and audio files
            for the exact moments specific words are spoken. This technology can be used for looking for topics within podcasts
            or important information pertaining to a certain topic during a long college lecture.
        </p>
    </li>
    <li className="list-group-item">
    <h6>Technologies Used:</h6>
        <p>
        <span className="badge badge-primary">JavaScript</span>
        <span className="badge badge-success">PHP</span>
        <span className="badge badge-info">IBM Watson Speech API</span>
        <span className="badge badge-warning">jQuery</span>
        <span className="badge badge-danger">HTML</span>
        <span className="badge badge-secondary">CSS</span>
        <span className="badge badge-light">Bash</span>
        </p>
    </li>
  </ul>
  <div className="card-body">
  <h6>Links:</h6>
    <a href="http://codebydom.com/plazyv.html" target="_blank" rel="noopener noreferrer" className="card-link">Live Plazy Video Add-On Demo</a>
    <a href="http://codebydom.com/plazy.html" target="_blank" rel="noopener noreferrer" className="card-link">Live Plazy Audio Player Demo</a>
  </div>
  <div className="card-footer text-muted">
    December 2017
  </div>
</div>
        </div>
    </Styles>
    )
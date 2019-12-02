import React from 'react';
import styled from 'styled-components';
const Styles = styled.div`
.box {
    display: flex;
    width:100%;
    
}
.box .inner {
    width: 380px;
    height: 50px;
    line-height: 50px;
    font-size: 2em;
    white-space: nowrap;
    overflow: hidden;
    -moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
}

.box .inner:first-child {
    background-color: #4E4E4E;
    transform-origin: right;
    transform: perspective(90px) rotateY(-15deg);
    
}

.box .inner:last-child {
    background-color: #DCDCDC;
    color: black;
    transform-origin: left;
    transform: perspective(90px) rotateY(15deg);
}

.box .inner span {
    position: absolute;
    animation: marquee 6s linear infinite;
    a{
        
    }
}

.box .inner:first-child span {
    animation-delay: 3s;
    left: -130%;
    color:#49fb35;
    a{
        display: inline-block;
        position: relative;
        -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
        -webkit-mask-size: 200%;
        animation: shine 1.5s linear infinite;
        text-shadow: 
            3px   0  0   #000, 
            -3px   0  0   #000, 
            0    3px 0   #000, 
            0   -3px 0   #000, 
            2px  2px 0   #000, 
            -2px -2px 0   #000, 
            2px -2px 0   #000, 
            -2px  2px 0   #000,
            2px  2px 10px #000;
        
    }
}

@keyframes shine {
    from { -webkit-mask-position: 150%; }
    to { -webkit-mask-position: -50%; }
  }
@keyframes marquee {
    from {
        left: 100%;
    }

    to {
        left: -100%;
    }
}
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
        margin:auto;
        padding:10px;
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
export const v1 = () => (
    
    <Styles>
    <div className='centerd'>
            
            
    <div className="card mb-3">
  <div className="card-header centerd" style={{textAlign:"center"}}>
  <div className="box">
  <div className="inner">
    <span>Code By Dom</span>
  </div>
  <div className="inner">
    <span>&lt;Code&gt;&lt;/Code&gt;</span>
  </div>
</div>
  </div>
  <div className="card-body">
  <iframe width="800" height="460" className="centerd" src="https://www.youtube.com/embed/fjIE8TnDpUw?&autoplay=1&mute=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
        <h6>Description:</h6>
        <p>The 2018 version of  codebydom.com, a website built from scratch as a way to showcase my software projects and demos. As I looked for professional opportunities the need to showcase my work grew, as a result, CodeByDom.com was created.
        </p>
    </li>
    <li className="list-group-item">
    <h6>Technologies:</h6>
        <p>
        <span className="badge badge-primary">JavaScript</span>
        <span className="badge badge-success">HTML</span>
        <span className="badge badge-info">CSS</span>
        <span className="badge badge-warning">Go Daddy</span>
        <span className="badge badge-danger">jQuery</span>
        <span className="badge badge-secondary">ajax</span>
        </p>
    </li>
  </ul>
  <div className="card-body">
    <h6>Link:</h6>
    <a href="https://codebydom.com" target="_blank" rel="noopener noreferrer" className="card-link">CodeByDom 2018 Website</a>
  </div>
  <div className="card-footer text-muted">
    January 2018
  </div>
</div>
        </div>
    </Styles>
    )
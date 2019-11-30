import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar-collapse{
       font-size:16px;
    }
    .navbar-brand, .navbar-nav, .nav-link{
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
    .link--navstyle {
        font-size: 1.5em;
        overflow: hidden;
        padding: 5px;
        line-height: 1;
        color: #242424;
    }
    
    .link--navstyle:hover {
        color: #242424;
    }
    
    .link--navstyle::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background: #4E4E4E;
        -webkit-transform: translate3d(101%,0,0);
        transform: translate3d(101%,0,0);
        -webkit-transition: -webkit-transform 0.5s;
        transition: transform 0.5s;
        -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
        border:1px solid black;
        border-radius:16px;
        
        
    }
    
    .link--navstyle:hover::after {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        
        
    }
    
    .link--navstyle span {
        display: block;
        position: relative;
        
    }
    
    .link--navstyle span::before {
        content: attr(data-letters);
        position: absolute;
        color: #39ff14;
        left: 0;
        overflow: hidden;
        white-space: nowrap;
        width: 0%;
        -webkit-transition: width 0.5s;
        transition: width 0.5s;
        -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
        transition-timing-function: cubic-bezier(0.7,0,0.3,1);
        -webkit-mask-image: linear-gradient(-75deg, rgba(0,0,0,.6) 30%, #000 50%, rgba(0,0,0,.6) 70%);
        -webkit-mask-size: 200%;
        animation: shine 1.5s linear infinite;
        text-shadow: 
            2px   0  0   #000, 
            -2px   0  0   #000, 
            0    2px 0   #000, 
            0   -2px 0   #000, 
            1px  1px 0   #000, 
            -1px -1px 0   #000, 
            1px -1px 0   #000, 
            -1px  1px 0   #000,
            1px  1px 5px #000;
            
        
    }
    
    .link--navstyle:hover span::before {
        width: 100%;
        
    }
    .link:hover{
        -webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.6);
        -moz-box-shadow:0 0 5px rgba(0, 0, 0, 0.6);
        box-shadow:0 0 5px rgba(0, 0, 0, 0.6);
        
    }
    .link {
        outline: none;
        text-decoration: none;
        position: relative;
        font-size: 2em;
        line-height: 1;
        color: #9e9ba4;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        border-radius:16px;
      }
      
    .dropdown-toggle.nav-link{
        color: #9e9ba4;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        border-radius:16px;
        font-size:30px;
        margin-top:-1.2%;
    }


    .dropdown-toggle.nav-link:hover{
        color: #39ff14;        
        text-shadow: 
            2px   0  0   #000, 
            -2px   0  0   #000, 
            0    2px 0   #000, 
            0   -2px 0   #000, 
            1px  1px 0   #000, 
            -1px -1px 0   #000, 
            1px -1px 0   #000, 
            -1px  1px 0   #000,
            1px  1px 5px #000;
    }
    div.show.dropdown.nav-item a.dropdown-toggle.nav-link{
        color: #39ff14;        
        text-shadow: 
            2px   0  0   #000, 
            -2px   0  0   #000, 
            0    2px 0   #000, 
            0   -2px 0   #000, 
            1px  1px 0   #000, 
            -1px -1px 0   #000, 
            1px -1px 0   #000, 
            -1px  1px 0   #000,
            1px  1px 5px #000;
    }
    a.dropdown-item{
        font-size:16px;
        color:rgb(72,149,236);
    }
    a.dropdown-item:hover{
        color: #39ff14;
        text-shadow: 1px 1px 1px black;
        font-weight:900;

    }
    a.dropdown-item p{
        color:rgb(72,149,236);
        text-shadow: 1px 1px 1px white;
    }
    a.dropdown-item.active{
        color: #39ff14;
        text-shadow: 1px 1px 1px black;
        font-weight:900;
    }
    a.dropdown-item.active p{
        color: #39ff14;
        text-shadow: 1px 1px 1px black;
        font-weight:900;
    }
    .centerd{
        margin: auto
    }
    .cbdbrand{
        font-size:40px;
        font-size:999;
        color: #39ff14;
        text-shadow: 
                0 1px 0 #000, 
                0 2px 0 #000,
                0 3px 0 #000, 
                0 4px 0 #000;

    }
    .bb{
        
        padding:6px;
        background: #4e4e4e;
        border: solid 1px limegreen;
        border-radius:30px;
        box-shadow:0 1px 0 limegreen, 
        0 2px 0 #000;
    }
    a.nav-link.active a.link.link--navstyle span{
        color: #39ff14;
        
        text-shadow: 
            2px   0  0   #000, 
            -2px   0  0   #000, 
            0    2px 0   #000, 
            0   -2px 0   #000, 
            1px  1px 0   #000, 
            -1px -1px 0   #000, 
            1px -1px 0   #000, 
            -1px  1px 0   #000,
            1px  1px 5px #000;
    }

    `;

export const NavigationBar  = () => (
    <Styles>
        <Navbar expand='lg'>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    <Navbar.Brand href={process.env.PUBLIC_URL+"/"} className="navbar-brand">
                        <div className="bb"><h1 className="cbdbrand">Code By Dom</h1></div>
                    </Navbar.Brand>
                    <Nav.Link href={process.env.PUBLIC_URL+"/"}><p className="link link--navstyle" ><span data-letters="Home">Home</span></p></Nav.Link>
                    <Nav.Item><Nav.Link href={process.env.PUBLIC_URL+"/#/about"}><p className="link link--navstyle" ><span data-letters="About">About</span></p></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href={process.env.PUBLIC_URL+"/#/contact"}><p className="link link--navstyle" ><span data-letters="Contact">Contact</span></p></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href={process.env.PUBLIC_URL+"/#/v1"}><p className="link link--navstyle" ><span data-letters="2018">2018</span></p></Nav.Link></Nav.Item> 
                    <NavDropdown  title="Software Projects" >
                    <NavDropdown.Item href={process.env.PUBLIC_URL+"/#/genesearchinfo"}>GeneSearch<p className="small">Clinical Genetic Reasearch Tool</p></NavDropdown.Item>
                    <NavDropdown.Item href={process.env.PUBLIC_URL+"/#/roadmap"}>Roadmap 360 Dashboards <p className="small">Phamracutical Data Visualizaiton Dashboard</p></NavDropdown.Item>
                    <NavDropdown.Item href={process.env.PUBLIC_URL+"/#/plazy"}>Plazy <p className="small">Video/Audio add on that allows user to search for spoken words</p></NavDropdown.Item>
                    <NavDropdown.Item href={process.env.PUBLIC_URL+"/#/viza"}>VIZA <p className="small">Music Visualizaiton For Fun</p></NavDropdown.Item>
                    <NavDropdown.Item href={process.env.PUBLIC_URL+"/#/artsite"}>Jose L Santos Art Website<p className="small">Project for friend</p></NavDropdown.Item>
                    <NavDropdown.Item href={process.env.PUBLIC_URL+"/#/DataFun"}>Data Fun<p className="small">Data manipulating functions (work in progress)</p></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    </Styles>
)
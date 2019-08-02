import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar-collapse{
       font-size:16px;
    }
    .navbar-brand, .navbar-nav, .nav-link{
    }
    .box {
        display: flex;
        width:90%;
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

    .dropdown-menu{
        
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
    .centerd{
        margin: auto
    }
    .cbdbrand{
        font-size:40px;
        font-size:999;
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

    `;

export const NavigationBar  = () => (
    <Styles>
        <Navbar expand='lg'>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    <Navbar.Brand href="/" className="navbar-brand">
                        <div className="cbdbrand">Code By Dom</div>
                    </Navbar.Brand>
                    <Nav.Link href="/"><a className="link link--navstyle" ><span data-letters="Home">Home</span></a></Nav.Link>
                    <Nav.Item><Nav.Link href="/about"><a className="link link--navstyle" ><span data-letters="About">About</span></a></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact"><a className="link link--navstyle" ><span data-letters="Contact">Contact</span></a></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/v1"><a className="link link--navstyle" ><span data-letters="2018">2018</span></a></Nav.Link></Nav.Item> 
                    <NavDropdown className="dd" title="Software Projects" >
                    <NavDropdown.Item href="/genesearchinfo">GeneSearch<p className="small">Clinical Genetic Reasearch Tool</p></NavDropdown.Item>
                    <NavDropdown.Item href="/roadmap">Roadmap 360 Dashboards <p className="small">Phamracutical Data Visualizaiton Dashboard</p></NavDropdown.Item>
                    <NavDropdown.Item href="/plazy">Plazy <p className="small">Video/Audio add on that allows user to search for spoken words</p></NavDropdown.Item>
                    <NavDropdown.Item href="/artsite">Jose L Santos Art Website<p className="small">Project for friend</p></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    </Styles>
)
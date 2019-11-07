import React, {Component} from 'react'
import styled from 'styled-components';
const Styles = styled.div`
    div{
        text-align:center;
    }
    h1{
      color:limegreen;
      font-weight:900;
      font-size:70px;
      text-shadow: 0 1px 0 #000, 
               0 2px 0 #000;
            }
    #thefile {
        top: 10px;
        left: 10px;
        z-index: 100;
      }
      
      #canvas {
        position: flex;
        width: 100%;
        height: 100%;
      }
      
      audio {
        position: fixed;
        left: 10px;
        bottom: 10px;
        width:70%
        width: calc(100% - 20px);
        display:none;
      }
    `;

export class viza extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.header = "Click to Play Music Visualization";
        setInterval(() => { this.tick(); }, 100);
      }
      
      tick() {
        if (document.getElementById("audio")!=null){
        var audio = document.getElementById("audio");
        var head = document.getElementById("animate");
        
        console.log(Math.round(100*audio.currentTime)/100);
        switch(Math.round(10*audio.currentTime)/10) {
            case 7.4:
                head.innerHTML = "C";
                break;
            case 7.8:
                head.innerHTML = "Co";
                break;
            case 8.2:
                head.innerHTML = "Cod";
                break;
            case 8.6:
                head.innerHTML = "Code";
                break;
            case 9.4:
                head.innerHTML = "Code By";
                break;
            case 10.2:
                head.innerHTML = "Code By D";
                break;
            case 10.6:
                head.innerHTML = "Code By Do";
                break;
            case 11.0:
                head.innerHTML = "Code By Dom";
                break;
            case 11.8:
                head.innerHTML = "<div style='background-color:#000'>Code By Dom</div>";
                break;
            case 12.2:
                head.innerHTML = "<div style='background-color:#000'><a style='color:white'>Code By Dom</a></div>";
                break;
            case 13.0:
                head.innerHTML = "<div style='background-color:#000'><a style='color:white'>Code By Dom</a></div>";
                break;
            case 13.2:
                head.innerHTML = "<div style='background-color:limegreen'><a style='color:white'>Code By Dom</a></div>";
                break;
            case 13.6:
                head.innerHTML = "<div style='background-color:limegreen; width:50%; margin:auto;'><a style='color:white'>Code By Dom</a></div>";
                break;
            case 13.8:
                head.innerHTML = "<div style='background-color:#4e4e4e; width:50%; margin:auto; border: solid 1px limegreen;'><a style='color:limegreen'>Code By Dom</a></div>";
                break;
            case 14.0:
                head.innerHTML = "<div style='background-color:#4e4e4e; width:50%; margin:auto; border: solid 1px limegreen;'><a style='color:limegreen'>Code By Dom</a></div>";
                break;
            case 14.2:
                head.innerHTML = "<div style='background-color:#4e4e4e; width:50%; margin:auto; border: solid 1px limegreen; border-radius:30px;'><a style='color: #39ff14;'>Code By Dom</a></div>";
                break;
            case 14.4:
                head.innerHTML = "<div style='background-color:#4e4e4e; width:50%; margin:auto; border: solid 1px limegreen; border-radius:30px; box-shadow:0 1px 0 limegreen, 0 2px 0 #000;'><a style='color: #39ff14; text-shadow: 0 1px 0 #000, 0 2px 0 #000,0 3px 0 #000, 0 4px 0 #000;'>Code By Dom</a></div>";
                break;
            
            
            
        }
        }
    }
    handleClick() {
          var audio = document.getElementById("audio");
          
          document.getElementById("thefile").style.display = 'none';
          audio.src = require('./assets/fad.mp3');
          audio.load();
          audio.play();
          var context = new AudioContext();
          
          console.log("testing");
          var src = context.createMediaElementSource(audio);
          var analyser = context.createAnalyser();
      
          var canvas = document.getElementById("canvas");
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          var ctx = canvas.getContext("2d");  
          src.connect(analyser);
          analyser.connect(context.destination);
      
          analyser.fftSize = 256;
      
          var bufferLength = analyser.frequencyBinCount;
          console.log(bufferLength);
      
          var dataArray = new Uint8Array(bufferLength);
      
          var WIDTH = canvas.width;
          var HEIGHT = canvas.height;
      
          var barWidth = (WIDTH / bufferLength) * 2.5;
          var barHeight;
          var x = 0;
      
          function renderFrame() {
            requestAnimationFrame(renderFrame);
      
            x = 0;
      
            analyser.getByteFrequencyData(dataArray);
      
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
      
            for (var i = 0; i < bufferLength; i++) {
              barHeight = dataArray[i];
              
              var g = barHeight + (250 * (i/bufferLength));
              var r = 10 * (i/bufferLength);
              var b = 1;
              if(document.getElementById("animate")){
                document.getElementById("animate").style.color = "rgb(" + r + "," + g + "," + b + ")";
              }
              ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
              ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
            
              x += barWidth + 1;
            }
          }
          audio.style.display='block';
          audio.play();
          renderFrame();
      };
    render(){
    return(
    <Styles>
        <div>
            <div id="content">

            <button className="btn btn-outline-success btn-lg" id="thefile" onClick={this.handleClick}>{this.header}</button>
            <br></br>
            <div id="cont">
            <h1 id="animate"> </h1>
            <canvas id="canvas"></canvas>
            
            <div><audio id="audio" controls onPlay={this.onPlay}></audio></div>
            </div>
</div>
        </div>
    </Styles>
    )
      }
    }
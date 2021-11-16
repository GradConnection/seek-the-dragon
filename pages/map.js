import Document, { Html, Head, Main, NextScript } from 'next/document'
import React, {useEffect} from "react";

function Map() {

    function drawCircle(canvas)
    {
        
        const context = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 70;

        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
    }
    useEffect(() => {
    const canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    // drawCircle(canvas)
    canvas.width = 1900;
    canvas.height = 1400;
    context.beginPath();
    context.lineWidth = 5;
    context.arc(1000, 700, 200, 0, 2 * Math.PI);
    context.stroke();
    
    // var background = new Image();
    // background.src = "https://static.vecteezy.com/system/resources/previews/003/758/266/original/fairytale-kingdom-map-medieval-village-background-fairy-tale-castle-infographic-elements-with-sea-mountains-forest-ship-fantasy-town-plan-with-unicorn-witch-mermaid-dragon-frog-prince-vector.jpg";
    
    // background.onload = function(){
    //     context.drawImage(background,0,0);   
    // }
    //      const centerX = canvas.width / 2;
    //     const centerY = canvas.height / 2;
    //     const radius = 120;

    //     context.beginPath();
    //     context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    //     context.fillStyle = 'green';
    //     context.fill();
    //     context.lineWidth = 5;
    //     context.strokeStyle = '#003300';
    //     context.stroke();
    // canvas.width = 1900;
    // canvas.height = 1400;

      }, [])

    return <div>
        <img src="https://static.vecteezy.com/system/resources/previews/003/758/266/original/fairytale-kingdom-map-medieval-village-background-fairy-tale-castle-infographic-elements-with-sea-mountains-forest-ship-fantasy-town-plan-with-unicorn-witch-mermaid-dragon-frog-prince-vector.jpg" alt="Map" />
        <canvas style={{position:'absolute', left:0}} id="canvas"></canvas>
        {/* {{canvas}} */}
    </div>
  }
  
  export default Map
import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect } from "react";
import Router from "next/router";
import dragonmap from "/public/dragonmap.webp";
import Image from "next/image";

// import dragonmap from "/public/dragonmap.webp";

function Map() {
  useEffect(() => {
    // Make circle
    function makeCircle(context, name, x, y, color, circleSize) {
      context.font = "30px Arial";
      context.fillStyle = "white";
      context.fillText(name, x - circleSize, y - circleSize - 10);
      context.beginPath();
      context.lineWidth = 5;

      context.arc(x, y, circleSize, 0, Math.PI * 2, true);
      // context.fillStyle = color;
      context.stroke();
      // context.fill();
      context.closePath();
    }

    const canvas = document.getElementById("canvas");
    // c.width = window.innerWidth;
    // c.height = window.innerHeight;
    let context = canvas.getContext("2d");
    canvas.width = 1900;
    canvas.height = 1400;

    var elements = [];
    elements.push({
      name: "Forest",
      color: "#05EFFF",
      circleSize: 50,
      x: 250,
      y: 200,
      clicked: function () {
        // alert("This Forest circle has been clicked");
        Router.push("/");
      },
    });
    elements.push({
      name: "Castle",
      color: "#05EFFF",
      circleSize: 50,
      x: 790,
      y: 660,
      clicked: function () {
        // alert("This Castle circle has been clicked");
        Router.push("https://www.seek.com.au/jobs");
      },
    });
    elements.push({
      name: "Profile",
      color: "#05EFFF",
      circleSize: 50,
      x: 525,
      y: 950,
      clicked: function () {
        Router.push("/profile");
      },
    });
    elements.forEach(function (element) {
      var circle = new makeCircle(
        context,
        element.name,
        element.x,
        element.y,
        element.color,
        element.circleSize
      );
      console.log(circle);
    });

    canvas.addEventListener("click", function (e) {
      var x = e.pageX - canvas.offsetLeft;
      var y = e.pageY - canvas.offsetTop;

      elements.forEach(function (element) {
        if (
          Math.pow(x - element.x, 2) + Math.pow(y - element.y, 2) <
          Math.pow(element.circleSize, 2)
        ) {
          element.clicked();
        }
      });
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Image
        // style={{ height: 900, left: 0, top: 0 }}
        // src="https://static.vecteezy.com/system/resources/previews/003/758/266/original/fairytale-kingdom-map-medieval-village-background-fairy-tale-castle-infographic-elements-with-sea-mountains-forest-ship-fantasy-town-plan-with-unicorn-witch-mermaid-dragon-frog-prince-vector.jpg"
        src={dragonmap}
        alt="Map"
      />
      <canvas style={{ position: "absolute", top: 0 }} id="canvas"></canvas>
    </div>
  );
}

export default Map;

import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { useEffect } from "react";
import Router from "next/router";
import dragonmap from "/public/dragonmap.webp";
import Image from "next/image";
import Dragon from "/Components/shared/Dragon";

// import dragonmap from "/public/dragonmap.webp";

function Map() {
  useEffect(() => {
    // Make circle
    function makeCircle(context, name, x, y, color, circleSize) {
      context.font = "30px Arial";
      context.fillStyle = color;
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
      name: "Power Up",
      color: "#FFF",
      circleSize: 50,
      x: 250,
      y: 200,
      clicked: function () {
        // alert("This Forest circle has been clicked");
        Router.push("/powerup");
      },
    });
    elements.push({
      name: "Castle",
      color: "#FFF",
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
      color: "#FFF",
      circleSize: 50,
      x: 525,
      y: 930,
      clicked: function () {
        Router.push("/profile");
      },
    });
    elements.push({
      name: "Recharge",
      color: "#FFF",
      circleSize: 50,
      x: 160,
      y: 665,
      clicked: function () {
        Router.push("/recharge");
      },
    });
    elements.push({
      name: "Quests",
      color: "#000",
      circleSize: 110,
      x: 1110,
      y: 180,
      clicked: function () {
        Router.push("/quests");
      },
    });
    elements.push({
      name: "Invite Friends",
      color: "#FFF",
      circleSize: 60,
      x: 460,
      y: 430,
      clicked: function () {
        Router.push("/friends");
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
      <div style={{ position: "absolute", top: 760, right: 370 }}>
        <Dragon />
      </div>
    </div>
  );
}

export default Map;

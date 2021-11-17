import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import wisedragon from "/public/wisedragon.gif";
import Image from "next/image";
import Dragon from "/Components/shared/Dragon";
import Typewriter from "typewriter-effect";

export default function Recharge() {
  const [level, setLevel] = useState(0);
  const [text, setText] = useState(`Welcome, how may I help you?`);

  let name = "Dragon name";
  // let level = 1;
  let secretName = "The Future Great Architech";
  let replyText1 = `you will do better next time`;
  let replyText2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    convallis non mi non porttitor. Vivamus in enim gravida, viverra
                    nisi vestibulum, finibus mi. Fusce id dui tortor. Donec egestas
                    enim ac massa bibendum, nec consequat augue fringilla. Nam enim
                    sem, gravida sit amet ligula sit amet, fermentum rutrum lectus.
                    Pellentesque non eros vehicula, laoreet ligula at, dignissim elit.
                    Vestibulum egestas, magna et scelerisque vestibulum, nibh ligula
                    blandit sapien, eget cursus augue purus quis ante. Morbi tempor
                    elementum ex non varius. Nullam eget consequat magna, sit amet
                    blandit lectus. Suspendisse ullamcorper imperdiet risus, id
                    laoreet metus ornare commodo. Sed ornare accumsan ipsum, facilisis
                    posuere nibh gravida et. Curabitur rutrum ex massa, nec imperdiet
                    diam bibendum eu. Duis urna odio, molestie a mattis condimentum,
                    porttitor ultricies nisl. Fusce faucibus, diam sed suscipit porta,
                    odio justo varius quam, sit amet varius libero diam vel libero.
                    Praesent hendrerit lorem sed bibendum varius. Nullam non metus
                    diam. Suspendisse ut orci luctus, scelerisque turpis vitae, luctus
                    purus. Phasellus lorem nisi, lobortis eu suscipit at, ornare a
                    felis. Phasellus non mi nec erat elementum cursus vel feugiat
                    lectus. Ut mollis tellus et ornare rutrum. Pellentesque quis est
                    sed sapien blandit sollicitudin ac vel enim. Maecenas quis
                    malesuada nibh, sed finibus urna. Duis pellentesque, purus ut
                    pellentesque varius, massa nibh varius quam, et pretium ipsum
                    libero vitae metus. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Nullam ullamcorper
                    nec arcu nec varius. Integer auctor sit amet orci et congue.
                    Aliquam egestas turpis purus, id lobortis dolor tempor nec. Duis
                    nisi enim, dapibus ut justo sit amet, condimentum laoreet mi.
                    Vestibulum eget consequat lacus. Phasellus dictum malesuada
                    aliquet. Aenean fringilla lacinia augue a mollis. Quisque
                    fermentum nisl nibh, sed ornare dui eleifend ac. Integer fermentum
                    venenatis diam quis blandit. Sed dignissim vestibulum mauris
                    varius ornare. Sed lacinia tincidunt enim, ac fermentum metus
                    feugiat a. Phasellus iaculis commodo sapien eu luctus. Morbi et
                    tempor mi. Phasellus cursus quam diam, at consectetur orci mattis
                    sit amet. Nulla maximus leo sit amet metus pretium, vel laoreet
                    sapien molestie. Pellentesque ligula magna, aliquam in orci sit
                    amet, suscipit tempus felis. Nulla vel nulla lectus. In id dolor
                    id ex imperdiet elementum non non lectus. Sed dapibus neque odio,
                    sit amet tempor erat tristique ultricies. Pellentesque porta leo
                    et interdum porttitor. Phasellus pretium in augue ac eleifend.`;
  return (
    <div>
      <Head>
        <title>Recharge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      {/* <main className={styles.main}> */}
      <main className="container mx-auto">
        {/* <div className="container mx-auto"> */}
        <div className="flex">
          <div className="flex-1 ...">
            <Image src={wisedragon} alt="Map" />
            <p>Hey, {name}</p>
            <p>{level}</p>
            <p>{secretName}</p>
          </div>
          <div className="flex-1 ...">
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString({ text })
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            /> */}
            <Typewriter
              options={{
                strings: [text],
                autoStart: true,
                loop: false,
                delay: 35,
              }}
            />
          </div>
          <div className="flex-1 ...">
            <Dragon width={500} height={500} level={level} />
            <p>Help!</p>
            <button onClick={() => setText(replyText1)}>
              1) I didn't get the job I wanted
            </button>
            <button onClick={() => setText(replyText2)}>
              2) I don't feel I am good enough to apply to this job
            </button>
            <button onClick={() => setLevel(level + 1)}>Level Up</button>
          </div>
        </div>
        {/* <h1 className={styles.title}>Welcome to SEEK The Dragon</h1> */}
      </main>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { ContextApp } from "../reducers";

import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import wisedragon from "/public/wisedragon.gif";
import Image from "next/image";
import Dragon from "/Components/shared/Dragon";
import Typewriter from "typewriter-effect";

export default function Recharge() {
  const { state, dispatch } = useContext(ContextApp);
  let name = state.profile.name;
  let level = state.profile.level;

  // const [level, setLevel] = useState(0);
  const [text, setText] = useState(`Welcome, how may I help you?`);

  const levelUp = (e, replyIn) => {
    e.preventDefault();
    setText(replyIn);
    dispatch({
      type: "updateLevel",
      payload: {
        profile: { ...state.profile, level: level + 1 },
      },
    });
  };

  // let level = 1;
  let secretName = "The Future Great Architech";
  let replyText1 = `This experience will grow you.`;
  let replyText2 = `This is what you’re going through, not who you are.`;
  let replyText3 = `This is tough, but you are tougher.`;
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
        <div className="menu">
          <div>
            <Link href="/map">Menu</Link>
          </div>
        </div>
        {/* <div className="container mx-auto"> */}
        <div className="flex">
          <div style={{ maxWidth: 400 }} className="flex-1 ...">
            <Image src={wisedragon} alt="Map" />
            <p>Hey, {name}</p>
            <p>Level: {level}</p>
            <p>aka {secretName}</p>
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
          <div className="flex-1">
            <Dragon width={500} height={500} />
            <div>
              <p>Help!</p>
              <button onClick={(e) => levelUp(e, replyText1)}>
                <p>1) I didn't get the job I wanted</p>
              </button>
              <br />
              <button onClick={(e) => levelUp(e, replyText2)}>
                <p> 2) I don't feel I am good enough to apply to this job</p>
              </button>
              <br />
              <button onClick={(e) => levelUp(e, replyText3)}>
                <p>3) Will I even get a job?</p>
              </button>
              <br />
              <button onClick={levelUp}>
                <p> Level Up</p>
              </button>
            </div>
          </div>
        </div>
        {/* <h1 className={styles.title}>Welcome to SEEK The Dragon</h1> */}
      </main>
    </div>
  );
}

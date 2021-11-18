import { useState } from "react";

import Dragon from "../components/shared/Dragon";
import styles from "./congratulations.module.css";
import ReactCanvasConfetti from "react-canvas-confetti";

const style = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const initialState = {
  companyName: "",
  isSubmitted: false,
};

export default function Congratulations() {
  const [state, setState] = useState(initialState);
  const { companyName, isSubmitted } = state;
  const [fire, setFire] = useState(false);
  const [reset, setReset] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, isSubmitted: true });
  };

  const onChange = (event) => {
    const { value } = event.target;
    setState({ ...state, companyName: value });
  };
  const onFire = () => {
    console.log("do something after fire");
  };
  const onReset = () => {
    console.log("do something after reset");
  };
  const onDecay = () => {
    console.log("do something after animation setr reset to true");
    setReset(true);
  };

  const congratsHeading = "🎉 Congrats on your new job! 🎉";
  const congratsCompany = `🎉 Congrats on your new job at ${companyName} 🎉`;
  const congratsWords =
    "You've earned it and it's great to see that your effort has finally paid off!";

  return (
    <div
      className={`flex py-24 flex-col items-center h-screen ${styles.container}`}
    >
      {isSubmitted && <div className={styles.banner}>{companyName}</div>}
      {!isSubmitted && (
        <h2 className="text-base font-bold text-4xl pb-6">{congratsHeading}</h2>
      )}
      {isSubmitted && <div className={styles.spacer}></div>}
      {!isSubmitted && <p className="text-base">{congratsWords}</p>}
      <Dragon />

      {isSubmitted ? (
        <div className="text-base font-bold pb-1">
          <h2 className="text-base font-bold text-2xl mt-8 mb-4 text-center">
            {congratsCompany}
          </h2>
          <p className="text-base text-center">{congratsWords}</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col items-center">
          <div className="text-base font-bold pb-1">
            Which employer will you be working for?
          </div>
          <input
            onChange={onChange}
            placeholder="Amazing company"
            className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
            type="text"
            value={companyName}
          />
          <button
            className={
              "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-4 rounded w-full"
            }
            onClick={() => setFire(true)}
          >
            Submit
          </button>
        </form>
      )}
      <ReactCanvasConfetti // set the styles as for a usual react component
        style={style}
        // set the class name as for a usual react component
        className={"yourClassName"}
        // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
        fire={fire}
        // if value in this.state.reset cast to the logical true and will differ from the previous, then will be cleared canvas
        reset={reset}
        onFire={onFire}
        onDecay={onDecay}
        onReset={onReset}
      />
    </div>
  );
}

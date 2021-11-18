import { useState } from "react";
import Dragon from "../components/shared/Dragon";
import ReactCanvasConfetti from 'react-canvas-confetti';

const style = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
}

const initialState = {
  companyName: "",
  isSubmitted: false,
};

export default function Congratulations() {
  const [state, setState] = useState(initialState);
  const [fire, setFire] = useState(false);
  const [reset, setReset] = useState(false);
  const { companyName, isSubmitted } = state;
  const onFire = () => {
    console.log('do something after fire')
  }
  const onReset = () => {
    console.log('do something after reset')
  }
  const onDecay = () => {
    console.log('do something after animation setr reset to true')
    setReset(true)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMITTED')
    setState({ ...state, isSubmitted: true });
  };

  const onChange = (event) => {
    const { value } = event.target;
    setState({ ...state, companyName: value });
  };

  return (
    <div className="flex py-24 flex-col bg-blue-50 items-center h-screen">
      <h2 className="text-base font-bold text-4xl pb-6">
        🎉 Congrats on your new job! 🎉
      </h2>
      <p className="text-base ">
        You've earned it and it's great to see that your effort has finally paid
        off!
      </p>
      <Dragon />
      {isSubmitted ? (
        <div className="text-base font-bold pb-1">Thank you!</div>
      ) : (
        <div className="flex flex-col items-center">
        <form onSubmit={onSubmit} >
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
        </form>
           <button className={'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mx-4 rounded w-full'} onClick={()=> setFire(true)}>Submit</button>
        <ReactCanvasConfetti // set the styles as for a usual react component
          style={style}
          // set the class name as for a usual react component
          className={'yourClassName'}
          // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
          fire={fire}
          // if value in this.state.reset cast to the logical true and will differ from the previous, then will be cleared canvas
          reset={reset}
          onFire={onFire}
          onDecay={onDecay}
          onReset={onReset}/>
        </div>
      )}
    </div>
  );
}

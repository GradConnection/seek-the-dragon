import Head from 'next/head';
import Image from 'next/image';
import step1 from '/public/step1.png';
import step2 from '/public/step2.png';
import step3 from '/public/step3.png';

export default function Hatching({ step, setStep }) {
  let eggImage = null;

  switch (step) {
    case 1:
      eggImage = (
        <Image
          className={'animate__animated animate__shakeX'} //{"animate__animated animate__bounce"}
          src={step1}
          alt="Click on me"
          width={256}
          height={338}
        />
      );
      break;
    case 2:
      eggImage = (
        <Image
          className={'animate__animated animate__shakeY'}
          src={step2}
          alt="Click on me"
          width={256}
          height={338}
        />
      );
      break;
    case 3:
      eggImage = (
        <Image
          className={'animate__animated animate__flash'}
          src={step3}
          alt="Click on me"
          width={256}
          height={338}
        />
      );
      break;
    default:
      eggImage = (
        <Image src={step1} alt="Click on me" width={256} height={338} />
      );
      break;
  }

  return <span onClick={() => setStep(step + 1)}>{eggImage}</span>;
}

import { useState } from 'react';
import RandomButton from '../RandomButton';
import Divider from '/images/pattern-divider-desktop.svg';
import DividerMobo from '/images/pattern-divider-mobile.svg';

const Advice = () => {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [adviceId, setAdviceId] = useState('117');

  const generateAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  };

  function handleClick() {
    generateAdvice();
  }

  return (
    <section>
      <div className='textContainer'>
        <p>advice #{adviceId}</p>
        <h1>“{advice}”</h1>
      </div>

      <div className='divider'>
        <img src={Divider} alt='Divider' />
      </div>

      <div className='dividerMobo'>
        <img src={DividerMobo} alt='Divider' />
      </div>

      <div className='randomButton'>
        <div onClick={handleClick}>
          <RandomButton />
        </div>
      </div>
    </section>
  );
};

export default Advice;

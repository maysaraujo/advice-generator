import { useState, useEffect } from 'react';
import RandomButton from '../RandomButton';
import Divider from '/images/pattern-divider-desktop.svg';
import DividerMobo from '/images/pattern-divider-mobile.svg';

const Advice = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(0);

  const generateAdvice = () => {
    fetch('https://api.adviceslip.com/advice').then((response) =>
      response.json().then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      })
    );
  };

  useEffect(() => {
    generateAdvice();
  }, []);

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
        <div onClick={generateAdvice}>
          <RandomButton />
        </div>
      </div>
    </section>
  );
};

export default Advice;

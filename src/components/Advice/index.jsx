import { useState, useEffect } from 'react';
import RandomButton from '../RandomButton';
import Divider from '/images/pattern-divider-desktop.svg';

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

      <div className='randomButton' onClick={generateAdvice}>
        <RandomButton />
      </div>
    </section>
  );
};

export default Advice;

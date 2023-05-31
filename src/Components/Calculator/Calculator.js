import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const handleClicks = (e) => {
    const buttonName = e.target.textContent;
    const output = calculate({ total, next, operation }, buttonName);
    setNext(output.next);
    setTotal(output.total);
    setOperation(output.operation);
  };
  const Input = () => (
    <div className="input-container">
      <input type="text" value={next || total || '0'} className="input" />
    </div>
  );
  const Buttons = () => (
    <>
      <div className="btn-container">
        <button onClick={handleClicks} type="button">
          AC
        </button>
        <button onClick={handleClicks} type="button">
          +/-
        </button>
        <button onClick={handleClicks} type="button">
          %
        </button>
        <button onClick={handleClicks} type="button" className="math-symbol">
          /
        </button>
        <button onClick={handleClicks} type="button">
          7
        </button>
        <button onClick={handleClicks} type="button">
          8
        </button>
        <button onClick={handleClicks} type="button">
          9
        </button>
        <button onClick={handleClicks} type="button" className="math-symbol">
          x
        </button>
        <button onClick={handleClicks} type="button">
          4
        </button>
        <button onClick={handleClicks} type="button">
          5
        </button>
        <button onClick={handleClicks} type="button">
          6
        </button>
        <button onClick={handleClicks} type="button" className="math-symbol">
          -
        </button>
        <button onClick={handleClicks} type="button">
          1
        </button>
        <button onClick={handleClicks} type="button">
          2
        </button>
        <button onClick={handleClicks} type="button">
          3
        </button>
        <button onClick={handleClicks} type="button" className="math-symbol">
          +
        </button>
        <button onClick={handleClicks} type="button" className="zero">
          0
        </button>
        <button onClick={handleClicks} type="button">
          .
        </button>
        <button onClick={handleClicks} type="button" className="math-symbol">
          =
        </button>
      </div>
    </>
  );
  return (
    <div className="wrapper">
      <Input />
      <Buttons />
    </div>
  );
};
export default Calculator;

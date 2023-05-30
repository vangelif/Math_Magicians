import React from 'react';
import './Calculator.css';

const Calculator = () => {
  const Input = () => (
    <div className="input-container">
      <input type="text" value="0" className="input" />
    </div>
  );
  const Buttons = () => (
    <>
      <div className="btn-container">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="math-symbol">
          /
        </button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="math-symbol">
          x
        </button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="math-symbol">
          -
        </button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="math-symbol">
          +
        </button>
        <button type="button" className="zero">
          0
        </button>
        <button type="button">.</button>
        <button type="button" className="math-symbol">
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

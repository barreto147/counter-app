import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  //handleAdd
  const handleAdd = () => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

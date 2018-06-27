import React from 'react';
import { useAnother } from '../contexts/another';

const Counter = ({ title, number, increment}) => {
  return (
    <div>
      <h1>{title || 'empty title'}</h1>
      <h1>{number}</h1>
      <button onClick={increment}>더하기</button>
    </div>
  );
};

export default useAnother(
  ({ state, actions }) => ({
    number: state.number,
    increment: actions.increment
  })
)(Counter);
'use client';
import React, { JSX } from 'react';
import { CalculatorButtonProps } from '@/components/CalculatorButton/CalculatorButton.props';

const CalculatorButton = ({ ...props }: CalculatorButtonProps): JSX.Element => {
  return (
    <div
      className={`btn btn-dark ${props.className || 'w-100'}`}
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default CalculatorButton;

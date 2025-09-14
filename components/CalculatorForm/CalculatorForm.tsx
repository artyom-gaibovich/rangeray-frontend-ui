'use client';
import React from 'react';
import CalculatorButton from '@/components/CalculatorButton/CalculatorButton';

const CalculatorForm = () => {
  const [value, setValue] = React.useState<string>('');

  const [isCalculated, setIsCalculated] = React.useState<boolean>(false);

  return (
    <div className='container-fluid d-flex justify-content-evenly flex-wrap'>
      <div className='row g-3'>
        <div className='col-12 text-center'>
          <input
            type='text'
            className={`calculator-screen z-depth-1 w-100 ${!isCalculated || 'border-info text-info border'}`}
            value={value}
            disabled
          />
        </div>
        <div className='col-4 d-flex gap-2'>
          <CalculatorButton
            className='w-50'
            value='C'
            type='operation'
            onClick={() => setValue('0')}
          />
          <CalculatorButton
            className='w-50'
            value='='
            type='operation'
            onClick={() => {
              const parts = value.split(/([+-])/);
              let result = Number(parts[0]);

              for (let i = 1; i < parts.length; i += 2) {
                const operator = parts[i];
                const num = Number(parts[i + 1]);

                if (operator === '+') {
                  result += num;
                } else if (operator === '-') {
                  result -= num;
                }
              }
              setIsCalculated(true);
              setValue(result.toString());
            }}
          />
        </div>
        <div className='col-4'>
          <CalculatorButton
            className='w-100'
            value='+'
            type='operation'
            onClick={() => setValue(value + '+')}
          />
          43
        </div>
        <div className='col-4'>
          <CalculatorButton
            className='w-100'
            value='-'
            type='operation'
            onClick={() => {
              setIsCalculated(false);
              setValue(value + '-');
            }}
          />
        </div>

        <div className='col-4'>
          <CalculatorButton
            onClick={() => {
              setIsCalculated(false);
              setValue(value + '1');
            }}
            value='1'
            type='operation'
          />
        </div>
        <div className='col-4'>
          <CalculatorButton
            onClick={() => {
              setIsCalculated(false);
              setValue(value + '2');
            }}
            value='2'
            type='operation'
          />
        </div>
        <div className='col-4'>
          <CalculatorButton
            onClick={() => setValue(value + '3')}
            value='3'
            type='operation'
          />
        </div>

        <div className='col-4'>
          <CalculatorButton value='4' type='operation' />
        </div>
        <div className='col-4'>
          <CalculatorButton value='5' type='operation' />
        </div>
        <div className='col-4'>
          <CalculatorButton value='6' type='operation' />
        </div>

        <div className='col-4'>
          <CalculatorButton value='7' type='operation' />
        </div>
        <div className='col-4'>
          <CalculatorButton value='8' type='operation' />
        </div>
        <div className='col-4'>
          <CalculatorButton value='9' type='operation' />
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;

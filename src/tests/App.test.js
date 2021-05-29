import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })
  it('should add 1 to 4 and get 5', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const add = container.getByTestId('add');
    fireEvent.click(add);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);

    const equal = container.getByTestId('equals');
    fireEvent.click(equal);


    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('5');
    
  })
  it('subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const subtract = container.getByTestId('subtract');
    fireEvent.click(subtract);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);

    const equal = container.getByTestId('equals');
    fireEvent.click(equal);


    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('3');
    
  })

  it('multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiply = container.getByTestId('multiply');
    fireEvent.click(multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);

    const equal = container.getByTestId('equals');
    fireEvent.click(equal);


    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('15');
    
  })

  it('divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divide = container.getByTestId('divide');
    fireEvent.click(divide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equal = container.getByTestId('equals');
    fireEvent.click(equal);


    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('3');
    
  })

  it('concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equal = container.getByTestId('equals');
    fireEvent.click(equal);


    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('2175');
    
  })

  it('chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const add = container.getByTestId('add');
    fireEvent.click(add);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equal1 = container.getByTestId('equals');
    fireEvent.click(equal1);
    const multiply = container.getByTestId('multiply');
    fireEvent.click(multiply);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equal2 = container.getByTestId('equals');
    fireEvent.click(equal2);
    const subtract = container.getByTestId('subtract');
    fireEvent.click(subtract);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const equal3 = container.getByTestId('equals');
    fireEvent.click(equal3);
    



    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('18');
    
  })
  it('clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const add = container.getByTestId('add');
    fireEvent.click(add);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equal1 = container.getByTestId('equals');
    fireEvent.click(equal1);
    fireEvent.click(add);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    
    const equal = container.getByTestId('equals');
    fireEvent.click(equal);


    const runningTotal = container.getByTestId('running-total');
    
    expect(runningTotal).toHaveTextContent('6');
    
  })
})


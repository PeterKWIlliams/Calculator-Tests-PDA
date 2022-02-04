import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

// add() - add 1 to 4 and get 5
// subtract() subtract 4 from 7 and get 3
// multiply() - multiply 3 by 5 and get 15
// divide() - divide 21 by 7 and get 3
// numberClick() - concatenate multiple number button clicks
// operatorClick() - chain multiple operations together
// clearClick() - clear the running total without affecting the calculation
describe('Calculator', () => {
  
  // const click = (buttons) =>{
  //   buttons.forEach(button => button.simulate("click"))
  // }
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })





  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add')
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
  
  
  
  it('should be able to subtract 4 from 7 and get 3',()=>{
    const button4 = container.find('#number4')
    const button7 = container.find('#number7')
    const subtractButton = container.find('#operator-subtract')
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('3');
  })
 
  it('should be able to multiply 3 by 5 to get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click')
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button7 = container.find('#number7');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const divideButton = container.find('#operator-divide');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button6 = container.find('#number6');
    const runningTotal = container.find('#running-total');
    button6.simulate('click');
    button6.simulate('click');
    button6.simulate('click');
    expect(runningTotal.text()).toEqual('666');
  })
  it('should chain multiple operations together', () => {
    const button5 = container.find('#number5');
    const button7 = container.find('#number7');
    const button2 = container.find('#number2');
    const equalsButton = container.find('#operator-equals');
    const divideButton = container.find('#operator-divide');
    const subtractButton = container.find('#operator-subtract');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractButton.simulate('click')
    button2.simulate('click');
    divideButton.simulate('click')
    button5.simulate('click')
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('1');
     })
    
     it('should clear running total without affecting calculation', () => {
      const button5 = container.find('#number5');
      const button7 = container.find('#number7');
      const button2 = container.find('#number2');
      const equalsButton = container.find('#operator-equals');
      const divideButton = container.find('#operator-divide');
      const subtractButton = container.find('#operator-subtract');
      const clearButton = container.find('#clear');
      const runningTotal = container.find('#running-total');
      button7.simulate('click');
      subtractButton.simulate('click')
      button2.simulate('click');
      divideButton.simulate('click')
      button5.simulate('click')
      clearButton.simulate('click');
      button5.simulate('click')
      equalsButton.simulate('click');
      
      
      expect(runningTotal.text()).toEqual('5');
  
   
  })
})

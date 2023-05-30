import {render,screen} from '@testing-library/react';
import Button from './Button';
describe('Button component',()=>{
    test('renders button should load properly',()=>{
       const text='Send';
       const {getByText}=render(<Button text={text}/>)
       const buttonText=getByText(text);
       expect(buttonText).toBeInTheDocument();
    
    })
})
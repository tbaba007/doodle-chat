import { ButtonProps } from "./types";
import buttonStyles from './Button.module.scss';

const Button=({text}:ButtonProps)=>{
    return <button className={buttonStyles.ButtonContainer}>{text}</button>
}

export default Button;
import { MouseEventHandler } from 'react';
import './button.scss';
interface ButtonProps {
	text: string,
	handleAction:MouseEventHandler<HTMLButtonElement>
}

export function Button ({text, handleAction}: ButtonProps){
  return(
		<button className="btn" id={text}
			onClick={handleAction}>
			<span className="btn__span">{text}</span>
		</button>
	)
}
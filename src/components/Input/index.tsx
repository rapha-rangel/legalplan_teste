import { ChangeEventHandler } from 'react';
import './input.scss';

interface InputPros {
	value: string
	handleChange:ChangeEventHandler<HTMLInputElement>
}

export function Input ({handleChange, value}: InputPros){
	return(
		<div className='wrapper__input'>
			<label>Titulo</label>
			<input type='text' onChange={handleChange} value={value}/>
		</div>
	)
}
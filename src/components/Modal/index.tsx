import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '../Button/button';
import './modal.scss';
import { SetStateAction, useState } from 'react';
import { TaskTypes } from '@/types/task-types';
import { Input } from '../Input';
import { useOpenModal } from '@/hooks/useOpenModal';
import { OpenModalTypes } from '@/types/open-modal-types';

interface ModalProps {
	selectedTask: string
}

export function Modal ({selectedTask}: ModalProps){
	const { isOpen, setIsOpen, type}= useOpenModal();
	const {updateLocalStorage} = useLocalStorage();
	const [inputValue, setInputValue] = useState('');

	const handleChange=(e: { target: { value: SetStateAction<string>; }; })=>{
		setInputValue(e.target.value)
	}

	const handleCloseModal =()=>{
		setInputValue('');
		setIsOpen(false);
		console.log(inputValue)
	}

	const handleAddTask=()=>{
		const taskItem = localStorage.getItem("task-items");
		if(taskItem){
			const taskItemArray = JSON.parse(taskItem);
			const existItem = taskItemArray.filter((item:TaskTypes) => item.text.toLowerCase() ===inputValue.toLowerCase());
			if(existItem.length >0){
        
      } else{
        taskItemArray.push({
          text: inputValue,
          completed: false
        })
      }
      updateLocalStorage(taskItemArray);
    } else{
			const newItem= [{
				text: inputValue,
        completed: false
			}];
			updateLocalStorage(newItem);
		}
		setInputValue('');
		setIsOpen(false);
	}

	const handleDeleteTask =()=>{
		const taskItem = localStorage.getItem("task-items");
		if(taskItem){
			const taskItemArray = JSON.parse(taskItem);
			const removedItemArray = taskItemArray.filter((item:TaskTypes) => item.text.toLowerCase() !==selectedTask.toLowerCase());
			updateLocalStorage(removedItemArray);
		}
		setIsOpen(false);
	}

  return (
		<section className={`container modal__container ${isOpen? "show": "notShow"}`}>
			{type ===OpenModalTypes.ADD?
			<>
				<h4>Nova tarefa</h4>
				<Input
					handleChange={handleChange}
					value={inputValue}/>
			</>
			:
			<>
				<h4>Deletar tarefa</h4>
				<p>Tem certeza que você deseja deletar essa tarefa?</p>
			</>
			}
			<div className='wrapper__btn'>
				<Button
					text={"Cancelar"}
					handleAction={handleCloseModal}/>
				<Button
					text={type ===OpenModalTypes.ADD?"Adicionar": "Deletar"}
					handleAction={type ===OpenModalTypes.ADD? handleAddTask: handleDeleteTask}/>
			</div>
		</section>
	)
}
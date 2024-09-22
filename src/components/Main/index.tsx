'use client'
import './main.scss';
import { Button } from '../Button/button';
import { useState } from 'react';
import { Modal } from '../Modal';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Task } from '../Task';
import { useOpenModal } from '@/hooks/useOpenModal';
import { OpenModalTypes } from '@/types/open-modal-types';


export function Main(){
	const {items} = useLocalStorage();
  const {setType, isOpen, setIsOpen, type} = useOpenModal();
  const [selectedTask, setSelectedTask] = useState('');

	const handleOpenModalAdd = ()=>{
		if(type ===OpenModalTypes.REMOVE && isOpen) return;
    	setType(OpenModalTypes.ADD)
		setIsOpen(true)
	}

	return(
		<>
		<section className={`container main__container ${isOpen?"opacityContainer": "notOpacityContainer"}`}>
			<div className='main__content'>
				<p>Suas tarefas hoje</p>
				<div className='task__content'>
					{items && items.filter((item)=> item.completed=== false).map((item, index)=>(
						<Task
              				setSelectedTask={setSelectedTask}
							taskChecked={false}
							key={index}
							taskName={item.text}/>
					))}
				</div>
				<p>Tarefas finalizadas</p>
				<div className='task__content'>
					{items && items.filter((item)=> item.completed=== true).map((item, index)=>(
						<Task
              				setSelectedTask={setSelectedTask}
							taskChecked={true}
							key={index}
							taskName={item.text}/>
					))}
				</div>
			</div>
			<Button
				text={"Adicionar nova tarefa"}
				handleAction={handleOpenModalAdd}/>
		</section>
			<Modal
        selectedTask={selectedTask}
				/>
		</>
		
	)
}
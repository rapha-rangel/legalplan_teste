import { useState } from "react";
import trashIcon from '../../assets/trash_icon.png';
import './task.scss';
import { useOpenModal } from "@/hooks/useOpenModal";
import { OpenModalTypes } from "@/types/open-modal-types";
import { CheckButton } from "../CheckButton";
import Image from 'next/image';

interface TaskProps {
	taskName: string
	taskChecked: boolean
	setSelectedTask:(value: string) =>void
}

export function Task ({taskName, taskChecked, setSelectedTask}:TaskProps){
	const [animation, setAnimation] = useState(false);
	const {setIsOpen, setType, type, isOpen} = useOpenModal();

	const handleOpenModalDelete = (taskName: string)=>{
		if(type ===OpenModalTypes.ADD && isOpen) return;
		setType(OpenModalTypes.REMOVE);
		setIsOpen(true);
    	setSelectedTask(taskName);
	}

	return (
		<div className={`task__div ${!animation? "fadeIn": "fadeOut"}`}>
			<CheckButton
				taskChecked={taskChecked}
				setAnimation={setAnimation} 
					taskName={taskName}
				/>
			<p id={taskChecked?'mostrar':''}>{taskName}</p>
			<span className='task__icon'
				onClick={()=>handleOpenModalDelete(taskName)}>
				<Image  width={18} height={20} src={trashIcon.src} alt=""/> 
			</span>
		</div>
	)
}
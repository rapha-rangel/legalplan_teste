import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TaskTypes } from "@/types/task-types";
import checkIcon from '../../assets/chek_icon.png';
import './checkButton.scss';
import { useEffect, useState } from "react";
import { useOpenModal } from "@/hooks/useOpenModal";
import Image from "next/image";

interface CheckButtonProps {
	setAnimation:(value: boolean) => void
	taskName: string
	taskChecked: boolean
}


export function CheckButton ({ setAnimation, taskName, taskChecked}:CheckButtonProps){
	const [cheked, setCheked] = useState(true);
	const {items, updateLocalStorage} = useLocalStorage();
	const {isOpen} = useOpenModal()

	useEffect(()=>{
		if(taskChecked===true){
			setCheked(false)
		} else{
			setCheked(true)
		}
	},[cheked, taskChecked])

	const handleCheked =()=>{
		if(isOpen) return;
		if(cheked === true){
			setCheked(false)
		}else{
			setCheked(true)
		}
		setAnimation(true);
		setTimeout(()=>{
			if(cheked ===true){
				const removedArr:TaskTypes[]=[];
				const newValue = items.map(item => {
					if(item.text === taskName){ 
						removedArr.push({...item, completed: true})
					}
					return item
				}).filter(item => item.text !== taskName);
				const changePositionValue =newValue.concat(removedArr)
				updateLocalStorage(changePositionValue)
			} else{
				const removedArr:TaskTypes[]=[];
				const newValue = items.map(item => {
					if(item.text === taskName){ 
						removedArr.push({...item, completed: false})
					}
					return item
				}).filter(item => item.text !== taskName);
				const changePositionValue =newValue.concat(removedArr)
				updateLocalStorage(changePositionValue);
			}
			setAnimation(false);
		}, 800)
	}

	return (
		<label>
			<input  type="checkbox" checked={!cheked} onChange={handleCheked}/>
			<span >
				<Image  src={checkIcon.src} width={12} height={8.25} alt=""/> 
			</span>
		</label>
	)
}
'use client'
import { FormatData } from '@/utils/formatData';
import logoImg from '../../assets/logo_image.png';
import logoName from '../../assets/logo_name.png';
import './header.scss';
import { useOpenModal } from '@/hooks/useOpenModal';
import Image from 'next/image';

export function Header (){
	const {isOpen} = useOpenModal();
	
	return(
		<header className={`container ${isOpen?"opacityContainer": "notOpacityContainer"}`}>
			<div className='content__logo'>
				<Image  className='logo__img' width={33} height={33} src={logoImg.src} alt=''/>
				<Image  className='logo__name' width={106.14} height={15.5}  src={logoName.src} alt=''/>
			</div>
			<div>
				<h4>Bem vindo de volta, <span>Marcos</span></h4>
			</div>
			<div>
				<p>{FormatData()}</p>
			</div>
		</header>
	)
}
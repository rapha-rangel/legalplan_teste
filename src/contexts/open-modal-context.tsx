"use client"

import { createContext, useState, ReactNode, } from "react";
import { OpenModalTypes } from "@/types/open-modal-types";

export const OpenModalContext = createContext({
  isOpen:false,
	setIsOpen:(value:boolean)=> {},
	type:OpenModalTypes.ADD,
	setType:(value:OpenModalTypes)=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function OpenModalContextProvider({children}: ProviderProps){

  const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState(OpenModalTypes.ADD);


  return (
    <OpenModalContext.Provider
      value={{
        isOpen, 
        setIsOpen,
				type, setType
      }}
    >
      {children}
    </OpenModalContext.Provider>
  )
}
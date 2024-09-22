"use client"

import { createContext, useState, ReactNode, } from "react";
import { OpenModalTypes } from "@/types/open-modal-types";

interface OpenModalContextType{
  isOpen: boolean;
  setIsOpen:(value: boolean)=>void
  type: OpenModalTypes
  setType:(value: OpenModalTypes)=>void
}
export const OpenModalContext = createContext<OpenModalContextType>({
  isOpen:false,
	setIsOpen:()=> {},
	type:OpenModalTypes.ADD,
	setType:()=>{}
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
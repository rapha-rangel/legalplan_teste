"use client"

import { useEffect, createContext, useState, ReactNode, } from "react";
import {TaskTypes} from '@/types/task-types'
interface LocalStorageContextType{
  items: TaskTypes[];
  updateLocalStorage:(value: TaskTypes[])=>void
}

export const LocalStorageContext = createContext<LocalStorageContextType>({
  items:[],
  updateLocalStorage:()=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function LocalStorageContextProvider({children}: ProviderProps){

  const [items, setItems] = useState<TaskTypes[]>([]);

  useEffect(() => {
    if( typeof window === "undefined") return;
    const value = window.localStorage.getItem("task-items")
    if(value){ 
      setItems(JSON.parse(value));
    }
  }, [])

  const updateLocalStorage =(value:TaskTypes[])=>{
    setItems(value);
    localStorage.setItem("task-items", JSON.stringify(value));
		console.log(value)
  }

  return (
    <LocalStorageContext.Provider
      value={{
        items, 
        updateLocalStorage
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}
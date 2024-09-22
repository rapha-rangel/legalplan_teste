import { OpenModalContext } from "@/contexts/open-modal-context";
import { useContext } from "react";

export function useOpenModal(){
  return useContext(OpenModalContext)
}
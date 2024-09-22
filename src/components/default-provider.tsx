import { LocalStorageContextProvider } from "@/contexts/local-storage-context";
import { OpenModalContextProvider } from "@/contexts/open-modal-context";
import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

export  function DefaultProvider({children}: DefaultProviderProps) {
	return (
		<LocalStorageContextProvider>
			<OpenModalContextProvider>
				{children}
			</OpenModalContextProvider>
		</LocalStorageContextProvider>
	)
}
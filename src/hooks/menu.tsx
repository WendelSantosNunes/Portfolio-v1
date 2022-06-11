import {createContext, useState, ReactNode, useContext} from 'react'

// Estamos tipado o context e inicializando
interface ContextData {
    mode: boolean,
    toogleMode: () => void;
}

const MenuContext = createContext<ContextData>({} as ContextData)

interface TransacationProviderProps {
    children: ReactNode;
}

// Menu Provider ficar no app
export function MenuProvider({children}:TransacationProviderProps){
    const [mode, setMode] = useState(false)

    const toogleMode = () => {
        setMode(!mode)
    }

    return (
        <MenuContext.Provider value={{mode,toogleMode}}>
            {children} {/* Children vai da acessor aos componentes */}
        </MenuContext.Provider>
    )
}

// Criar o contexto global, assim só precisaremos importar o mode e toogleMode
export function useMenu(){
    const context = useContext(MenuContext)
    
    return context
}
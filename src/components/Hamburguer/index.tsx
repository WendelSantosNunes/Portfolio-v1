import { Container } from "./styles"
import logoImg from "../../assets/Wendel_.svg"
import { useState } from "react"

export function Hamburguer (){
    const [mode, setMode] = useState(false)

    const toggleMode = () => {
        setMode(!mode)
    }

    return (
        <Container>
            <div className="app">
                <div className={mode ? 'icon iconActive': 'icon'} onClick={toggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
                <div className={mode ? 'menu menuOpen' : 'menu menuClose'}>
                    <nav className="list">
                        <ul className="listItems" onClick={toggleMode}>
                            <li><a href="#about" >Sobre</a></li>
                            <li><a href="#knowledge">Conhecimentos</a></li>
                            <li><a href="#project">Projetos</a></li>
                            <li><a href="#contact" >Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <img src={logoImg} alt="logo"></img>
        </Container>
    )
}
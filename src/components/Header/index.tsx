import { Container } from "./styles"
import logoImg from "../../assets/Wendel_.svg"
import { Hamburguer } from "../Hamburguer"
// import { useMenu } from "../../hooks/menu"

export function Header (){
    // const {mode,toogleMode} = useMenu()

    return (
        <Container>
            <div className="Hamburguer">
                <Hamburguer />
            </div>
            <div className="NotHamburguer">
                <img src={logoImg} alt="logo"></img>
                <nav>
                    <ul>
                        <li><a href="#about" >Sobre</a></li>
                        <li><a href="#knowledge">Conhecimentos</a></li>
                        <li><a href="#project">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}
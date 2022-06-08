import { Container } from "./styles"
import logoImg from "../../assets/Wendel_.svg"

export function Header (){
    return (
        <Container>
            <img src={logoImg} alt="logo"></img>
            <nav>
                <ul>
                    <li><a href="@">Sobre</a></li>
                    <li><a href="@">Conhecimentos</a></li>
                    <li><a href="@">Projetos</a></li>
                    <li><a href="@">Contato</a></li>
                </ul>
            </nav>
        </Container>
    )
}
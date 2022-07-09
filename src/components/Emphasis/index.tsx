import imgHeader from '../../assets/imagem-header.png' 
import { Container } from './styles'

export function Emphasis(){
    return (
        <Container>
            <div>
                <p>Olá, eu sou</p>
                <strong>Wendel Nunes</strong>
                <p>Desenvolvedor Front-End</p>
            </div>
            <img src={imgHeader} alt="Imagem de uma pessoa mexendo no computador" />
        </Container>
    )
}
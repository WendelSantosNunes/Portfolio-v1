import { Container } from "./styles"
import contatoImg from "../../assets/imagem-contato.png"

export function Contact (){
    return (
        <Container>
        <h2 id="contact">Contato</h2>
        <div>
            <form>
                <p>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome" />
                </p>
                <p>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" placeholder="Digite seu e-mail" />
                </p>
                <p>                    
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea name="mensagem" id="mensagem" placeholder="Digite sua mensagem" />
                </p>

                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>

            <img src={contatoImg} alt="logo" id="active"></img>
        </div>
    </Container>
    )
}
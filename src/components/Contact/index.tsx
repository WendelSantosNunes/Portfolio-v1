import { Container } from "./styles"
import logoGithubImg from '../../assets/logo-github.svg'
import logoLinkedinImg from '../../assets/logo-linkedin.svg'
import logoInstagramImg from '../../assets/logo-instagram.svg'
import logoTwitterImg from '../../assets/logo-twitter.svg'
import logoEmailImg from '../../assets/logo-email.svg'

export function Contact (){
    return (
        <Container>
            <h2 id="contact">Contato</h2>
            <div>
                <a href="https://github.com/WendelSantosNunes" target="_blank" rel="noreferrer"><img src={logoGithubImg} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/wendel-nunes1/" target="_blank" rel="noreferrer"><img src={logoLinkedinImg} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/wendelnunes1/" target="_blank" rel="noreferrer"><img src={logoInstagramImg} alt="Instagram" /></a>
                <a href="https://twitter.com/WendelN96410536"target="_blank" rel="noreferrer"><img src={logoTwitterImg} alt="Twitter" /></a>
                <a href="mailto:wendelnunes9999@gmail.com"target="_blank" rel="noreferrer"><img src={logoEmailImg} alt="Twitter" /></a>
            </div>
        </Container>
    )
}
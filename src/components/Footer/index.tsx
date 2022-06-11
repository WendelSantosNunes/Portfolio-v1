import { Container, Content } from "./styles";
import logoGithubImg from '../../assets/logo-github.svg'
import logoLinkedinImg from '../../assets/logo-linkedin.svg'
import logoInstagramImg from '../../assets/logo-instagram.svg'
import logoTwitterImg from '../../assets/logo-twitter.svg'

export function Footer(){
    return (
        <Container>
            <Content>
                <div>
                    <a href="https://github.com/WendelSantosNunes" target="_blank" rel="noreferrer"><img src={logoGithubImg} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/wendel-nunes1/" target="_blank" rel="noreferrer"><img src={logoLinkedinImg} alt="Linkedin" /></a>
                    <a href="https://www.instagram.com/wendelnunes1/" target="_blank" rel="noreferrer"><img src={logoInstagramImg} alt="Instagram" /></a>
                    <a href="https://twitter.com/WendelN96410536"target="_blank" rel="noreferrer"><img src={logoTwitterImg} alt="Twitter" /></a>
                </div>
                <p>2022 @ Desenvolvido por Wendel Nunes</p>
            </Content>
        </Container>
    )
}
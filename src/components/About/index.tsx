import imgPerfil from '../../assets/imagem-perfil.png'
import imgCloud from '../../assets/cloud.svg'
import { Container, Content } from './styles'


export function Abount() {
    return (
        <Container>
            <Content>
                <h2 id='about'>Sobre</h2>
                <div>
                    <img src={imgPerfil} alt="Imagem do dev" />
                    <div>
                        <p>
                            Meu nome é Wendel, tenho 22 anos e moro em Picos-PI.
                            Atualmente, estou no 6º período do curso de Sistema de Informação(UFPI),
                            mas já estou em busca da minha primeira oportunidade profissional.
                        </p>
                        <p>
                            Durante meu percurso, dentro e fora da faculdade, tive fortes influências na área da web,
                            em vista disso, estou me especializando nessa área.
                        </p>
                        <p>
                            Considero ser uma pessoa disciplinada, persistente e pontual, disposta a superar qualquer desafio.   
                        </p>
                        <a href="https://drive.google.com/file/d/1w-Gajk6woDNBoreWbny3OP1sMu2rOR-l/view?usp=sharing" target='_blank' rel="noreferrer" >
                            <img src={imgCloud} alt="Cloud" /> Curriculo
                        </a>
                    </div>
                </div>
            </Content>
        </Container>
    )
}

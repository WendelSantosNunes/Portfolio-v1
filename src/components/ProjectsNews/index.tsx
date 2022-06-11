import {Container, Content} from './styles'
import projImg1 from '../../assets/projetos-imagem-1.png'
import projImg2 from '../../assets/projetos-imagem-2.png'
import projImg3 from '../../assets/projetos-imagem-3.png'
import githubImg from '../../assets/logo-github.svg'

export function ProjectNews(){
    const project = [
        {
            img: projImg1,
            nomeProject: 'Dt.money',
            list: [
                'React',
                'Typescript',
                'Styled Components',
                'Api',
                'MirageJs'
            ],
            link: 'https://github.com/WendelSantosNunes/dt.money'
        },
        {
            img: projImg2,
            nomeProject: 'RocketBlog',
            list: [
                'React',
                'Typescript',
                'Styled Components'
            ],
            link: 'https://github.com/WendelSantosNunes/RocketBlog'

        },
        {
            img: projImg3,
            nomeProject: 'Cozinheira Edineta',
            list: [
                'HTML',
                'CSS',
                'JS',
                'EJS'
            ],
            link: 'https://github.com/WendelSantosNunes/Cozinheira-Edineta'
        }
    ]


    return (
        <Container>
            <Content>
                <h2 id='project'>Projetos</h2>

                <div>
                    {
                        project.map((item) => {
                            return (
                                <div key={item.nomeProject}>
                                    <div>
                                        <img src={item.img} alt={item.nomeProject} />
                                    </div>
                                    <p className='title'>{item.nomeProject}</p>
                                    <p>Tecnologias utilizadas:</p>
                                    <ul>
                                        {
                                            item.list.map(item => {
                                                return <li key={item}>{item}</li>
                                            })
                                        }
                                    </ul>

                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <img src={githubImg} alt="Logo do Github" />
                                        Abrir projeto
                                    </a>
                                </div>
                            )
                        }) 
                    }
                </div>
                
            </Content>
        </Container>
    )
}
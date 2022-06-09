import {Container, Content} from './styles'
import projImg1 from '../../assets/projetos-imagem-1.png'
import projImg2 from '../../assets/projetos-imagem-2.png'
import projImg3 from '../../assets/projetos-imagem-3.png'


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
            ]
        },
        {
            img: projImg2,
            nomeProject: 'RocketBlog',
            list: [
                'React',
                'Typescript',
                'Styled Components'
            ]
        },
        {
            img: projImg3,
            nomeProject: 'Cozinheira Edineta',
            list: [
                'HTML',
                'CSS',
                'JS',
                'EJS'
            ]
        }
    ]


    return (
        <Container>
            <Content>
                <h2>Projetos</h2>

                <div>
                    {
                        project.map((item) => {
                            return (
                                <div>
                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <p>{item.nomeProject}</p>
                                    <p>Tecnologias utilizadas:</p>
                                    <ul>
                                        {
                                            item.list.map(item => {
                                                return <li>{item}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }) 
                    }
                </div>
                
            </Content>
        </Container>
    )
}
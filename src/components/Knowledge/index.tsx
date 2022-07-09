import { Container } from "./styles"
import reactImg from '../../assets/logo-react.svg'
import typescriptImg from '../../assets/logo-typescript.svg'
import nextImg from '../../assets/logo-next.svg'
import nodeImg from '../../assets/logo-nodejs.svg'

export function Knowledge (){

    const conhecimento = [
        {
            technology: 'React',
            img: reactImg,
            text: 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
            list: [
                'Estilização (Styled Components, SASS)',
                'Hooks',
                'Context API',
            ]
        },
        {
            technology: 'Typescript',
            img: typescriptImg,
            text: 'O TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
            list: [
                'Interface',
                'Generics',
                'React com Typescript'
            ]
        },
        {
            technology: 'Next JS',
            img: nextImg,
            text: 'O Next.js é um framework React, criado pela Vercel, que permite a construção de interfaces Web adicionando inúmeras funcionalidades em cima do React.',
            list: [
                'Static Site Generation',
                'Server Side Rendering',
                'API Routes',
            ]
        },
        {
            technology: 'Node',
            img: nodeImg,
            text: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web',
            list: [
                'Express',
                'API Rest',
                'Serverless',
            ]
        }
    ]

    return (
        <Container>
            <h2 id="knowledge">Conhecimento</h2>
            <section>
                {
                    conhecimento.map((item) => {
                        return (
                            <div key={item.technology}>
                                <div>
                                    <h3>{item.technology}</h3>
                                    <img src={item.img} alt="Logo do react" />
                                </div>
            
                                <p>
                                    {item.text}
                                </p>
            
                                <p>Conhecimentos:</p>
                                <ul>
                                    
                                    <li>{item.list[0]}</li>
                                    <li>{item.list[1]}</li>
                                    <li>{item.list[2]}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
        </Container>
    )
}
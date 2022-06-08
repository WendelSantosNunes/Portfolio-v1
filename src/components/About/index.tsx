import imgPerfil from '../../assets/imagem-perfil.png'
import imgCloud from '../../assets/cloud.svg'
export function Abount() {
    return (
        <>
            <img src={imgPerfil} alt="Imagem do dev" />
            <div>
                <p>
                    Meu nome é Wendel Santos, tenho 22 anos e moro em Picos-PI.
                    Atualmente, estou no sexto período do curso de Sistema de Informação(UFPI),
                    mas já estou em busco da minha primeira oportunidade profissional.
                </p>
                <p>
                    Durante meu percuso, dentro e fora da faculdade, tive fortes influências na área da web,
                    por isso, estou me especializado nessa área.
                </p>
                <p>
                    Me considero ser uma pessoa disciplinado e  persistente, pronto para superar qualquer desafio. 
                </p>
                <button>
                    <img src={imgCloud} alt="Cloud" /> Curriculo
                </button>
            </div>
        </>
    )
}
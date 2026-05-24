import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/shake2.png'
import styled from 'styled-components'

// ...
const UltimosLancamentosContainer = styled.section`
    background-color: #160404;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor={"#000000"}
                tamanhoFonte={"36px"}
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Shakespeare"
                subtitulo="Neste livro, estão reunidas doze das peças mais populares do autor,"
                descricao=" obra do dramaturgo inglês ao leitor contemporâneo"
                img={imagemLivro}
            />       
        </UltimosLancamentosContainer>
    )
}


export default UltimosLancamentos
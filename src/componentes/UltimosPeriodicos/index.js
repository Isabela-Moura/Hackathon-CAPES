import { periodicos } from "./dadosUltimosPeriodicos";
import { Titulo }  from '../Titulo'
import CardRecomenda from "../CardRecomenda";
import imagemPeriodico from "../../imagens/periodico.jpg";
import styled from "styled-components";


const UltimosPeriodicosContainer = styled.section`
    margin-top: 500px;
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosPeriodicosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosPeriodicos() {
    return (
        <UltimosPeriodicosContainer>
            <Titulo cor={"#408f54"} tamanhoFonte={"34px"}>ÚLTIMOS PERIÓDICOS</Titulo>
            <NovosPeriodicosContainer>
                {periodicos.map(periodico => ( <img src={periodico.src}/> ))}
            </NovosPeriodicosContainer>
            <CardRecomenda titulo="Talvez você se interesse por"
                subtitulo="Artigo 3"
                descricao="Artigo postado no Portal sobre IA e suas aplicações"
                img={imagemPeriodico}/>
        </UltimosPeriodicosContainer>
    );
}

export default UltimosPeriodicos;
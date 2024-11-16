import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 500px;
    padding: 10px 5px;
    justify-content: space-around;
    width: 100%;  
    margin-top: 20px;
`

const Botao = styled.button`
    background-color: #408f54;
    color: #FFF;
    padding: 10px 0px;
    border-radius: 10px;
    font-size: 18px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 250px;
`

const Subtitulo = styled.h4`
    color: #408f54;
    font-size: 24px;
    font-weight: bold;
    margin: 0px 0;
`

const imagemPeriodico = styled.img`
    width: 75px;
`
function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="20px" cor="#000" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <imagemPeriodico src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>  
    )
}

export default CardRecomenda
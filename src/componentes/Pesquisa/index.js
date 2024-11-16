import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { periodicos } from "./dadosPesquisa";   

const PesquisaContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 85px;
        height: 270px;
        width: 60%;
        margin: 0 auto;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
        text-align: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 75px;
    }
    &:hover {
        border: 2px solid white;
        border-radius: 10px;
    }
`


function Pesquisa() {
    const [ textoDigitado, setTextoDigitado ] = useState([])
  return (
    <PesquisaContainer>
        <Titulo>Já sabe o que procura?</Titulo>
        <Subtitulo>Procure por eixo temático ou palavras-chave!</Subtitulo>
        <Input 
            placeholder="Detalhe aqui"
            onBlur={evento => {
                const textoPesquisado = evento.target.value
                const resultado = periodicos.filter(periodico => periodico.nome.includes(textoPesquisado))
                setTextoDigitado(resultado)
            }}
            />
            { textoDigitado.map( livro => (
                <Resultado>
                <img src={livro.src}/>
                <p>{livro.nome}</p>
            </Resultado>
)) }
    </PesquisaContainer>
  );
}

export default Pesquisa;
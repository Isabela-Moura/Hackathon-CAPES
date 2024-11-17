import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { periodicos } from "./dadosPesquisa"; 

const suggestions = [
    "Análise Textual, Design e Questões de Gênero são temas de cursos",
    "Cerimônia de premiação para mulheres ocorre na quarta-feira",
    "Premiação reconhece pesquisadoras de todo o Brasil",
    "Treinamento em análise textual e design",
    "Destaque de mulheres na ciência brasileira",
    "Iniciativas para igualdade de gênero na pesquisa",
    "Ciência, tecnologia e sociedade pelo olhar da Tecnologia Social: um estudo a partir da Teoria Crítica da Tecnologia",
    "Programas de pós-graduação em enfermagem no Brasil: desafios e perspectivas",
    "A natureza do feedback no ensino e na aprendizagem de piano com o uso de tecnologia digital no ensino superior",
    "Benefícios do uso da tecnologia Blockchain como instrumento para a auditoria contábil",
    "Acesso à saúde pública de qualidade para a mulher",
    "Violência contra a mulher e feminicídio no Brasil - impacto do isolamento social pela COVID-19",
    "Violence against women in the single health system",
    "Perfil da vítima e características da violência contra a mulher no estado de Rondônia - Brasil",
  ];

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
    }`;

const SuggestionBox = styled.div`
    position: relative;
    margin-top: -10px;
    background: white;
    color: black;
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Suggestion = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
`;


function Pesquisa() {
    const [inputText, setInputText] = useState(""); // Texto do input
    const [filteredSuggestions, setFilteredSuggestions] = useState([]); // Sugestões filtradas
  
    // Função para filtrar sugestões
    const getSuggestions = (input) => {
      const lowerInput = input.toLowerCase();
      return suggestions.filter(
        (item) =>
          item.toLowerCase().startsWith(lowerInput) ||
          item.toLowerCase().includes(" " + lowerInput)
      );
    };
  
    const handleInputChange = (e) => {
      const input = e.target.value;
      setInputText(input);
  
      // Atualizar sugestões dinamicamente
      if (input.length > 1) {
        setFilteredSuggestions(getSuggestions(input));
      } else {
        setFilteredSuggestions([]);
      }
    };
  
    const handleSuggestionClick = (sugestao) => {
      setInputText(sugestao); // Preenche o campo com a sugestão selecionada
      setFilteredSuggestions([]); // Oculta as sugestões
    };
  
    return (
      <PesquisaContainer>
        <Titulo>Já sabe o que procura?</Titulo>
        <Subtitulo>Procure por eixo temático ou palavras-chave!</Subtitulo>
        <Input
          placeholder="Digite aqui..."
          value={inputText}
          onChange={handleInputChange}
        />
        {filteredSuggestions.length > 0 && (
          <SuggestionBox>
            {filteredSuggestions.map((sugestao, index) => (
              <Suggestion
                key={index}
                onClick={() => handleSuggestionClick(sugestao)}
              >
                {sugestao}
              </Suggestion>
            ))}
          </SuggestionBox>
        )}
      </PesquisaContainer>
    );
}

export default Pesquisa;
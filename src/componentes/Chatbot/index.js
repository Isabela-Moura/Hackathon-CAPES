import styled from 'styled-components';

const ChatbotContainer = styled.div`
  position: fixed; /* Para que o chatbot fique fixo na tela */
  bottom: 20px; /* Distância do rodapé */
  right: 20px; /* Distância da borda direita */
  width: 350px; /* Largura do chatbot */
  height: 500px; /* Altura do chatbot */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para dar destaque */
  border-radius: 10px; /* Bordas arredondadas */
  overflow: hidden; /* Para evitar que o conteúdo transborde */
  z-index: 1000; /* Para garantir que o chatbot esteja acima de outros elementos */
`;

function Chatbot() {
  return (
    <ChatbotContainer>
      <iframe
        src="https://udify.app/chatbot/CkHJlBwrZ0rxyU38"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Chatbot"
        allow="microphone" /* Habilita o uso do microfone, se necessário */
      ></iframe>
    </ChatbotContainer>
  );
}

export default Chatbot;
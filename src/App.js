import Chatbot from './componentes/Chatbot';
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosPeriodicos from './componentes/UltimosPeriodicos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 200vh;
  background-image: linear-gradient(90deg,#2daf59, #5590b9);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosPeriodicos/>
      <Chatbot/>
    </AppContainer>
  );
}

export default App;

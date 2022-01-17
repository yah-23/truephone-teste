import 'antd/dist/antd.css';

import GlobalStyle from './styles/global';
import { Container, Card } from './styles';

import Header from './components/Header';

function App() {
  return (
    <Container>
      <Header />
      <Card />
      <GlobalStyle />
    </Container>
  );
}

export default App;

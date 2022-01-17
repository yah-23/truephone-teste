import 'antd/dist/antd.css';

import GlobalStyle from './styles/global';
import { Container, Card, Content } from './styles';

import Header from './components/Header';

import Home from './views/Home';

function App() {
  
  return (
    <Container>
      <Header />
      <Card>
        <Content>
          <Home />
        </Content>
      </Card>
      <GlobalStyle />
    </Container>
  );
}

export default App;

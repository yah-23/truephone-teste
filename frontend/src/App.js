import 'antd/dist/antd.css';
import { UploadProvider } from './context'

import GlobalStyle from './styles/global';
import { Container, Card, Content } from './styles';

import Header from './components/Header';

import Home from './views/Home';

function App() {
  
  return (
    <UploadProvider>
      <Container>
        <Header />
        <Card>
          <Content>
            <Home />
          </Content>
        </Card>
        <GlobalStyle />
      </Container>
    </UploadProvider>
  );
}

export default App;

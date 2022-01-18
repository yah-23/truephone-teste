import 'antd/dist/antd.css';
import { UploadProvider } from './context'

import GlobalStyle from './styles/global';
import { Container, Card } from './styles';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <UploadProvider>
      <Container>
        <Header />
        <Card>
          <Content />
        </Card>
        <GlobalStyle />
      </Container>
    </UploadProvider>
  );
}

export default App;

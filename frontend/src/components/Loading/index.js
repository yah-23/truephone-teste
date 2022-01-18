import { Title1, Text } from '../../styles';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => {
    const spinningIcon = <LoadingOutlined style={{ fontSize: 36, marginTop: '15px' }} spin />;

    return (
        <div style={{maxWidth: '490px', margin: 'auto'}}>
            <Title1>Estamos verificando todas as mensagens em seu arquivo...</Title1>
            <Spin indicator={spinningIcon} style={{color: '#3D3ADA'}}/>
            <Text>Você quer <a>cancelar e voltar ao início?</a> </Text>
        </div>
    )
}

export default Loading;
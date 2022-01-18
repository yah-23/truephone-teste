import { Title1, Title3, Text, Underlined } from '../../styles';

import { useUploadContext } from '../../context'

const Confirm = () => {
    const { backToStart } = useUploadContext();
    return(
        <div style={{maxWidth: '490px', margin: 'auto'}}>
            <Title1 className="violet-title">É isso aí! 🚀</Title1>
            <Title1>Sua lista está pronta para entrar em produção!</Title1>
            <Title3>Já guardamos todas as mensagens válidas para que você possa usá-las em uma campanha no futuro.</Title3>
            <Text><Underlined className='link' onClick={() => backToStart()}>Voltar ao início</Underlined> para iniciar outra verificação.</Text>
        </div>
    )
}

export default Confirm;
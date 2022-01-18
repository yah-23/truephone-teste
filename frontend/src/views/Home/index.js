import React from 'react';
import { Button, Title1, Title3, Text, Underlined } from '../../styles';
import { Upload } from 'antd';

import { useUploadContext } from '../../context'

const Home = () => {
  const { dataValidation } = useUploadContext();

  const props = {
    name: 'file',
    action: 'http://localhost:3003/api/validation',
    accept: '.csv',
    async onChange(info) {
      if (info.file.status === 'done') {
        await dataValidation(info.file)
      }
    },
  };

  return (
    <div>
      <Title1>Verifique a validade de uma lista de mensagens 👍</Title1>
      <Upload {...props} showUploadList={false} >
          <Button>Selecionar Lista</Button>
      </Upload>
      <Title3>Selecione um arquivo CSV para iniciar a verificação de uma lista com números e mensagens de SMS.</Title3>
      <Text>Use nosso <Underlined>modelo</Underlined> de arquivo se você tem alguma dúvida.</Text>
    </div>
    )
}

export default Home;
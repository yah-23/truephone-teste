import React from 'react';
import { Button, Title1, Title3, Text, Underlined } from '../../styles';
import { Upload } from 'antd';
import axios from 'axios';

import { useUploadContext } from '../../context'

const Home = () => {
  const { isUploading, setIsUploading } = useUploadContext();

  const uploadFile = (file) => {
    const data = new FormData();
    data.append('file', file.originFileObj);

    axios.post('http://localhost:3003/api/validation', data, {
      "Content-Type":  "multipart/form-data"
    }).then(response => console.log(response)).catch(e =>console.log(e))
  }

  const props = {
      name: 'file',
      action: 'http://localhost:3003/api/validation',
      accept: '.csv',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          uploadFile(info.file)
        } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`)
          // message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

  return (
      <div>
          <Title1>Verifique a validade de uma lista de mensagens 👍</Title1>
          <Upload {...props} beforeUpload={() => setIsUploading(true)} showUploadList={false} >
              <Button>Selecionar Lista</Button>
          </Upload>
          <Title3>Selecione um arquivo CSV para iniciar a verificação de uma lista com números e mensagens de SMS.</Title3>
          <Text>Use nosso <Underlined>modelo</Underlined> de arquivo se você tem alguma dúvida.</Text>
      </div>
    )
}

export default Home;
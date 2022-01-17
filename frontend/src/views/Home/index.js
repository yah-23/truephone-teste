import React from 'react';
import { Button, Title1, Title3, Text, Underlined } from '../../styles';
import { Upload } from 'antd';
import Loading from '../../components/Loading';

const Home = () => {
    const [isUploading, setIsUploading] = React.useState(false);

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        accept: '.csv',
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            setIsUploading(false)
          } else if (info.file.status === 'error') {
              console.log(`${info.file.name} file upload failed.`)
            // message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <div>
            <Title1>Verifique a validade de uma lista de mensagens 👍</Title1>
            <Upload {...props} beforeUpload={()=> setIsUploading(true)}>
                <Button>Selecionar Lista</Button>
            </Upload>
            <Title3>Selecione um arquivo CSV para iniciar a verificação de uma lista com números e mensagens de SMS.</Title3>
            <Text>Use nosso <Underlined>modelo</Underlined> de arquivo se você tem alguma dúvida.</Text>
        </div>
    )
}

export default Home;
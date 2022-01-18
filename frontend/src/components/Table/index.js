import { StylizedTable } from './styles';
import { CheckOutlined,   CloseOutlined } from '@ant-design/icons';

const columns = [
    {
      title: 'Número',
      dataIndex: 'telefone',
      key: 'telefone',
      width: '20%',
    },
    {
      title: 'Prévia da mensagem',
      dataIndex: 'mensagem',
      key: 'mensagem',
      render:(text) => `${text.slice(0, 40)}...`,
      width: '60%',
    },
    {
      title: 'Resultado',
      dataIndex: 'valido',
      render:(data) => data ? 'Válido' : 'Inválido',
      width: '15%',
    },
    {
      dataIndex: 'valido',
      width: '5%',
      render:(data) => data ? 
        <CheckOutlined style={{color: '#0cf000', fontWeight: "bold", fontSize: '20px'}} /> 
      : <CloseOutlined style={{color: 'red', fontWeight: "bold", fontSize: '20px' }} />
    }
];
  

const TableComponent = ({ data }) => {
    return(
        <StylizedTable pagination={false} dataSource={data} columns={columns} />
    )
}

export default TableComponent;
import { Title1, GreenHighlight, Button } from '../../styles';
import {  ButtonBox } from './styles';
import TableComponent from '../../components/Table';
import { CheckOutlined,   CloseOutlined } from '@ant-design/icons';

import { useUploadContext } from '../../context'

const List = () => {
    const { backToStart, validatedData, totalValid } = useUploadContext();
    
    return(
        <div>
            {validatedData ? 
            <>
                <div style={{maxWidth: '490px', margin: 'auto'}}>
                    <Title1>Encontramos <GreenHighlight> {totalValid} </GreenHighlight> mensagens válidas em sua lista</Title1>
                </div>
                <TableComponent data={validatedData} />
                <ButtonBox>
                    <Button className='gray-border' onClick={() => backToStart()}>Cancelar <CloseOutlined /></Button>
                    <Button className='violet-bg'>Salvar Lista <CheckOutlined /></Button>
                </ButtonBox>
            </> : <></>}
        </div>
    )
}

export default List;
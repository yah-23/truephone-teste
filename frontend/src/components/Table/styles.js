import styled from 'styled-components'
import { Table } from 'antd';

export const StylizedTable = styled(Table)`
    overflow: hidden;
    overflow-x: auto;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    margin: 30px 0;
    .ant-table-thead > tr > th{
        font-weight: bold;
    }

    .ant-table-thead > tr > th,
    .ant-table-tbody > tr > td {
        padding: 10px 15px;
        text-align: left;
        background-color: #ffffff;
        border-bottom: 1px solid #e1e1e1;
        
        &::before{
            display: none;
        }
    }

`

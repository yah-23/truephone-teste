import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
`

export const Card = styled.div`
    width: 100%;
    max-width: 700px;
    min-height: 350px;
    margin: 30px;
    background: #fff;
    padding: 20px;
    border: 3px solid #3D3ADA;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    display: inline-block;
    padding: 10px 25px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
    overflow: hidden;
    line-height: 1.3;
    margin: 10px;

    &.gray-border {
        background-color: #fff;
        color: #747474;
        border: 2px solid #747474;
    }

    &.violet-bg{
        background-color: #3D3ADA;
        color: #fff;
        border: 2px solid #3D3ADA;
        padding: 10px 20px;
    }
`

export const Title1 = styled.h1`
    line-height: 1.1;
    font-weight: bold;

    &.violet-title{
        color: #3D3ADA;
        margin-bottom: 30px;
    }
`

export const Title3 = styled.h3`
    line-height: 1.1;
    font-weight: 600;
    margin: 20px 0;
`

export const Text = styled.p`
    line-height: 1.1;
    margin-top: 30px;
`

export const Underlined = styled.span`
    cursor: default;
    color: #3D3ADA;
    text-decoration: underline #3D3ADA;

    &.link {
        cursor: pointer;
    }
`
export const GreenHighlight = styled.span`
    color: #0cf000;
`

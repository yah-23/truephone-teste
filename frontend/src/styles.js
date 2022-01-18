import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: #3D3ADA;
    color: #fff;
    display: inline-block;
    padding: 1rem 2rem;
    border: 1px solid;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s;
    overflow: hidden;
    line-height: 1.3;
    margin: 15px 0;
`

export const Title1 = styled.h1`
    line-height: 1.1;
    font-weight: bold;
`

export const Title3 = styled.h3`
    line-height: 1.1;
    font-weight: 600;
    margin-top: 10px;
`

export const Text = styled.p`
    line-height: 1.1;
    margin-top: 20px;
`

export const Underlined = styled.span`
    cursor: default;
    color: #3D3ADA;
    text-decoration: underline #3D3ADA;
`
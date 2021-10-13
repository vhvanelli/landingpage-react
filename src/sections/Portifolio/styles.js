import styled from "styled-components";

export const Container = styled.section`
    justify-content: flex-start;
    margin-top: 200px;
    text-align: start;
`
export const Title = styled.h2`
    font-size: 7em;
    span{
        color: #EF5613;
    }
    ::before{
        content: "My Feature Works";
        font-size: 20px;
        position: absolute;
        margin-left: 8px;
    }
    `
export const TextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Text = styled.p`
        font-size: 1.5em;
        line-height: 1.7em;
        margin-top:15px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 10px;
`
export const Button = styled.button`
    font-size: 1em;
    background: none;
    border: none;
    font-weight: 500;
    width: 100px;
    height: 35px;
    :hover{
        background-color: #EF5613;
        color: #FFFFFF;
        border-radius: 30px;
    }
`
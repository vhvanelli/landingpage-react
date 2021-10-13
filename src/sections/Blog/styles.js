import styled from "styled-components";

export const Container = styled.section`
    margin-top: 500px;
    text-align: center;
    padding: 0 100px;
`
export const Title = styled.h2`
    font-size: 7em;
    position: relative;
    span{
        color: #EF5613;
    }
    ::before{
        content: "My Blog";
        font-size: 20px;
        position: absolute;
        margin-left: 5px;
    }
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
    display: block;
    font-size: 1em;
    border: none;
    font-weight: 500;
    width: 190px;
    height: 45px;
    background-color: #EF5613;
    color: #FFFFFF;
    border-radius: 30px;
    box-shadow:1px 1px 10px #EF5613;
    margin: 30px auto 0 auto;
    :hover{
        background-color: transparent;
        color: #EF5613;
        border: 2px solid #EF5613;
    }
`
export const ImgsContainer = styled.div`
    width: 100%;
    display: flex ;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 30px;
`
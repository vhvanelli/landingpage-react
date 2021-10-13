import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 200px ;
    padding: 200px 0;
    background-color: #1D2123;
    width: 100vw;
    padding: 200px 100px 100px 100px;
`
export const Title = styled.h2`
    font-size: 5em;
    position: relative;
    color: #E4E4E4;
    span{
            color: #EF5613;
        }
    ::before{
        content: "Get In Touch";
        font-size: 20px;
        position: absolute;
        top: -7px;
        left: 3px;
    }
    `
export const Text = styled.p`
        font-size: 1.5em;
        line-height: 1.7em;
        margin-top:15px;
        color: #E4E4E4;
`
export const Img = styled.img`
    border-radius: 50%;
    border: 3px solid #FFFFFF;
    width: 150px;
    height: 150px;
    object-fit: cover;
    background-color: #D4D4D4;
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
        opacity: 0.9;
    }
`
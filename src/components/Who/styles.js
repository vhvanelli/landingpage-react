import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 200px;
`
export const TextContainer = styled.div`
    position: relative;
    margin-left: 200px;
    article{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            color: #FF8C00;
        }
    }
    h1{
        font-size: 7em;
        /* position: relative; */
        ::before{
            content: "About me";
            font-size: 20px;
            position: absolute;
        }
    }
    p{
        margin-left: -50px;
        font-size: 1.5em;
        /* width: 50%; */
    }
    button{
        color: #FFFFFF;
        background-color: #FF8C00;
        /* padding: 10px 20px; */
        border-radius: 30px;
        border: none;
        margin-right: 20px;
        margin-top: 40px;
        width: 150px;
        height: 45px;
        font-size: 1.1em;
        font-weight: 500;
    }
    :nth-last-child{
        margin-top: 100px;
        background-color: transparent;
        color: #FF8C00 ;
        }
`
export const ImageContainer = styled.div`
    position: relative;   
    min-width: 43%;
    display: flex;
    border-radius: 50% ;
    overflow: hidden;

`
export const Image = styled.img`
    background-image: none;
    width: 100%;
    z-index: 4;
`
export const BgImage = styled.div`
     background-color: #FF8C00;
     width: 100%;
     height: 100%;
     position: absolute;
     right: 0;
     bottom: 0;
     z-index: 1;
     border-radius: 50%;

`

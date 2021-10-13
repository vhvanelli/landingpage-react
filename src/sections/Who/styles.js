import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 200px;
    padding: 0 100px;
`
export const TextContainer = styled.div`
    position: relative;
    margin-left: 200px;
    article{
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            color: #EF5613;
        }
    }
    h2{
        font-size: 7em;
        /* position: relative; */
        ::before{
            content: "About me";
            font-size: 20px;
            position: absolute;
        }
    }
    p{
        margin-left: 0px;
        font-size: 1.5em;
        line-height: 1.5em;
    }
    a{
        text-decoration: none;
        align-self: flex-start;
        font-size: 19px;
        color: #EF5613;
        margin-top: 12px;
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
     background-color: #EF5613;
     width: 100%;
     height: 100%;
     position: absolute;
     right: 0;
     bottom: 0;
     z-index: 1;
     border-radius: 50%;

`

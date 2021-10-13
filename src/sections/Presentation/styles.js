import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0 100px;
`
export const TextContainer = styled.div`
    position: relative;
    article{
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
            color: #EF5613;
        }
    }
    h1{
        font-size: 7em;
        line-height: 1em;
    }
    p{
        margin-left: -50px;
        font-size: 1.5em;
    }
    button{
        color: #FFFFFF;
        background-color: #EF5613;
        border-radius: 30px;
        border: none;
        margin-right: 20px;
        margin-top: 40px;
        width: 150px;
        height: 45px;
        font-size: 1.1em;
        font-weight: 500;
        box-shadow:1px 1px 10px #EF5613;
        :hover{
            background-color: transparent;
            color: #EF5613;
            border: 2px solid #EF5613;
        }
    }
`
export const ImageContainer = styled.div`
    position: relative;   
    width: 43%;
    display: flex;
    border-radius: 0 50% 0 50% ;
    overflow: hidden;
    

`
export const Image = styled.img`
    background-image: none;
    width: 100%;
    z-index: 4;
`
export const BgImage = styled.div`
     background-color: #ffb412;
     width: 100%;
     height: 100%;
     position: absolute;
     right: 0;
     bottom: 0;
     z-index: 1;
     border-radius: 0 50% 0 50% ;

`

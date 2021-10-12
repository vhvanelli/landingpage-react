import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 40px;
`

export const Nav = styled.nav`
    font-size: 1em;
   
        ul > li{
            display: inline-block;
            list-style: none;
            margin-right: 23px;
            font-weight: bold;

            span{
                color: #FFFFFF;
                background-color: #FF8C00;
                padding: 10px;
                border-radius: 30px;
            }
        }
   
`
export const Name = styled.h1`
    display: inline;
    font-size: 2em;
    span{
        color: #FF8C00;
    }
`
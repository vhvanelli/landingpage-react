import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 50px 100px 0 100px;
`

export const Nav = styled.nav`
    font-size: 1em;
   
        ul > li{
            display: inline-block;
            list-style: none;
            margin-right: 23px;
            font-weight: bold;
            :hover{
                color: #EF5613;
            }

            span{
                color: #FFFFFF;
                background-color: #EF5613;
                padding: 10px;
                border-radius: 40px;
                :hover{
                    background-color: transparent;
                    color: #EF5613;
                    border: 2px solid #EF5613;
                }
            }
        }
   
`
export const Name = styled.h1`
    display: inline;
    font-size: 2em;
    span{
        color: #EF5613;
    }
`
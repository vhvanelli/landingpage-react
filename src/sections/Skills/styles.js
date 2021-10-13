import styled from "styled-components";

export const Container = styled.section`
    justify-content: flex-start;
    margin-top: 200px;
    text-align: center;
`
export const Title = styled.h2`
    font-size: 7em;
    ::before{
        content: "My Skills";
        font-size: 20px;
        position: absolute;
        margin-left: 8px;
    }
    `
export const Text = styled.p`
        font-size: 1.5em;
        line-height: 1.7em;
        margin-top:15px;
`
export const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 80px;
    gap: 30px;
`
export const Skill =  styled.div`
    text-align: start;
    h3{
        font-size: 2.3em;
        margin-bottom: 20px;
        position: relative;
        ::after{
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100px;
            height: 4px;
            border-radius: 4px;
            background-color: #EF5613;

        }
    }
    ul>li{
        list-style:none;
        line-height: 2em;
        font-size: 1.3em;

        ::before{
            content: "- ";
        }
    }
`


import styled from "styled-components";

export const Container = styled.div`
    //Primary:
    --Light-Cyan: hsl(193, 38%, 86%);
    --Neon-Green: hsl(150, 100%, 66%);
    //Neutral:
    --Grayish-Blue: hsl(217, 19%, 38%);
    --Dark-Grayish-Blue: hsl(217, 19%, 24%);
    --Dark-Blue: hsl(218, 23%, 16%);
    *{
        margin:0;
    }
    font-size: 28px;
    font-family: 'Manrope', sans-serif;
    --extrabold: 800;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Dark-Blue);
    @media screen and (max-width:1025px){
        min-height:120vh;
    }
    @media screen and (max-width:600px){
        min-height:100vh;
    }
`
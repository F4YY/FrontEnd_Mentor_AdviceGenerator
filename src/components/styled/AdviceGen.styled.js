import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px) {
        flex-direction: column;
    }
`
export const StyledAdvicegen =  styled(Vstack)`
    position:relative;
    width: 540px;
    height: 320px;
    justify-content:space-evenly;
    align-items: center;
    border-radius: 15px;
    background-color: var(--Dark-Grayish-Blue);
    box-shadow: 0 10px 20px -2px rgba(0,0,0,0.15);
    padding:0 0 20px 0;
    .advice_id{
        font-size: .5em;
        letter-spacing:.3em;
        text-transform: uppercase;
        color: var(--Neon-Green);
    }
    .advice_quote{
        font-size:1em;
        text-align:center;
        color:var(--Light-Cyan);
        margin: 0 40px;
    }
    .loading{
        font-size:1em;
        text-align:center;
        color:var(--Grayish-Blue);
    }
    button{
        position:absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom:-10%;
        width:65px;
        height:65px;
        border-radius: 50%;
        border:none;
        cursor:pointer;
        background-color: var(--Neon-Green);
        background-image: url('${require('../images/icon-dice.svg').default}');
        background-size: 40%;
        background-repeat: no-repeat;
        background-position: center;
        &:hover{
            box-shadow: 0 0 40px 2px var(--Neon-Green);
        }
        &:active{
            transform: scale(.98);
        }
    }
    @media screen and (max-width:600px){
        width: 93%;
    }
`
export const Separator = styled.div`
    width:90%;
    height:5%;
    background-image: url('${require('../images/pattern-divider-desktop.svg').default}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width:600px){
        background-image: url('${require('../images/pattern-divider-mobile.svg').default}');
    }
`
export const Quote = styled.img`
    width:10px;
    height:10px;
    fill:var(--Light-Cyan);
    margin:0 5px 12px 0;
`
export const ReverseQuote = styled(Quote)`
    rotate:180deg;
`
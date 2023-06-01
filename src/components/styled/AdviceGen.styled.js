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
    min-height: 320px;
    justify-content:space-between;
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
        margin: 40px 0 25px;
    }
    .advice_quote{
        font-size:1em;
        text-align:center;
        color:var(--Light-Cyan);
        margin: 0 30px;
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
        bottom:-32.5px;
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
    @media screen and (max-width:1025px){
        min-height: 300px;
    }
    @media screen and (max-width:600px){
        width: 93%;
    }
`
export const Divider = styled.div`
    display:flex;
    width: 85%;
    height: 15px;
    background-image: url('${require('../images/pattern-divider-desktop.svg').default}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 40px 0;
    @media screen and (max-width:600px){
        background-image: url('${require('../images/pattern-divider-mobile.svg').default}');
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    display: flex;
    height:auto;
    text-align: center;
    justify-content: center;
    line-height: .1;
    margin:10% auto 0;
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`
export const AttributionA = styled(Attribution)`
    a{
        color: var(--Grayish-Blue);
    }
    p{
        font-size: .8rem;
        color: var(--Neon-Green);
    }
`
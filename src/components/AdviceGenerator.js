import React from 'react';
import { Container } from './styled/container.styled';
import { Quote, ReverseQuote, Separator, StyledAdvicegen } from './styled/AdviceGen.styled';

export const AdviceGenerator = () => {
    const [adviceId, setAdviceId] = React.useState('999')
    const [advice, setAdvice] = React.useState('Future belongs to those who believes in the beauty of their dreams.')
    const [loading, setLoading] = React.useState(false)

    const getAdvice = () => {
        setLoading(true)
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setAdviceId(data.slip.id)
                setAdvice(data.slip.advice)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
            })
    }
  return (
    <Container>
        <StyledAdvicegen>
            <p className='advice_id'>
                Advice #{adviceId}
            </p>
            {loading ? <p className='loading'>Loading...</p> :
                (
                <p className='advice_quote'>
                    <Quote src={require('./images/bg-pattern-quotation.svg').default} alt='quote'/>
                    {advice}
                    <ReverseQuote src={require('./images/bg-pattern-quotation.svg').default} alt='quote'/>
                </p>
                )
            }
            <Separator/>
            <button onClick={getAdvice}/>
        </StyledAdvicegen>
    </Container>
  )
}

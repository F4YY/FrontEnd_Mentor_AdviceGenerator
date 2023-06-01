import React from 'react';
import { Container } from './styled/container.styled';
import { Attribution, AttributionA, Divider, StyledAdvicegen } from './styled/AdviceGen.styled';

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
                    <q>
                        {advice}
                    </q>
                </p>
                )
            }
            <Divider/>
            <button onClick={getAdvice}/>
        </StyledAdvicegen>
        <footer>
          <Attribution>
              <AttributionA>
                <p><i>Challenge by</i><a href="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Advice generator app.</a></p>
              </AttributionA>
              <AttributionA>
                <p>&nbsp;&nbsp;<i>Coded by</i><a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
              </AttributionA>
          </Attribution>
        </footer>
    </Container>
  )
}

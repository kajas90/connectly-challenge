import styled, { keyframes } from 'styled-components'
import { Communicators } from '../../enums/communicators'
import { CommunicatorIcon } from '../icons/CommunicatorIcon'
import { Button } from '../Button'

export function CommunicatorButtons() {
  return (
    <Wrapper>
      {Object.values(Communicators).map((type, index) => (
        <AnimatedButton delay={index} key={type}>
          <StyledIcon type={type} />
          {type}
        </AnimatedButton>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const flyIn = keyframes`
  0% {
    transform: translateX(500px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    transform: translateX(0) scale(0.7);
    opacity: 0.7;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const AnimatedButton = styled(Button)<{ delay: number }>`
  transform: translateX(500px);
  animation: ${flyIn} 1s normal forwards ease-in-out;
  animation-delay: ${({ delay }) => `${delay * 200}ms`};
  margin-bottom: 16px;
`

const StyledIcon = styled(CommunicatorIcon)`
  vertical-align: middle;
  margin-right: 8px;
`

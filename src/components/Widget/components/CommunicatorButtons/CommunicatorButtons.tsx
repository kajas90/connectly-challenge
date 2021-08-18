import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Communicator } from '../../../../types/interfaces'
import { CommunicatorIcon } from '../../../icons/CommunicatorIcon'
import { Button } from '../../../Button'
import { Communicators } from '../../../../enums/communicators'

import { LiveChat } from '../LiveChat'

interface CommunicatorButtonsProps {
  items: Communicator[]
}

export function CommunicatorButtons({ items }: CommunicatorButtonsProps) {
  const [isVisible, setIsVisible] = useState<boolean>()

  const handleClick = (type: Communicators, value: string) => {
    if (type === Communicators.LIVECHAT) {
      setIsVisible(true)
    } else {
      window.open(value, '_blank')
    }
  }
  return (
    <Wrapper>
      {items.map(({ type, value }, index) => (
        <AnimatedButton
          onClick={() => handleClick(type, value)}
          delay={index}
          key={type}
        >
          <StyledIcon type={type} />
          {type}
        </AnimatedButton>
      ))}
      {items.some((item) => item.type === Communicators.LIVECHAT) &&
        isVisible && <LiveChat />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const flyIn = keyframes`
  0% {
    transform: translateX(500px) scale(0.8);
    opacity: 0.7;
  }
  80% {
    transform: translateX(0) scale(0.8);
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
  animation-delay: ${({ delay }) => `${delay * 300}ms`};
  margin-bottom: 16px;
`

const StyledIcon = styled(CommunicatorIcon)`
  vertical-align: middle;
  margin-right: 8px;
`

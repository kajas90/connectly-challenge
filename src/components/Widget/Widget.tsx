import { useState } from 'react'
import styled from 'styled-components'
import { useScrollTimout } from '../../hooks/useScrollTimeout'

import { FullsizeMessage } from './components/FullsizeMessage'
import { MessageIcon, CloseIcon } from '../icons'
import { CommunicatorButtons } from './components/CommunicatorButtons'
import { Button } from '../Button'

const DELAY = 3000

export function Widget() {
  const isSmall = useScrollTimout(DELAY)
  const [showButtons, setShowButtons] = useState(false)

  return (
    <Wrapper>
      {showButtons && <CommunicatorButtons />}
      <ToRight>
        {!showButtons && (
          <Button onClick={() => setShowButtons(true)}>
            {isSmall ? <MessageIcon /> : <FullsizeMessage />}
          </Button>
        )}
        {showButtons && (
          <Button onClick={() => setShowButtons(false)}>
            <CloseIcon />
          </Button>
        )}
      </ToRight>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 24px;
`

const ToRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

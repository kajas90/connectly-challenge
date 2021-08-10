import styled from 'styled-components'
import { useScrollTimout } from '../../hooks/useScrollTimeout'

import { FullsizeMessage } from '../FullsizeMessage'
import { MessageIcon } from '../icons'

const DELAY = 3000

export function Widget() {
  const isSmall = useScrollTimout(DELAY)

  return (
    <Wrapper>
      <Button>{isSmall ? <MessageIcon /> : <FullsizeMessage />}</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 24px;
`

const Button = styled.button`
  background: white;
  border-radius: 40px;
  padding: 16px;
  transition: all 0.5s ease;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  border: none;
  line-height: 0;
`

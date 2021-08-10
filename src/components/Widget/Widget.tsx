import styled from 'styled-components'
import { useScrollTimout } from '../../hooks/useScrollTimeout'

import { FullsizeMessage } from '../FullsizeMessage'

const DELAY = 3000

export function Widget() {
  const isSmall = useScrollTimout(DELAY)

  return <Wrapper>{isSmall ? 'small' : <FullsizeMessage />}</Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 24px;
  background: white;
  border-radius: 40px;
  padding: 16px 24px;
  width: auto;
  transition: all 0.5s ease;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

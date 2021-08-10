import styled from 'styled-components'
import { useScrollTimout } from '../../hooks/useScrollTimeout'

const DELAY = 3000

export function Widget() {
  const isSmall = useScrollTimout(DELAY)

  return <Wrapper>{isSmall ? 'small version' : 'full version'}</Wrapper>
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  right: 24px;
`

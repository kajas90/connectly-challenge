import styled from 'styled-components'
import { Communicators } from '../../enums/communicators'
import { CommunicatorIcon } from '../icons/CommunicatorIcon'
export function FullsizeMessage() {
  return (
    <StyledNav>
      {Object.values(Communicators).map((type) => (
        <MarginIcon type={type} />
      ))}
      Message us
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const MarginIcon = styled(CommunicatorIcon)`
  margin-right: 8px;
`

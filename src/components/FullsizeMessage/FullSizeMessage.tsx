import styled from 'styled-components'
import { Communicators } from '../../enums/communicators'
import { CommunicatorIcon } from '../icons/CommunicatorIcon'

export function FullsizeMessage() {
  return (
    <Wrapper>
      {Object.values(Communicators).map((type) => (
        <MarginIcon key={type} type={type} />
      ))}
      Message us
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const MarginIcon = styled(CommunicatorIcon)`
  margin-right: 8px;
`

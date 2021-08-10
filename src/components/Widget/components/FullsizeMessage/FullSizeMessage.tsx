import styled from 'styled-components'
import { Communicator } from '../../../../types/interfaces'
import { CommunicatorIcon } from '../../../icons/CommunicatorIcon'

interface FullsizeMessageProps {
  items: Communicator[]
}

export function FullsizeMessage({ items }: FullsizeMessageProps) {
  return (
    <Wrapper>
      {items.map(({ type }) => (
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

import { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useScrollTimout } from '../../hooks/useScrollTimeout'
import { useIsMobileDevice } from '../../hooks/useIsMobileDevice'
import { FullsizeMessage } from './components/FullsizeMessage'
import { MessageIcon, CloseIcon } from '../icons'
import { CommunicatorButtons } from './components/CommunicatorButtons'
import { Button } from '../Button'
import { Communicators } from '../../enums/communicators'
import { Communicator } from '../../types/interfaces'

const DELAY = 3000

// here I would consider opening some messaging apps :)
const calculateUrl = (
  type: Communicators,
  value: string,
  isMobile: boolean
): string => {
  switch (type) {
    case Communicators.SMS:
      return isMobile ? `sms:/${value}` : `sms:/${value}`
    case Communicators.FB:
      return `http://m.me/${value}`
    case Communicators.IN:
      return `https://instagram.com/${value}`
    default:
      return value
  }
}

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}
interface WidgetProps {
  accounts: PartialRecord<Communicators, string>
}

export function Widget({ accounts }: WidgetProps) {
  const isSmall = useScrollTimout(DELAY)
  const isMobile = useIsMobileDevice()
  const [showButtons, setShowButtons] = useState(false)

  const communicators = useMemo(
    () =>
      Object.values(Communicators).reduce(
        (result: Communicator[], type: Communicators) => {
          return accounts[type]
            ? [
                ...result,
                {
                  type,
                  value: calculateUrl(type, accounts[type] || '', isMobile)
                }
              ]
            : result
        },
        []
      ),
    [accounts, isMobile]
  )

  return (
    <Wrapper>
      {showButtons && <CommunicatorButtons items={communicators} />}
      <ToRight>
        {!showButtons && (
          <Button onClick={() => setShowButtons(true)}>
            {isSmall ? (
              <MessageIcon />
            ) : (
              <FullsizeMessage items={communicators} />
            )}
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

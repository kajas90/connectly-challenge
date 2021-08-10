import { Communicators } from '../../enums/communicators'
import { FBIcon } from './FBIcon'
import { INIcon } from './INIcon'
import { SMSIcon } from './SMSIcon'

export function CommunicatorIcon({ type, ...props }: { type: Communicators }) {
  switch (type) {
    case Communicators.SMS:
      return <SMSIcon {...props} />
    case Communicators.FB:
      return <FBIcon {...props} />
    case Communicators.IN:
      return <INIcon {...props} />

    default:
      return <SMSIcon {...props} />
  }
}

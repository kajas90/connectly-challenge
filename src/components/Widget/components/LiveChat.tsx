import { Button } from '../../Button'

export function LiveChat() {
  const handleSubmit = () => {}

  return (
    <form onSubmit={handleSubmit}>
      <textarea />
      <Button type="submit">text us</Button>
    </form>
  )
}

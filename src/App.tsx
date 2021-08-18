import { Widget } from './components/Widget'

function App() {
  return (
    <div>
      <Widget
        accounts={{
          sms: '+48123123123',
          messenger: 'kasia',
          livechat: 'kasia@gmail.com'
        }}
      />
    </div>
  )
}

export default App

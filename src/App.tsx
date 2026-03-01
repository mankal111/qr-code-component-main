import qrImage from '../images/image-qr-code.png'
import './App.css'
import { QRCard } from './components/QRCard'

function App() {

  return (
    <>
      <QRCard
        qrImage={qrImage}
        title="Improve your front-end skills by building projects"
        description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/mankal111">Manolis</a>.
      </div>
    </>
  )
}

export default App

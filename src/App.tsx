import qrImage from '../images/image-qr-code.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src={qrImage} alt="QR Code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/mankal111">Manolis</a>.
      </div>
    </>
  )
}

export default App

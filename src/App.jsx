import Initial from './Components/Initial'
import './App.css'
import Aboults from './Components/Aboult'
import WhatsAppButton from './Components/BtnWhatsapp'
import Imersao from './Components/Imersao'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className=' flex flex-col p-6 gap-8 items-center h-screen w-screen bg-linear-[45deg,#101828_70%,#101] overflow-x-hidden'>
          <Initial />
          <Aboults />
          <Imersao />

          <Footer />
          <WhatsAppButton />
      </div>
    </>
  )
}

export default App

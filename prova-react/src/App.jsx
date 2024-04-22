
import './App.css'
import Sessao from './components/Sessao'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='tudo'>
      <Header />

      <Sessao />

      <div className='galeria'>
      <Galeria 
      img='./imagem1.jpg'/>
      <Galeria 
      img='./imagem2.jpg'/>
      <Galeria 
      img='./imagem3.jpg'/>
      <Galeria 
      img='./imagem4.jpg'/>
      <Galeria 
      img='./imagem5.jpg'/>
      <Galeria 
      img='./imagem6.jpg'/>
      </div>

      <Footer />
    </div>
  )
}

export default App


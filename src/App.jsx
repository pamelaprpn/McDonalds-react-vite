import Header from './components/Menu'
import Main from './components/Main'
import Body from './components/Body'
import Footer from './components/Footer'
import { GlobalStyle } from './components/Menu/styled'


function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App



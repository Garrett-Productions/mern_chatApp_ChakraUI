import './App.css'
// import { Button } from "@chakra-ui/button"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={HomePage} />
          {/* <Route path="/chats" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

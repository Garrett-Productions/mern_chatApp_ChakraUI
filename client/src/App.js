import './App.css';
// import { Button } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './comps/Homepage';
import ChatPage from './comps/ChatPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Homepage} exact />
        <Route path='/chats' Component={ChatPage}/>
      {/* <Button colorScheme='teal'>Button</Button> */}
      </Routes>
    </div>
  );
}

export default App;

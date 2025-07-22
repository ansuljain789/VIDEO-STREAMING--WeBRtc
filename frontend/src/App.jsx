
import { Route, Routes } from 'react-router'
import './App.css'
import LobbyScreens from './Screens/LobbyScreens'
import RoomPage from './Screens/Room'
function App() {


  return (
    <>
    <div className='app'>
  
    <Routes>
       <Route path='/' element={<LobbyScreens/>}/>
       <Route path='/room/:roomId' element={<RoomPage/>}/>
       

    </Routes>

    </div>
      
    </>
  )
}

export default App

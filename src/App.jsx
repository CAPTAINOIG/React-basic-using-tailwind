
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomModal from './component/CustomModal'
import Nav from './component/Nav'
import Pop from './component/Pop'
import Loader from './component/Loader'




function App() {

  return (
    <>
    
    <div className='text-pink-900'>Hello world</div>
   
   <Routes>
   <Route path='/' element={<Loader/>}/>
    <Route path='/modal' element={<CustomModal/>}/>
    <Route path='/navbar' element={<Nav/>}/>
    <Route path='/pop' element={<Pop/>}/>
    
   </Routes>
    </>
  )
}

export default App

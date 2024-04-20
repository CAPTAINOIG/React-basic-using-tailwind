
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CustomModal from './component/CustomModal'
import Nav from './component/Nav'
import Pop from './component/Pop'
import Loader from './component/Loader'
import Rootlayout from './layout/Rootlayout'
import Hello from './component/Hello'
import Select from './component/Select'
import State from './component/State'
import ImageGallery from './component/ImageGallery'





function App() {

  return (
    <>
   <Routes>
   <Route path='/' element={<Loader/>}/>
    <Route path='/modal' element={<CustomModal/>}/>
    <Route path='/navbar' element={<Nav/>}/>
    <Route path='/pop' element={<Pop/>}/>
    <Route path='/hello' element={<Hello/>}/>
    <Route path='layout/*' element={<Rootlayout/>}/>
    <Route path='/select' element={<Select/>}/>
    <Route path='/state' element={<State/>}/>
    <Route path='/gallery' element={<ImageGallery/>}/>
   </Routes>
    </>
  )
}

export default App

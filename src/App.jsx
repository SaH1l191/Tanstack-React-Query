
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostsButton from './PostsButton'
import PostsById from './UserById/postsById'
// import PostsRQ from './PostsRQ'

function App() {

  return (
    <div className=''>
      <Routes>

    <Route  path='/' element={<PostsButton/>} />
    <Route  path='/users/:id' element={<PostsById/>} />

      </Routes>
    

    {/* starter */}
      {/* <PostsRQ/> */}


    {/* mid  */}
      {/* <PostsButton/> */}
    </div>
  )
}

export default App


import { RouterProvider } from 'react-router'
import { routers } from './routers'
import { Provider, useDispatch } from 'react-redux'
import { globalState } from './store'
import { moviesAction } from './store/actions/movies.action'
import { useEffect } from 'react'
import { getmoviesSearch } from './services/movies-services'

function App() {
  const dis=useDispatch()
    useEffect(()=>{
  
          getmoviesSearch()
          .then(data=>dis(moviesAction(data.Search)))
          .catch(err=>console.log("error",err))
      }),[]

  return (
    
      <RouterProvider router={routers}/>
    
  
  )
}

export default App

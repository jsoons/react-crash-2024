import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// import React from 'react'
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobsListings from "./components/JobsListings"
import NavBar from "./components/NavBar"
import ViewAllJobs from "./components/ViewAllJobs"

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>}/>)
)


const App = () => {
  return ( <RouterProvider router={router}/>
    
  )
}

export default App
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// import React from 'react'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { JobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'



const App = () => {
  const addJob = async (newJob) => {
    // console.log(newJob)
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return

  }

  const deleteJob = async (id) => {
    //console.log(`Delete ${id}`)
     // console.log(newJob)
     const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={JobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return (<RouterProvider router={router} />

  )
}

export default App

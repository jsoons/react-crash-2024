// import React from 'react'
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobsListings from "./components/JobsListings"
import NavBar from "./components/NavBar"
import ViewAllJobs from "./components/ViewAllJobs"



const App = () => {
  return (
    <>
      {/* Content from  _theme_files/index.html */}
      <NavBar/>
      <Hero />
      <HomeCards />
      <JobsListings/>
      <ViewAllJobs/>
      
      

      
    </>
  )
}

export default App
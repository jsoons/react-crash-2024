// import React from 'react'
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobsListings from "./components/JobsListings"
import NavBar from "./components/NavBar"



const App = () => {
  return (
    <>
      {/* Content from  _theme_files/index.html */}
      <NavBar/>
      <Hero />
      <HomeCards />
      <JobsListings/>
      
      

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
        >
      </section>

    </>
  )
}

export default App
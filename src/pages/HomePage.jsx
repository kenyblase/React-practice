import React from 'react'
import Hero from '../Components/Hero'
import HomeCards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/viewAllJobs'


const HomePage = () => {
  return(
    <>
      <Hero/>
      <HomeCards/>
      <JobListings isHome = {true}/>
      <ViewAllJobs/>
    </>
  )
}

export default HomePage

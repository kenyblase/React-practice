import React from 'react'
import {Link} from "react-router-dom"
import Cards from "./Card"
import JobWrapper from './JobWrapper'

const HomeCards = () => {
  return (
 <>
  <JobWrapper>
    <Cards>
        <h2 className="text-2xl font-bold">For Developers</h2>
      <p className="mt-2 mb-4">
        Browse our React jobs and start your career today
      </p>
      <Link
        to="/jobs"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        Browse Jobs
      </Link>
    </Cards>
    <Cards bg = 'bg-indigo-100'>
      <h2 className="text-2xl font-bold">For Employers</h2>
      <p className="mt-2 mb-4">
        List your job to find the perfect developer for the role
      </p>
      <Link
        to="/add-job"
        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
      >
        Add Job
      </Link>
    </Cards>
  </JobWrapper>
 </>
  )
}

export default HomeCards

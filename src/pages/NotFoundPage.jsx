import React from 'react'
import {Link} from "react-router-dom"
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
        <FaExclamationTriangle className='text-yellow-400 mb-4 fa-4x'/>
        <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
        <p className='text-xl mb-5'>This Page Does Not Exist</p>
        <Link
        to='/'
        className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4'>Go Back</Link>
    </section>    
  )
}

export default NotFoundPage
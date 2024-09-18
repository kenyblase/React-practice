import React from 'react'
import {useState} from 'react'
import { FaMapMarker } from 'react-icons/fa'

const JobListing = ({Job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)
  
  let description = Job.description

  if (!showFullDescription) {
    description = description.substring(0, 100) +'...'
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">{Job.type}</div>
                <h3 className="text-xl font-bold">{Job.title}</h3>
              </div>

              <div className="mb-5">
               {description}
              </div>

              <button onClick={() => setShowFullDescription((prevState) => !prevState)} className='text-indigo-500 mb-5 hover:text-indigo-600'>{showFullDescription ? 'Show Less' : 'Show More'}</button>
              

              <h3 className="text-indigo-500 mb-2">{Job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className='inline text-lg mb-1 mr-1'/>
                  {Job.location}
                </div>
                <a
                  href={`/jobs/${Job.id}`}
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
  )
}

export default JobListing
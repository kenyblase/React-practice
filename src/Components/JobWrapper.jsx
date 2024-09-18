import React from 'react'

const JobWrapper = ({children}) => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                {children}
            </div>
        </div>
    </section>
  )
}

export default JobWrapper

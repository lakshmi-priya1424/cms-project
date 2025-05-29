import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
   <section className="flex flex-col items-center justify-center h-screen bg-white">
         <div className='border-1 border-gray-400 px-15 py-15 rounded-sm shadow-md'>
             <h1 className="text-5xl font-bold-md mb-4 ">404</h1>
             <h1 className="text-2xl font-bold mb-4 ">Sorry!😶‍🌫️ Page Not Found!</h1>
           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
             <Link to={'/'}>
             Go to Home
             </Link>
           </button>
        </div>
    </section>
    
  )
}
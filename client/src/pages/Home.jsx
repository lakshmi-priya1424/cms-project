import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
   <section className="flex mt-0 flex-col items-center justify-center h-screen">
           <h1 className="text-4xl font-bold mb-4">Welcome to My Application</h1>
           <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
             { <Link to={'/login'}>
             Get Started
             </Link> }
           </button>
        </section>
    
    </>
  )
}
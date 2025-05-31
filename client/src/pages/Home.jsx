import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <section className="flex mt-0 flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to My Application</h1>
        <Link to={'/login'}>
          <button className="px-6 py-3 bg-[#e50914] text-white rounded hover:bg-[#b0060f] font-semibold text-lg shadow-lg transition">
            Get Started
          </button>
        </Link>
      </section>
    </>
  )
}

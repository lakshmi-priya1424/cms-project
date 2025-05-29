import React from 'react'
import { Link, Outlet } from 'react-router'

export default function BasicLayout() {
    return (
    <>
        <header className="bg-blue-400 text-white flex items-center justify-between sticky top-0 p-2 space-x-4 shadow-lg z-50">
             <div className="flex items-center space-x-4">
                <Link to={'/'} className="text-3xl font-bold hover:scale-110 transition-transform duration-200">🏠</Link>
                </div>
             <div className="flex gap-3">
             <div className='border-3 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-400 transition-colors duration-200 shadow-md cursor-pointer font-semibold'>
             <Link to={'/login'} className="no-underline">sign-in</Link> 
                </div>
             <div className='border-3 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-400 transition-colors duration-200 shadow-md cursor-pointer font-semibold'>
             <Link to={'/signup'} className="no-underline">sign-up</Link> 
                </div>
             </div>
        </header>
        <main className="max-w-4xl mx-auto p-6 bg-white min-h-[80vh] rounded-lg shadow-lg mt-6">
             <Outlet/>
        </main>
    </>
    )
}
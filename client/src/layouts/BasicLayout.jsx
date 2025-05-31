import React from 'react'
import { Link, Outlet } from 'react-router'



export default function BasicLayout() {
   return (
   <>
   <div  style={{
        backgroundImage: "url('https://static.wixstatic.com/media/defc79_96530b31e45d42469d115cf72f9aab1c~mv2.gif')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
     <header className="bg-transparent  text-white flex items-center justify-between sticky top-2 p-2 space-x-4 z-30">
   <div className="flex items-center space-x-4">
      <Link to={'/'} className="text-3xl font-bold hover:scale-110 transition-transform duration-200">🏠</Link>
   </div>
   <div className="flex gap-3">
      <Link to={'/login'} className='border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-400 transition-colors duration-200 shadow-md cursor-pointer font-semibold no-underline'>sign-in</Link>
      <Link to={'/signup'} className='border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-400 transition-colors duration-200 shadow-md cursor-pointer font-semibold no-underline'>sign-up</Link>
   </div>
</header>

      <main>
         <Outlet/>
      </main>
      <footer className="bg-blue-400 text-white mt-10 py-4 rounded-t-lg shadow-inner flex flex-col items-center">
         <div className="flex space-x-6 mb-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-900 transition-colors duration-200">
               <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 5.924c-.793.352-1.645.59-2.538.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.086A12.72 12.72 0 0 1 3.112 4.89a4.48 4.48 0 0 0 1.387 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.594 4.393 4.48 4.48 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.116A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.018c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/>
               </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-900 transition-colors duration-200">
               <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
               </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-900 transition-colors duration-200">
               <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
               </svg>
            </a>
         </div>
         <span className="text-sm">&copy; {new Date().getFullYear()} Team Project. All rights reserved.</span>
      </footer>
      </div>
   </>
   )
}
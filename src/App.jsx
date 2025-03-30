import {  useState } from 'react';
import './App.css'
import ImageHandler from './Components/ImageHandler.jsx';
function App() {
  

  const [username, setUsername] = useState(null)
  const [quote, setQuote] = useState(null)

  return (
    <div className='min-h-screen md:p-10 p-0 md:w-[45%] mx-auto'>
        <div className='w-full bg-[#ffffff3b] md:p-5 border-[0px] border-[#996f5eac] rounded-lg'>
          <div className='p-5 md:p-0'>
            <h1 className='text-2xl text-[#622912] font-bold'>Eid Mubarak! 🌙✨</h1>
            <p className='text-sm'>
              May this Eid bring you endless joy, peace, and blessings. Celebrate with love, laughter, <br /> and gratitude! 🎉💖
            </p>
          </div>
          
          <div className='flex flex-col md:flex-row p-5 md:p-2 space-x-2 w-full mt-5 border-[0px] border-[#b78b7aac] rounded-lg'>
            <div className='md:w-[30%]'>
              <label className='text-sm ml-1' htmlFor="name">Full name</label><br />
              <input onChange={(e) => setUsername(e.target.value)} className='outline-none border-[1px] border-[#996f5eac] p-2 rounded-lg mt-1 placeholder:text-[#6b4f44] w-full bg-[#5a3c302e]' id='name' type="text" placeholder='Your name' />
            </div>
            <div className='md:w-[70%]'>
              <label className='text-sm ml-1' htmlFor="quote">Your quote</label><br />
              <input onChange={(e) => setQuote(e.target.value)} className='outline-none border-[1px] border-[#996f5eac] p-2 rounded-lg mt-1 placeholder:text-[#6b4f44] w-full bg-[#5a3c302e]' id='quote' type="text" placeholder='Share your Eid blessings or a heartfelt quote here... ✨🌙' />
            </div>
          </div>

          <div className='mt-5'>
            <ImageHandler username={username} quote={quote}></ImageHandler>
          </div>
        </div>
    </div>
  )
}

export default App

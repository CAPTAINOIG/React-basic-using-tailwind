import React, { useState } from 'react'
import Source from './Source';
import Visitor from './Visitor';
import Revenue from './Revenue';
import Sales from './Sales';
import Conversion from './Conversion';

const Channels = () => {
    const [currentChannel, setCurrentChannel] = useState('source')
    const handleChannel = (current) =>{
        // console.log(current);
        setCurrentChannel(current)
    }
  return (
    <div className="p-10 bg-white shadow  mb-7 lg:mx-2 md:mx-6 mx-4 dark:bg-gray-700">
      <h1 className='text-xl my-2 font-bold'>Top Channels</h1>
        <div className="grid grid-cols-5 gap-4 mb-8">
        <button onClick={() => handleChannel('source')} className={`py-2 px-1 text-white rounded transition-all duration-500 ease-in-out transform ${currentChannel === 'source' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>SOURCE</button>
        <button onClick={() => handleChannel('visitors')} className={`py-2 px-1 text-white rounded transition-all duration-500 ease-in-out transform ${currentChannel === 'visitors' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>VISITORS</button>
        <button onClick={() => handleChannel('revenues')} className={`py-2 px-1 text-white rounded transition-all duration-500 ease-in-out transform ${currentChannel === 'revenues' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>REVENUES</button>
        <button onClick={() => handleChannel('sales')} className={`py-2 px-1 text-white rounded transition-all duration-500 ease-in-out transform ${currentChannel === 'sales' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>SALES</button>
        <button onClick={() => handleChannel('conversion')} className={`py-2 px-1 text-white rounded transition-all duration-500 ease-in-out transform ${currentChannel === 'conversion' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>CONVERSION</button>
    </div>
    <div>
        {currentChannel === 'source' && <Source/>}
        {currentChannel === 'visitors' && <Visitor/>}
        {currentChannel === 'revenues' && <Revenue/>}
        {currentChannel === 'sales' && <Sales/>}
        {currentChannel === 'conversion' && <Conversion/>}

    </div>
    </div>
  )
}

export default Channels
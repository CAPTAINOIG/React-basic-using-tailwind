import React, { useState } from 'react'
import Account from './Account';
import Information from './Information';
import Security from './Security';
import Social from './Social';

const SettingsData = () => {
    const [currentSetting, setCurrentSetting] = useState('account')
    const handleSetting = (setting) =>{
        // console.log(current);
        setCurrentSetting(setting)
    }
  return (
    <div className="p-10 bg-white shadow  mb-7 lg:mx-2 md:mx-6 mx-4 dark:bg-gray-700">
      <h1 className='text-xl my-2 font-bold'>Settings</h1>
        <div className="flex mb-8">
        <button onClick={() => handleSetting('account')} className={`text-black py-2 px-1 rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'account'&& 'bg-blue-700 border-t-4 text-white border-blue-600 scale-105'}`}>Security</button>
        <button onClick={() => handleSetting('information')} className={`py-2 px-1 text-black rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'information' && 'bg-blue-700 text-white border-t-4 border-blue-600 scale-105'}`}>Information</button>
        <button onClick={() => handleSetting('security')} className={`py-2 px-1 text-black rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'security' && 'bg-blue-700 border-t-4 border-blue-600 text-white  scale-105'}`}>Security</button>
        <button onClick={() => handleSetting('social')} className={`py-2 px-1 text-black rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'social' && 'bg-blue-700 border-t-4 text-white  border-blue-600 scale-105'}`}>Social</button>
    </div>
    <div>
        {currentSetting === 'account' && <Account/>}
        {currentSetting === 'information' && <Information/>}
        {currentSetting === 'security' && <Security/>}
        {currentSetting === 'social' && <Social/>}
    </div>
    </div>
  )
}

export default SettingsData
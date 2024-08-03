import React, { useState } from 'react'
import Account from './Account';
import Information from './Information';
import Security from './Security';
import Social from './Social';
import { Link } from 'react-router-dom';

const SettingsData = () => {
    const [currentSetting, setCurrentSetting] = useState('account')
    const handleSetting = (setting) =>{
        // console.log(current);
        setCurrentSetting(setting)
    }
  return (
    <div id='fontface' className="px-10 py-6 bg-white lg:mx-2 md:mx-6 mx-4 dark:bg-gray-700">
      <h1 className='text-3xl my-5 font-semi-bold'>Settings</h1>
        <div className="flex mb-8">
        <button onClick={() => handleSetting('account')} className={`text-black px-3 rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'account'&& 'bg-blue-700 border-t-4 text-white border-blue-600 scale-105'}`}>Account</button>
        <button onClick={() => handleSetting('information')} className={`px-3 text-black rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'information' && 'bg-blue-700 text-white border-t-4 border-blue-600 scale-105'}`}>Information</button>
        <button onClick={() => handleSetting('security')} className={`px-3 text-black rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'security' && 'bg-blue-700 border-t-4 border-blue-600 text-white  scale-105'}`}>Security</button>
        <button onClick={() => handleSetting('social')} className={`py-2 px-3 text-black rounded transition-all duration-500 ease-in-out transform ${currentSetting === 'social' && 'bg-blue-700 border-t-4 text-white  border-blue-600 scale-105'}`}>Social</button>
    </div>
    <div>
        {currentSetting === 'account' && <Account/>}
        {currentSetting === 'information' && <Information/>}
        {currentSetting === 'security' && <Security/>}
        {currentSetting === 'social' && <Social/>}
    </div>

    {/* <!-- Footer --> */}
            <footer className="text-sm flex justify-between mt-3">
                <div>© 2020 FILEDASH - <a href="http://laborasyon.com" target="_blank">LABORAYSON</a></div>
                <div>
                    <nav className="lg:block md:block hidden">
                      <div className='flex gap-5'>
                        <Link href="https://themeforest.net/licenses/standard" class="nav-link">LICENCES</Link>
                        <Link href="#" class="nav-link">CHANGE LOG</Link>
                        <Link href="#" class="nav-link">GET HELP</Link>
                      </div>
                    </nav>
                </div>
            </footer>
    </div>
  )
}

export default SettingsData
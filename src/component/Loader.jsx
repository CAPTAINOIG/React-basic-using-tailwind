import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loader from '../assets/loader.gif';
import ImageGallery from './ImageGallery';



const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/gallery');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='relative'>
      {loading ? (
        <div className='bg-slate-200 dark:bg-slate-200 h-screen w-full absolute'>
          <img id='img'
            src={loader}
            alt="Loading..."
            style={{ display: 'block', margin: '0 auto', width: '250px', height: '250px', marginTop:'200px' }}
          />
        </div>
      ) : (
        <div>
          <ImageGallery/>
        </div>
      )}
    </div>
  );
};

export default Loader;
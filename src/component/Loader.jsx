import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import CustomModal from './CustomModal';
import loader from '../assets/loader.gif'

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const navigate  = useNavigate ();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Navigate to your signup page after loading (adjust the path as needed)
      navigate('/modal');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <h2>Loading...</h2>
          <img src={loader} alt="" />
          {/* Add your loader styles here */}
        </div>
      ) : (
        <div>
          {/* You can add additional content or components here */}
          <CustomModal />
        </div>
      )}
    </div>
  );
};

export default Loader;

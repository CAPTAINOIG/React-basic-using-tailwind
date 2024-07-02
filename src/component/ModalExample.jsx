import React, { useState } from 'react';

const ModalExample = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModal1 = () => setShowModal1(!showModal1);
  const toggleModal2 = () => setShowModal2(!showModal2);

  return (
    <div>
      <a href="#lost" className="text-blue-500 hover:underline" onClick={toggleModal1}>Click</a>
      <a href="#myModal" className="btn bg-blue-500 text-white py-2 px-4 rounded" onClick={toggleModal1}>Launch modal</a>

      {showModal1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/2">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="text-lg font-semibold">Modal title</h4>
              <button type="button" className="text-black" onClick={toggleModal1}>×</button>
            </div>
            <div className="p-4">
              ...
              <a href="#myModal2" className="btn bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={toggleModal2}>Open modal2</a>
            </div>
            <div className="flex justify-end p-4 border-t">
              <a href="#" className="btn bg-gray-500 text-white py-2 px-4 rounded" onClick={toggleModal1}>Close</a>
            </div>
          </div>
        </div>
      )}

      {showModal2 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" data-backdrop="static">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/2">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="text-lg font-semibold">2nd Modal title</h4>
              <button type="button" className="text-black" onClick={toggleModal2}>×</button>
            </div>
            <div className="p-4">
              ..
            </div>
            <div className="flex justify-end p-4 border-t">
              <a href="#" className="btn bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={toggleModal2}>Close</a>
              <a href="#" className="btn bg-blue-500 text-white py-2 px-4 rounded">Save changes</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;

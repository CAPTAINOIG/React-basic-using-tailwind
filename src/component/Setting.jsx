import React, { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const list = (anchor) => (
    <div
      className={`w-${anchor === 'top' || anchor === 'bottom' ? 'full' : '64'} p-4 bg-white`}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className='lg:ms-[30%]'>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="m-2 p-2 bg-blue-500 text-white rounded"
          >
            {anchor}
          </button>
          {state[anchor] && (
            <div
              className={`fixed inset-0 z-50 flex ${
                anchor === 'left'
                  ? 'justify-start'
                  : anchor === 'right'
                  ? 'justify-end'
                  : anchor === 'top'
                  ? 'items-start'
                  : 'items-end'
              }`}
            >
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={toggleDrawer(anchor, false)}
              ></div>
              <div
                className={`fixed bg-white shadow-lg transition-transform transform ${
                  anchor === 'left'
                    ? 'translate-x-0'
                    : anchor === 'right'
                    ? '-translate-x-0'
                    : anchor === 'top'
                    ? 'translate-y-0'
                    : '-translate-y-0'
                }`}
              >
                {list(anchor)}
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io'
import { IoChevronDown } from 'react-icons/io5'

const CheckboxDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="border flex gap-10 border-black px-4 py-2 ms-20 focus:outline-none focus:ring w-[80%]"
      >  <span>Select Products</span>
        {isOpen ? <IoIosArrowUp  size={18} /> : <IoChevronDown  size={18} />}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 ms-20 bg-white border border-gray-300 rounded shadow-lg z-10 p-4">
          <label className="block">
            <input
              type="checkbox"
              name="item1"
              checked={checkedItems.item1}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Item 1
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="item2"
              checked={checkedItems.item2}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Item 2
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="item3"
              checked={checkedItems.item3}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Item 3
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="item4"
              checked={checkedItems.item4}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Item 4
          </label>
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
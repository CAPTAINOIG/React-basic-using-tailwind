import React, { useState } from 'react'

const Checkbox = () => {
    const [checkBoxesManufacturer, setCheckBoxesManufacturer] = useState([
        {
            label: 'Manufacturer 1',
            checked: false,
            id: 1
        },
        {
            label: 'Manufacturer 2',
            checked: false,
            id: 2
        },
        {
            label: 'Manufacturer 3',
            checked: false,
            id: 3
        }
    ]);
    const [ManufacturerChecked, setManufacturerChecked] = useState([])

    const handleCheckBoxManufacturer = (ids) => {
        if (!Array.isArray(ids)) {
            ids = [ids]; // Convert to array if single ID is provided
        }

        const updatedCheckboxes = checkBoxesManufacturer.map(checkbox => {
            if (ids.includes(checkbox.id)) {
                return { ...checkbox, checked: !checkbox.checked };
            }
            return checkbox;
        });

        setCheckBoxesManufacturer(updatedCheckboxes);
        const manufacturer = updatedCheckboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.label);
        console.log(manufacturer);
        setManufacturerChecked(manufacturer)
    };

    return (
        <div className='p-2'>
            {checkBoxesManufacturer.map(checkbox => (
                <div className='flex justify-between' key={checkbox.id}>
                    <label>

                        {checkbox.label}
                        <input
                            type="checkbox"
                            checked={checkbox.checked}
                            onChange={() => handleCheckBoxManufacturer(checkbox.id)}
                        />
                    </label>
                </div>
            ))}
        </div>


    )
}

export default Checkbox
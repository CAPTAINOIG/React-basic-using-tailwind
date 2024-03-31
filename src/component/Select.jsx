import React, { useState } from 'react'

const Select = () => {
    const [isChecked, setIsChecked] = useState(false);
    // console.log(isChecked);
    const [isChecked1, setIsChecked1] = useState(false);
    // console.log(isChecked1);
    const [selected, setSelected] = useState([]);

        const [checkboxes, setCheckboxes] = useState([
            { id: 1, label: 'RSR', checked: false },
            { id: 2, label: 'Shoes', checked: false },
            { id: 3, label: 'Heels', checked: false },
            { id: 4, label: 'Jackets', checked: false },
            { id: 5, label: 'Stationeries', checked: false },
            { id: 6, label: 'Shoes', checked: false },
            { id: 7, label: 'Shoes', checked: false },
            { id: 8, label: 'Glasses', checked: false },


        ]);
    
        const SelectAll = () => {
            const updatedCheckboxes = checkboxes.map(checkbox => ({...checkbox, checked: true}));
            console.log(updatedCheckboxes);
            setCheckboxes(updatedCheckboxes);
            
        };
    
        const handleCheckboxChange = (ids) => {
            if (!Array.isArray(ids)) {
                ids = [ids]; // Convert to array if single ID is provided
            }
        
            const updatedCheckboxes = checkboxes.map(checkbox => {
                if (ids.includes(checkbox.id)) {
                    return { ...checkbox, checked: !checkbox.checked };
                }
                return checkbox;
            });
        
            setCheckboxes(updatedCheckboxes);
        
            ids.forEach(id => {
                const clickedCheckbox = updatedCheckboxes.find(checkbox => checkbox.id === id);
                if (clickedCheckbox) {
                    console.log(clickedCheckbox.label + ': ' + clickedCheckbox.checked);
                } else {
                    console.log('Checkbox not found');
                }
            });
        };
        
        // Example usage:
        // Assuming you want to toggle the checkboxes with IDs 2 and 4
        // handleCheckboxChange([2, 4]);
        
        // Or if you want to toggle a single checkbox with ID 3
        // handleCheckboxChange(3);
        
    
        const DeselectAll = () => {
            const Deselect = checkboxes.map(checkbox => ({...checkbox, checked:false}));
            console.log(Deselect);
            setCheckboxes(Deselect)
        };

    const handleSelectAll = () => {
        setIsChecked(true)
    };
    const handleDeselectAll = () => {
        setIsChecked(false)
    };

    function handleCbClick(ev) {
        const { checked, name } = ev.target;
        if (checked) {
            console.log(checked);
            // here, the name parameter is saved to selected then the selected will be used to filter. in form of array
            setSelected([...selected, name]);

        } else {
            setSelected([...selected.filter(selectedName => selectedName !== name)]);
        }
    };


    return (
        <>
            <div>
                <div className='flex gap-5'>
                    <button className='btn p-2 bg-purple-500' onClick={handleSelectAll}>SelectAll</button>
                    <button className='btn p-2 bg-purple-500' onClick={handleDeselectAll}>DeselectAll</button>
                </div>
                <div className='flex gap-10'>
                    <p>RSR</p>
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                </div>
                <div className='flex gap-10'>
                    <p>RSR</p>
                    <input type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} />
                </div>
                

                <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick} />
                <span>Wifi</span>
                <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick} />
                <span>parking</span>
                <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick} />
                <span>tv</span>
                

                <div>
            {checkboxes.map(checkbox => (
                <div key={checkbox.id}>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    {checkbox.label}
                </div>
            ))}
            <button className='btn p-2 bg-purple-500' onClick={SelectAll}>Select All</button>
            <button className='btn p-2 bg-purple-500' onClick={DeselectAll}>DeselectAll</button>
        </div>
            </div>
        </>

    );
};

export default Select
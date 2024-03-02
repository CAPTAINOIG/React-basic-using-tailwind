import React, { useState } from 'react'

const Select = () => {
    const [isChecked, setIsChecked] = useState(false);
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
    
        const handleCheckboxChange = (id) => {
            console.log(id);
            // checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox: In this part, it checks if the id of the current checkbox is equal to the id being searched for.
            // If it is, a new checkbox object is created with all the properties of the current checkbox 
            // // each item has id and once clicked it generates an id. so here we check if the id are the same
            const updatedCheckboxes = checkboxes.map(checkbox => checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            );
            setCheckboxes(updatedCheckboxes);
        };
    
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
        // console.log(name);
        if (checked) {
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
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                </div>
                <div className='flex gap-10'>
                    <p>RSR</p>
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                </div>
                <div className='flex gap-10'>
                    <p>RSR</p>
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                </div>
                <div className='flex gap-10'>
                    <p>RSR</p>
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                </div>
                <div className='flex gap-10'>
                    <p>RSR</p>
                    <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
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
import React, { useState } from 'react';
import { users } from './data'; // Adjust the import based on your file structure
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DataTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [actionDropdown, setActionDropdown] = useState(null);
    const [hoveredColumn, setHoveredColumn] = useState(null);


    const statusColorMap = {
        active: 'text-green-700 bg-green-200',
        blocked: 'text-red-700 bg-red-200',
    };

    const storageLevelMap = {
        low: { width: "25%", color: "bg-blue-500" },
        medium: { width: "50%", color: "bg-yellow-500" },
        high: { width: "75%", color: "bg-green-500" },
        full: { width: "100%", color: "bg-red-500" },
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    const handleEntriesChange = (e) => {
        setEntriesPerPage(parseInt(e.target.value, 10));
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(users.map((user) => user.id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleSelectUser = (id) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
        } else {
            setSelectedUsers([...selectedUsers, id]);
        }
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedUsers = [...users].sort((a, b) => {
        if (sortConfig.key) {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
        }
        return 0;
    });

    const filteredUsers = sortedUsers.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastUser = currentPage * entriesPerPage;
    const indexOfFirstUser = indexOfLastUser - entriesPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleActionClick = (id) => {
        setActionDropdown(actionDropdown === id ? null : id);
    };

    const handleActionSelect = (action) => {
        console.log(`${action} for user ID: ${actionDropdown}`);
        setActionDropdown(null); // Close the dropdown after selection
    };

    return (
        <div className='lg:p-40 md:p-20 overflow-x-auto'>
            <div className="flex justify-between mb-4">
                <div>
                    <label htmlFor="entries" className="mr-2">Show:</label>
                    <select
                        id="entries"
                        value={entriesPerPage}
                        onChange={handleEntriesChange}
                        className="border px-2 py-1"
                    >
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                    <span>entries</span>
                </div>
                <div className="relative">
                    <label htmlFor="search" className="mr-2">Search:</label>
                    <input
                        id="search"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="border px-2 py-1"
                    />
                    {searchTerm && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            &times;
                        </button>
                    )}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 text-center">
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.length === users.length}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th className="py-2 text-center relative">
                                <div className="flex items-center justify-center">
                                    Name
                                    <button onClick={() => handleSort('name')} className="ml-2">
                                        {sortConfig.key === 'name' ? (
                                            sortConfig.direction === 'ascending' ? <IoIosArrowUp /> : <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </button>
                                </div>
                            </th>
                            <th className="py-2 text-center relative">
                                <div className="flex items-center justify-center">
                                    Email
                                    <button onClick={() => handleSort('email')} className="ml-2">
                                        {sortConfig.key === 'email' ? (
                                            sortConfig.direction === 'ascending' ? <IoIosArrowUp /> : <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </button>
                                </div>
                            </th>
                            <th className="py-2 text-center relative">
                                <div className="flex items-center justify-center">
                                    Role
                                    <button onClick={() => handleSort('role')} className="ml-2">
                                        {sortConfig.key === 'role' ? (
                                            sortConfig.direction === 'ascending' ? <IoIosArrowUp /> : <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </button>
                                </div>
                            </th>
                            <th className="py-2 text-center relative">
                                <div className="flex items-center justify-center">
                                    Status
                                    <button onClick={() => handleSort('status')} className="ml-2">
                                        {sortConfig.key === 'status' ? (
                                            sortConfig.direction === 'ascending' ? <IoIosArrowUp /> : <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </button>
                                </div>
                            </th>
                            <th className="py-2 text-center relative">
                                <div className="flex items-center justify-center">
                                    Storage
                                    <button onClick={() => handleSort('storage')} className="ml-2">
                                        {sortConfig.key === 'storage' ? (
                                            sortConfig.direction === 'ascending' ? <IoIosArrowUp /> : <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowDown />
                                        )}
                                    </button>
                                </div>
                            </th>
                            <th className="py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.id} className="text-center hover:bg-gray-100">
                                <td className="py-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={() => handleSelectUser(user.id)}
                                    />
                                </td>
                                <td className="py-2 flex ms-10 space-x-2">
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full inline-block" />
                                    <span className=''>{user.name}</span>
                                </td>
                                <td className="py-2 text-start w-48">{user.email}</td>
                                {/* <p className='text-center w-20 lg:ms-[80%]'>{user.email}</p> */}
                                <td className="py-2">{user.role}</td>
                                <td className="py-2">
                                    <div className="relative w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-full rounded-full ${storageLevelMap[user.storage].color}`}
                                            style={{
                                                width: storageLevelMap[user.storage].width
                                            }}
                                        ></div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className={`${statusColorMap[user.status]} rounded w-12 ms-10 p-1 px-2 text-[10px] mt-2`}>
                                        {user.status}
                                    </div>
                                </td>
                                <td className="py-2 relative">
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleActionClick(user.id)}
                                    >
                                        &#x22EE;
                                    </button>
                                    {actionDropdown === user.id && (
                                        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                                            <button
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                onClick={() => handleActionSelect('View Detail')}
                                            >
                                                View Detail
                                            </button>
                                            <button
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                onClick={() => handleActionSelect('Edit')}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                                                onClick={() => handleActionSelect('Delete')}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4 items-center">
                <button
                    onClick={handlePreviousPage}
                    className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded`}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;

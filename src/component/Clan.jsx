import React, { useState } from 'react';

const Clan = () => {
    const [currentSection, setCurrentSection] = useState('personal');

    const showSection = (section) => {
        setCurrentSection(section);
    }

    return (

        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-4 gap-4 mb-8">
                <button onClick={() => showSection('personal')} className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'personal' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Personal Information</button>
                <button onClick={() => showSection('contact')} className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'contact' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Contact Information</button>
                <button onClick={() => showSection('kin')}  className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'kin' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Next of Kin Information</button>
                <button onClick={() => showSection('account')}  className={`py-2 px-4 text-white rounded transition-all duration-500 ease-in-out transform ${currentSection === 'account' ? 'bg-blue-600 border-t-4 border-blue-600 scale-105' : 'bg-gray-800'}`}>Account Information</button>
            </div>
            <div className="bg-white p-6 rounded shadow-lg">
                {currentSection === 'personal' && (
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Personal Information</h1>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                    <td className="px-6 py-4 whitespace-nowrap">IT</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Access Request</td>
                                    <td className="px-6 py-4 whitespace-nowrap">2024-07-16</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-900">View</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                )}
                {currentSection === 'contact' && (
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Contact Information</h1>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                                    <td className="px-6 py-4 whitespace-nowrap">HR</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Leave Request</td>
                                    <td className="px-6 py-4 whitespace-nowrap">2024-07-15</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-900">View</button>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                )}
                {currentSection === 'kin' && (
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Next of Kin</h1>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                               
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">Michael Brown</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Finance</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Expense Request</td>
                                    <td className="px-6 py-4 whitespace-nowrap">2024-07-14</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-900">View</button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                )}
                {currentSection === 'account' && (
                    <div>
                        <h1 className="text-xl font-semibold mb-4">Account Information</h1>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">Emily Davis</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Marketing</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Campaign Request</td>
                                    <td className="px-6 py-4 whitespace-nowrap">2024-07-13</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-900">View</button>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Clan;

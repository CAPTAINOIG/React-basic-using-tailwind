import React from 'react'
import google from '../assets/image/google.svg'
import twitter from '../assets/image/twitter.svg'
import github from '../assets/image/github.svg'
import vee from '../assets/image/vee.svg'
import facebook from '../assets/image/facebook.svg'

const Conversion = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full ">
                <tbody className="text-xl divide-y divide-gray-600 dark:divide-white">
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap"><img src={vee} alt="Vee" /></td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">9.1K</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-green-600">$6,708</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">980</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 hover:text-blue-900">7.8%</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap"><img src={facebook} alt="Facebook" /></td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">3.5K</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-green-600">$5,768</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">890</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 hover:text-blue-900">9.8%</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap"><img src={github} alt="Github" /></td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">2.5K</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-green-600">$4,768</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">560</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 hover:text-blue-900">2.8%</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap"><img src={google} alt="Google" /></td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">3.5K</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-green-600">$5,768</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">590</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 hover:text-blue-900">4.8%</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap"><img src={twitter} alt="Twitter" /></td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">5.9K</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-green-600">$8,768</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap dark:text-white">690</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 hover:text-blue-900">9.8%</td>
                        <td className="px-2 py-4 md:px-6 md:py-4 whitespace-nowrap text-blue-600 cursor-pointer hover:text-blue-900">View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Conversion

import React from 'react'
import { DatePicker } from 'antd';

const RangePicker = () => {

  const { RangePicker } = DatePicker;



  const onDateChange = (dates) => {
    if (dates?.length) {
      const date = new Date(dates[0]?.$d)
      console.log(date);
      const date2 = new Date(dates[1]?.$d)

      const isoString = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)).toISOString();

      const isoString2 = new Date(Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0)).toISOString();

      console.log(isoString, isoString2)
    }
  }


  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold mb-1">Filter By Date</h2>
      <div className="h-[0.15rem] w-[10%] bg-gradient-to-r from-[#ce4809]  to-[#0e1012] "></div>
      <RangePicker disabledTime={true} onChange={onDateChange} className="h-fit py-[0.45rem] mt-4 bg-blue-400 text-white/80 border-stone-700 hover:bg-black active:bg-black visited:bg-black placeholder:text-white/80" />
    </div>
  )
}

export default RangePicker
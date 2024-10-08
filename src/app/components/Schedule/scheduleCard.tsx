"use client"
import {CLASSES, HEADER, TIMES} from "@/app/constants/schedule";
import {useEffect, useState} from "react";


const ScheduleCard = () => {
  const [times, setTimes] = useState(Array);

  const showTimes = (id:number) => {
    TIMES.filter((time) => {
      if (time.id === id) {
        setTimes(times => time.time)
      }
    })
  }

  const onChangeHandler = (e: any) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option: number = el.getAttribute('id');

    console.log(e)

    showTimes(Number(option))
  }

  useEffect(() => {
    showTimes(1)
  }, []);

  return (
    <>
      <div className="w-full bg-white border-gray-200 rounded-lg shadow">
        <p className="text-lg ml-3.5 font-extrabold mb-7 animate-pulse">Select Class Below</p>
        <div className="sm:hidden">
          <select
            onChange={onChangeHandler}
            className="bg-gray-50 border-0 border-b border-gray-200 rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-xl text-green-800 animate-bounce"
          >
            {CLASSES.map((c) => (
              <option key={c.id} id={c.id.toString()}>{c.class}</option>
              ))}
          </select>
        </div>
        <ul className="hidden text-sm font-medium text-center text-green-800 divide-x divide-gray-200 rounded-lg sm:flex rtl:divide-x-reverse">
          {CLASSES.map((c) => (
            <li key={c.id} className="w-full">
              <button
                onClick={() => showTimes(c.id)}
                className="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none animate-bounce">
                {c.class}
              </button>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200">
          <div className="p-4 bg-white rounded-lg md:p-8">
            <div className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
              {times.map((time: any, i) => (
                <div key={`${time}/${i}`} className="flex flex-col items-center justify-center">
                  <p className="mb-2 text-3xl font-extrabold text-green-800">{HEADER[i].day}</p>
                  <p className="text-gray-500">{time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleCard;

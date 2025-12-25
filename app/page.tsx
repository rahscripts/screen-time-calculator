"use client";
import { useState } from "react";
import Highlighter from "@/components/Highlighter";
import Footer from "@/components/Footer";

export default function Home() {

  const [time, setTime] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [TotalDaysInLife, setTotalDaysInLife] = useState(0);
  const month = TotalDaysInLife/28;
  const years = Math.round(month/12);

  const handleCalculate = () => {
    if (Number(time) == 0) return;
    if (Number(time) > 24) return alert("screen time should be less than 24hrs");
    const timeInYear = Number(time) * 365;
    //days of screen
    const days = Math.floor(timeInYear/24);
    const daysOfLife = days*70;
    setTotalDays(days);
    setTotalDaysInLife(daysOfLife);
    setIsOpen(true);
  };

  return (
    <section className="max-w-2xl mx-auto">
      <div className="max-w-2xl p-10 flex flex-col items-center justify-center mx-auto">
        <div>
          <div>
                <h1 className="text-3xl font-extrabold ">
                  Screen Time Calculator
                  <span className="uppercase font-black tracking-tighter text-xs italic underline decoration-wavy text-pink-600">
                      by MR
                      </span>
                      </h1>
            </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="max-md:text-xl text-2xl font-semibold mt-10">What is your <Highlighter rotate={2}>screen time</Highlighter> per day?</div>
          <div className="mt-5">
            <input
              type="number"
              placeholder="1,2,3,4,5"
              className="bg-pink-100 px-2 p-1 border-green-700 border-1 rounded mx-2"
              onChange={(e) => setTime(e.target.value)}
            />
            Hours!
          </div>
          <div className="bg-pink-300 hover:bg-pink-500 rounded px-2 p-1 m-4 cursor-pointer duration-300 transition-all text-white" onClick={handleCalculate}>calculate</div>
        </div>
        {isOpen && <div className="flex flex-col my-10 gap-2">
          <div className=" font-semibold ">
            Based on <span className="text-pink-500 animate-pulse font-extrabold">{time} hrs per day</span>, here's what it really adds up to:
            </div>
          <div className="bg-pink-300 border-dashed m-1 rounded-md p-1 border ">
            📅 <span className="font-bold bg-green-200 px-1 py-0.5 pr-0.5">{totalDays} full days </span> wasted every year
            </div>
          <div className="bg-pink-300 border-dashed m-1 rounded-md p-1 border ">
            😱 <span className="font-bold bg-green-200 px-1 py-0.5 pr-0.5">{TotalDaysInLife} days </span> lost over a lifetime
          </div>
          <div className="bg-pink-300 border-dashed m-1 rounded-md p-1 border ">
            🙊 That's <span className="font-bold bg-green-200 px-1 py-0.5 ">{month} months </span>
            </div>
          <div className="bg-pink-300 border-dashed m-1 rounded-md p-1 border ">
            💔 Or <span className="font-bold bg-green-200 px-1 pr-0 pr-0.5 py-0.5 ">{years} years </span> of your life.
            </div>
        </div>}
      </div>
      <Footer />
    </section>
  );
}

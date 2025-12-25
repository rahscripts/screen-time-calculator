"use client";
import { useState } from "react";

export default function Home() {

  const [time, setTime] = useState("");
  const [totalDays, setTotalDays] = useState(0);

  const [TotalDaysInLife, setTotalDaysInLife] = useState(0);
  

  const handleCalculate = () => {
    if (Number(time) == 0) return;
    const timeInYear = Number(time) * 365;
    //days of screen
    const days = Math.floor(timeInYear/24);
    const daysOfLife = days*70;
    setTime("");
    setTotalDays(days);
    setTotalDaysInLife(daysOfLife);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div>Screen Time Calculator</div>

      <div>
        <div>Just 1 Question</div>
        <div>Whats Your Unproductive Screen Time</div>

        <div>
          <input
            type="number"
            placeholder="hey😭"
            className="bg-green-100"
            onChange={(e) => setTime(e.target.value)}
          />
          Hours!
        </div>

        <div onClick={handleCalculate}>calculate</div>
      </div>
      <div>{totalDays}</div>
      <div>You spend {TotalDaysInLife} days of your life.</div>
    </div>
  );
}

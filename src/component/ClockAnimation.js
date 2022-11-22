import React from 'react'
import "./ClockAnimation.css"

const ClockAnimation = () => {
  return (
    <div className="clock">
      <div className="hour-container">
        <ul className="hour-numbers">
          <li>
            <div className="num">3</div>
          </li>
          <li>
            <div className="num">6</div>
          </li>
          <li>
            <div className="num">9</div>
          </li>
          <li>
            <div className="num">12</div>
          </li>
        </ul>
      </div>
      <div className="clock-hand">
        <div className="hours hand"></div>
        <div className="mins hand"></div>
        <div className="sec hand"></div>
      </div>
      <div className="dot">23</div>
    </div>
  );
}

export default ClockAnimation
import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whitetick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div> {/*blur effect code*/}
      <div className="blur plans-blur-2"></div> {/*blur effect code*/}
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plans, i) => {
          return (
            <div className="plan" key={i}>
              {plans.icon}
              <span>{plans.name}</span>
              <span>$ {plans.price}</span>

              <div className="features">
                {plans.features.map((feature, i) => {
                  return (
                    <div className="feature">
                      <img src={whitetick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>

              <div>
                <span>See more benefits </span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;

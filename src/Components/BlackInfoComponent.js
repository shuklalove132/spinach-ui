import React from "react";
import './BlackInfoComponent.css'
const BlackInfoComponent = () => {
  return (
    <div className="BlackInfoComponentContainer">
      <div className="BlackInfoComponentInnerDiv">
      <div className="BlackInfoComponentInnerDivLeft">
      <div className="BlackInfoComponentInnerDivLeftContent">
      <p className="nextService">/Next service</p>
      <h3 className="BlackInfoComponentInnerDivLeftContentHeading">Web and mobile apps</h3>
      <p className="BlackInfoComponentInnerDivLeftContentPtag">Design stickiness and retention for web and mobile customer apps with our proven and tested  Customer Experience Design process, builds behavioural engagement by leveraging Design Thinking for an end-to-end view of the customer acquisition and retention journey.</p>
      <button className="BlackInfoComponentInnerDivLeftContentButton">Know More</button>
      </div>
      </div>
      <div className="BlackInfoComponentInnerDivRight">
      <img src="https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2FIllustartion.png?alt=media&token=95b9abcd-8876-4724-bca2-775cc1aeab41" className="illustration"/>
      <img src="https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2FBackground.png?alt=media&token=bbbdaf84-f187-4bee-bdca-6d15d9162c08" className="illustrationBackground"/>
      </div>

      </div>
    </div>
  );
};

export default BlackInfoComponent;

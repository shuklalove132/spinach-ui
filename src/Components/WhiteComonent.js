import React from "react";
import "./WhiteComponent.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const whiteContentUpperLeftConatiner = [
  {
    number: "/01",
    content: "Inconsistent user experience.",
  },
  {
    number: "/02",
    content: " Design-led delays in go-to-market.",
  },
  {
    number: "/03",
    content: "Disjointed digital brand image.",
  },
  {
    number: "/04",
    content: "Disconnected dev-design sprints.",
  },
];
const sliderImages = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2Fslider%20Images%2FPhase%201.png?alt=media&token=877b2353-2c0b-4898-97e3-43220245eb32",
    key: 1,
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2Fslider%20Images%2FPhase%202.png?alt=media&token=eadb242e-b9e8-4def-b0cd-0384f0bd6570",
    key: 2,
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2Fslider%20Images%2FPhase%203.png?alt=media&token=30d5f3f2-6c23-496d-a4fd-bc4282939111",
    key: 3,
  },
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/spinach-ui.appspot.com/o/Homepage%2Fslider%20Images%2FPhase%203.png?alt=media&token=30d5f3f2-6c23-496d-a4fd-bc4282939111",
    key: 4,
  },
];

const WhiteComonent = () => {
  return (
    <div className="whiteComponentContainer">
      <div className="whiteComponentHeadingContainer">
        <h1 className="whiteComponentMainHeading">
          A design system for website & apps is critical to resolve:
        </h1>
      </div>
      <div className="WhiteComponentUpper">
        <div className="whiteComponentUpperContainer">
          {whiteContentUpperLeftConatiner.map((item, index) => {
            return (
              <div key={index} className="whiteComponentUpperLeftContainer">
                <p className="whiteComponentNumbers">{item.number}</p>
                <p className="whiteComponentContnet">{item.content}</p>
              </div>
            );
          })}
        </div>
        <div className="whiteContentHorizintalLine"></div>
        <div className="whiteComponentUpperPart2">
          <h2 className="whiteComponentUpperPart2Heading">
            Our proven methodology for Design Systems.
          </h2>
          <p className="whiteComponentUpperPart2Content">
            Redesigning a design system is a densely strategised process that
            involves careful planning, collaboration, and iterative refinement.
          </p>
        </div>
      </div>
      <div className="whiteComponentSlider">
      <div className="whiteComponentSliderContainer">
        {sliderImages.slice(0, window.innerWidth >= 1024 ? 3 : window.innerWidth >= 744 ? 3 : 2).map((item, key) => {
          // Check if it's the first image
          const isFirstChild = key === 0;
    
          return (
            <div
              key={item.key}
              className={`sliderImageContainer ${
                isFirstChild ? "firstImage" : "otherImages"
              }`}
            >
              <img src={`${item.imageUrl}`} className="sliderImage" alt={`Slider ${key + 1}`} />
            </div>
          );
        })}
        <div className="sliderArrowContainer">
          <MdArrowBack className="arrows" />
          <MdArrowForward className="arrows" />
        </div>
      </div>
    </div>
    
      <div className="whiteComponentLower">
        <div className="whiteComponentInnerDiv">
          <div className="whiteComponentIneerDivUpper">
            <h1 className="whiteComponentIneerDivUpperHeading">
              Design system process highlights:
            </h1>
            <p className="whiteComponentIneerDivUpperContent">
              A Design System redesign roadmap has to be delicately handled and
              marked out with much careful consideration rather than impulse.
            </p>
          </div>
          <div className="whiteComponentInnerDivLower">
            <div className="whiteComponentInnerDivLowerBox">
              <div className="whiteComponentInnerDivLowerBoxLeft">
                <p className="whiteComponentInnerDivLowerBoxLeftNumber">/01</p>
                <h3 className="whiteComponentInnerDivLowerBoxLeftHeading">
                  Research first.
                </h3>
                <p className="whiteComponentInnerDivLowerBoxLeftContent">
                  Our research is designed to interview stakeholders, end-users,
                  and decision-makers in order to grasp diverse needs. We
                  incorporate findings into a comprehensive strategy that aligns
                  with business goals, ensuring the Design system meets user
                  expectations and industry standards.
                </p>
              </div>
              <div className="whiteComponentInnerDivLowerBoxLeft">
                <p className="whiteComponentInnerDivLowerBoxLeftNumber">/02</p>
                <h3 className="whiteComponentInnerDivLowerBoxLeftHeading">
                  Brand-centric DLS.
                </h3>
                <p className="whiteComponentInnerDivLowerBoxLeftContent">
                  To reinforce the brand's visual identity, values and tone of
                  voice, we build consistency in the use of brand colours,
                  typography, and imagery, coupled with intuitive interactions
                  to foster brand affinity and loyalty across all touchpoints.
                </p>
              </div>
            </div>

            <div className="whiteComponentInnerDivLowerBox">
              <div className="whiteComponentInnerDivLowerBoxLeft">
                <p className="whiteComponentInnerDivLowerBoxLeftNumber">/03</p>
                <h3 className="whiteComponentInnerDivLowerBoxLeftHeading">
                  Design principles and guidelines.
                </h3>
                <p className="whiteComponentInnerDivLowerBoxLeftContent">
                  Based on design trends, research outcomes and brand essence,
                  we identify core values, guidelines and themes that drive the
                  design creation process and craft an experience that is unique
                  to the brand for its users.
                </p>
              </div>
              <div className="whiteComponentInnerDivLowerBoxLeft">
                <p className="whiteComponentInnerDivLowerBoxLeftNumber">/04</p>
                <h3 className="whiteComponentInnerDivLowerBoxLeftHeading">
                  Modularity for multiple use-cases.
                </h3>
                <p className="whiteComponentInnerDivLowerBoxLeftContent">
                  We adopt a modular process of Design System creation. Based on
                  use-cases and development prioritization we create components,
                  patterns and templates that empower the design and dev teams
                  to scale the sprint outcomes exponentially.
                </p>
              </div>
            </div>

            <div className="whiteComponentInnerDivLowerBox">
              <div className="whiteComponentInnerDivLowerBoxLeft">
                <p className="whiteComponentInnerDivLowerBoxLeftNumber">/05</p>
                <h3 className="whiteComponentInnerDivLowerBoxLeftHeading">
                  Cross-functional collaboration.
                </h3>
                <p className="whiteComponentInnerDivLowerBoxLeftContent">
                  Our Design System collaboration is characterized by an
                  inclusive working approach, fostering outcomes that excel in
                  scale, efficiency and cost-effectiveness. We drive results
                  that go beyond expectations, ensuring a synergy of creativity
                  and practicality for optimal Design System performance.
                </p>
              </div>
              <div className="whiteComponentInnerDivLowerBoxLeft">
                <p className="whiteComponentInnerDivLowerBoxLeftNumber">/06</p>
                <h3 className="whiteComponentInnerDivLowerBoxLeftHeading">
                  Version control and documentation handover.
                </h3>
                <p className="whiteComponentInnerDivLowerBoxLeftContent">
                  We manage the handover process meticulously, with robust
                  documentation and tight governance. Our processes ensure
                  lasting consistency and quality, facilitating a seamless
                  transition and nurturing the sustained success of the design
                  system over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whiteComponentLastDiv">
        <div className="whiteComponentLastDivUpper">
          <section className="whiteComponentLastDivUpperLeft"></section>

      <h3 className="whiteComponentLastDivUpperCenter">Design Systems are ideal for :</h3>   
       <section className="whiteComponentLastDivUpperRight"></section>
        </div>
        <div className="whiteComponentLastDivMiddle"></div>

        <div className="whiteComponentLastDivLower">
        <section className="whiteComponentLastDivLowerSectionLeft">
        <p className="whiteComponentLastDivLowerSectionLeftNumber">/01</p>
        <p className="whiteComponentLastDivLowerSectionLeftContent">Websites, apps and products</p>
<section className="whiteComponentLastDivLowerSectionLeftContentVerticalLine"></section>
        </section>
        <section className="whiteComponentLastDivLowerSectionLeft">
        <p className="whiteComponentLastDivLowerSectionLeftNumber">/02</p>
        <p className="whiteComponentLastDivLowerSectionLeftContent">Product teams</p>
<section className="whiteComponentLastDivLowerSectionLeftContentVerticalLine"></section>
        
        </section>
        <section className="whiteComponentLastDivLowerSectionLeft">
        <p className="whiteComponentLastDivLowerSectionLeftNumber">/03</p>
        <p className="whiteComponentLastDivLowerSectionLeftContent">SaaS and Enterprise 
        start-ups</p>
        </section>


        </div>
      </div>
    </div>
  );
};

export default WhiteComonent;

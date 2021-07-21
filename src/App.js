import React from "react";
import "./App.css";
import NavBar from "./navbar";
import CovidCom from "./covidComponent";
import Slider from "./slider";
import Firstcard from "./first-card";
import SecondCard from "./second-card";
import Progress from "./progress.jpg";
import River from "./Rivers img.jpg";
import RichesWold from "./richesWorld.jpg";
import Cricket from "./cricket.jpg";
import Business from "./business.jpg";
import Health from "./health img.jpg";
import Demo1 from "./domo1.jpg";
import ThirdCard from "./third-card";
import Footer from "./footer";
import SubNavBar from "./subNavBar";
let App = () => {
  return (
    <>
      <NavBar />
      <SubNavBar />
      <div class="container  mb-5 pb-5 mt-5">
        <CovidCom />
        <Firstcard
          Proimg={Progress}
          proheding={
            "World in Progress: Sustainable solutions for a better world"
          }
          prodiscri={`Solar panels could spell the end of illegally tapped power lines
        in Brazil's favelas that are dangerous and have even led to
        fires! Rooftop gardens in a refugee camp in Lebanon bring a
        whiff of fresh, green air to the place and help with food
        security. And: The secret of chicken dung and a place where
        abandoned plants can find a new home.`}
          moreread={"Read Full Article"}
          prolink={
            "https://www.dw.com/en/world-in-progress-sustainable-solutions-for-a-better-world/av-58265448"
          }
          Rivimg={River}
          rivheading={"The Longest Rivers in the World"}
          rivdiscri={` 01. The Nile The enchanting River Nile in Africa is the longest
          river in the world. With the pyramids sitting at the backdrop in
          Egypt, it takes a beautiful form here. It is 6,853 km long, and
          apart from Egypt, runs through Kenya, Ethiopia, Uganda, Rwanda,
          Tanzania, Sudan, <br />
          02 The Amazon South America's The Amazon is the second longest
          in the world. The river runs for 6437 km, it is an important
          water body for Colombia, Peru, and Ecuador. It also runs through
          Brazil, Bolivia, Venezuela, Guyana, Suriname,`}
          rivlink={
            "https://timesofindia.indiatimes.com/travel/destinations/the-longest-rivers-in-the-world/photostory/84465554.cms"
          }
          Richimg={RichesWold}
          richheading={"Richest Countries In The World"}
          richdiscri={` Even as economic activity around the world declined sharply in
          2020 as a result of the COVID-19 pandemic, many nations still
          reported very high per capita gross national incomes. Across the
          globe, GNI per capita was $17,535. Yet there are a number of
          countries in which the GNI is many times higher. Gross national
          income, or GNI, is the sum of money earned by a country’s
          population and businesses within a given year. It also includes
          income earned`}
          richlink={
            "https://247wallst.com/special-report/2021/07/15/richest-countries-in-the-world-3/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+typepad%2FRyNm+%2824%2F7+Wall+St.%29"
          }
        />
        <Firstcard
          Proimg={Cricket}
          proheding={"Cricket World Cup Winners List: ODI & T20"}
          prodiscri={
            "Here we present the list of Cricket World Cup winners (ODI + T20). Cricket World Cup was contested for the first time in England in 1975. It was played as a series of one-day matches of 60 overs per side. It was held outside England, in India and Pakistan, for the first time in 1987. The 1987 contest also saw the number of overs per side reduced to 50."
          }
          moreread={"Read Full Article"}
          prolink={
            "https://www.careerpower.in/cricket-world-cup-winners-list.html"
          }
          Rivimg={Business}
          rivheading={
            "Deep emerging market intelligence, analysis and functionality,"
          }
          rivdiscri={`Emerging markets continue to offer huge opportunities and challenges. 
          Rapid economic growth and favourable demographics make them hugely attractive destinations for investment and
           expansion. Conversely, economic volatility, political instability  `}
          rivlink={
            "https://info.emis.com/professional-ad?utm_source=adwords&utm_campaign=Website+traffic-Search-455&utm_term=latest%20business%20news&utm_medium=ppc&hsa_ad=352644985660&hsa_acc=3740767730&hsa_grp=70758769853&hsa_mt=b&hsa_cam=1981983979&hsa_src=g&hsa_net=adwords&hsa_ver=3&hsa_tgt=kwd-126207529&hsa_kw=latest%20business%20news&gclid=Cj0KCQjwxdSHBhCdARIsAG6zhlX_7mM8q5WBg5AYXDYqxbLQXyx2aK7Bc41-DNOZevHiJdUDAwtraMQaAsrvEALw_wcB"
          }
          Richimg={Health}
          richheading={"Health Guidance"}
          richdiscri={`Being on Campus Responsibly Columbia's guidance and best practices are developed by our own
           experts, consistent with latest scientific evidence as
           well as guidelines from Centers for Disease Control and Prevention, New York State, and New York City.
            Deadline Now Vaccine-related Action Get vaccinated, and upload your vaccine documentation or apply for an exemption Deadline 
            July 5 Vaccine-related  `}
          richlink={"https://covid19.columbia.edu/content/health-guidance"}
        />
        <SecondCard demo={Demo1} />
        <ThirdCard demo={Demo1} />
        <figure class="text-center m-5 ">
          <blockquote class="blockquote">
            <p class="fs-2">
              <span class="text-info">Knowledge</span> of what is possible is
              the <span class="text-danger">beginning </span> of happiness.
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            George Santayana <cite title="Source Title">,,,,,,,,,,,,</cite>
          </figcaption>
        </figure>
        <Slider />
      </div>
      <Footer />
    </>
  );
};

export default App;

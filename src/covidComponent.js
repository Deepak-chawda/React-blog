import React from "react";
import vaccination from "./vaccination img1.jpg";
const CovidCom = ()=>{
    return (
        <>
          <div class="card">
          <div class="card-body">
            <h2 class="card-title text-warning">
              Coronavirus disease (COVID-19): Vaccines
         </h2>
            <p class="card-text">
              Yes there are now several vaccines that are in use. The first mass
              vaccination programme started in early December 2020 and the
              number of vaccination doses administered is updated on a daily
              basis here. At least 13 different vaccines (across 4 platforms)
              have been administered. The Pfizer/BioNtech Comirnaty vaccine was
              listed for WHO Emergency Use Listing (EUL) on 31 December 2020.
              The SII/Covishield and AstraZeneca/AZD1222 vaccines (developed by
              AstraZeneca/Oxford and manufactured by the State Institute of
              India and SK Bio respectively) were given EUL on 16 February. The
              Janssen/Ad26.COV 2.S developed by Johnson & Johnson, was listed
              for EUL on 12 March 2021. The Moderna COVID-19 vaccine (mRNA 1273)
              was listed for EUL on 30 April 2021 and the Sinopharm COVID-19
              vaccine was listed for EUL on 7 May 2021. The Sinopharm vaccine is
              produced by Beijing Bio-Institute of Biological Products Co Ltd,
              subsidiary of China National Biotec Group (CNBG). The
              Sinovac-CoronaVac was listed for EUL on 1 June 2021..
            </p>
            <a
              class="p-2 link-primary"
              href="https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey={adgroupsurvey}&gclid=CjwKCAjwos-HBhB3EiwAe4xM9wupOT-q_-tEfkjoOJKzEqog5qrJh7gHwlCDWyxhRjmmxpIQ-4nG-RoCaIIQAvD_BwE"
              rel="noreferrer"
              target="_blank"
            >
              Read Full Article
            </a>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <img
            src={vaccination}
            class="card-img-bottom"
            alt="vaccination image"
          />
        </div>
        </>
    )
}
export default CovidCom

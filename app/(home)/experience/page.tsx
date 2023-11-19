import React from "react";

import { ExperienceItem } from "@/components/experience-item";


const Experience = () => {
  return (
    <main className="flex flex-col animate-fade-in-y  m-7 lg:my-12">
      <h1 className="font-bold text-slate-200 text-3xl py-4 ">Experience</h1>
      <hr className="bg-slate-200 opacity-10 mb-3" />
      <ExperienceItem
        company={"RecargaMobile"}
        date={"June 2023 - August 2023"}
        position={"QA Tester"}
        tasks={
          <ul className="list-disc leading-7 pl-7 text-base">
            <li>
              Development of rigorous tests on the website to guarantee its
              correct operation and a smooth user experience.
            </li>
            <li>
              Execution of test cases that covered different phone recharge
              scenarios and payment situations.
            </li>
            <li>
              Identification and documentation of errors, performance issues,
              and functionality deficiencies using problem management and
              tracking tools.
            </li>
          </ul>
        }
      />

      <ExperienceItem
        company={"All In Jerseys"}
        date={"April 2023 - June 2023"}
        position={"Community Manager"}
        tasks={
          <ul className="list-disc leading-7 pl-7 text-base">
            <li>
              Monitoring the performance of social media posts and campaigns
              using key metrics and analytical tools.
            </li>
            <li>
              Collaboration with design teams to create attractive visual
              content consistent with the brand image.
            </li>
            <li>
              Development and execution of marketing strategies on social
              networks to promote the brand and increase store visibility.
            </li>
          </ul>
        }
      />
    </main>
  );
};

export default Experience;

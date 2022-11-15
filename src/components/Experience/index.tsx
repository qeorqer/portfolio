import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { workExperience } from './utils';

const Experience: React.FC = () => {
  return (
    <section
      className="bg-gray-900 text-white text-center font-light"
      id="experience"
    >
      <div className="container flex flex-col py-16 md:py-20 lg:py-24 md:px-20 lg:px-32 xl:px-44 2xl:px-52">
        <div className="text-3xl font-bold text-left mb-10">
          <h2 className="withLine left inline" data-aos="fade-up">
            Experience
          </h2>
        </div>
        <VerticalTimeline>
          {workExperience.map((job) => (
            <VerticalTimelineElement
              contentStyle={{ background: '#10b981', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  #10b981',
              }}
              date={job.date}
              dateClassName="text-center"
              iconStyle={{ background: '#10b981', color: '#fff' }}
              key={job.title}
            >
              <p className="font-bold">{job.title}</p>
              <p>{job.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;

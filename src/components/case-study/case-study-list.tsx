import { useState } from 'react';
import nexusImg from '~/assets/images/case-study/nexus-fms.jpg';
import { cn } from '~/lib/utils';

export const CaseStudyList = () => {
  const caseStudies = [
    {
      title: 'NEXUS SCHOOL FMS',
      category: 'Website',
      description:
        'Efficient student bill tracking and management. Businesses can monitor and optimize their operational budgeting smoothly & cost-effectiveness.',
      image: nexusImg.src,
    },
    {
      title: 'XARANA TRACKING',
      category: 'Website',
      description:
        'Efficient tracking & management of drivers. Businesses can seamlessly monitor & optimize their fleet operations, enhancing productivity, & cost effectiveness.',
      image: nexusImg.src,
    },
    {
      title: 'XARANA APP',
      category: 'Mobile Apps',
      description:
        'Efficient tracking & management of drivers. Businesses can seamlessly monitor & optimize their fleet operations, enhancing productivity, & cost effectiveness.',
      image: nexusImg.src,
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Website', 'Mobile Apps', 'System'];

  const filteredStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <div className="flex w-full flex-col items-center gap-[70px]">
      {/* Title & Filters */}
      <div className="flex w-full max-w-[855px] flex-col items-center gap-[20px]">
        <h2 className="text-center font-bold text-[#101010] text-[26px] uppercase leading-[29px] tracking-[1px]">
          SARANA CASE STUDY
        </h2>
        <p className="text-center font-normal text-[#767676] text-[15px] leading-[28px]">
          Discover our compelling case study on software development, showcasing
          our expertise in delivering innovative solutions, challenges faced,
          and successful outcomes.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 pt-3 font-normal text-[15px]">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'py-[14px] leading-[28px] transition-colors hover:text-[#12A60F]',
                activeFilter === filter ? 'text-[#12A60F]' : 'text-[#767676]',
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid w-full grid-cols-1 gap-[50px] sm:justify-center md:justify-center lg:grid-cols-3">
        {filteredStudies.map((study) => (
          <div
            key={study.title}
            className="group flex cursor-pointer flex-col items-start sm:mx-auto sm:w-[480px] md:mx-auto md:w-[480px] lg:mx-0 lg:w-full"
          >
            <div className="relative mb-[14px] aspect-360/250 w-full overflow-hidden bg-gray-100">
              <img
                src={study.image}
                alt={study.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mb-[14px] rounded-[20px] bg-[#F1F1F1] px-[20px] py-[10px] transition-colors duration-300 group-hover:bg-gray-200">
              <span className="flex items-center justify-center font-semibold text-[#101010] text-[10px] uppercase leading-[18px] tracking-[1px]">
                {study.category}
              </span>
            </div>
            <h3 className="mb-[14px] font-semibold text-[#101010] text-[16px] uppercase leading-[18px] tracking-[1px] transition-colors duration-300 group-hover:text-[#12A60F]">
              {study.title}
            </h3>
            <p className="w-full font-normal text-[#767676] text-[13px] leading-[28px]">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

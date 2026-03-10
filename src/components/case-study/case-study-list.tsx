import { useState } from 'react';

import { cn } from '~/lib/utils';

interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

interface CaseStudyListProps {
  caseStudies: CaseStudyItem[];
}

export const CaseStudyList = ({ caseStudies }: CaseStudyListProps) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Website', 'Mobile Apps'];

  const filteredStudies =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <div className="flex w-full flex-col items-center gap-[70px]">
      {/* Title & Filters */}
      <div className="flex w-full max-w-[855px] flex-col items-center gap-[20px]">
        <h2 className="text-center text-[26px] leading-[29px] font-bold tracking-[1px] text-[#101010] uppercase">
          SARANA CASE STUDY
        </h2>
        <p className="text-center text-[15px] leading-[28px] font-normal text-[#767676]">
          Discover our compelling case study on software development, showcasing
          our expertise in delivering innovative solutions, challenges faced,
          and successful outcomes.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 pt-3 text-[15px] font-normal">
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
          <a
            key={study.id}
            href={study.link}
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
              <span className="flex items-center justify-center text-[10px] leading-[18px] font-semibold tracking-[1px] text-[#101010] uppercase">
                {study.category}
              </span>
            </div>
            <h3 className="mb-[14px] text-[16px] leading-[18px] font-semibold tracking-[1px] text-[#101010] uppercase transition-colors duration-300 group-hover:text-[#12A60F]">
              {study.title}
            </h3>
            <p className="line-clamp-3 w-full text-[13px] leading-[28px] font-normal text-[#767676]">
              {study.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

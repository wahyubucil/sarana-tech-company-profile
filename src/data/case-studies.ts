export interface CaseStudyData {
  id: string;
  title: string;
  client: string;
  jobdesc: string;
  year: string;
  aboutTitle: string;
  aboutDesc: string;
  challenges: string;
  solutions: string;
  techStack: string;
  summary: string;
  heroImage: string;
  contentImages: string[];
}

export const caseStudiesData: CaseStudyData[] = [
  {
    id: 'eco-beach-city',
    title: 'Eco Beach City : Interactive Map Booking',
    client: 'Eco Beach City',
    jobdesc: 'Setting Interactive Map integrated with WP CMS',
    year: '2023',
    aboutTitle: 'About "Eco Beach City"',
    aboutDesc:
      'EcoBeachCity is a website dedicated to promoting sustainable living and eco-friendly practices within coastal communities. The website serves as a comprehensive resource hub, providing information, tips, and solutions for individuals, businesses, and local governments to reduce their environmental impact and preserve coastal ecosystems. Through engaging content and interactive features, EcoBeachCity educates visitors on various aspects of sustainability, such as renewable energy, waste reduction, water conservation, and wildlife preservation.\n\nThe website offers practical advice on adopting green habits, including eco-friendly travel tips, sustainable home practices, and suggestions for supporting local eco-conscious businesses.Additionally, EcoBeachCity serves as a platform for community engagement, facilitating discussions and collaborations among like-minded individuals and organizations. Users can participate in forums, share success stories, and exchange ideas to collectively work towards building more sustainable beachside communities.',
    challenges:
      'Problems encountered such as how to convert vector images into points/plots that can be booked.\nA vector map image with a large enough resolution = a large size too.\nThe flexibility to do experiments that are not too big because it uses the WordPress CMS (not from scratch).',
    solutions:
      'Fixing for each plot where it is a box for property plots and some zoning that follows the property area according to the property type/cluster.\nThe process of loading & optimizing images is carried out in stages from the lowest resolution to the optimal resolution, this is done to speed up page loading and avoid plot images in the form of placeholders and not reduce image quality (compress image size).\nCreate a new page with a special subdomain that is made with a similar website style (header & footer) supported by Laravel so that the plot booking process can run more smoothly.',
    techStack: 'Front-end: React, TypeScript, Tailwind\nBack-end: Laravel, PHP',
    summary:
      'Prospective property buyers from EBC find booking and checking which plots are still available more straightforward. Booking plots are supported by integrating payment gateways for the down payment to simplify the transaction process and increase the success rate of property purchases by shortening the transaction time rather than using conventional methods.\n\nEBC will also carry out a second phase update to make the booking process more massive & complex.',
    heroImage: 'hero-ebc.png',
    contentImages: ['content-ebc-1.png', 'content-ebc-2.png'],
  },
  {
    id: 'asia-pacific-csd-group',
    title: 'Event Asia-Pacific CSD Group: Fleet Operational Tracking',
    client: 'Aldabra Project',
    jobdesc:
      'Efficient fleet & driver tracking for seamless ACG Event operations',
    year: '2023',
    aboutTitle: 'About "Asia-Pacific CSD Group"',
    aboutDesc:
      "The 23rd Cross Seminar Training Asia Pacific Central Securities Depository (ACG) Group organized by Aldabra Project took place at the luxurious Sofitel Bali from 19 to 22 June 2023. The event aims to encourage collaboration and knowledge sharing among participants from various Central Securities Depository institutions (CSD) throughout the Asia Pacific region.\n\nThis year's seminar was attended by approximately 19 Asia-Pacific countries with support from KSEI Indonesia as the organizer and Bali was appointed as the host of this year's cross-training seminar.\n\nThe 4-day event went very well and was closed with a tour dinner while enjoying the beautiful sunset on the island of Bali. Meanwhile, SaranaTech is here to help with all the needs of drivers & operational fleets during the event using XaranaTracking, Xarana. id driver tracking management app & dashboard (sister company SaranaTech).\n\nKey features of the app include a check-in/out attendance system, enabling seamless tracking of driver activity. This feature ensures accurate driver attendance records and enables efficient management of working hours and assignments. In addition, XaranaTracking's multi-checkpoint dashboard allows supervisors to monitor the progress of vehicles and drivers as they move between predefined locations. This feature improves operational efficiency by streamlining logistics and reducing delays. There is also a multi-checkpoint feature, where drivers can check in at several checkpoints to assist the EO in knowing the number of drivers on standby at the nearest checkpoint.\n\nOverall, this event provided a valuable opportunity for SaranaTech to gain insight into XaranaTracking's transformative potential and learn how it can optimize fleet and driver management processes in multiple ways (events, enterprise, and others), contributing to increased operational efficiency and productivity.",
    challenges:
      "Explanation to drivers who don't really understand IT (install until how to use).\nLimitations on OS specifications and mobile phone storage from drivers are a concern in the XaranaTracking application.\nThe check-in/out radius from each checkpoint is too small.\nThe presence-checking process is still done manually where the operator must click on the driver's name to see the final position whether it is in accordance with the check-in/out radius.\nAs an event that invites representatives from many countries, the protocol has rules against decreasing cellular connections around the venue.",
    solutions:
      'A fleet manager is needed who will receive the Train for Trainer process from SaranaTech to facilitate the process of explaining massively to drivers in one session before the event takes place.\nResearch is needed for the average minimum-maximum OS specification and an application with a light size is needed so that all drivers can use the XaranaTracking apps.\nThe check-in/out radius has been updated from the previous default size visual radius of 30 square meters to a dynamic radius that can be adjusted by the operator to suit the size of the venue.\nCurrently, research is still being carried out to allow for automation in checking in/out (using the geofence feature) on the XaranaTracking apps.\nCurrently, research is considering the option of special GPS-based tracking if there is a protocol such as state guests to the presidency.',
    techStack:
      'Front-end: React, Remix, Typescript, Google Map API\nBack-end: Firebase\nMobile app: Flutter\nDeployment: Docker, AWS',
    summary:
      'The ACG 23rd Cross Seminar Training event is a very good event for SaranaTech in developing the potential of XaranaTracking. Efficiency in organizing drivers and fleets, especially conventional fleets, is very good, a recap of standby and attendance history data can also be a complementary document for activity reports, especially to vendors (in this case car rental).\n\nFrom here we feel very optimistic to handle national - international events with more occupancy of guest vehicles, operations, and shuttles. And do not rule out every opportunity for tracking more complex drivers & fleets for other purposes such as tracking office cars, logistics, and couriers.',
    heroImage: 'hero-acsd.png',
    contentImages: [
      'content-acsd-1.png',
      'content-acsd-2.png',
      'content-acsd-3.jpg',
    ],
  },
  {
    id: 'sun-rent-a-car',
    title: 'SUN Rent a Car Company Profile',
    client: 'SUN Rent a Car',
    jobdesc: "Designing SUN Rent a Car's company profile website",
    year: '2023',
    aboutTitle: 'About "SUN Rent a Car"',
    aboutDesc:
      'SUN Rent a Car, a subsidiary of the esteemed SUN Group, is a trusted name in the car rental industry. Their commitment to exceptional service and customer satisfaction sets them apart. With a diverse selection of well-maintained vehicles, including cars, SUVs, and vans, SUN Rent a Car caters to various transportation needs. Whether for business trips, family vacations, or daily commutes, they provide reliable and convenient rental solutions. Their dedicated and friendly staff assists customers throughout the rental process, ensuring a personalized experience.\n\nOffering flexible rental terms, including short-term and long-term options, SUN Rent a Car accommodates individual schedules and budgets. With competitive pricing and transparent policies, they make quality car rental affordable and transparent. As part of the SUN Group, SUN Rent a Car upholds the highest standards of professionalism and integrity. Discover the comfort and convenience of SUN Rent a Car, making your journey a memorable one.',
    challenges:
      'Fast website delivery (short processing timeline) while still targeting good SEO optimization.\nCreate a nice UI without sacrificing functionality & performance as an online car rental website.\nDisplay clear information for each vehicle.',
    solutions:
      'We use the Astro framework with a static website approach because websites rarely update content (except blogs) so they get optimal SEO performance and hope to get more pageviews from potential tenants.\nThe UI is made more trendy but still robust with functionality to support the main goal, namely booking a vehicle (we have prepared 3 channels to increase the likelihood of prospective tenants making transactions).\nAll vehicles have items such as transmission, and color to rental type (only car, + driver, + driver & fuel) so that prospective tenants get clearer information about the estimated total rental price from each selected parameter.',
    techStack:
      'Front-end: Astro, React, TypeScript, Tailwind\nBack-end: Strapi, NodeJS, TypeScript, SQLite\nDeployment: Docker, AWS, Cloudflare Pages',
    summary:
      'SUN Rent a Car, a subsidiary of the esteemed SUN Group is a trusted name in the car rental industry. With a diverse selection of well-maintained vehicles, they cater to various transportation needs, ensuring reliable and convenient rental solutions for business trips, family vacations, and daily commutes. Their dedicated and friendly staff provides personalized assistance throughout the rental process. Offering flexible rental terms and competitive pricing, SUN Rent a Car accommodates individual schedules and budgets while upholding the highest standards of professionalism and integrity as part of the SUN Group.\n\nAdditionally, the SUN Rent a Car website is optimized for fast delivery and SEO performance, featuring a trendy yet functional user interface. Clear information about each vehicle, including transmission, color, and rental type, is provided to help prospective tenants make informed decisions. The tech stack includes Astro, React, TypeScript, and Tailwind for the front end, and Strapi, NodeJS, TypeScript, and SQLite for the back end, deployed using Docker, AWS, and Cloudflare Pages.',
    heroImage: 'hero-sun.png',
    contentImages: ['content-sun-1.png', 'content-sun-2.png'],
  },
];

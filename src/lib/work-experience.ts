export interface ExperienceEntry {
  company: string;
  dateRange: string;
  title: string;
  subtitle: string;
  description?: string;
}

export const workExperience: ExperienceEntry[] = [
  {
    company: "Terra Mobility",
    dateRange: "July 2024 — Present",
    title: "Head of Design",
    subtitle:
      "Parent company of Busbud.com and other ground transportation marketplaces and operating systems.",
    description:
      "After acquiring a portfolio of software, the company needs to streamline its operations by consolidating all these products into a single, powerful solution. My role is to lead the transformation of product design by extending our in-house design system, Horizon.",
  },
  {
    company: "Busbud",
    dateRange: "July 2020 — July 2024",
    title: "Head of Design",
    subtitle: "The world's largest marketplace for booking intercity bus and train tickets",
    description:
      "As the Head of Design, I ensure brand integrity across all communication channels and am responsible for developing our state-of-the-art design system, Horizon.",
  },
  {
    company: "Busbud",
    dateRange: "July 2019 — July 2020",
    title: "Lead Product Designer",
    subtitle: "The world's largest marketplace for booking intercity bus and train tickets",
  },
  {
    company: "PYX4",
    dateRange: "Jan 2019 — July 2019",
    title: "Lead Designer & Front-end Developer",
    subtitle: "Quality, certification and risk management software for large entreprises",
  },
  {
    company: "Bopper Music",
    dateRange: "Aug 2016 — Dec 2018",
    title: "Lead Designer & Front-end Developer",
    subtitle: "The pro music platform for ads and brand content",
    description:
      "Music Licensing Platform designed and developed from the ground-up with a modern technology stack. I'm in charge of: branding, product design, front-end development.",
  },
  {
    company: "Cossette Communication",
    dateRange: "Jan 2016 — July 2016",
    title: "Senior Digital Art Director",
    subtitle: "World-renown creative marketing and communications agency",
  },
  {
    company: "Exposio Technologies + Polyrix",
    dateRange: "Mar 2013 — Jan 2016",
    title: "Product Designer & Front-end Developer",
    subtitle:
      "Technological solutions for real estate photography and industrial 3D scanning technology.",
  },
  {
    company: "Hatem+D Branding and Communications",
    dateRange: "Aug 2011 — Mar 2013",
    title: "VP Interactive media",
    subtitle: "Mid-scale branding and communication agency",
  },
  {
    company: "Ok!nteractive Web Studio",
    dateRange: "Aug 2006 — Oct 2011",
    title: "Co-founder",
    subtitle: "Award-winning web studio specialized in immersive digital experiences",
  },
];

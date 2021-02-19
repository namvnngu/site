export interface Education {
  title: string;
  school: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
}
const education: Education[] = [
  {
    title: "Bachelor of Computer Science",
    school: "Deakin University",
    startDate: "July 2019",
    endDate: "Present",
    location: "Burwood, Melbourne",
    description: [
      "Estimated completion July 2021",
      "Awarded Deakin STEM Scholarship (20% of total course tuition fees)",
    ],
  },
  {
    title: "Diploma of Information Technology",
    school: "Deakin College",
    startDate: "October 2019",
    endDate: "January 2020",
    location: "Burwood, Melbourne",
    description: ["Achieved WAM - 86.9"],
  },
];

export default education;

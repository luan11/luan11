type WorkExperience = {
  role: string;
  company: string;
  time: [string, string];
  about: string;
};

const workExperience: WorkExperience[] = [
  {
    role: `ReactJS Developer I`,
    company: `Segware`,
    time: [`2022`, `Present`],
    about: `Co-work with the design squad for proposing a better product to final user, analysis viability of new ideas and always work to programming of (TDD practice focused) features, improvements and fix bugs.`,
  },
  {
    role: `Junior III ReactJS Developer`,
    company: `Segware`,
    time: [`2021`, `2022`],
    about: `I actuate programming new features using TDD technique, refactor the old items and make continuous improvements in the application.`,
  },
  {
    role: `Junior Web Developer`,
    company: `Pandora WS`,
    time: [`2020`, `2021`],
    about: `Perform requirements analysis about the application with the customer, program the visual part and application features, perform application implementation and configuration of the environment to be used.`,
  },
  {
    role: `Trainee Web Developer`,
    company: `Pandora WS`,
    time: [`2018`, `2019`],
    about: `Responsible for creating landing pages, WordPress applications with customized business rules and based on own layouts and implementing them in a production environment.`,
  },
];

export default workExperience;

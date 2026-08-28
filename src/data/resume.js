// Résumé content. Edit here — about.js is layout only.

export const profile = {
  name: `Lam Nguyen`,
  role: `Machine Learning Researcher`,
  location: `New York`,
  avatar: `https://liamdev.vercel.app/avatar.png`,
  summary: `Experience as Machine Learning Researcher and Software Engineer working on multiple projects and expertise in the design, installation, testing, and maintenance of software systems.`,
  resumeUrl: `https://docs.google.com/document/d/1-JLziUE-TpLsI4EVBPwiEOlSy7nBNDapYvfqL0kYkng/edit?usp=sharing`,
}

export const skills = [
  {
    icon: `python`,
    label: `Machine Learning`,
    body: `Strong grasp of ML technologies including Deep Learning and Neural Networks. My research centers on continuous user authentication using behavioral biometrics with models like SVM, Random Forest, KNN, GMM, CNN, RNN, and Manhattan Scaled Distance.`,
  },
  {
    icon: `code`,
    label: `Front-End`,
    body: `Proficient in JavaScript, TypeScript, Python, and HTML/CSS. Experienced with React, Redux, MobX, and UI libraries like Material UI, Bootstrap, and Tailwind CSS.`,
  },
  {
    icon: `database`,
    label: `Back-End`,
    body: `Skilled in NodeJS, ExpressJS, and Rails for backend architecture and routing. Experienced with ORMs like Mongoose and Active Record, using MongoDB and PostgreSQL for database management.`,
  },
  {
    icon: `testing`,
    label: `Testing`,
    body: `Minimizing unexpected errors and maintaining more than 85% test coverage by using Jest and React Testing Library in TDD.`,
  },
  {
    icon: `git`,
    label: `Version Control`,
    body: `Solid understanding of Git to track source control and branches, handling push, pull, and stash commits while keeping the code up to date without merge conflicts.`,
  },
  {
    icon: `tools`,
    label: `Environment & Tools`,
    body: `Experienced with Agile, Jira, GitLab, and GitHub. Collaborate with DevOps teams on CI/CD pipelines, with hands-on experience in Docker and AWS Cloud.`,
  },
]

export const experience = [
  {
    title: `Machine Learning Researcher`,
    org: `NYIT's LAMP Lab`,
    period: `JANUARY 2024 - PRESENT`,
    location: `New York City, New York`,
    lede: `Continuous authentication systems and behavioral biometrics, under the mentorship of leading cybersecurity scholars. My main research project develops a continuous user authentication system using behavioral biometrics such as keystroke and mouse dynamics.`,
    points: [
      `Designing and implementing authentication systems for mobile devices and telerobotics, focusing on machine learning models such as Support Vector Machines, Scaled Manhattan Distance, Random Forest, K-Nearest Neighbors, and Gaussian Mixture Models to improve accuracy and robustness.`,
      `Running experiments to capture, analyze, and interpret data from accelerometers, gyroscopes, and 3D motion capture devices, building methodologies for feature extraction and tuning models to identify unique behavioral patterns.`,
      `Collaborating with an interdisciplinary team on approaches to strengthen security across digital and mobile platforms.`,
      `Specializing in gesture-based authentication, gait recognition, and other behavioral biometrics that drive user-specific authentication mechanisms.`,
      `Contributing findings to top-tier journals and presenting at major conferences.`,
      `Engaging with industry leaders to align academic research with practical cybersecurity applications.`,
      `Mentoring emerging researchers and supporting a collaborative environment within the lab.`,
      `Practicing integration testing to verify components work correctly together and to catch regressions during development.`,
      `Published as Assistant Researcher: Posture and Body Movement Effects on Behavioral Biometrics for Continuous Smartphone Authentication. IEEE Transactions on Biometrics, Behavior, and Identity Science (T-BIOM), vol. 10, pp. 1–1, 2024.`,
    ],
  },
]

export const education = [
  {
    title: `PhD in Computer Science`,
    org: `New York Institute of Technology`,
    period: `JANUARY 2024 - PRESENT`,
    location: `New York City, New York`,
    points: [`Honors: summa cum laude (GPA: 3.70)`],
  },
  {
    title: `MS in Business Analytics`,
    org: `Adelphi University`,
    period: `JANUARY 2020 - DECEMBER 2020`,
    location: `Garden City, New York`,
    points: [`CeDiD: 21TJ – IQ05 – HONG`, `Honors: summa cum laude (GPA: 3.59)`],
  },
  {
    title: `Software Engineering Certificate Program`,
    org: `Flatiron School`,
    period: `DECEMBER 2021 - APRIL 2022`,
    location: `Garden City, New York`,
    points: [
      `Built hands-on full stack experience with React, JavaScript, PostgreSQL, and Ruby on Rails.`,
    ],
  },
]

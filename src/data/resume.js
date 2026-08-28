// Résumé content. Edit here — about.js is layout only.

export const profile = {
  name: `Lam Nguyen`,
  role: `Co-founder & Software Engineer`,
  location: `New York`,
  avatar: `https://liamdev.vercel.app/avatar.png`,
  summary: `Co-founder of ANS, where I rebuilt the storefront from scratch on Hydrogen and the Shopify API instead of a pre-built theme, and lead its web and mobile development. Also a machine learning researcher at NYIT's LAMP Lab working on continuous authentication.`,
  resumeUrl: `https://docs.google.com/document/d/1-JLziUE-TpLsI4EVBPwiEOlSy7nBNDapYvfqL0kYkng/edit?usp=sharing`,
}

export const skills = [
  {
    icon: `store`,
    label: `Commerce`,
    body: `Custom Shopify storefronts built on Hydrogen, Shopify's React-based framework, and the Shopify API — rather than customising a pre-built Liquid theme. Currently extending the same foundation to mobile.`,
  },
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
    title: `Co-founder`,
    org: `ANS — Nail & Beauty Supply`,
    period: `2025 - PRESENT`,
    location: `New York`,
    link: { label: `angelinanailsupply.com`, url: `https://www.angelinanailsupply.com` },
    lede: `An ecommerce store for nail and beauty supply. I own the whole online build — the web storefront today, with a mobile app in progress.`,
    points: [
      `Rebuilt the entire storefront from scratch on Hydrogen, Shopify's React-based framework, and the Shopify API — replacing the pre-built Liquid theme with a custom storefront.`,
      `Responsible for the online store end to end: architecture, build, and release.`,
      `Extending the same Shopify API foundation to a mobile app, currently in development.`,
    ],
  },
  {
    title: `Machine Learning Researcher`,
    org: `NYIT's LAMP Lab`,
    period: `JANUARY 2024 - PRESENT`,
    location: `New York City, New York`,
    lede: `Continuous authentication and behavioral biometrics — identifying people by how they type, move, and hold a device.`,
    points: [
      `Building authentication systems for mobile devices and telerobotics using SVM, Scaled Manhattan Distance, Random Forest, K-Nearest Neighbors, and Gaussian Mixture Models.`,
      `Running experiments on accelerometer, gyroscope, and 3D motion capture data, developing the feature extraction that separates one person's movement from another's.`,
    ],
    publication: {
      role: `Assistant Researcher`,
      title: `Posture and Body Movement Effects on Behavioral Biometrics for Continuous Smartphone Authentication`,
      venue: `IEEE Transactions on Biometrics, Behavior, and Identity Science (T-BIOM)`,
      detail: `vol. 10, pp. 1–1, 2024`,
    },
  },
]

export const education = [
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

<h1 align="center">
  Gatsby.js Medium Blog
</h1>

<p align="center">
   <a href="https://gatsbyjs.com" target="_blank">
     <img src="https://img.shields.io/badge/Built%20with-Gatsby-%23614dff?logo=gatsby" />
   </a>
   <a href="https://reactjs.org/" target="_blank">
     <img src="https://img.shields.io/badge/Powered%20by-React-%2361dafb?logo=react" />
   </a>
   <a>
     <img src="https://img.shields.io/github/license/BrianRuizy/gatsby-minimal-portfolio?color=red&style=flat" />
   </a>
</p>

</div>

<!-- ![Cover](https://user-images.githubusercontent.com/23439187/177675013-db3b69f2-7c63-4424-9caa-b619c56deffc.png)
![Cover (1)](https://user-images.githubusercontent.com/23439187/177679060-97c9ec32-475d-4e44-8baa-9cf28e160983.png)
<p align="center">Don't forget to leave a star ⭐!</p> -->

## Features

- 📲 PWA ready, installable on Android and iOS
- 🔎 Built-in search over post titles, descriptions, and tags — no external service
- 📧 Getform.io contact form with easy setup.
- 📝 Blog ready, easily add your blog posts with MDX
- 🌗 Togglable dark mode
- 💻 SEO ready, option to Add meta description

## Getting Started

Before developing and working with the codebase on your IDE of choice, there are some services to set up to get the project running successfully.

### 0. Node version

This project runs on **Node 24** — see `.nvmrc` and the `engines` field.

Gatsby 4 ships `msgpackr@1.6.1`, which calls `Buffer#utf8Write` in a way Node 19+
rejects, so the build dies during `source and transform nodes` with
`RangeError: "length" is outside of buffer bounds`. The `overrides` block in
`package.json` pins `msgpackr` to `^1.12.1`, which fixes it. Don't drop that
override — Vercel no longer offers a Node version old enough to build without it.

```sh
nvm use
```

### 1. GetForm

contact form is super easy to set up with getform.io.
Simply add your API / endpoint URL to the action attribute of your form and you're good to go. See https://app.getform.io/forms for documentation. The location for this component is `src/components/ContactDrawer.js`.

```jsx
<form
  action="https://getform.io/f/faf8d119-4334-4fcc-ae56-2dc4de9cb453"
  method="POST"
>
  ...
</form>
```

## Run the project

Not you must have already installed [Node.JS](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system) and [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system). See Gatsby's [Development Environment Setup](https://www.gatsbyjs.com/docs/tutorial/part-zero/) documentation for more details or if you have issues with the CLI installation.

```bash
nvm install 24
nvm use 24

npm install -g gatsby-cli
```

1. Install project dependencies `npm install`. If having problems installing try with legacy peer dependencies, `npm install --legacy-peer-deps`.

2. Start Developing. Navigate into your new site’s directory and start up the local server `gatsby develop` 🎉.

See the [reference guide](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) to read more on other commands you can use with the Gatsby CLI.

## Adding your blog posts

Adding your own content is super simple with the Jamstack design of the project. You won't need to write any HTML or CSS, just markdown (although you absolutely can if you wish to change the design or add your own features). The MDX posts are found in the `content/posts/` directory. With MDX you can even add react components to your posts as found below.

Visit [mdxjs.com](https://mdxjs.com) to see what other cool things you can implement.

```mdx
## Example header here

lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem quisquam.

<Alert severity="info">
  Visit <a href="https://python.org">here</a> for docs and examples.
</Alert>
```

![image](https://user-images.githubusercontent.com/23439187/179371961-520835ab-e4ef-4086-90d7-791e26934732.png)

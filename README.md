<!--
*** Thanks for checking out the codeforces-diary. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
-->

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Netlify Status](https://api.netlify.com/api/v1/badges/0336285f-1f65-4e5d-8ac8-9097210d551d/deploy-status)](https://app.netlify.com/sites/codeforces-diary/deploys)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Rishabh-malhotraa/codeforces-diary">
    <img src="images/logo.svg" alt="Logo" width="256" height="256">
  </a>

  <strong>
    <h3 align="center" >codeforces-diary</h3>
  </strong>
  <p align="center">
    Get the list of all questions you attempted on a particular date on codeforces, along with your account stats.
    <br />
    <a href="https://github.com/Rishabh-malhotraa/codeforces-diary/tree/main/src"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://codeforces-diary.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/Rishabh-malhotraa/codeforces-diary/issues">Report Bug</a>
    ·
    <a href="https://github.com/Rishabh-malhotraa/codeforces-diary/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

<br/>

Dashboard             |  List of Questions(click the cell on the heatmap)
:-------------------------:|:-------------------------:
 [![Product Name Screen Shot][product-screenshot]](https://codeforces-diary.netlify.app/)|[![Product Name Screen Shot][product-screenshotII]](https://codeforces-diary.netlify.app/)  

<br />

I though there was not a good way to see at a glance all the questions you atttempted on CodeForces, to see your progress, so thats why i created a tool to do the same.

Click on the any of the heatmap box which is colored to get the list of all the question you attempted on that day.

The website also displays certain stats which I thought would be useful, I plan to add more stats and features in the near future.[(roadmap)](#roadmap)

### Built With

* [React](https://reactjs.org/docs/getting-started.html)
* [Material UI](https://material-ui.com/getting-started/installation/)
* [Redux Toolkit](https://redux-toolkit.js.org/introduction/quick-start)
* [Victory Charts](https://formidable.com/open-source/victory/gallery/)

Written in TypeScript ♥

## Getting Started

Follow the instructions to set up the project on your local machine.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Rishabh-malhotraa/codeforces-diary.git
   ```

2. Install NPM packages

   ``` sh
   npm install
   ```

3. Start the react server

   ``` sh
   npm run start
   ```

## Roadmap

See the [open issues](https://github.com/Rishabh-malhotraa/codeforces-diary/issues) for a list of proposed features (and known issues).

### Things To do

* [x] HeatMap  with Dialog Box
* [x] Radar Chart
* [x] Stats about Questions and Contest
* [x] List of Unsolved Questions
* [x] Bar Chart for Levels And Ratings
* [ ] Virtual Rating Changes
* [ ] Bubble Chart in D3 JS
* [ ] A Seperate Page For useful resources for codeforces
* [ ] Donught Chart for languages and verdicts

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Refer to this [article](https://medium.com/swlh/guide-to-git-a-practical-approach-27926a1ff564?sk=b54ca413a142c275f5d2901d0384a0db) if you have any difficulty in making a pull request

## License

Distributed under the MIT License. See [`LICENSE`][license-url] for more information.

---

## Contact

Rishabh malhotraa - [@CaffeinatedRish](https://twitter.com/CaffeinatedRish) - rmalhotra_be18@thapar.edu

Project Link: [https://codeforces-diary.netlify.app/](https://codeforces-diary.netlify.app/)

---

## Acknowledgements

* [Netlify](https://netlify.com/)
* [axios](https://www.npmjs.com/package/axios)
* [dateformat](https://www.npmjs.com/package/dateformat)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [react-calendar-heatmap](https://www.npmjs.com/package/react-calendar-heatmap)
* [MIT License](https://opensource.org/licenses/MIT)
* [redux-toolkit-tutorial](https://www.youtube.com/watch?v=9lCmbth63k0)
* [Open Peeps(Illuustrations)](https://blush.design/collections/open-peeps)
* [SVG Backgrounds](https://www.svgbackgrounds.com/)
  
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Rishabh-malhotraa/codeforces-diary.svg?style=for-the-badge
[contributors-url]: https://github.com/Rishabh-malhotraa/codeforces-diary/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Rishabh-malhotraa/codeforces-diary.svg?style=for-the-badge
[forks-url]: https://github.com/Rishabh-malhotraa/codeforces-diary/network/members
[stars-shield]: https://img.shields.io/github/stars/Rishabh-malhotraa/codeforces-diary.svg?style=for-the-badge
[stars-url]: https://github.com/Rishabh-malhotraa/codeforces-diary/stargazers
[issues-shield]: https://img.shields.io/github/issues/Rishabh-malhotraa/codeforces-diary.svg?style=for-the-badge
[issues-url]: https://github.com/Rishabh-malhotraa/codeforces-diary/issues
[license-shield]: https://img.shields.io/github/license/Rishabh-malhotraa/codeforces-diary.svg?style=for-the-badge
[license-url]: https://github.com/Rishabh-malhotraa/codeforces-diary/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rishabh-malhotra-4536a418b
[product-screenshot]: images/Dashboard.png
[product-screenshotII]: images/submission-list.png

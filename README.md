<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Gotta Fetch 'Em All</h3>

  <p align="center">
    A React project for fetching and displaying data!
    <br />
    <a href="https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert"><strong>Explore the repo »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
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
    <li>
      <a href="#running-the-app">Runnig the app</a>
      <ul>
        <li><a href="#with-npm">With NPM</a></li>
        <li><a href="#with-docker">With Docker</a></li>
      </ul>
    </li>
    <li><a href="#game">Game</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Welcome to **Gotta fetch() 'Em All**, an exciting Pokémon encounter game built with React. Leveraging the [PokéApi][PokéApi-url], this project delivers an engaging experience for Pokémon enthusiasts. This project allows users to explore various Pokémon locations, initiate encounters, and engage in battles to capture new Pokémon.

### Built With

* ![JavaScript][JavaScript-url]
* ![React][React-url]
* ![HTML5][HTML5-url]
* ![CSS3][CSS3-url]
* ![Docker][Docker-url]
* ![Nginx][Nginx-url]



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

* Docker: Required for running in a containerized environment
* npm: Required for running it locally

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert
   ```

<!-- RUNNING THE APP -->
## Running the app
1. Move to the root folder
   ```sh
   cd 3w_gotta-fetch-em-all-react
   ```
### With NPM
1. Install NPM packages (only have to do it once unless you modify the dependencies)
   ```sh
   npm install
   ```
2. Run the application
   ```sh
   npm start
   ```
3. You can now access the application at [http://localhost:3000][localhost-3000]

4. To stop the application
   ```sh
   `Ctrl + c`
   ```
### With Docker
1. Build the Docker image (only have to do it once unless you modify the Dockerfile or removed the container):
   ```sh
   docker build -t pokemon .
   ```
2. Start the container:
   ```sh
   docker run -p 3000:80 --name pokemon-container -d pokemon
   ```
3. You can now access the application at [http://localhost:3000][localhost-3000]
4. To stop the container:
   ```sh
   docker stop pokemon-container
   ```
5. To remove the container (use only if you no longer need it):
   ```sh
   docker rm pokemon-container
   ```

<!-- FEATURES -->
## Features
- Dynamic Pokémon encounters based on location
- Real-time battle mechanics with win/loss logic
- Responsive UI built with React
- Dockerized for seamless deployment

<!-- GAME -->
## Game
* Start by entering your username
* Select your starter Pokémon
* And choose a location to visit
* When you encounter a Pokémon, you can fight it or flee from the area
* If you battle it and win you can use it on the next encounter
* If you had it already, no duplication will happen
* If you loose, the enemy will flee
* Currently, the game lacks database connectivity, meaning progress cannot be saved yet
* Right now, there's no database connection for the game, so you cannot save your progress

Change a location and an area where you want to travel. If there is a Pokémon there, choose one of yours and try to catch it by winning the fight.

![alt-text](https://i.imgur.com/F7xNUGr.png)

<!-- ROADMAP -->
## Roadmap

Below is a list of completed and planned features for the project. Checkmarks indicate implemented features:
- [x] Fetch Pokémon data from PokéAPI
- [x] Build UI for location-based Pokémon encounters
- [x] Allow users to catch Pokémon in battles
- [ ] Pokédex like display for caught Pokémon
- [ ] Connect to a database to save user progress
- [ ] Enhance battle mechanics (e.g., implement Pokémon abilities)
- [ ] Deploy the app using Docker and make it publicly accessible
- [ ] Add story mode 
- [ ] Add multiplayer mode

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact

Norbert Fabók - [GitHub Profile](https://github.com/faboknorbert)

György Kocsis - [GitHub Profile](https://github.com/Scroll120)

Máté Pojbics - [GitHub Profile](https://github.com/matet2001)


Project Link: [https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert](https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert)

## License
Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert.svg?style=for-the-badge
[contributors-url]: https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert.svg?style=for-the-badge
[forks-url]: https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert/network/members
[stars-shield]: https://img.shields.io/github/stars/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert.svg?style=for-the-badge
[stars-url]: https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert/stargazers
[issues-shield]: https://img.shields.io/github/issues/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert.svg?style=for-the-badge
[issues-url]: https://github.com/CodecoolGlobal/gotta-fetch-em-all-react-faboknorbert/issues
[PokéApi-url]: https://pokeapi.co/
[React-url]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[JavaScript-url]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[HTML5-url]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS3-url]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[Docker-url]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Nginx-url]: https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white
[localhost-3000]: http://localhost:3000

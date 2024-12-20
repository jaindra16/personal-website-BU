
import { fetchRandomCode, fetchRandomMovie, fetchRandomGame, setRandomBackgroundColor, showtab, searchMovie, searchGame } from './tablecontent.js';

document.addEventListener('DOMContentLoaded', function () {
  setInterval(fetchRandomCode, 8000);
  fetchRandomCode();

  setInterval(fetchRandomMovie, 8000);
  fetchRandomMovie();

  setInterval(fetchRandomGame, 8000);
  fetchRandomGame();

  setRandomBackgroundColor();
  
  // Event listeners for resume tabs
  const educationTabLink = document.querySelector('.restabs .restablink[data-tab="education"]');
  educationTabLink.addEventListener('click', (event) => showtab(event, 'education'));

  const experienceTabLink = document.querySelector('.restabs .restablink[data-tab="experience"]');
  experienceTabLink.addEventListener('click', (event) => showtab(event, 'experience'));

  const projectsTabLink = document.querySelector('.restabs .restablink[data-tab="projects"]');
  projectsTabLink.addEventListener('click', (event) => showtab(event, 'projects'));

  const skillsTabLink = document.querySelector('.restabs .restablink[data-tab="skills"]');
  skillsTabLink.addEventListener('click', (event) => showtab(event, 'skills'));

  // Event listeners for movie and game recommendations
  document.addEventListener('click', function (event) {
      if (event.target.classList.contains('movie-link')) {
          searchMovie(event, event.target.textContent);
      }

      if (event.target.classList.contains('game-link')) {
          searchGame(event, event.target.textContent);
      }
  });
});

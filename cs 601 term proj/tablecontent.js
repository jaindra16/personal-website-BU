//(browser is blocking some funtions because of cors, however it works with a live server,  Open a terminal.
//Navigate to the directory containing the HTML file and 
//Run the following command to start a local server :)
// python3 -m http.server

//quote

export function fetchRandomCode() {
  fetch('codes.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const randomCode = data[Math.floor(Math.random() * data.length)];
      document.getElementById('fun-content').innerHTML = `<p>Random Quote: ${randomCode}</p>`;
    })
    .catch(error => {
      console.error('Error fetching codes:', error);
    });
}



//movierecommendations

export function fetchRandomMovie() {
  fetch('movies.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const randomMovie = data[Math.floor(Math.random() * data.length)];
      const movieElement = document.getElementById('movienme');
      movieElement.innerHTML = `<p>My Recommendation : <span class="movie-link">${randomMovie.name}</span></p>`;
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });
}


export function searchMovie(event, movieName) {
  event.preventDefault();
  const searchQuery = encodeURIComponent(`${movieName} movie`);
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
  window.open(searchUrl, '_blank');
}




//gamerecommendations

export function fetchRandomGame() {
  fetch('games.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const randomGame = data[Math.floor(Math.random() * data.length)];
      const gameElement = document.getElementById('gamenme');
      gameElement.innerHTML = `<p>My Recommendation : <span class="game-link">${randomGame.name}</span></p>`;
    })
    .catch(error => {
      console.error('Error fetching games:', error);
    });
}

export function searchGame(event, gameName) {
  event.preventDefault();
  const searchQuery = encodeURIComponent(`${gameName} game`);
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
  window.open(searchUrl, '_blank');
}




//showtab

export function showtab(event, tabname) {
  let tlinks = document.querySelectorAll('.restablink');
  let tcontents = document.querySelectorAll('.tabcontent');

  tlinks.forEach(link => link.classList.remove("currentsel"));
  tcontents.forEach(content => content.classList.remove("currenttab"));

  event.currentTarget.classList.add("currentsel");
  document.getElementById(tabname).classList.add("currenttab");
}


//interests Tab (used JQuery)

$(document).ready(function() {
  $('#music').click(function() {
    window.open('https://open.spotify.com/user/31i7k2dai3cux5obfqfwjmvcx7xu?si=f0cbdf7e199641ad');
  });
});

$(document).ready(function() {
  $('#games').click(function() {
    window.open('https://www.google.com/search?q=best+video+games+to+play+right+now&rlz=1C5CHFA_enIN946IN946&oq=best+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIOCAEQRRgnGDsYgAQYigUyBggCEEUYOTIGCAMQRRg7MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGD3SAQkyODM3NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8');
  });
});

$(document).ready(function() {
  $('#messi').click(function() {
    window.open('https://www.google.com/search?q=fc+barcelona&rlz=1C5CHFA_enIN946IN946&oq=fc+barcelona&gs_lcrp=EgZjaHJvbWUqFQgAEAAYQxiDARjjAhixAxiABBiKBTIVCAAQABhDGIMBGOMCGLEDGIAEGIoFMhIIARAuGEMYgwEYsQMYgAQYigUyBggCEEUYQDIMCAMQABhDGIAEGIoFMgoIBBAAGLEDGIAEMg8IBRAAGEMYsQMYgAQYigUyDAgGEAAYQxiABBiKBTIGCAcQRRg90gEIMzI5MmoxajeoAgCwAgA&sourceid=chrome&ie=UTF-8');
  });
});

$(document).ready(function() {
  $('#anime').click(function() {
    window.open('https://myanimelist.net/profile/jaindra');
  });
});

$(document).ready(function() {
  $('#movies').click(function() {
    window.open('https://www.google.com/search?q=best+movies+to+watch+right+now&rlz=1C5CHFA_enIN946IN946&oq=best+movies+to+watch+right+now&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIHCAEQABiABDINCAIQABiDARixAxiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU2MTRqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8#wxpd=browse:true');
  });
});


  //contact Tab

const lkimg = document.getElementById('linkedin');

  lkimg.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/jaindra-parvathaneni-46573a279/');
  });

const mailimg = document.getElementById('mail');

  mailimg.addEventListener('click', function() {
    window.open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqtbkJqzMpSxnPlSwWnTmHZJtCczVMPBMKRfqWnkJqknlLKlJpsFScSCJPmPhTTHKCSQB');
  });

const bumimg = document.getElementById('bumail');

  bumimg.addEventListener('click', function() {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgmKzxxrlblMnhDvPkFHjzPkHKZPGnGmhlDgdlthBzxssnqgwHxxhcrLJmvKjmfzGWsmg');
  });

const instaimg = document.getElementById('insta');

    instaimg.addEventListener('click', function() {
    window.open('https://www.instagram.com/jaindra16/');
  });

const fbimg = document.getElementById('fb');

  fbimg.addEventListener('click', function() {
    window.open('https://www.facebook.com/profile.php?id=100009421974595');
  });

const ximg = document.getElementById('x');

  ximg.addEventListener('click', function() {
    window.open('https://twitter.com/jaindra16');
  });


  //Footer
  
export function setRandomBackgroundColor() {
  fetch('colors.json')
    .then(response => response.json())
    .then(data => {
      const colors = data.colors;
      const footer = document.getElementById('footer');
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      footer.style.backgroundColor = randomColor;
    })
    .catch(error => console.error('Error fetching colors.json:', error));
}


//backtotop using es6 class
class BackToTopButton {
  constructor() {
      this.button = document.createElement('button');
      this.button.textContent = 'Back to Top';
      this.button.classList.add('back-to-top');
      document.body.appendChild(this.button);
      this.button.addEventListener('click', this.scrollToTop);
      window.addEventListener('scroll', () => this.toggleButtonVisibility());
  }

  scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }

  toggleButtonVisibility() {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom) {
          this.button.style.display = 'block';
      } else {
          this.button.style.display = 'none';
      }
  }
}

new BackToTopButton();

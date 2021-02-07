<template>
<div class="container">
  <div class="row">
    <div class="col100">
      <h1 class="main_title">Movie list</h1>
      <input class="search_bar" type="text" placeholder="Find the movie">
      <button class="button_search">Search</button>
      <h2 class="no_results hide"></h2>
    </div>
    <Cards
      v-bind:cards="cards"
     />
  </div>
  <div class="row movie_list"></div>
</div>
</template>

<script>
import Cards from "@/components/Cards";
export default {
  name: 'Cards',
  data() {
    return {
      cards: [{
          Title: "Scrubs",
          Year: "2012",
          Type: "TV",
          imdbID: "https://www.imdb.com/title/tt0285403",
          Poster: "https://m.media-amazon.com/images/M/MV5BODE1MGVjZjMtODc5My00ODBjLTg0NWItMDllNTNlM2Y3ZGYyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
          Title: "Supernatural",
          Year: "2005–2020",
          imdbID: "tt0460681",
          Type: "series",
          Poster: "https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
          Title: "A Very Special Supernatural Special",
          Year: "2014",
          imdbID: "tt4074772",
          Type: "movie",
          Poster: "https://m.media-amazon.com/images/M/MV5BOGY5NTAwMWUtOGJlYS00YmYwLWFlOTMtNzNjZDdlYjBiN2FjXkEyXkFqcGdeQXVyOTc1MTAwNTM@._V1_SX300.jpg"
        }
      ]
    }
  },
  components: {
    Cards
  }
}

// let movieList = document.querySelector('.movie_list');
// let noResults = document.querySelector('.no_results');
// let searchBar = document.querySelector('.search_bar');
// let buttonSearch = document.querySelector('.button_search');
// let apikey = '6b6ec75b'; // backup - 25851263, 3fb5f5bd

// buttonSearch.onclick = function() {
//   while (movieList.firstChild) {
//     movieList.removeChild(movieList.firstChild)
//   }

//   let searchWords = searchBar.value;
//   let url = 'http://www.omdbapi.com/?s=' + searchWords + '&apikey=' + apikey
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {

//       if (data.Response === 'False') {
//         noResults.classList.remove('hide');
//         noResults.innerHTML = data.Error;
//       } else {

//         noResults.classList.add('hide');

//         for (let i = 0; i < data.Search.length; i++) {
//           if (data.Search[i].Poster === 'N/A') {
//             data.Search[i].Poster = 'img/poster_stub.png';
//           }
//           let movieCard = document.createElement('div');
//           movieCard.classList.add('movie_card');
//           movieCard.classList.add('col25');
//           movieCard.innerHTML =
//             '<div class="content">' +
//             '<div class="poster_cont">' +
//             '<img class="poster" src="' + data.Search[i].Poster + '" alt=""></div>' +
//             '<h3>' + data.Search[i].Title + '</h3>' +
//             '<p>' + data.Search[i].Year + '</p>' +
//             '<p>' + data.Search[i].Type + '</p>' +
//             '</div>' +
//             '<a href="https://www.imdb.com/title/' + data.Search[i].imdbID + '" class="show_more" target="_blank">Go to IMDB</a>' +
//             '<a href="file:///home/fox/hobby/SerialKiller_pureJS/index.html?' + data.Search[i].imdbID + '" class="show_more" target="_blank">raiting episodes</a>';
//           movieList.appendChild(movieCard);
//         }
//       }
//     })
// };
</script>

<style scoped>
/* font */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* grid */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.col25 {
  margin: 12px;
  box-sizing: border-box;
  width: calc(25% - 24px);
}

.col100 {
  margin: 12px;
  box-sizing: border-box;
  width: calc(100% - 24px);
  text-align: center;
}

@media screen and (max-width: 960px) {
  .col25 {
    width: calc(50% - 24px);
  }
}

@media screen and (max-width: 640px) {
  .col25 {
    width: calc(100% - 24px);
  }
}

/* main */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.show {
  display: block;
}

.hide {
  display: none;
}

body {
  background: rgb(226, 226, 226);
}

p,
h1,
h2,
h3,
a {
  margin-top: 16px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie_card {
  padding: 24px;
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie_card:hover {
  box-shadow: 0px 2px 20px rgba(29, 35, 58, 0.16);

}

.show_more {
  border: none;
  width: 100%;
  padding: 12px 0;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  color: #1f1f1f;
  text-transform: uppercase;
  background-color: rgb(233, 233, 233);
  text-align: center;
  text-decoration: none;
}

.show_more:hover {
  background: rgb(23, 82, 192);
  cursor: pointer;
  color: #ffffff;
}

.poster {
  border-radius: 8px;
}

.poster_cont {
  width: 100%;
  height: 375px;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  background-position: center;
}
</style>

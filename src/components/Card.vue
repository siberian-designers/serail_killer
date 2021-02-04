<template>
<div class="movie_card col25">
  <div class="content">
    <div class="poster_cont"><img class="poster" :src="card.poster" alt=""></div>
    <h3>{{card.title}}</h3>
    <p>{{card.year}}</p>
    <p>{{card.type}}</p>
  </div><a :href="card.imdb" class="show_more" target="_blank">Go to IMDB</a>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      card: {
        title: "Scrubs",
        year: "2012",
        type: "TV",
        imdb: "https://www.imdb.com/title/tt0285403",
        poster: "https://m.media-amazon.com/images/M/MV5BODE1MGVjZjMtODc5My00ODBjLTg0NWItMDllNTNlM2Y3ZGYyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      }
    }
  },
  name: 'Card',
  props: {
    msg: String
  },
}
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

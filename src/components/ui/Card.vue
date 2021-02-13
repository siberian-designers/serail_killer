<template>
<div class="movie_card col25">
  <div class="content">
    <!-- todo ЙОБАНЫЕ АССЕТЫ, НЕ ПОДКЛЮЧАЮТСЯ НИКАК -->
    <div class="poster_cont"><img class="poster" :src="card.Poster === 'N/A' ? '../../../assets/poster_stub.png' : card.Poster" alt=""></div>
    <h3>{{card.Title}}</h3>
    <p>{{card.Year}}</p>
    <p>{{card.Type}}</p>
  </div><a :href="'https://www.imdb.com/title/' + card.imdbID" class="show_more" target="_blank">Go to IMDB</a>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'card'
  ],
}
</script>
<style scoped>

.col25 {
  margin: 12px;
  box-sizing: border-box;
  width: calc(25% - 24px);
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

<template>
<div>
  <Header />
  <Heading title="Find TV Shows" />
  <SearchBar placeholder="Find any TV shows or series" />
  <Banner />
  <Cards v-bind:cards="cards" />
</div>
</template>

<script>
import Heading from '../ui/Heading';
import SearchBar from '../ui/SearchBar';
import Header from '../ui/Header/Header';
import Cards from '../ui/Cards';
import Banner from '../ui/Banner'

export default {
  name: 'MainPage',
  components: {
    Heading,
    SearchBar,
    Header,
    Banner,
    Cards
  },
  data: function() {
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
  }
}
</script>

<style>

</style>

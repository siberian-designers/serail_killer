<template>
<div>
  <Header />
  <Heading title="Find TV Shows" />
  <SearchBar placeholder="Find any TV shows or series" />
  <Banner />
  <Cards v-bind:cards="Search" />
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
      "Search": [{
        "Title": "Scrubs",
        "Year": "2001–2010",
        "imdbID": "tt0285403",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODE1MGVjZjMtODc5My00ODBjLTg0NWItMDllNTNlM2Y3ZGYyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      }, {
        "Title": "Scrubs: Interns",
        "Year": "2009–",
        "imdbID": "tt1350342",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjg0M2ZjMWMtYTY4MC00YjkxLWI0ZjUtYmViZGIxOGFiMjFiXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg"
      }, {
        "Title": "TLC: No Scrubs",
        "Year": "1999",
        "imdbID": "tt6718926",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmI2NDFhMjYtZDFiYi00YzIwLTlkNTItZjJiM2QyN2VmNDI1XkEyXkFqcGdeQXVyNTk1NTMyNzM@._V1_SX300.jpg"
      }, {
        "Title": "Angels in Scrubs",
        "Year": "2012",
        "imdbID": "tt2202522",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzQ4NDkzOWQtMzRiOC00OGUyLTk2M2MtNjNhYWNjODQ3ZTNlXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg"
      }, {
        "Title": "Jack Scrubs His Hammock",
        "Year": "1900",
        "imdbID": "tt2371138",
        "Type": "movie",
        "Poster": "N/A"
      }, {
        "Title": "Earthrise: Fashion Scrubs Up",
        "Year": "2013–",
        "imdbID": "tt2771476",
        "Type": "series",
        "Poster": "N/A"
      }, {
        "Title": "Pride SFV: Scrubs in Love",
        "Year": "2013",
        "imdbID": "tt3125440",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3NDY4ODQyM15BMl5BanBnXkFtZTgwNjA5NDgwMDE@._V1_SX300.jpg"
      }, {
        "Title": "Angels in Scrubs",
        "Year": "2019",
        "imdbID": "tt4619642",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGMwNmMwNDYtYzM4Yi00MTM1LTlkMTMtYjljMGU0ZDhkNTY4XkEyXkFqcGdeQXVyMjUwNDcwMDQ@._V1_SX300.jpg"
      }],
      "totalResults": "8",
      "Response": "True"
    }
  }
}
</script>

<style>

</style>

<template>
<div>
  <Header />
  <Heading title="Find TV Shows" />
  <SearchBar placeholder="Find any TV shows or series" />
  <Banner />
</div>
</template>

<script>
import Heading from '../ui/Heading';
import SearchBar from '../ui/SearchBar';
import Header from '../ui/Header/Header';
import Banner from '../ui/Banner'

export default {
  name: 'MainPage',
  components: {
    Heading,
    SearchBar,
    Header,
    Banner
  }
}
</script>

<style>

</style>

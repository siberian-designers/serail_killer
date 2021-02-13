<template>
<div id="app">
  <MainPage />
</div>
</template>

<script>
import MainPage from './components/pages/MainPage.vue'
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(226, 226, 226);
}

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
</style>

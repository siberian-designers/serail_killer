<template>
<div class="container">
  <div class="row movie_list">
    <Card v-for="card in cards" :key="card.Title" v-bind:card="card" />
  </div>
</div>
</template>

<script>
import Card from "@/components/ui/Card";
export default {
  name: 'Cards',
  components: {
    Card
  },
  props: ["cards"]
}
</script>

<style scoped>
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
</style>

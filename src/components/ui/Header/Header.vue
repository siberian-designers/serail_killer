<template>
<header>
  <div class="logo">
    <img src="../../../assets/Logo.svg" alt="">
  </div>
  <HeaderMenuList v-bind:menus="menus" />
</header>
</template>

<script>
import HeaderMenuList from './HeaderMenuList'

export default {
  name: "Header",
  components: {
    HeaderMenuList
  },
  data() {
    return {
      menus: [{
          id: 1,
          title: 'About service'
        },
        {
          id: 2,
          title: 'Telegram'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}
</style>

<template>
<h1>{{title}}</h1>
</template>

<script>
export default {
  name: "Heading",
  props: ['title']
}
</script>

<style>
h1 {
  font-size: 44px;
  font-style: normal;
  font-weight: 900;
  line-height: 64px;
  letter-spacing: 0em;
  padding: 16px 0;
}
</style>

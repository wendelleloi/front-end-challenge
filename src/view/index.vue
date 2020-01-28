<template lang="pug">
  .content-app
    NavBar
</template>

<script>
import NavBar from '@/components/structure/Navbar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.content-app {
  font-family: $font-family-base;
  text-align: center;
  color: $color-white;
  margin-top: 40px;
}
body {
  background-color: magenta;
}
</style>

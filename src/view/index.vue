<template lang="pug">
  .content-app
    NavBar
    Showcase
</template>

<script>
import NavBar from '@/components/structure/Navbar'
import Showcase from '@/components/structure/Showcase'

export default {
  components: {
    NavBar,
    Showcase
  }
}
</script>

<style lang="scss">
.content-app {
  font-family: $font-family-base;
  text-align: center;
  color: $color-white;
}
body {
  background-color: $color-gray-base;
}
</style>

<template lang="pug">
  .content-app
    NavBar
    //- img(alt="Vue logo" src="@/assets/logo.png")
    //- HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/structure/Navbar'

export default {
  components: {
    // HelloWorld,
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

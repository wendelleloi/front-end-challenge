<template lang="pug">
  .content-app
    NavBar
    Showcase
    Chamadas
    Versoes
    Carros
    Footer
</template>

<script>
import NavBar from '@/components/structure/Navbar'
import Showcase from '@/components/structure/Showcase'
import Chamadas from '@/components/structure/Chamadas'
import Versoes from '@/components/structure/Versoes'
import Carros from '@/components/structure/Carros'
import Footer from '@/components/structure/Footer'

export default {
  name: 'index',
  components: {
    NavBar,
    Showcase,
    Versoes,
    Chamadas,
    Carros,
    Footer
  }
}
</script>

<style lang="scss">
.content-app {
  font-family: $font-family-base;
  text-align: center;
  color: $color-white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
body {
  background-color: $color-gray-base;
}
</style>

<template lang="pug">
  .background-carros
    .title
      h1 Conheça nossos carros
      .divider
    .swiper-slider
      swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide(v-for="(swiper, index) in this.SwiperSliders" :key="index")
          a(href="#")
            img(:src="swiper.img")
        .swiper-button-prev(slot="button-prev")
          i.icone.icon-angle-left
        .swiper-button-next(slot="button-next")
          i.icone.icon-angle-right
        .swiper-pagination(slot="pagination")
</template>

<script>

import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 600,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        a11y: {
          prevSlideMessage: 'Item anterior',
          nextSlideMessage: 'Próximo item'
        }
      },
      SwiperSliders: [
        { img: require('../../assets/slider/classeA.svg') },
        { img: require('../../assets/slider/classeC.svg') },
        { img: require('../../assets/slider/classeCLA.svg') },
        { img: require('../../assets/slider/classeC.svg') },
        { img: require('../../assets/slider/classeA.svg') },
        { img: require('../../assets/slider/classeA.svg') },
        { img: require('../../assets/slider/classeC.svg') },
        { img: require('../../assets/slider/classeCLA.svg') },
        { img: require('../../assets/slider/classeC.svg') },
        { img: require('../../assets/slider/classeA.svg') }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    mounted () {
      return this.swiper.slideTo(3, 1000, false)
    }
  }
}
</script>

<style lang="scss">
.background-carros {
  width: 100%;
  min-height: 370px;
  background-color: $color-white;
  color: $color-gray-darker;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    margin-top: $margin-big;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
      font-size: $font-size-h1;
      font-weight: $font-weight-light;
      line-height: 30px;
    }
    .divider{
      margin: 10px 0;
      height: 1px;
      width: 35%;
      background-color: $color-gray-dark;
      opacity: .5;
    }
  }
  .swiper-slider{
    width: 80%;
    margin: 50px 0;
    img{
      max-width: 180px;
      max-height: 110px;
    }
  }
}
</style>

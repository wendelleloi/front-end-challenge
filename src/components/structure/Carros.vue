<template lang="pug">
  .background-carros
    .title
      h1 Conheça nossos carros
      .divider
    .swiper-slider
      swiper(:options="swiperOption" ref="mySwiper")
        swiper-slide(v-for="(swiper, index) in this.SwiperSliders" :key="index")
          a(href="#" :title="swiper.label")
            img(:src="swiper.img")
            span {{swiper.label}}
        .swiper-button-prev(slot="button-prev")
          .bg-prev
            .bg
        .swiper-button-next(slot="button-next")
          .bg-next
            .bg
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
        { img: require('../../assets/slider/classeA.svg'), label: 'Classe A' },
        { img: require('../../assets/slider/classeC.svg'), label: 'Classe C' },
        { img: require('../../assets/slider/classeCLA.svg'), label: 'Classe CLA' },
        { img: require('../../assets/slider/classeC.svg'), label: 'Classe C' },
        { img: require('../../assets/slider/classeA.svg'), label: 'Classe A' },
        { img: require('../../assets/slider/classeA.svg'), label: 'Classe A' },
        { img: require('../../assets/slider/classeC.svg'), label: 'Classe C' },
        { img: require('../../assets/slider/classeCLA.svg'), label: 'Classe CLA' },
        { img: require('../../assets/slider/classeC.svg'), label: 'Classe C' },
        { img: require('../../assets/slider/classeA.svg'), label: 'Classe A' }
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
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $color-gray-darker;
      &:hover{
        text-decoration: none;
      }
    }
    .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      margin: 0 10px 0 0;
      opacity: 1;
      background-color: $color-gray;
    }
    .swiper-pagination-bullet-active {
      background: #b71d3d;
      border-style: none;
    }
    .swiper-container-horizontal{
      height: 200px;
    }
    .swiper-button-prev,.swiper-button-next{
      width: 30px;
      height: 30px;
      background-image: none;
      .bg{
        height: 100%;
        width: 100%;
        background-color: #000;
        opacity: 0.2;
        &:hover{
          opacity: .5;
        }
      }
    }
    .swiper-button-next{
      .bg-next{
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('../../assets/slider/rightArrow.svg');
        /* filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(259deg) brightness(107%) contrast(103%); */
      }
    }
    .swiper-button-prev{
      .bg-prev{
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('../../assets/slider/rightArrow.svg');
        /* filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(259deg) brightness(107%) contrast(103%); */
        transform: rotate(180deg);
      }
    }
    img{
      max-width: 180px;
      max-height: 110px;
    }
  }
}
</style>

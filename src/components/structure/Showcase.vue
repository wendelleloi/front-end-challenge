<template lang="pug">
  .vimeo-video.container-fluid.no-gutters
    vueVimeoPlayer.vimeo(
      ref="player"
      :options="{ responsive: true, muted: true }"
      :video-id="videoID"
      @ready="onReady"
      :autoplay="true"
      :player-height="223"
      :player-width="320"
      loop="true"
      controls="false"
    )
    .container
      .isca
        form
          .title
            h1 SIMULAR FINANCIAMENTO
            h2 Escolha a parcela que cabe no seu bolso
          .divider
          .version
            label(for='version') Selecione uma versão
            select.form-control(name='version')
              option(selected='' value='1.8') 1.8
              option(value='2.0') 2.0
          .divider
          .user
            input(placeholder="Nome*")
            input(placeholder="E-mail*")
            input(placeholder="Telefones*")
          .parcelas
            label.title Número de parcelas
            .combo
              label.container
                | 12
                input(type='radio' checked='checked' name='radio')
                span.checkmark
              label.container
                | 24
                input(type='radio' name='radio')
                span.checkmark
              label.container
                | 36
                input(type='radio' name='radio')
                span.checkmark
              label.container
                | 48
                input(type='radio' name='radio')
                span.checkmark
            input(placeholder="Valor da entrada*")
          .ciencia
            label.container
              | Desejo receber ofertas exclusivas da PG Prime.
              input(type="checkbox" checked="checked")
              span.checkmark
          .button
            button(type="button") SIMULAR FINCANCIAMENTO
          .politica
            a(href="#" title="Política de provacidade") Política de provacidade
      .head-line
        h1 ETIOS HATCH 2017 x 1.3 manual
        h2 Você tem mais para descobrir
        .price
          h3 de R$ 44.120,00
          h4 por  <strike> R$ 40.987,00 </strike>
          p *Consulte as Condições Comerciais
        .social
          p Gostou? Então compartilhe.
          ul
            li
              .social-icons
                i.fa.fa-facebook-square
                | Share
              span.facebook 378k
            li
              .social-icons
                i.fa.fa-facebook-square
                | Like
              span.facebook 229k
          p *Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versoes. Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificadas sem aviso prévio. Consulte e confirme todas as informações com um de nossos vendedores..

</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  components: {
    vueVimeoPlayer
  },
  data () {
    return {
      videoID: '99088718',
      playerReady: true
    }
  },
  methods: {
    onReady () {
      this.playerReady = true
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
.no-gutters{
  padding: 0;
}
.vimeo-video{
  .vimeo{
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    // max-height: 200px;
    position: absolute;
  }
  .container{
    position: absolute;
    top: 20%;
    right: 5%;
    padding: 0 $padding-small;
    display: flex;
    flex-direction: row;
    .isca{
      background-color: rgba(24, 22, 22, .5);
      border: $border;
      max-width: 300px;
      padding: $padding-base;
      input{
        width: 100%;
        border-radius: 5px;
        margin-bottom: $margin-base;
        padding-left: $padding-wee;
        height: 30px;
        background-color: transparent;
        color: $color-white;
        border: $border;
      }
      label{
        font-weight: $font-weight-bold;
      }
      .title {
        h1{
          font-size: 18px
        }
        h2 {
          font-size: $font-size-small;
        }
      }
      .divider{
        height: 1px;
        width: 100%;
        color: $color-white;
        background-color: $color-white;
        margin: $margin-small 0;
      }
      .version{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        select{
          height: 30px;
          padding-left: $padding-wee;
          background-color: transparent;
          color: lightgrey;
          border: $border;
        }
      }
      .user{
        margin-bottom:$margin-base;
      }
      .parcelas{
        display: flex;
        flex-direction: column;
        .title{
          align-self: flex-start;
          margin-left: 5px;
        }
        .combo{
          display: flex;
          justify-content: space-around;
          margin-left: $margin-small;
          margin-bottom: $margin-base;
          .container {
            display: block;
            position: relative;
            padding-left: $padding-base;
            cursor: pointer;
            font-size: 15px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }                 /* Hide the browser's default radio button */
          .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          /* Create a custom radio button */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 15px;
            width: 15px;
            background-color: transparent;
            border-radius: 50%;
            border: $border;
          }

          /* On mouse-over, add a grey background color */
          .container:hover input ~ .checkmark {
            background-color: $color-white;
          }

          /* When the radio button is checked, add a blue background */
          .container input:checked ~ .checkmark {
            background-color: transparent;
          }

          /* Create the indicator (the dot/circle - hidden when not checked) */
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          /* Show the indicator (dot/circle) when checked */
          .container input:checked ~ .checkmark:after {
            display: block;
          }

          /* Style the indicator (dot/circle) */
          .container .checkmark:after {
            top: 4px;
            left:4px;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: $color-white;
          }
        }
      }
      .ciencia{
        margin: 0 0 $margin-small $margin-small;
        .container {
          display: block;
          position: relative;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          font-weight: $font-weight-normal;
          font-size: 9px;
        }                 /* Hide the browser's default radio button */
        .container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }
        /* Create a custom radio button */
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 15px;
          width: 15px;
          background-color: transparent;
          border: $border;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input ~ .checkmark {
          background-color: $color-white;
        }

        /* When the radio button is checked, add a blue background */
        .container input:checked ~ .checkmark {
          background-color: transparent;
        }

        /* Create the indicator (the dot/circle - hidden when not checked) */
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        /* Show the indicator (dot/circle) when checked */
        .container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the indicator (dot/circle) */
        .container .checkmark:after {
          top: 4px;
          left:4px;
          width: 5px;
          height: 5px;
          background: $color-white
        }
      }
      .button button{
        width: 100%;
        height: 41px;
        color: $color-white;
        border: $border;
        border-radius: $border-radius;
        cursor: pointer;
        filter: drop-shadow(0px 2px 0px rgba(171,46,67,0.7));
        background-color: #b71d3e;
        &:hover{
          filter: drop-shadow(0px 4px 3px rgba(171,46,67,0.7));
          background-color: #db5168;
        }
      }
      .politica{
        margin-top: $margin-base;
        text-align: start;
        a{
          color: $color-font;
          text-decoration: $link-hover-decoration;
        }
      }
    }
    .head-line{
      max-width: 340px;
      padding: $padding-base;
      padding-bottom: 0;
      text-align: start;
      h1, h2{
        font-weight: $font-weight-bold;
      }
      h1{
        font-size: $font-size-h1;
      }
      h2{
        font-size: $font-size-h2
      }
      .price{
        filter: drop-shadow(0px 1px 3.5px rgba(0,0,0,0.75));
        font-weight: $font-weight-semi-bold;
        margin-top: 60px;
      }
      .social{
        margin-top: 60%;
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        ul{
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .facebook{
            position:relative;
            background: #f2f2f5;
            color: black;
            margin-left: 10px;
            height: 20px;
            width: 40px;
            &::after{
              content: "";
              z-index: 0;
              position: absolute;
              top: 5px;
              right: 32px;
              background: #f2f2f5;
              color: #f2f2f5;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
              border-width: 0px 10px 10px 0px;
              border-style: solid;
            }
          }
          li{
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 5px;
            .social-icons{
              height: 20px;
              width: 60px;
              background-color: $color-facebook;
            }
            i{
              height: 12px;
              width: 12px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>

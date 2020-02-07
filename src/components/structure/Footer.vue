<template lang="pug">
  .footer
    .logo
      img(src="../../assets/Background.svg")
    .copyright
      p © Copyright 2015 - Cliente - Todos os direitos reservados.
      ul
        li
          a(href="#" title="Visitar site") Visitar site
        li
          a(href="#" title="Contato") Contato
        li
          a(href="#" title="Política de privacidade") Política de privacidade
      img(src="../../assets/autoforce.svg")
    .social
      .facebook
        a(href="#" title="Facebook")
          i.fa.fa-facebook-f
      .twitter
        a(href="#" title="Twitter")
          i.fa.fa-twitter
      .google-plus
        a(href="#" title="Google Plus")
          span.icon.icon-telephone ......
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: 150px;
    width: 100%;
    font-size: $font-size-small;
    font-weight: $font-weight-normal;
    color: $color-gray-dark;
    .copyright{
      ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        margin-bottom: 35px;
        li{
          margin-right: 10px;
        }
        a{
          font-size: $font-size-small;
          font-weight: $font-weight-normal;
          color: $color-gray-dark;
          text-decoration: underline;
        }
        img{
          margin-bottom: 20px;
        }
      }
    }
    .logo{
      img{
        widows: 145px;
        height: 30px;
      }
    }
    .social{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      a{
        height: 100%;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
      }
      .fa{
        color: $color-gray-base;
        font-size: 20px;
      }
      .fa-twitter{
        background-color: $color-gray-dark !important;
      }
      .facebook, .twitter, .google-plus{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color-gray-dark;
        margin-right: 5px;
        height: 35px;
        width: 35px;
      }
      .twitter, .fa-twitter{
          &:hover{
            background-color: $color-twitter !important;
            .fa{
              color: $color-white;
            }
            .fa-twitter{
              background-color: $color-twitter !important;
            }
          }
      }
      .facebook{
          &:hover{
            background-color: $color-facebook;
            .fa{
              color: $color-white;
            }
          }
      }
      .google-plus{
        a{
          height: 23px;
          width: 23px;
        }
        &:hover{
          background-color: #245dc1;
          .icon-telephone{
            filter: invert(97%) sepia(0%) saturate(0%) hue-rotate(61deg) brightness(104%) contrast(104%);
          }
        }
        .icon {
          background-size: cover;
        }
        .icon-telephone {
          background-image: url('../../assets/googleplus.svg');
          filter: invert(14%) sepia(1%) saturate(0%) hue-rotate(48deg) brightness(101%) contrast(94%);
        }
      }
    }
  }
</style>

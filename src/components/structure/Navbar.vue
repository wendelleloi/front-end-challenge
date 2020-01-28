<template lang="pug">
  .container.custom-nav-bar
    nav.navbar.navbar-expand-lg
      a.navbar-brand(href='#' @click.prevent)
        img(:src="this.imgLogo")
      button.navbar-toggler(type='button' @click="openMenuCollapse")
        span.navbar-toggler-icon
      #navbarNavDropdown.navbar-collapse.collapse(:class="{'collapse-block' : this.isMobile}")
        ul.navbar-nav
          li.nav-item.dropdown
            a#navbarDropdownMenuLink.nav-link.dropdown-toggle(
              href='#'
              @click.prevent="openDropdown('servicos')"
              v-click-outside="closeDropdownServiços"
            ) Nossos Veículos
            .dropdown-menu.--veiculos(v-show="isOpenServicos")
              a.dropdown-item( v-for="(veiculos, index) in this.dropdownVeiculos" :key="index" href='#') {{ veiculos.label }}
                img(:src="veiculos.img")
          li.nav-item.services
            a.nav-link(href='#' @click.prevent) Serviços
          li.nav-item.dropdown
            a#navbarDropdownMenuLink.nav-link.dropdown-toggle(
              href='#'
              @click.prevent="openDropdown('vendas')"
              v-click-outside="closeDropdownVendas"
            ) Vendas Diretas
            .dropdown-menu.--vendas(v-show="isOpenVendas")
              a.dropdown-item.vendas-diretas(href='#' v-for="(venda, index) in this.dropdownVendas" :key="index") {{ venda.label }}
          li.nav-item.dropdown.telephones
            a#navbarDropdownMenuLink.nav-link.dropdown-toggle(
              href='#'
              @click.prevent="openDropdown('telefones')"
            )
              span.icon.icon-telephone
              p TELEFONES
            .dropdown-menu.--telefones(v-show="isOpenTelefones")
              a#navbarDropdownMenuLink.nav-link.dropdown-toggle(
                href='#'
                @click.prevent="openDropdown('sub-01-telefone')"
              ) Toyota Nações Unidas
              .dropdown-menu.--relative(v-show="isOpenSub01Telefone")
                a.dropdown-item(href='#') (11) 3500-7909 | <span>Vendas</span>
                a.dropdown-item(href='#') (11) 3500-7909 | <span>Serviços</span>
              a#navbarDropdownMenuLink.nav-link.dropdown-toggle(
                href='#'
                @click.prevent="openDropdown('sub-02-telefone')"
              ) Toyota Morombi
              .dropdown-menu.--relative(v-show="isOpenSub02Telefone")
                a.dropdown-item(href='#') (11) 3500-7909 | <span>Serviços</span>
        a.navbar-brand(href='#' @click.prevent)
          img(:src="this.imgBand")
</template>

<script>

export default {
  data () {
    return {
      isOpenServicos: false,
      isOpenVendas: false,
      isOpenTelefones: false,
      isOpenSub01Telefone: false,
      isOpenSub02Telefone: false,
      isOpenSub03Telefone: false,
      isMobile: false,
      imgLogo: require('../../assets/Background.svg'),
      imgBand: require('../../assets/Background-toyota.svg'),
      imgTelefone: require('../../assets/telephone.svg'),
      dropdownVeiculos: [
        { label: 'ETIOS HATCH 2017', img: require('../../assets/thumb/carro1.svg') },
        { label: 'ETIOS SEDÃ 2017', img: require('../../assets/thumb/carro2.svg') },
        { label: 'ETIOS CROSS 2017', img: require('../../assets/thumb/carro3.svg') },
        { label: 'COROLLA 2016', img: require('../../assets/thumb/carro4.svg') },
        { label: 'HILLUX CD DIESEL', img: require('../../assets/thumb/carro5.svg') }
      ],
      dropdownVendas: [
        { label: 'EMPRESAS' },
        { label: 'FROTISTAS' },
        { label: 'GOVERNO ' },
        { label: 'PCD' },
        { label: 'PRODUTOR RURAL' },
        { label: 'TAXISTA' }
      ]
    }
  },
  methods: {
    openDropdown (dropdown) {
      if (dropdown === 'vendas') {
        this.isOpenVendas = !this.isOpenVendas
        if (this.isOpenTelefones) {
          this.isOpenTelefones = !this.isOpenTelefones
        }
      } else if (dropdown === 'servicos') {
        this.isOpenServicos = !this.isOpenServicos
        if (this.isOpenTelefones) {
          this.isOpenTelefones = !this.isOpenTelefones
        }
      } else if (dropdown === 'telefones') {
        this.isOpenTelefones = !this.isOpenTelefones
      } else if (dropdown === 'sub-01-telefone') {
        this.isOpenSub01Telefone = !this.isOpenSub01Telefone
      } else if (dropdown === 'sub-02-telefone') {
        this.isOpenSub02Telefone = !this.isOpenSub02Telefone
      } else if (dropdown === 'sub-03-telefone') {
        this.isOpenSub03Telefone = !this.isOpenSub03Telefone
      }
    },
    closeDropdownServiços () {
      this.isOpenServicos = false
    },
    closeDropdownVendas () {
      this.isOpenVendas = false
    },
    closeDropdownTelefones () {
      this.isOpenTelefones = false
    },
    openMenuCollapse () {
      this.isMobile = !this.isMobile
    }
  }
}

</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
  .custom-nav-bar{
    .dropdown-toggle::after {
      margin-top: 5px;
    }
    p {
      margin: 0;
    }
    span{
      font-weight: normal;
      margin-left: 5px;
    }
    .navbar{
      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
    display: flex;
    justify-content: center;
    .navbar-brand{
      padding-right: 70px;
      @media screen and (max-width: 1024px) {
        padding: 0;
        img{
          width: 100%;
        }
      }
    }
    img{
      height: 20px;
    }
    .dropdown-menu{
      display: block;
      overflow-y: auto;
      padding: 0;
      margin: 0;
      box-shadow: 0px 1px 1px #ddd,0px 5px 5px #111111;
      &:hover{
        box-shadow: 0px 1px 1px #ddd,0 5px 5px #ccc;
      }
        &.--veiculos{
          height: 280px;
          width: 260px;
        }
        &.--vendas{
          width: 150px;
          height: 190px;
        }
        &.--telefones{
          max-height: 180px;
          width: 260px;
        }
      .dropdown-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 15px;
        img{
          height: 30px;
          width: 55px;
          margin: 0 30px 0 20px;
        }
      }
      .vendas-diretas{
        padding: 12px 20px 0 20px;
      }
      &::-webkit-scrollbar{
        width: 10px;
      }
      &::-webkit-scrollbar-track {
        background-color: #d7d6d7;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #000;
        background-clip: padding-box;
        border-radius: 6px;
        border-right: 3px solid #d7d6d7;
      }
    }
    .navbar-collapse{
      flex-basis: auto;
      flex-grow: 0;
    }
    .collapse-block{
      display: block !important;
    }
    .navbar-nav{
      justify-content: center;
      align-items: center;
      .services{
        padding: 0 20px;
      }
      .telephones{
        margin: 0 60px;
        border: 2px solid #fff;
        &:hover{
          border-color: #b61d3e;
        }
        &:hover a{
          border-color: #b61d3e;
          color: #b61d3e !important;
        }
        &:hover .icon-telephone {
          filter: invert(15%) sepia(92%) saturate(2789%) hue-rotate(333deg) brightness(97%) contrast(93%);
        }
        a {
          padding: 10px 15px;
          display: flex;
          &:hover{
            color: #b61d3e !important;
          }
        }
        .icon {
          margin-right: 5px;
          background-size: cover;
          width: 15px;
          height: 15px;
        }
        .icon-telephone {
          background-image: url('../../assets/telephone.svg');
          filter: invert(100%) sepia(96%) saturate(0%) hue-rotate(81deg) brightness(104%) contrast(105%);

        }
      }
      .nav-item{
        a{
          font-weight: $font-weight-semi-bold;
          color: $color-font !important;
          &:hover, &:active{
            color: $link-hover-color;
          }
        }
      }
      .dropdown{
        .dropdown-menu{
          top: 35px;
          &.--telefones{
            top: 50px;
            left: -126px;
            a{
              color: #000 !important;
            }
          }
          &.--relative{
            position: initial;
            box-shadow: none;
            a{
              color: $color-font !important;
            }
            .dropdown-item{
              background-color: #b61d3e;
              display: flex;
              justify-content: flex-start;
            }
          }
        }
        .dropdown-item {
          font-weight: $font-weight-semi-bold;
          color: $color-black !important;
          &:hover a {
            color: $link-hover-color !important;
          }
          &:active{
            background-color: $color-gray-lighter !important;
          }
        }
      }
    }
  }
</style>

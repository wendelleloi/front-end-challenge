<template lang="pug">
  .background-versao
    .content-informacoes
      .versao
        .title
          h1 Versões
        h2 A200
        .versao-opacitty
          h2 A250 TURBO SPORT
          h2 A45 AMG 4MATIC
      .content-car
        img(:src="this.carro" alt="A200")
      .generic-information
        h3 Informações Gerais
        .information
          ul
            li(v-for="(info, index) in this.informacoesGerais" :class="[index % 2 === 0 ? 'separador': '']")
              span.info {{ info.info }}
              span.geral {{ info.geral }}
    .itens-serie
      .title
        h2 Itens de Série
      .itens
        ul
          li(v-for="(item, index) in this.listaitens" :key="index")
            | {{ item.label }}
        ul
          li(v-for="(item, index) in this.listaitensInferior" :key="index")
            | {{ item.label }}
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      carro: require('../../assets/carro.svg'),
      informacoesGerais: [
        { info: 'Cilindros/válvulas por cilindros:', geral: '4/4' },
        { info: 'Diametro/curso(mm):', geral: '87.5/8.31' },
        { info: 'Cilindrada (cc):', geral: '1,999' },
        { info: 'Potência máxima EEC -Cv:', geral: '240' },
        { info: 'em rev/min:', geral: '5,500' },
        { info: 'Torque máximo EEC - Nm(libra-pé):', geral: '340' },
        { info: 'em rev/min:', geral: '2.000-4.000' },
        { info: 'Cilindros/válvulas por cilindros:', geral: '4/4' },
        { info: 'Diametro/curso(mm):', geral: '87.5/8.31' },
        { info: 'Cilindrada (cc):', geral: '1,999' },
        { info: 'Potência máxima EEC -Cv:', geral: '240' },
        { info: 'em rev/min:', geral: '5,500' },
        { info: 'Torque máximo EEC - Nm(libra-pé):', geral: '340' },
        { info: 'em rev/min:', geral: '2.000-4.000' }
      ],
      listaitens: [
        { label: 'Ar condicionado' },
        { label: 'Airbag' },
        { label: 'Desembaçador traseiro' },
        { label: 'Ar quente' },
        { label: 'Freios ABS' },
        { label: 'Teto solar' },
        { label: 'AirBag' },
        { label: 'Ar condicionado' },
        { label: 'Airbag' },
        { label: 'Desembaçador traseiro' },
        { label: 'Ar quente' },
        { label: 'Freios ABS' },
        { label: 'Teto solar' },
        { label: 'Ar condicionado' },
        { label: 'Airbag' },
        { label: 'Desembaçador traseiro' },
        { label: 'Ar quente' },
        { label: 'Freios ABS' },
        { label: 'Teto solar' }
      ],
      listaitensInferior: [
        { label: 'Teto solar' },
        { label: 'Ar quente' },
        { label: 'Freios ABS' },
        { label: 'Teto solat' },
        { label: 'AirBag' },
        { label: 'Ar condicionado' },
        { label: 'Desembaçador traseiro' },
        { label: 'Teto solar' },
        { label: 'Ar quente' },
        { label: 'Freios ABS' },
        { label: 'Teto solat' },
        { label: 'AirBag' },
        { label: 'Ar condicionado' },
        { label: 'Desembaçador traseiro' }
      ]
    }
  }
}
</script>

<style lang="scss">
.background-versao{
  background-image: url('../../assets/Background-versao.svg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 470px;
  width: 100%;
  margin-top: 72%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content-informacoes{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .versao{
      min-height: 150px;
      text-align: end;
      width: 250px;
      h2{
        font-size: $font-size-h5;
      }
      .title h1{
        margin-bottom: 20px;
        h1{
          font-size: $font-size-large;
        }
      }
      .versao-opacitty{
        opacity: .5;
        font-size: $font-size-h1;
        h2{
          border: $border;
          border-left: none;
          border-right: none;
          margin: 0;
          padding: 10px 0;
          font-size: $font-size-base !important;
        }
      }
    }
    .content-car{
      max-height: 140px;
    }
    .generic-information{
      height: 350px;
      width: 320px;
      padding: 30px 15px;
      background-color: rgba(41,41,41, .5);
      text-align: start;
      h3{
        font-size: 22px;
        font-weight: $font-weight-light;
        line-height: 30px;
        margin-bottom: 15px;
      }
      .information{
        &::-webkit-scrollbar{
          width: 8px;
        }
        &::-webkit-scrollbar-track {
          background-color: rgba(41,41,41,1);
        }
        &::-webkit-scrollbar-thumb {
          background-color: #d33c5c;
          background-clip: padding-box;
          border-radius: 4px;
          border-right: 2px solid rgba(41,41,41, 1);
        }
        height: 240px;
        width: 100%;
        overflow-y: auto;
        ul{
          padding: 0;
          margin: 0;
          font-size: $font-size-small;
          font-weight: $font-weight-normal;
          .separador{
            background-color: rgba(255,255,255, .1);
          }
          li{
            width: 270px;
            margin-bottom: 15px;
            display: flex;
            justify-content: start;
            align-items: end;
            span.info{
              opacity: .5;
              display: inline-block;
              padding: 0;
              width: 120px;
              word-break: break-all;
              margin-right: 20px;
              margin-left: 10px;
            }
            .geral{
              text-align: start;
              color: #d33c5c;
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .itens-serie{
    .title {
      text-align: start;
      h2{
        font-size: $font-size-large;
        font-weight: $font-weight-light;
      }
    }
    .itens{
      height: 120px;
      width: 700px;
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;
      margin-bottom: 20px;
      &::-webkit-scrollbar{
          height: 4px;
        }
      &::-webkit-scrollbar-track {
        background-color: rgba(41,41,41,1);
      }
      &::-webkit-scrollbar-thumb {
        background-color: #d33c5c;
        background-clip: padding-box;
        border-radius: 4px;
        border-right: 2px solid rgba(41,41,41, 1);
      }
      ul{
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        li{
          padding: 5px 10px;
          background-color: #b71d3d;
          border-radius: 50px;
          margin: 5px;
          font-size: $font-size-small;
          font-weight: $font-weight-normal;
        }
      }
    }
  }
}
</style>

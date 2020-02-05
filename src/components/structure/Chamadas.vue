<template lang="pug">
  .chamadas-section
    .wrapper(v-for="(chamada, key) in this.chamadas" :key="key")
      .title
        h2 {{chamada.title}}
      .text-pricipal
        h1 {{chamada.textPrincipal}}
      .text
        p {{chamada.text}}
</template>

<script>

export default {
  data () {
    return {
      chamadas: [
        { title: 'Imperdível', textPrincipal: 'TAXA ZERO %', text: 'Always first off the line. Instant torque delivers full power in a heartbeat.' },
        { title: 'O carro mais', textPrincipal: 'SEGURO', text: 'Always first off the line. Instant torque.' },
        { title: 'Bonús de até', textPrincipal: 'R$ 3 mil', text: 'Always first off the line. Instant torque delivers full power in a heartbeat.' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .chamadas-section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 250px;
    background-color: rgb(122, 43, 60);
    top: 119%;
    position: absolute;
    .wrapper{
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: $margin-base 0;
      &:nth-child(2){
        padding:  0 $padding-extra;
        border: 1px solid rgba(234,234,234,.2);
        border-top: none;
        border-bottom: none;
      }
      &:nth-child(1){
        padding-right:$padding-extra;
      }
      &:nth-child(3){
        padding-left:$padding-extra;
      }
      .text, .title, .text-principal{
        font-weight: $font-weight-normal;
        text-align: center;
      }
      .text{
        font-size: $font-size-base;
      }
      .text-pricipal{
        color: #d33c5c;
        font-size: $font-size-h1;
      }
      .title h2{
        font-size: $font-size-h2;
        font-weight: $font-weight-light;
        line-height: 22px;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>

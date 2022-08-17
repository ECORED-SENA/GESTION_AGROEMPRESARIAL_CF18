<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Indicadores de gestión

  

    #t_5_1.titulo-segundo.color-acento-contenido
      .h4 5.1. Diagrama de causa – efecto

   

    #t_5_2.titulo-segundo.color-acento-contenido
      .h4 5.2. Diagrama de Pareto

    #t_5_3.titulo-segundo.color-acento-contenido
      .h4 5.3. Diagrama de frecuencias o estratificación

    #t_5_4.titulo-segundo.color-acento-contenido
      .h4 5.4. Histograma

    #t_5_5.titulo-segundo.color-acento-contenido
      .h4 5.5. Diagramas de pastel

  

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

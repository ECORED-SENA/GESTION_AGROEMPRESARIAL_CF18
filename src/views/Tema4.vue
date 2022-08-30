<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Control

    .row.mb-5
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p La función de control del proceso administrativo consiste en establecer resultados esperados y definidos en la planeación y compararlos con los resultados obtenidos de la ejecución, proceso de la dirección y su estilo de gerencia. En la medida en que existan diferencias o desviaciones se realizan los ajustes necesarios para el logro de los objetivos o resultados esperados.

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Debido a cambios en los costos o en otros factores, los resultados obtenidos después de que el plan se ejecutó pueden desviarse de los resultados esperados; esto se debe a la incertidumbre y el riesgo que existe en la producción agrícola; no obstante, es necesario identificar el tipo y magnitud de las desviaciones tan pronto como sea posible, pues tiene impactos directos contra las utilidades.

    p.mb-4 Para el control y seguimiento al desempeño de los trabajadores y de los equipos de trabajo también se establecen algunas fases, como se muestra en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span - Control y seguimiento al desempeño
        figure
          img(src='@/assets/curso/tema4/fig1.svg', alt='Tipos de elasticidad de la oferta')

    
   
</template>

<script>
export default {
  name: 'Tema4',
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

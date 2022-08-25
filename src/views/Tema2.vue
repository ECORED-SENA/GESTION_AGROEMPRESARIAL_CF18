<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Compensación laboral
    
    .row.mb-5
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Es el método sistemático que emplean las empresas para reconocer a sus empleados por el trabajo realizado. Cuando este mecanismo compensatorio es utilizado apropiadamente, favorece la atracción y retención del talento humano. Asimismo, favorece la configuración de un clima laboral apropiado, donde los trabajadores ofrecerán compensación, igualmente, mediante un buen desempeño laboral.

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E8CBD3').p-4
          p.mb-0 Se considera compensación laboral cuando existe relación de vínculo por medio de un contrato laboral formal a término fijo, término indefinido o por labor u obra contratada entre empleado - empresa.
    
    .row.justify-content-center
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center
            .col-md-1
              figure
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-md-11 
              p.mb-0 Los contratos de prestación de servicios no configuran compensaciones laborales ni salariales, solo pagan honorarios a los proveedores, que es como se reconoce a quienes suministran servicios a las empresas bajo esta modalidad de contratación.

    p.mb-4 En relación con las compensaciones laborales tenga en cuenta:

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ///
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

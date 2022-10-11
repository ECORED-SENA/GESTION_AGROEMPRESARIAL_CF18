<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Normatividad asociada

    .row.mb-4(data-aos="fade")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema8/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El recurso humano de las empresas son todas las personas que aportan y desarrollan la productividad, para lo cual es fundamental que las empresas conozcan las normas y leyes que se aplican al proceso de gestión de dicho talento humano en Colombia.

    .row.mb-4(data-aos="fade-right")
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 La adecuada gestión del recurso humano garantiza que los trabajadores puedan tener, en conjunto, unas buenas condiciones de contratación y desarrollo de sus labores en la empresa, poder estar seguros y estar motivados.

    p.mb-4(data-aos="fade-right") En relación con la normatividad asociada a los procesos de gestión del talento humano recuerde:

    .bg_grad-06
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
        .col-lg-3.col-md-10.col-12
          .tarjeta.color-rosa4.p-4.mb-4
            figure.mb-4
              img(src='@/assets/curso/tema8/1.png', alt='alerta')
            h4.text-center Deber de la organización
            p.text-center La empresa deberá adelantar procesos adecuados de selección y parametrizar las actuaciones, responsabilidades, derechos y deberes de sus colaboradores, así como los aspectos propios para su bienestar en la empresa.
        .col-lg-3.col-md-10.col-12
          .tarjeta.color-rosa4.p-4.mb-4
            figure.mb-4
              img(src='@/assets/curso/tema8/2.png', alt='alerta')
            h4.text-center Responsabilidad amplia del área
            p.text-center El área de recursos humanos tiene como función dar respuesta a la defensa y promoción de los derechos de los empleados. 
        .col-lg-3.col-md-10.col-12
          .tarjeta.color-rosa4.p-4.mb-4
            figure.mb-4
              img(src='@/assets/curso/tema8/3.png', alt='alerta')
            h4.text-center Sustento normativo y legal
            p.text-center El régimen laboral colombiano está contemplado desde el Código Sustantivo del Trabajo y las leyes posteriores, así como las disposiciones de la Organización Internacional del Trabajo. 

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    ////
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

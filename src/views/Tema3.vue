<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Evaluación de desempeño
    
    
    .row.mb-5
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Se puede definir como el proceso administrativo del departamento de recursos humanos dentro de la gestión integral de recursos humanos, que busca identificar los logros, aportes, competencias, dificultades, debilidades de los empleados de las empresas, con el propósito de realizar acciones futuras, que permitan que la empresa alcance la efectividad y permita el desarrollo laboral y profesional de los trabajadores.

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Por tanto, la evaluación de desempeño es un proceso para medir y evaluar, de forma objetiva, el trabajo de un empleado durante un período determinado, evidenciando la contribución a los objetivos empresariales, identificando aspectos a mejorar.

    p.mb-4 El proceso de evaluación de desempeño laboral a los empleados es útil, en tanto que:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema3/1.png' alt='Personas en oficina')
            h5.text-center Responsable
            p.text-center La administración y estructura funcional de las compensaciones laborales está a cargo del departamento o área de recursos humanos.

          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema3/2.png' alt='Personas en oficina')
            h5.text-center Criterios
            p.text-center Desde recursos humanos se sustentan los beneficios y los salarios que se reconocerán al trabajador y se pactan en conformidad a su perfil.

          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema3/3.png' alt='Personas en oficina')
            h5.text-center Consideración del perfil
            p.text-center El perfil del trabajador para efectos de compensaciones estima: el nivel de responsabilidades, nivel de formación, tiempo de trabajo, funciones específicas y generales, entre otras.

          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema3/4.png' alt='Personas en oficina')
            h5.text-center Nivel jerárquico en las organizaciones
            p.text-center Regularmente, los cargos de obreros y operarios cuentan con niveles de compensación salarial menores en comparación a los cargos de coordinación y cargos directivos.
    
    .row
      .col-md-6
        figure
          img(src='@/assets/curso/tema3/img1.jpg', alt='alerta')
      .col-md-6
        p.mb-4 Una buena evaluación de desempeño laboral tiene tres aspectos clave por verificar, respecto del desempeño del trabajo y aporte de los trabajadores:

</template>

<script>
export default {
  name: 'Tema3',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Indicadores de gestión

    .row.mb-5
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Son los instrumentos a través de los cuales la empresa mide sus desempeños en las diferentes funciones, actividades que desarrollan los trabajadores y que contrastan con los resultados esperados y fijados desde sus funciones.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        figure
          img(src='@/assets/curso/tema5/img2.jpg', alt='Tipos de elasticidad de la oferta')
      .col-md-6
        p.mb-4 Cuando se habla de indicadores de gestión se hace referencia a:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | La medición y control que, efectivamente, es la función para la cual se establecen.
          li 
            i.fas.fa-angle-right
            | Los instrumentos que facilitan identificar y evaluar los niveles de cumplimiento o desviación de los logros o actividades a realizar frente a los resultados esperados.
          li 
            i.fas.fa-angle-right
            | KPI (Key Performance Indicator).
          li 
            i.fas.fa-angle-right
            | Instrumento que representa la forma de medir si una función, proyecto, actividad, área funcional, unidad de negocio o la persona encargada están alcanzando las metas y objetivos o desde luego, resultados esperados.

    .row.justify-content-center
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center
            .col-md-1
              figure
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-md-11
              h5.mb-2 Aspectos a evaluar
              p.mb-0 Las empresas desde el departamento de recursos humanos, determinarán y diseñarán los aspectos a evaluar, y diseñará los instrumentos para realizar la evaluación.      

    p.mb-4 Analice los siguientes ejemplos de algunos indicadores de gestión aplicados a la gestión humana:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/img.svg', alt='Texto que describa la imagen')

          .tarjeta.clr-paleYellow4.p-4(x="30.7%" y="3.6%" numero="")
            .h5.mb-2 Indicador de horas extra
            p Mide el nivel de trabajo adicional en un periodo con sobrecosto, a la jornada ordinaria.
            figure
              img(src='@/assets/curso/tema5/horas.png', alt='Texto que describa la imagen')


          .tarjeta.clr-paleYellow4.p-3(x="69.8%" y="3.6%" numero="")
            .h5.mb-2 Nivel de ausentismo
            p Mide la proporción de horas no laboradas por los trabajadores, independientemente de su causal, refleja la ausencia de los trabajadores en general a la empresa.
            figure
              img(src='@/assets/curso/tema5/horas2.png', alt='Texto que describa la imagen')

          .tarjeta.clr-paleYellow4.p-3(x="97%" y="50.2%" numero="")
            .h5.mb-2 Nivel de personal
            p Mide la intensidad o proporción de trabajadores por área o departamento frente al total de empleados contratados en la empresa.
            figure
              img(src='@/assets/curso/tema5/horas3.png', alt='Texto que describa la imagen')
          
          .tarjeta.clr-paleYellow4.p-3(x="69.8%" y="96.2%" numero="")
            .h5.mb-2 Índice de capacitación
            p Mide la intensidad o proporción de horas de capacitación, por las horas contratadas.
            figure
              img(src='@/assets/curso/tema5/horas4.png', alt='Texto que describa la imagen')

          .tarjeta.clr-paleYellow4.p-3(x="30.8%" y="96.2%" numero="")
            .h5.mb-2 Índice de cumplimiento
            p Mide la entrega de productos o producción.
            figure
              img(src='@/assets/curso/tema5/horas5.png', alt='Texto que describa la imagen')

          .tarjeta.clr-paleYellow4.p-3(x="3%" y="50%" numero="")
            .h5.mb-2 Índice de Retardos
            p Mide la frecuencia de retardos en la jornada laboral.
            figure
              img(src='@/assets/curso/tema5/horas6.png', alt='Texto que describa la imagen')
    separador


    #t_5_1.titulo-segundo.color-acento-contenido
      .h4 5.1. Diagrama de causa - efecto

    p.mb-4 Es una herramienta para identificar de manera estructurada las causas de un problema o efecto evidenciado, a partir de un esquema gráfico que se asemeja a una espina de pescado, que es como también se denomina a esta herramienta.

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Esta técnica refiere identificar las causas principales de un problema o efecto negativo en la empresa y posteriormente, identificar las subcausas o variables de causa, relacionadas con las principales que estén contribuyendo con el problema; estas son de carácter secundario e inclusive, pueden ser de carácter terciario como en el caso de proveedores, por ejemplo.

    p.mb-4 Analice este diagrama e identifique en el ejemplo los problemas evidenciados y sus probables causas:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span - Esquema de diagrama causa-efecto
        figure
          img(src='@/assets/curso/tema5/img2.svg', alt='Tipos de elasticidad de la oferta')

    .row.justify-content-center
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center
            .col-md-1
              figure
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-md-11
              p.mb-0 Este esquema es muy versátil para analizar y resolver problemas complicados, pues permite un análisis de los factores operativos más relevantes de la empresa.
    separador
   

    #t_5_2.titulo-segundo.color-acento-contenido
      .h4 5.2. Diagrama de Pareto

    p.mb-4 Esta herramienta es una forma particular que se basa en un diagrama de barras verticales utilizado para identificar los pocos vitales y los muchos triviales que puede tener una empresa. Los vitales son, en gran medida, los responsables de la mayor parte de los efectos negativos de los problemas en la empresa; mientras los triviales son varios o muchos inconvenientes o situaciones problemáticas con relativamente pocos o moderados efectos negativos para el desempeño de la organización.
    p.mb-4 Por lo general, los vitales y triviales se asocian en una relación 70-30 o 80-20, esto quiere decir que:


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

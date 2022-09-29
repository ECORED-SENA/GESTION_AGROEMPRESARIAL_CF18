<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Capacitación

    .row.mb-5(data-aos="fade")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p En el contexto contemporáneo uno de los mecanismos que establecen las empresas para lograr sus fines, objetivos o metas, así como también definir y aprovechar óptimamente los recursos de que disponen para su operación, requiere planear las actividades, las cuales deben ser muy efectivas; allí, <b>os programas de capacitación y entrenamiento</b> adquieren mayor relevancia.

    .row.mb-4(data-aos="fade")
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Con el adecuado diseño y aplicación de los programas de capacitación y entrenamiento se afianza a los trabajadores para el desarrollo de sus actividades de manera más eficiente.
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 1.1.	Programa de capacitación

    p.mb-4(data-aos="fade-right") Es un conjunto de actividades de enseñanza, aprendizaje e instrucción, estructuradas de una forma adecuada, que permiten conducir o lograr una serie de objetivos corporativos, funcionales o de unidad de negocio, que han sido previamente establecidos en la planeación institucional.
    p.mb-4(data-aos="fade-right") Algunas generalidades destacadas del programa de capacitación son:

    .row.mb-4(data-aos="fade-left")
      .col-md-12
        .tarjeta.fondo-slyder.mb-5
          SlyderA(tipo="b")
            .row
              .col-md-4.mb-4.mb-md-0
                h5 Acciones sistemáticas y planeadas
                p El programa de capacitación comprende una serie de acciones bien estructuradas de formación y de entrenamiento a los trabajadores, donde la transferencia de conocimiento puede soportarse en actividades teóricas y/o prácticas.
            
              .col-md-8
                figure
                  img(src='@/assets/curso/tema1/1.png', alt='Ternero')

            .row
              .col-md-4.mb-4.mb-md-0
                h5 Implicación de todos los roles
                p Investigaciones sobre el impacto de la capacitación en las empresas han concluido que es absolutamente relevante y que es muy importante involucrar a todos los empleados en estos procesos de formación, con el fin de construir una cultura de aprendizaje.
            
              .col-md-8
                figure
                  img(src='@/assets/curso/tema1/2.png', alt='Galpón de gallinas')

            .row
              .col-md-4.mb-4.mb-md-0
                h5 Canales de participación y comunicación
                p En los procesos de formación y capacitación permanente, además del aprendizaje se fortalece el compartir el conocimiento y por tanto, la construcción de canales de participación o mentoría en las empresas; a la larga, ello generará niveles de desarrollo técnico, tecnológico y el fortalecimiento del desarrollo competitivo de la empresa.
            
              .col-md-8
                figure
                  img(src='@/assets/curso/tema1/3.png', alt='Chivo')
            
            .row
              .col-md-4.mb-4.mb-md-0
                h5 Bases del plan de capacitación
                p Este ejercicio de definición de un buen plan de capacitación debe partir de la identificación de las necesidades reales de conocimiento o habilidades que los trabajadores deben tener para el desarrollo de sus actividades. Asimismo, se debe establecer el tiempo que ocupará la capacitación. 
            
              .col-md-8
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='Animales de granja')

            .row
              .col-md-4.mb-4.mb-md-0
                h5 Tiempo estimado y justo del proceso
                p Es importante que la planificación incluya el número de horas que el empleado precisa invertir en las actividades de formación y determinar con base en la norma y la disposición legal, si serán asumidas por la empresa o por parte del empleado. 
            
              .col-md-8
                figure
                  img(src='@/assets/curso/tema1/5.png', alt='Animales de granja')

    p.mb-5(data-aos="fade-right") Para la generación y aplicación del plan de capacitación hay dos acciones previas que requieren toda la atención de la empresa y que, de ser aplicadas de manera adecuada, asegurarían más y mejor la efectividad del proceso de formación permanente:  <b> <FONT COLOR="#A3314F"> diagnosticar y priorizar. </FONT> </b> 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-up")
      .col-md-10
        .row 
          .col-md-4
            .crd.clr-paleYellow.p-4.mb-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img1.png', alt='Trabajador dando instrucciones')
              h5.text-center Diagnosticar
              p.text-center.mb-4 A partir de los resultados de la evaluación de desempeño y los propósitos establecidos en la planeación estratégica se obtiene información respecto a las necesidades, debilidades e intereses frente a oportunidades y consolidación de fortalezas que los trabajadores evidencian. 

          .col-md-4
            .crd.clr-paleYellow.p-4.mb-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img2.png', alt='Trabajador dando instrucciones')
              h5.text-center Deber de diagnosticar
              p.text-center.mb-4 El diagnóstico, como acción debida, identifica las destrezas que faltan o hay que consolidar en el equipo de trabajadores, en cada una de las áreas funcionales de la empresa. Esta será la base para planear el programa de capacitación que dé respuesta a los propósitos de la organización.

          .col-md-4
            .crd.clr-paleYellow.p-4.mb-4
              figure.mb-4
                img(src='@/assets/curso/tema1/img3.png', alt='Trabajador dando instrucciones')
              h5.text-center Priorizar
              p.text-center.mb-4 En ocasiones se puede presentar que en el diagnóstico se identifiquen diversas necesidades en la empresa, pero a su vez, dentro de un mismo grupo de empleados funcionales; en ese caso es necesario establecer un orden de prioridades, definiendo el orden secuencial de temas y fijando un esquema de equidad a las diferentes áreas.
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 1.2.	Estructura de un plan de capacitación

    .row.mb-4(data-aos="fade-left")
      .col-md-12.col-12
        .bloque-texto-g1.color-rojo.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p Para elaborar y estructurar un plan de capacitación se debe contar con información referencial derivada del diagnóstico y la priorización de necesidades identificadas por la empresa, lo cual permite fijar los objetivos propios del programa o plan. Los planes de capacitación están orientados, específicamente, a la mejora de aspectos relacionados con la motivación, actitud, procederes, habilidades de desempeño, crecimiento personal y crecimiento profesional.

    p.mb-4(data-aos="fade-right") En el siguiente video se muestran los parámetros para establecer el plan de capacitación, obsérvelo con atención e identifique tales parámetros y otros aspectos importantes que allí se señalan: 
    
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/aTTAnPkXcg4" title="Plan de capacitación en la empresa" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema1',
  components: {
    ///
  },
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

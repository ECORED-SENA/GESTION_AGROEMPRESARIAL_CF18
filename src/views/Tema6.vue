<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1  Plan de mejora: concepto, requerimiento y aplicación

    .row.mb-4(data-aos="fade")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El plan de mejora de rendimiento de los empleados es una herramienta estándar para ayudarlos a mejorar sus rendimientos, sobre todo a aquellos que presentan bajos niveles. El objetivo de este plan de mejora de rendimiento es ayudar a los empleados a abordar y corregir cualquier problema en el trabajo.

    p.mb-4(data-aos="fade-right") Al evaluador o supervisor de mejora le corresponde desarrollar un plan de mejora del rendimiento antes de tomar medidas disciplinarias contra un empleado, a fin de incluirlo en la elaboración de estrategias para tal fin. Son múltiples las razones por las cuales los trabajadores tienen desviaciones frente a los resultados esperados.

    .row.justify-content-center(data-aos="fade-left")
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-lg-1.col-md-2.col-6
              figure.mb-2
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-lg-11.col-md-10.col-12
              p.mb-0 Para incluir un trabajador en un plan de mejoramiento de desempeño, se necesitan evidencias concretas respecto a su bajo desempeño en alguno de los aspectos de la evaluación adelantada. Por lo general se considera la información de las evaluaciones de desempeño adelantadas para, después de un análisis, determinar las necesidades o prioridades de mejora.

    p.mb-4(data-aos="fade-right") A continuación reconozca las etapas clave del proceso requerido para establecer el plan de mejoramiento a trabajadores, según la evaluación de desempeño:

    .bg_grad-06
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
        .col-md-12
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-rosa3.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img(src='@/assets/curso/tema6/1.png' alt='Personas en oficina')
              h4.text-center Establecer objetivos de mejora para los empleados
              p.text-center Los objetivos deben ser claros y concretos, incluir métricas que se puedan seguir posteriormente a fin de evaluar el progreso de manera eficaz, por ejemplo, “lograr una producción al menos de 150 unidades por mes”.

            .tarjeta.color-rosa3.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img(src='@/assets/curso/tema6/2.png' alt='Personas en oficina')
              h4.text-center Establecer una lista detallada de recursos disponibles para la mejora
              p.text-center Por ejemplo, un empleado que tenga dificultades para manejar su tiempo se propone una herramienta de planificación que lo ayude a organizarse y a establecer su programación de actividades con objetivos de tiempo para completar un trabajo.

            .tarjeta.color-rosa3.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img(src='@/assets/curso/tema6/3.png' alt='Personas en oficina')
              h4.text-center Trazar el tiempo para alcanzar los objetivos de mejora de rendimiento
              p.text-center Establecer la fecha de inicio y fin del plan de mejora y rendimiento del empleado. Casi siempre es un periodo de 30 a 90 días. Poner fechas entre el inicio y fin, identificando tareas u objetivos que se deben cumplir en esas fechas.

            .tarjeta.color-rosa3.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img(src='@/assets/curso/tema6/4.png' alt='Personas en oficina')
              h4.text-center Definir la forma en que medirá el progreso
              p.text-center Los objetivos a mejorar exigen distintos métodos de seguimiento, por ejemplo, si el objetivo es mejorar la entrada, se indica cómo se hace el  control de entrada a trabajar. “El empleado marcará su hora de entrada en el sistema o programa de control y el supervisor hará el seguimiento diariamente en el sistema”.

            .tarjeta.color-rosa3.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img(src='@/assets/curso/tema6/5.png' alt='Personas en oficina')
              h4.text-center Definir implicaciones para tomar después del plan de mejora
              p.text-center Los empleados deben conocer lo qué sucederá cuando el plan termine, por ejemplo, “el empleado estará en un periodo de prueba hasta que complete con éxito al menos tres de los cinco objetivos que se especifican en el plan de mejora de rendimiento”. “Se pondrá fin al empleo si no cumple dos o más objetivos que se especifican en el plan de mejora de rendimiento”.
            
            .tarjeta.color-rosa3.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img(src='@/assets/curso/tema6/6.png' alt='Personas en oficina')
              h4.text-center Revisar los logros del plan de mejora junto con el empleado
              p.text-center Se revisa junto al empleado cada aspecto de mejora del plan, permitiendo la retroalimentación. Las conclusiones de la revisión generan un informe que se debe firmar por las partes, dando copia al trabajador y dejando constancia del proceso.
  
</template>

<script>
export default {
  name: 'Tema6',
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

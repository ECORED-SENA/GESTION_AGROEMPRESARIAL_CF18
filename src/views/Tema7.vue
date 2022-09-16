<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1  Acciones formativas, correctivas y disciplinarias

    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Los problemas son fácilmente observables y tratables desde las medidas del diálogo sincero, la comunicación directa y el seguimiento operativo. La evaluación al desempeño laboral de los trabajadores en la empresa permite identificar las problemáticas y aplicar soluciones. Existen variadas posibilidades que pueden aplicarse desde un mismo plan de mejora, lo cual depende del análisis al desempeño.

    .row.mb-4
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 El deber ser del empresario, en pro del desarrollo laboral y empresarial, es buscar las soluciones más adecuadas que se puedan aplicar antes de recurrir a situaciones indeseadas de despido de trabajadores. Esto podría implicar grandes pérdidas de productividad y generación de costos a las empresas, pérdida de inversiones previas, etc.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-3
        figure
          img(src='@/assets/curso/tema7/img2.jpg', alt='alerta')
      .col-md-7
        p.mb-4 A partir de los análisis de desempeño, el control a los procesos y el cumplimiento de las actividades, se plantean acciones del plan de mejora a los trabajadores donde:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Deberá haber conformidad mutua del proceso definido.
          li 
            i.fas.fa-angle-right
            | Lo fundamental del proceso será plantear soluciones a las desviaciones operativas o resultados de los trabajadores.
          li 
            i.fas.fa-angle-right
            | La empresa definirá, necesariamente, acciones preventivas y disciplinarias que resultarán del proceso de mejora.
        p.mb-4 En relación con este proceso tenga claridad sobre los siguientes términos; procure llevar registro de su definición y particularidades en su libreta personal de apuntes:
    
    .row.justify-content-center.mb-4
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
        .row.align-items-center(titulo="Preventivas")
          .col-md-6.mb-4.mb-md-0
            p Aquellas iniciativas que adelanta la empresa para para mitigar o evitar posibles efectos de improductividad, generación de conflictos, malos desempeños o cualquier otra situación que pueda afectar la operación en la empresa, así mismo, que permitan corregir desviaciones en el logro de objetivos y atrasos operativos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema7/1.png', alt='Granja')

        .row.align-items-center(titulo="Correctivas")
          .col-md-6.mb-4.mb-md-0
            p Iniciativas que adelanta la empresa para eliminar la causa de una desviación o incumplimiento (de calidad, procedimientos, clima laboral, desmotivación, etc.) que se han detectado a partir de los ejercicios de control, seguimiento y evaluación del desempeño; los cuales están imposibilitando el logro de los objetivos institucionales y de los trabajadores mismos.
          .col-md-6
            figure
              img(src='@/assets/curso/tema7/2.png', alt='Granja')

        .row.align-items-center(titulo="Disciplinarias")
          .col-md-6.mb-4.mb-md-0
            p Medidas formales que obedecen a la reglamentación laboral interna y externa, que debe seguir la empresa para efectos de protocolizar las medidas preventivas y correctivas. La empresa debe optar por instrumentos como: memorandos, llamados de atención, suspensiones laborales, etc., hasta llegar al despido (si no hay respuesta satisfactoria de los trabajadores ante las medidas adoptadas y aceptadas por las partes).
          .col-md-6
            figure
              img(src='@/assets/curso/tema7/3.png', alt='Granja')

    .titulo-principal1.color-acento-contenido
      .titulo-principal1__numero
        span 
      h4.mb-0 Principales problemas en la gestión del talento humano

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        figure
          img(src='@/assets/curso/tema7/img3.jpg', alt='alerta')
      .col-md-6
        p.mb-4 Los análisis de control, seguimiento y de evaluación de desempeño de los trabajadores evidencian los siguientes tipos de problemas más frecuentes, sobre los cuales se adoptarán las acciones preventivas, correctivas y disciplinarias, en conformidad a su nivel de impacto en la empresa.
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Problemas de actitud relacionados con la autoestima, por malos esquemas de comunicación, de bajas capacidades de trabajo en equipo, de coordinación de procesos, etc.
          li 
            i.fas.fa-angle-right
            | Perfiles formativos y de actualización de conocimientos relacionados con el desempeño del trabajo mal no actualizados o ausentes.
          li 
            i.fas.fa-angle-right
            | Asignaciones equivocadas de trabajadores a puestos de trabajo actuales, bien por experiencia, formación, por características del trabajador no ajustadas para el puesto, problemas de salud, etc. 
          li 
            i.fas.fa-angle-right
            | Falta de interés en el trabajo que desempeña actualmente, por vocación, inequidad laboral o de inconformidad en las condiciones laborales y de compensación. 
    
    .row.mb-4
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Con este derrotero de problemas, el gestor de recursos humanos deberá diseñar y emprender acciones que permitan superar las dificultades y consolidar un ambiente de desarrollo laboral apropiado y de clima organizacional.
            
    .row 
      .col-md-12
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/tema2/icon1.png").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Acciones formativas, correctivas y disciplinarias en el plan de mejora
                  p.text-small.mb-0 Amplie su conocimiento sobre las acciones formativas y disciplinarias, explorando el documento que aquí se propone.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Acciones formativas, correctivas y disciplinarias en el plan de mejora.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   


</template>

<script>
export default {
  name: 'Tema7',
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

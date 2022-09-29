<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Indicadores de gestión

    .row.mb-5(data-aos="fade")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Son los instrumentos a través de los cuales la empresa mide sus desempeños en las diferentes funciones, actividades que desarrollan los trabajadores y que contrastan con los resultados esperados y fijados desde sus funciones.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img2.jpg', alt='Tipos de elasticidad de la oferta')
      .col-md-6(data-aos="fade-left")
        p.mb-4 Cuando se habla de indicadores de gestión se hace referencia a:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            p.mb-0 La medición y control que, efectivamente, es la función para la cual se establecen.
          li 
            i.fas.fa-angle-right
            p.mb-0 Los <b>instrumentos que facilitan identificar y evaluar los niveles de cumplimiento o desviación</b> de los logros o actividades a realizar frente a los resultados esperados.
          li 
            i.fas.fa-angle-right
            p.mb-0 KPI (Key Performance Indicator).
          li 
            i.fas.fa-angle-right
            p.mb-0 Instrumento que representa la forma de medir si una función, proyecto, actividad, área funcional, unidad de negocio o la persona encargada están alcanzando las metas y objetivos o desde luego, resultados esperados.

    .row.justify-content-center(data-aos="fade-right")
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center
            .col-md-1
              figure
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-md-11
              p.mb-0 Se deben utilizar indicadores de gestión en todos los niveles empresariales para evaluar el desempeño y lo establecido como metas, en la operación de la organización.    

    p.mb-4(data-aos="fade-right") Analice los siguientes ejemplos de algunos indicadores de gestión aplicados a la gestión humana:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-8
        ImagenInfografica.color-acento-botones.mb-5
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


    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 5.1. Diagrama de causa - efecto

    p.mb-4(data-aos="fade-right") Es una herramienta para identificar de manera estructurada las causas de un problema o efecto evidenciado, a partir de un esquema gráfico que se asemeja a una espina de pescado, que es como también se denomina a esta herramienta.

    .row.mb-5(data-aos="fade")
      .col-md-12
        figure
          img(src='@/assets/curso/tema5/pez.png', alt='Texto que describa la imagen')

    .row.mb-4(data-aos="fade-right")
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Esta técnica refiere identificar las causas principales de un problema o efecto negativo en la empresa y posteriormente, identificar las subcausas o variables de causa, relacionadas con las principales que estén contribuyendo con el problema; estas son de carácter secundario e inclusive, pueden ser de carácter terciario como en el caso de proveedores, por ejemplo.

    p.mb-4(data-aos="fade-left") Analice este diagrama e identifique en el ejemplo los problemas evidenciados y sus probables causas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span - Esquema de diagrama causa-efecto
        figure
          img(src='@/assets/curso/tema5/img2.svg', alt='Tipos de elasticidad de la oferta')

    .row.justify-content-center(data-aos="fade-right")
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center
            .col-md-1
              figure
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-md-11
              p.mb-0 Este esquema es muy versátil para analizar y resolver problemas complicados, pues permite un análisis de los factores operativos más relevantes de la empresa.
    separador
   

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 5.2. Diagrama de Pareto

    p.mb-4(data-aos="fade-right") Esta herramienta es una forma particular que se basa en un diagrama de barras verticales utilizado para identificar los pocos vitales y los muchos triviales que puede tener una empresa. Los vitales son, en gran medida, los responsables de la mayor parte de los efectos negativos de los problemas en la empresa; mientras los triviales son varios o muchos inconvenientes o situaciones problemáticas con relativamente pocos o moderados efectos negativos para el desempeño de la organización.
    p.mb-4(data-aos="fade-right") Por lo general, los vitales y triviales se asocian en una relación 70-30 o 80-20, esto quiere decir que:

    .row.align-items-center.mb-5
      .col-md-6(data-aos="fade-right")
        .row.justify-content-center   
          .col-lg-12
            LineaTiempoD.color-linea
              .row.align-items-center(numero="1" titulo="Pocas causas")
                .col-md-3
                  figure
                    img.p-2(src='@/assets/curso/tema5/icon1.png' alt='Seis vacas bebiendo agua')
                .col-md-9
                  p Del total de los múltiples problemas que puede tener una empresa entre el 70% al 80% se concentran en pocas causas.

              .row.align-items-center(numero="2" titulo="Múltiples causas")
                .col-md-3
                  figure
                    img.p-2(src='@/assets/curso/tema5/icon2.png' alt='Seis vacas bebiendo agua')
                .col-md-9
                  p El resto de problemas con múltiples causas representan entre el 20% al 30% de los casos.

              .row.align-items-center(numero="3" titulo="Vitales, grandes efectos")
                .col-md-3
                  figure
                    img.p-2(src='@/assets/curso/tema5/icon3.png' alt='Seis vacas bebiendo agua')
                .col-md-9
                  p La empresa debe concentrar su atención en resolver esos pocos problemas que son vitales para el negocio, pues tienen mucho efecto.

              .row.align-items-center(numero="4" titulo="Triviales, bajos efectos")
                .col-md-3
                  figure
                    img.p-2(src='@/assets/curso/tema5/icon4.png' alt='Seis vacas bebiendo agua')
                .col-md-9
                  p Solucionando los problemas vitales o mayores, hay una alta probabilidad de resolver eficazmente muchos de los aspectos triviales o menores.
      .col-md-6(data-aos="fade-left")
        figure
          img.p-2(src='@/assets/curso/tema5/img3.jpg' alt='Seis vacas bebiendo agua')

    p.mb-4(data-aos="fade-right") Se debe analizar la tabla 1 y la figura 5 e identificar los aspectos clave del diagrama de Pareto, como herramienta de seguimiento y control administrativo:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span - Ejemplo de quejas y reclamos de clientes por artículos recibidos en un mes
      .col-md-12
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Causas
                th Quejas
                th %
                th % acumulado
            tbody
              tr
                td Incumplimiento
                td 50
                td 32,05%
                td 32,05%
              tr
                td Sucio
                td 45
                td 28,85%
                td 60,90%
              tr
                td Defectuoso
                td 21
                td 13,46%
                td 74,36%
              tr
                td No corresponde 
                td 15
                td 9,62%
                td 83,97%
              tr
                td Vencido
                td 10
                td 6,41%
                td 90,38%
              tr
                td Incompleto
                td 8
                td 5,13%
                td 95,51%
              tr
                td Mal facturado
                td 7
                td 4,49%
                td 100,00%
              tr
                td Total general
                td 156
                td 100,00%
                td

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          span - Ejemplo de un Diagrama de Pareto del comportamiento de quejas y reclamos
      .col-md-12
        figure
          img(src='@/assets/curso/tema5/fig1.svg', alt='Tipos de elasticidad de la oferta')

    .row.mb-4(data-aos="fade")
      h5.text-center Causas de la queja

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img4.jpg', alt='Hombre manejando computador')
      .col-md-6(data-aos="fade-left")
        p.mb-4 En el ejemplo anterior, se puede observar que:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Del total de los 156 casos de quejas y reclamos, el 74,4% de los casos corresponden a tres causas.
          li 
            i.fas.fa-angle-right
            | Mientras tanto, las otras cuatro causas de quejas solo contemplan el restante 25,6%.
          li 
            i.fas.fa-angle-right
            | Por estas cifras, la empresa debería tomar decisiones relacionadas con estas causas que concentran la mayoría de las quejas de los clientes por los productos adquiridos.
          li 
            i.fas.fa-angle-right
            | En la búsqueda de solucionar estos inconvenientes y con la conciencia de lo importante que resultaría para la empresa, los demás aspectos seguramente también se corregirán.
          li 
            i.fas.fa-angle-right
            | Esta herramienta tiene muchas aplicabilidades para el análisis en la empresa, y por ende, facilitar la toma de decisiones es un ejercicio de aplicabilidad de la administración, promoverla al interior de sus diferentes áreas funcionales.
    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 5.3. Diagrama de frecuencias o estratificación

    p.mb-4(data-aos="fade-right") Es una técnica de distribución de las frecuencias de una variable que busca estratificar el comportamiento de la misma; pero no denota un sentido de orden específico.
    p.mb-4(data-aos="fade-right") Ejemplo: en una empresa agrícola el gerente desea saber cómo es el consumo y venta de verduras, para ello recurre al análisis estadístico del promedio de ventas de estos recursos, lo que le servirá como parámetro para tomar decisiones. Ver tabla.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span - Ejemplo de concentración del estado de cartera por ventas (millones)
      .col-md-12
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th 
                th Corriente
                th 30 días
                th 60 días
                th 90 días
                th Total de cartera
            tbody
              tr
                td Cartera
                td 50
                td 35
                td 15
                td 12
                td 112
              tr
                td Frecuencia
                td 44,6%
                td 31,3%
                td 13,4%
                td 10,7%
                td 100,0%

    p.mb-4(data-aos="fade-right") A partir de esta información suministrada por el gerente de las centrales de mercado y quien resumió los promedios del número de toneladas por producto que se venden diariamente en el mercado en una semana cualquiera, construyó el siguiente gráfico estadístico de estratificación de frecuencias de los productos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span - Diagrama de estratificación del estado de cartera por ventas a clientes
      .col-md-10
        figure
          img(src='@/assets/curso/tema5/fig2.svg', alt='Tipos de elasticidad de la oferta')
    separador         

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 5.4. Histograma

    p.mb-4(data-aos="fade-right") Es la distribución del comportamiento de una variable continua que denota la distribución de las frecuencias a lo largo de la variable continua.
    p.mb-4(data-aos="fade-right") Ejemplo: en el caso de las ventas en un semestre, el gerente desea saber cómo es su estacionalidad o comportamiento típico, para lo cual presenta la siguiente información, ver tabla 3 y figura 7.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span - Ejemplo del nivel de ventas por mes en el primer semestre
      .col-md-12
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th 
                th Enero
                th Febrero
                th Marzo
                th Abril
                th Mayo
                th Junio
                th Total
            tbody
              tr
                td Ventas/mes
                td 55
                td 20
                td 70
                td 50
                td 40
                td 65
                td 300
              tr
                td %
                td 18,3%
                td 6,7%
                td 23,3%
                td 16,7%
                td 13,3%
                td 21,7%
                td 100,0%

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span - Ejemplo de histograma del comportamiento de ventas semestrales en una empresa
      .col-md-10
        figure
          img(src='@/assets/curso/tema5/fig3.svg', alt='Tipos de elasticidad de la oferta')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img5.jpg', alt='Hombre manejando computador')
      .col-md-6(data-aos="fade-left")
        p.mb-4 En este caso:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | La variable continua es el tiempo y sus meses del primer semestre.
          li 
            i.fas.fa-angle-right
            | Entonces el gerente del restaurante puede identificar cómo es el comportamiento de ventas mensual en el semestre.
          li 
            i.fas.fa-angle-right
            | Lo cual describe la estacionalidad de ingresos en el semestre en la empresa por ventas.
          li 
            i.fas.fa-angle-right
            | Con ello, podrá tomar decisiones sobre la disposición de caja y programación de pagos.
          li 
            i.fas.fa-angle-right
            | Asimismo, podrá establecer niveles de metas funcionales, es decir, en periodos de baja estacionalidad la empresa puede desarrollar actividades de capacitación de entrenamientos, ya que su desarrollo requiere periodos de concentración en estas actividades sin afectar la producción.
          li 
            i.fas.fa-angle-right
            | Por tanto, podrá implementar nuevos procesos tal como se ve en el ejemplo para el mes de febrero.
    separador

    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h4 5.5. Diagramas de pastel

    p.mb-4(data-aos="fade-right") Es otro esquema de representación gráfica estadística que busca descomponer una variable en sus diferentes categorías, mostrando la cantidad de frecuencia o casos, evidenciando cuánto del total corresponde a cada categoría dentro de la variable.
    p.mb-4(data-aos="fade-right") En la siguiente tabla de ejemplo analice la intensidad del recurso de talento humano por regional:

    .row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
      .col-md-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span - Ejemplo del nivel de ventas por mes en el primer semestre
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-7
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.text-center Región
                th.text-center Número de empleados por sucursal
            tbody
              tr
                td.text-center Boyacá
                td.text-center 8
              tr
                td.text-center Antioquía
                td.text-center 15
              tr
                td.text-center Tolima
                td.text-center 11
              tr
                td.text-center Cundinamarca
                td.text-center 16
              tr
                td.text-center Total clientes regionales
                td.text-center 50

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

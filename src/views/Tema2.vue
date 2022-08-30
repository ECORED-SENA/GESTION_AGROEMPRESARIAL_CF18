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

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema2/1.png' alt='Personas en oficina')
            h5.text-center Responsable
            p.text-center La administración y estructura funcional de las compensaciones laborales está a cargo del departamento o área de recursos humanos.

          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema2/2.png' alt='Personas en oficina')
            h5.text-center Criterios
            p.text-center Desde recursos humanos se sustentan los beneficios y los salarios que se reconocerán al trabajador y se pactan en conformidad a su perfil.

          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema2/3.png' alt='Personas en oficina')
            h5.text-center Consideración del perfil
            p.text-center El perfil del trabajador para efectos de compensaciones estima: el nivel de responsabilidades, nivel de formación, tiempo de trabajo, funciones específicas y generales, entre otras.

          .tarjeta.color-rosa2.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src='@/assets/curso/tema2/4.png' alt='Personas en oficina')
            h5.text-center Nivel jerárquico en las organizaciones
            p.text-center Regularmente, los cargos de obreros y operarios cuentan con niveles de compensación salarial menores en comparación a los cargos de coordinación y cargos directivos.

    p.mb-4 Entre los principales objetivos que se pretenden con esquemas de compensación laboral se pueden mencionar:

    .row.justify-content-center.align-items-center.mb-4 
      .col-md-5
        figure
          img(src='@/assets/curso/tema2/img2.jpg', alt='alerta')
      .col-md-7
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Contratar personal cualificado para sus labores.
          li 
            i.fas.fa-angle-right
            | Mantener relaciones laborales de largo plazo con las personas contratadas.
          li 
            i.fas.fa-angle-right
            | Garantizar el principio de equidad e igualdad de condiciones para labores similares.
          li 
            i.fas.fa-angle-right
            | Promover el desarrollo de mejoras laborales y de carrera laboral dentro de las instituciones.
          li 
            i.fas.fa-angle-right
            | Promover eficiencia y productividad.
          li 
            i.fas.fa-angle-right
            | Cumplir con la normatividad, regulaciones y demás disposiciones que rigen estos asuntos en Colombia.
          li 
            i.fas.fa-angle-right
            | Elevar los niveles de bienestar social de los trabajadores.
          li 
            i.fas.fa-angle-right
            | Crear un sentido de lealtad y fidelidad por la empresa y sus condiciones de compensación.
          li 
            i.fas.fa-angle-right
            | Disminuir las tasas de rotación de personal.
          li 
            i.fas.fa-angle-right
            | Minimizar costos por procesos de reclutamiento y selección.
  
    .row.mb-4
      .col-lg-3
        figure
          img(src='@/assets/curso/tema2/subtitulo.png' alt='comedores')

    p.mb-5 Las compensaciones laborales pueden ser de orden monetario, donde los pagos que recibe el trabajador son rigurosamente en dinero. También pueden ser de orden no monetario, donde las retribuciones tienen carácter de complementarias, en tanto que favorecen su gasto, el que tendría con su sueldo base; pero que no son obligatorias y que la empresa otorga en cualquier tipo de especie legal. Ver figura.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span - Estructura de gestión de las compensaciones
        figure
          img(src='@/assets/curso/tema2/fig1.svg', alt='Tipos de elasticidad de la oferta')

    .row 
      .col-md-12
        .tarjeta.color-acento-contenido.p-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/tema2/icon1.png").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Componentes de una compensación salarial
                  p.text-small.mb-0 A continuación lo invitamos a consultar el siguiente recurso que le permitirá ampliar sus conocimientos en lo relacionado con las compensaciones laborales. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://docs.google.com/document/d/1jVBfOd5V9GKLcxlabgO5ugooc6IHyGn5-JTTdtEkPMo/edit?usp=sharing" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   

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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    P.mb-4 Aquí comienza el estudio del componente #[span.color-text “Desarrollo humano”] Tenga una experiencia de aprendizaje satisfactoria; inicie visualizando el recurso que se propone a continuación. 

    p.mb-4
      b #[span.color-text ¡Adelante!]

    figure.mb-4
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/vyqz4KsgTNk" title="Desarrollo humano en las empresas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

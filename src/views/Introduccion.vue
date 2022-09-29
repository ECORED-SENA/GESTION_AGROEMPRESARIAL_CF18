<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    P.mb-4(data-aos="fade") Aquí comienza el estudio del componente <b> <FONT COLOR="#A3314F"> Desarrollo humano </FONT> </b> Tenga una experiencia de aprendizaje satisfactoria; inicie visualizando el recurso que se propone a continuación. 

    p.mb-4(data-aos="fade") <b> <FONT COLOR="#A3314F"> ¡Adelante! </FONT> </b>

    figure.mb-4(data-aos="fade")
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

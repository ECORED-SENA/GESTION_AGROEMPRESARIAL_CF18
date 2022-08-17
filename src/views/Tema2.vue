<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Compensación laboral
    
    
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Espina de pescado',
        texto:
          'Estas son las más comunes y tradicionales en los sistemas productivos, estas se ubican de manera contigua y mirándose unas a las otras como su nombre lo indica en espina de pescado logrando que en el centro se realice la función del operario, de esta forma todas las vacas ingresan al ordeño al mismo tiempo y son ordeñadas igual, por ende se debe crear grupos homogéneos de producción.',
        imagen: require('@/assets/curso/tema2/vaca1.jpg'),
      },
      {
        titulo: 'Rotativo',
        texto:
          'Los animales son ingresados a una plataforma circular la cual realiza el ordeño al mismo tiempo que va sacado los animales mientras gira a medida que va girando sale una y entra otra ocupando el lugar de la anterior. Es una de las salas más costosas por el costo de inversión.',
        imagen: require('@/assets/curso/tema2/vaca2.jpg'),
      },
      {
        titulo: 'Tándem',
        texto:
          'Este sistema consta de jaulas individuales para cada animal a ordeñar donde las vacas una está detrás de la otra y cada una tiene entrada y salida independiente, permite el ordeño con cría para estimular mayor producción de leche.',
        imagen: require('@/assets/curso/tema2/vaca3.jpg'),
      },
      {
        titulo: 'Paralelo',
        texto:
          'En este sistema también vemos la entrada y salida de las vacas individualmente la disposición es una al lado de la otra su eficiencia radica en que se puede realizar el suministro de alimento mientras se realiza el ordeño.',
        imagen: require('@/assets/curso/tema2/vaca4.jpg'),
      },
    ],
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

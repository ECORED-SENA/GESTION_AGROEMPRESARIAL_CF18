<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Evaluación de desempeño
    
    .row.mb-5(data-aos="fade")
      .col-md-12.col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p Se puede definir como el proceso administrativo del departamento de recursos humanos dentro de la gestión integral de recursos humanos, que busca identificar los logros, aportes, competencias, dificultades, debilidades de los empleados de las empresas, con el propósito de realizar acciones futuras, que permitan que la empresa alcance la efectividad y permita el desarrollo laboral y profesional de los trabajadores.

    .row.mb-4(data-aos="fade-right")
      .col-lg-12
        .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
          p.mb-0 Por tanto, la evaluación de desempeño es un proceso para medir y evaluar, de forma objetiva, el trabajo de un empleado durante un período determinado, evidenciando la contribución a los objetivos empresariales, identificando aspectos a mejorar.

    p.mb-4(data-aos="fade-left") El proceso de evaluación de desempeño laboral a los empleados es útil, en tanto que:

    .bg_grad-03
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
        .col-md-12
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-rosa2.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/1.png' alt='Personas en oficina')
              h4.text-center Cumplimiento de objetivos
              p.text-center Analizar si los objetivos de los trabajadores, en cuanto al cumplimiento de sus funciones, se están cumpliendo.

            .tarjeta.color-rosa2.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/2.png' alt='Personas en oficina')
              h4.text-center Criterios justos y legítimos
              p.text-center No debe tomarse como elemento aislado para dar continuidad laboral al trabajador.

            .tarjeta.color-rosa2.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/3.png' alt='Personas en oficina')
              h4.text-center Mejorar procesos
              p.text-center La toma de decisiones en relación con la continuidad o asignación de roles a trabajadores se enfocará en mejorar los procesos.

            .tarjeta.color-rosa2.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/tema3/4.png' alt='Personas en oficina')
              h4.text-center Pertinencia de las cargas horarias y de rol
              p.text-center Las cargas de trabajo designadas para cada trabajador serán justas y pertinentes para permitirle operar, dando aportes y logrando objetivos.
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.col-md-12.col-12(data-aos="fade-right")
          figure.mb-4
            img(src='@/assets/curso/tema3/img1.jpg', alt='alerta')
        .col-lg-6.col-md-12.col-12(data-aos="fade-left")
          p.mb-4 Una buena evaluación de desempeño laboral tiene tres aspectos clave por verificar, respecto del desempeño del trabajo y aporte de los trabajadores:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Empatía, relaciones interpersonales, comportamiento y cualidades del trabajador.
            li 
              i.fas.fa-angle-right
              | Compromiso del trabajador para el logro y cumplimiento del trabajo en las funciones asignadas para el logro de los objetivos propuestos.
            li 
              i.fas.fa-angle-right
              | Iniciativa y el potencial que posee para desarrollar el trabajo o nuevas actividades.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6.col-md-12.col-12(data-aos="fade-right")
          p.mb-4 En este sentido, se debe evaluar individualmente aspectos como:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Dominio de las labores y trabajo que desempeña.
            li 
              i.fas.fa-angle-right
              | Identificar el grado de calidad con que realiza el trabajo asignado.
            li 
              i.fas.fa-angle-right
              | Cómo se relaciona con el equipo de área funcional con quienes trabaja y con quienes se relaciona del resto de personas en la empresa.
            li 
              i.fas.fa-angle-right
              | Cómo es su comportamiento emocional para el desarrollo de su trabajo.
            li 
              i.fas.fa-angle-right
              | Si posee y desarrolla capacidades analíticas, de criterio, para realizar sus actividades.
            li 
              i.fas.fa-angle-right
              | Capacidades de liderazgo, etc.
        .col-lg-6.col-md-12.col-12(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema3/img2.jpg', alt='alerta')

      .row.mb-4(data-aos="fade-right")
        .col-auto 
          .cstmH4
            .row.align-items-center
              .col-auto
                h3.text-white.mb-0 Instrumentos de evaluación
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/icon1.svg", alt="alt").img80

      .row.mb-4(data-aos="fade")
        .col-md-12.col-12
          .bloque-texto-g1.color-rojo.p-3.p-sm-4.p-md-5
            .bloque-texto-g1__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.jpg')})`}"
            )
            .bloque-texto-g1__texto.p-5
              p Regularmente se realizan las evaluaciones de desempeño a partir de formularios que, en conformidad con la técnica se aplicarán, es decir, el formulario se usará para recoger información por parte del evaluador o por parte de un ejercicio de autoevaluación.

      .row.mb-4(data-aos="fade-right")
        .col-lg-12
          .cajon.color-acento-contenido(style='background-color: #E1E4A8').p-4
            p.mb-0 Los aspectos a evaluar se pueden organizar por categorías, haciendo preguntas y a partir de ellas se establecen niveles de valuación o escalas de valoración. 

    p.mb-4(data-aos="fade-left") A continuación, se presenta un ejemplo de aspectos a evaluar por tipo de categorías a los empleados:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 2   
      span - Ejemplo de tabla de formulario para evaluación de desempeño

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-12
        .tabla-a.color-primario
          table
            thead.justify-content-center
              tr
                th Aspectos sobre calidad y productividad
                th Muy insatisfactorio
                th Insatisfactorio
                th Satisfactorio
                th Muy satisfactorio
                th Sobresaliente
            tbody
              tr
                td Cómo considera la precisión y calidad del trabajo realizado
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Cómo estima la cantidad de labores completadas
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Cómo es la organización del trabajo: tiempo
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Tiene cuidado con las herramientas y el equipo
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-12
        .tabla-a.color-primario
          table
            thead.justify-content-center
              tr
                th Aspectos sobre conocimientos
                th Muy insatisfactorio
                th Insatisfactorio
                th Satisfactorio
                th Muy satisfactorio
                th Sobresaliente
            tbody
              tr
                td Tiene el nivel de conocimiento para el trabajo requerido
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Sabe del uso, conocimiento de métodos y procedimientos de las funciones
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Cómo es el conocimiento de las herramientas y de los equipos
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Se desempeña con poca o ninguna ayuda
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Se desempeña con poca o ninguna ayuda
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Orienta, enseña/entrena a otros
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-12
        .tabla-a.color-primario
          table
            thead.justify-content-center
              tr
                th Aspectos sobre compromiso
                th Muy insatisfactorio
                th Insatisfactorio
                th Satisfactorio
                th Muy satisfactorio
                th Sobresaliente
            tbody
              tr
                td Puede trabajar sin supervisión
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Resuelve situaciones ante algún problema
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Cómo es el cumplimiento de las labores
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Cumple con los niveles del trabajo asignado
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-md-12
        .tabla-a.color-primario
          table
            thead.justify-content-center
              tr
                th Aspectos sobre iniciativa y liderazgo
                th Muy insatisfactorio
                th Insatisfactorio
                th Satisfactorio
                th Muy satisfactorio
                th Sobresaliente
            tbody
              tr
                td Busca nuevas asignaciones de labores
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Trabaja por prioridades 
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Plantea mejoras a las labores
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Ante errores, propone, trabaja para arreglarlos
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Motiva ayudas a los demás
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-12.col-md-12.col-12
        .tabla-a.color-primario
          table
            thead.justify-content-center
              tr
                th(style="width:20%;") Aspectos sobre el trabajo en equipo
                th(style="width:16%;") Muy insatisfactorio
                th(style="width:16%;") Insatisfactorio
                th(style="width:16%;") Satisfactorio
                th(style="width:16%;") Muy satisfactorio
                th(style="width:16%;") Sobresaliente
            tbody
              tr
                td Cómo es la relación con los supervisores y los subordinados
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Consulta para decisiones de área
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
              tr
                td Sabe dónde inicia y termina el trabajo
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td 
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
                td
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Default 
                    </label>
                  </div>
    
    .row.justify-content-center(data-aos="fade-right")
      .col-md-12
        .crd.clr-paleYellow2.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-lg-1.col-md-2.col-6
              figure.mb-4
                img(src='@/assets/curso/tema2/alerta.png', alt='alerta')
            .col-lg-11.col-md-10.col-12
              h5.mb-2 Aspectos a evaluar
              p.mb-0 Las empresas desde el departamento de recursos humanos, determinarán y diseñarán los aspectos a evaluar, y diseñará los instrumentos para realizar la evaluación.

    .row.justify-content-center(data-aos="fade-left")
      .col-md-12
        .crd.clr-paleYellow3.p-4.mb-4
          .row.align-items-center.justify-content-center
            .col-lg-1.col-md-2.col-6
              figure.mb-4
                img(src='@/assets/curso/tema3/compu.png', alt='computadora')
            .col-lg-11.col-md-10.col-12
              h5.mb-2 Métodos electrónicos
              p.mb-0 Cuando los medios y los tipos de trabajo de los empleados lo permitan, se puede realizar mediante métodos electrónicos de formularios, lo que facilita el proceso y la compilación de la información.
    
      .row.mb-4(data-aos="fade-right")
        .col-auto
          .cstmH4
            .row.align-items-center
              .col-auto
                h3.text-white.mb-0 Técnicas o métodos de evaluación de desempeño laboral
              .col-auto
                figure
                  img(src="@/assets/curso/tema2/icon2.svg", alt="alt").img80

    p.mb-4(data-aos="fade-right") Existen variados métodos de evaluación de desempeño a los trabajadores, de los cuales los más frecuentemente utilizados en empresas pequeñas y del sector agropecuario son:

    .row.align-items-center.mb-5(data-aos="fade")
      .col-lg-6.col-md-6.col-12
        .row.justify-content-center   
          .col-lg-12
            LineaTiempoD.color-linea
              .row.align-items-center(numero="1" titulo="Evaluación unidireccional") 
                .col-lg-5.col-md-12.col-12
                  figure
                    img.p-2(src='@/assets/curso/tema3/1.jpg' alt='granjero')
                .col-md-7.col-md-12.col-12
                  p Aquella donde el gerente de recursos humanos o quien haga las veces, como el gerente o propietario, es el único que lleva a cabo la evaluación del empleado. En ella, el empleado responde a las preguntas realizadas por el evaluador.

              .row.align-items-center(numero="2" titulo="Cuando la evaluación es unidireccional…")
                .col-lg-5.col-md-12.col-12
                  figure
                    img.p-2(src='@/assets/curso/tema3/2.jpg' alt='granjeros')
                .col-md-7.col-md-12.col-12
                  p Al completar el desarrollo de esta evaluación se comparten los resultados en la reunión de evaluación, el gerente o evaluador debe defender su punto de vista, máxime, si difiere de los resultados planteados y expuestos por el empleado, ejercicio que se adelanta, pregunta a pregunta, durante la reunión de evaluación.

              .row.align-items-center(numero="3" titulo="Autoevaluación")
                .col-lg-5.col-md-12.col-12
                  figure
                    img.p-2(src='@/assets/curso/tema3/3.jpg' alt='granjero examinando plantas')
                .col-md-7.col-md-12.col-12
                  p Este método de evaluación se plantea para que, inicialmente, el empleado responda un cuestionario, conociendo los criterios con que se evalúa su rendimiento y, entonces, plantee su propia valoración. Posteriormente, quien hace las veces de supervisor o jefe inmediato, comparte los resultados y consensua respecto a los aspectos en que están de acuerdo y en desacuerdo.

              .row.align-items-center(numero="4" titulo="Cuando la evaluación implica directamente al evaluado…") 
                .col-lg-5.col-md-12.col-12
                  figure
                    img.p-2(src='@/assets/curso/tema3/4.jpg' alt='granjero')
                .col-md-7.col-md-12.col-12
                  p En este ejercicio las partes (trabajador y empresa) enriquecen la evaluación con citas de ejemplos concretos. En este modelo de evaluación el empleado está muy involucrado en sus resultados y denota gran sentido de compromiso, por lo cual el supervisor o jefe inmediato debe ser igualmente comprometido y saber que son parte de un proceso, por eso los resultados y compromisos a mejorar los involucra igualmente.

              .row.align-items-center(numero="5" titulo="Evaluación 360 grados")
                .col-lg-5.col-md-12.col-12
                  figure
                    img.p-2(src='@/assets/curso/tema3/5.jpg' alt='granjero')
                .col-md-7.col-md-12.col-12
                  p En este método, las personas que participan en los procesos con que se relaciona el trabajador, tienen participación de concepto, es decir, los que rodean al trabajador en 360 grados. Se parte de la propia autoevaluación del empleado, seguida de la evaluación que realiza el jefe inmediato o su supervisor, algunos compañeros de trabajo o colegas, trabajadores de otras dependencias con quienes se relaciona en sus actividades (puede involucrarse a proveedores, clientes, entre otros).

              .row.align-items-center(numero="6" titulo="Cuando la evaluación es 360 grados…")
                .col-lg-5.col-md-12.col-12
                  figure
                    img.p-2(src='@/assets/curso/tema3/6.jpg' alt='granjero')
                .col-md-7.col-md-12.col-12
                  p La evaluación y sus evaluadores se fijan  con base en la posición y relación que mantienen respecto a los objetivos funcionales por alcanzar, por ejemplo, en la evaluación de un vendedor, un cliente puede evaluar a un vendedor y a su vez el jefe de ventas. En el caso de la evaluación de supervisores de producción, estos pueden ser evaluados por los operarios subordinados, por su jefe de producción y puede ser evaluado por sus colegas supervisores.
      .col-lg-6.col-md-6.col-12
        figure
          img.p-2(src='@/assets/curso/tema3/img4.jpg' alt='Seis vacas bebiendo agua')

    p.mb-4(data-aos="fade-right") Para favorecer los procesos de evaluación, independientemente de la técnica o método seleccionado es muy importante:

    .row.align-items-center.mb-5(data-aos="fade")
      .col-md-6
        figure
          img.p-2(src='@/assets/curso/tema3/img5.jpg' alt='Seis vacas bebiendo agua')
      .col-md-6
        .row.justify-content-center   
          .col-lg-12
            LineaTiempoD.color-linea
              .row.align-items-center(numero="1" titulo="Un equipo maduro") 
                .col-md-12
                  p Que el equipo sea lo suficientemente maduro y las relaciones entre colegas sean armoniosas para elegir este tipo de evaluación.

              .row.align-items-center(numero="2" titulo="Claridad con la finalidad")
                .col-md-12
                  p Tener claridad con que la evaluación de desempeño tiene como finalidad establecer estrategias para la solución de problemas, orientar la capacitación, identificar conflictos, lograr motivar a los trabajadores y fomentar su desarrollo personal dentro de la empresa.

              .row.align-items-center(numero="3" titulo="Nivel suficiente de conciencia")
                .col-md-12
                  p Tener conciencia suficiente para no concebir el proceso como una manera de castigar, reprender trabajadores o áreas de trabajo.

              .row.align-items-center(numero="4" titulo="Dar continuidad al proceso mismo") 
                .col-md-12
                  p Reconocer la evaluación como un proceso permanente y continuo, para que tenga utilidad en la organización.

              .row.align-items-center(numero="5" titulo="Saber la utilidad del proceso")
                .col-md-12
                  p Identificar la evaluación del desempeño como un elemento realmente, útil para el trabajador y la empresa, en tanto ambos serán ayudados a mejorar en las responsabilidades y funciones.

    p.mb-4(data-aos="fade-right") En el siguiente video reconozca las ventajas de evaluar el desempeño laboral de los trabajadores y áreas de operación en la empresa. Tome nota de los aspectos más destacados y regístrelos en su libreta personal de apuntes:

    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/jCqSaOYUBL8" title="¿Por qué evaluar el desempeño laboral de los trabajadores en la empresa?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjetacolorojo.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema3/icon1.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.text-white Formato Evaluación de Desempeño
              p.text-white Analice el modelo de instrumento para adelantar evaluación, donde se evidencian niveles de valoración del desempeño, trabajo, conocimiento de la empresa, calidad, planeación, organización del trabajo y compromisos para mejorar
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/FormatoEvaluacióndeDesempenio.xlsx')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    

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

export default {
  global: {
    componenteFormativo: 'Desarrollo humano',
    descripcionCurso:
      'Este componente formativo aborda generalidades y aspectos clave del desarrollo laboral o desarrollo humano de los trabajadores, capacitación y entrenamiento, compensación, evaluación de desempeño, seguimiento y control, entre otras. Los contenidos afianzarán al aprendiz en planes de mejora, acciones formativas, correctivas y disciplinarias y la normatividad que soporta y orienta las decisiones del desarrollo laboral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Capacitación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Programa de capacitación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura de un plan de capacitación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Compensación laboral',
        desarrolloContenidos: true,
        subMenu: [
          ///
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de desempeño',
        desarrolloContenidos: true,
        subMenu: [
          ////
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Control',
        desarrolloContenidos: true,
        subMenu: [
          ///
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Diagrama de causa – efecto',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Diagrama de Pareto',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Diagrama de frecuencias o estratificación',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Histograma',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Diagramas de pastel',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan de mejora: concepto, requerimiento y aplicación',
        desarrolloContenidos: true,
        subMenu: [
          ///
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Acciones formativas, correctivas y disciplinarias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Normatividad asociada',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Blandez, M. (2014). Proceso administrativo. Editorial Digital UNID.',
    },
    {
      referencia:
        'Chiavenato, I. (2002). Gestión de talento humano. Editorial McGraw-Hill.',
    },
    {
      referencia:
        'Cifuentes, S. (2016). La compensación salarial como eje del desempeño y la productividad. Universidad Militar Nueva Granada.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/16837/CifuentesRochaSandraNancy2016.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Finca y Campo. (2020). La dirección en las empresas agropecuarias. Finca y Campo.',
      link:
        'http://www.fincaycampo.com/2014/07/la-direccion-en-las-empresas-agropecuarias/',
    },
    {
      referencia:
        'García, S. (1994). Introducción a la economía de la empresa. Diaz de Santos',
      link: 'https://bit.ly/3f1XlRg',
    },
    {
      referencia:
        'Garza, T. (2009). Administración contemporánea. Reto para la empresa. Editorial Alhambra Mexicana.',
    },
    {
      referencia:
        'Gestiopolis. (2003). Proceso administrativo. Qué es, origen, características, principios y beneficios. Gestiopolis.',
      link: 'https://www.gestiopolis.com/que-es-proceso-administrativo/',
    },
    {
      referencia:
        'Gregori, P. (s.f.). Herramientas estadísticas básicas de la calidad.',
      link:
        'http://www3.uji.es/~gregori/docencia/mt1021-1516/tema5-herramientas-pablo.html',
    },
    {
      referencia:
        'Infoagro. (s.f.). Indicadores sociales de las unidades productivas para el desarrollo rural en Argentina. Infoagro',
      link:
        'https://www.infoagro.com/desarrollo/indicadores_sociales_desarrollo_rural_argentina.htm',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2016). Manual de funciones y competencias laborales. ICA.',
      link:
        'https://www.ica.gov.co/getdoc/bb0f47d2-ccab-45a4-beb2-b0a0eb69bc5f/manual-de-funciones-y-competencias-laborales-ica-2.aspx',
    },
    {
      referencia:
        'Laurence, P. (2014). Diagnóstico organizacional. Centro Regional de Ayuda Técnica.',
    },
    {
      referencia: 'Las Limas. (2019). Planeación de la empresa. Estelí.',
    },
    {
      referencia: 'Las Limas. (2013). Datos generales de la empresa. Estelí.',
    },
    {
      referencia:
        'Ledezma, Y. (2017). Técnicas y herramientas de predicción del talento humano.',
      link:
        'http://yariaudyledezmagth.blogspot.com/2017/11/actividad-12-tecnicas-y-herramientas-de.html',
    },
    {
      referencia:
        'Portugal, V. (s.f.). Diagnóstico empresarial. Fundación Universitaria del Área Andina.',
    },
    {
      referencia:
        'Restrepo, F. y Arias, F. (2015). Las prácticas de gestión del talento humano en empresas agropecuarias del sector bananero en Colombia. Journal of Agriculture.',
    },
    {
      referencia:
        'Riquelme, M. (2019). Proceso administrativo: sus 4 etapas, fases y características. Webyempresas.',
      link: 'https://www.webyempresas.com/proceso-administrativo/',
    },
    {
      referencia:
        'Rodríguez, D. (2012). Diagnóstico organizacional. Alfa Omega Grupo Editor.',
    },
    {
      referencia:
        'Subsecretaría de Inclusión Laboral. (s.f.). Elaboración de programas de capacitación - Guía de capacitación. Subsecretaría de Inclusión Laboral.',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/160973/Elaboracion_de_programas_de_capacitaci_n_Anexo_1_250_1.pdf',
    },
    {
      referencia:
        'Tlaxcala, I. (s.f.). Herramientas estadísticas. Instituto Tecnológico Apizaco de Tlaxcala. ',
    },
  ],
  glosario: [
    {
      termino: 'Agremiación',
      significado:
        'Asociación sin ánimo de lucro y con personería jurídica que reúne personas del mismo oficio o profesión dedicadas a la producción de bienes agrícolas o forestales (MinAgricultura, 2018).',
    },
    {
      termino: 'Compensación',
      significado:
        'Es el pago que se realiza a un trabajador en dinero o especie, que se otorga  por un servicio prestado a la empresa.',
    },
    {
      termino: 'Empleador',
      significado:
        'Que da empleo a otros, puede ser una persona natural o la empresa agropecuaria.',
    },
    {
      termino: 'Evaluación de desempeño',
      significado:
        'Actividad de verificación respecto a los deberes que los trabajadores cumplen, así como de aspectos motivacionales, necesidades de capacitación, entre otros.',
    },
    {
      termino: 'Insumo',
      significado:
        'Bien de cualquier clase de empleado en la producción de otros bienes.',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de actividades relacionadas con la compra y venta de mercancías y servicios.',
    },
    {
      termino: 'Operario',
      significado:
        'Persona que tiene un oficio de tipo manual o que requiere esfuerzo físico, en especial si maneja una máquina en una fábrica o taller.',
    },
    {
      termino: 'Organigrama',
      significado:
        'Es la representación gráfica de la estructura de una empresa o cualquier otra organización, que incluye las estructuras departamentales y, en algunos casos, las personas que las dirigen hacen un esquema sobre las relaciones jerárquicas.',
    },
    {
      termino: 'Personal',
      significado:
        'Que se realiza con la participación de una persona físicamente presente y no utilizando medios indirectos, como el teléfono o la mediación de otras personas.',
    },
    {
      termino: 'Recursos',
      significado:
        'Lista ordenada de bienes y demás cosas valorables que pertenecen a una persona, empresa o institución, para el desarrollo de sus actividades.',
    },
    {
      termino: 'Sueldo básico',
      significado:
        'Es la compensación básica, regularmente en dinero en su totalidad, que se complementa con otras iniciativas de compensación y que componen parte del bienestar de los trabajadores.',
    },
  ],
  complementario: [
    {
      tema: 'Compensación laboral',
      referencia:
        'Cifuentes, S. (2016). La compensación salarial como eje del desempeño y la productividad. Universidad Militar Nueva Granada.',
      tipo: 'Documento',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/16837/CifuentesRochaSandraNancy2016.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Acciones formativas, correctivas y disciplinarias',
      referencia:
        'Lobo, C. (2017). Gestión del talento humano. Fundación Universitaria del Área Andina.',
      tipo: 'Documento',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1484/Gesti%C3%B3n del Talento Humano.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Evaluación de desempeño',
      referencia:
        'Kenjo. (s.f.). Guía de evaluación de desempeño para recursos humanos. Kenjo. ',
      tipo: 'Página web',
      link:
        'https://www.kenjo.io/es/guia-evaluacion-desempeno-para-recursos-humanos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mariac Ovalle',
        cargo: 'Validación de Maquetación',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

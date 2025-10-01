export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Historia, fundamentos y conceptos básicos en toxicología',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia, fundamentos y conceptos básicos en toxicología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia de la toxicología y su relación con el trabajo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Revolución industrial y primeros casos ocupacionales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Toxicocinética y toxicodinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Toxicocinética',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Toxicodinámica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sustancias cancerígenas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Exposición ocupacional a sustancias cancerígenas',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Enfermedad laboral de origen tóxico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Capítulo 33 Toxicología. Enciclopedia de la OIT: ( ed.). Madrid, D - INSHT (Instituto Nacional de Seguridad e Higiene en el Trabajo).  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/96247?page=10',
    },
    {
      referencia:
        'Agencia Internacional para la Investigación del Cáncer (IARC). (2024). Monographs on the Identification of Carcinogenic Hazards to Humans.  ',
      link: 'https://monographs.iarc.who.int',
    },
    {
      referencia:
        'Occupational Safety and Health Administration (OSHA). (2023). Chemical Hazards and Toxic Substances. ',
      link: 'https://www.osha.gov/chemical-hazards ',
    },
    {
      referencia:
        'National Institute for Occupational Safety and Health (NIOSH). (2022). Carcinogen List. ',
      link: 'https://www.cdc.gov/niosh/topics/cancer/default.html ',
    },
    {
      referencia:
        'Colombia. (2014). Decreto 1477 de 2014: Por el cual se expide la Tabla de Enfermedades Laborales. Diario Oficial No. 49.234, 5 de agosto de 2014.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=58849',
    },
    {
      referencia:
        'Ley 1562 de 2012: Por la cual se modifica el Sistema General de Riesgos Laborales y se dictan otras disposiciones en materia de salud ocupacional. Diario Oficial No. 48.449, 11 de julio de 2012. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=48365 ',
    },
  ],
  glosario: [
    {
      termino: 'Absorción',
      significado:
        'Proceso mediante el cual una sustancia tóxica ingresa al organismo desde el medio externo.',
    },
    {
      termino: 'Agente cancerígeno',
      significado:
        'Sustancia física, química o biológica capaz de inducir cáncer en humanos o animales.',
    },
    {
      termino: 'Asbesto',
      significado:
        'Mineral fibroso utilizado en la industria, altamente cancerígeno y prohibido en muchos países.',
    },
    {
      termino: 'Benceno',
      significado:
        'Compuesto aromático volátil, utilizado en la industria petroquímica y relacionado con leucemia.',
    },
    {
      termino: 'Carcinogenicidad',
      significado:
        'Propiedad de una sustancia de provocar la formación de tumores malignos.',
    },
    {
      termino: 'DL50',
      significado:
        'Dosis letal media que causa la muerte al 50% de una población experimental.',
    },
    {
      termino: 'Exposición ocupacional',
      significado:
        'Contacto de un trabajador con agentes peligrosos presentes en su entorno laboral.',
    },
    {
      termino: 'Formaldehído',
      significado:
        'Sustancia química irritante y cancerígena usada en laboratorios y procesos industriales.',
    },
    {
      termino: 'Hidrocarburos aromáticos policíclicos',
      significado:
        'Compuestos generados en procesos de combustión incompleta, algunos son cancerígenos.',
    },
    {
      termino: 'IARC',
      significado:
        'Agencia Internacional para la Investigación del Cáncer, clasifica agentes según su riesgo carcinogénico.',
    },
    {
      termino: 'Metales pesados',
      significado:
        'Elementos como plomo, mercurio o cadmio, tóxicos para diversos órganos.',
    },
    {
      termino: 'Monitoreo ambiental',
      significado:
        'Evaluación sistemática de contaminantes presentes en el ambiente laboral.',
    },
    {
      termino: 'Sílice cristalina',
      significado:
        'Mineral que, al ser inhalado, puede causar silicosis y cáncer de pulmón.',
    },
    {
      termino: 'Toxicocinética',
      significado:
        'Rama de la toxicología que estudia la absorción, distribución, metabolismo y excreción de tóxicos.',
    },
    {
      termino: 'Toxicodinámica',
      significado:
        'Rama que analiza los efectos biológicos y mecanismos de acción de los tóxicos en el organismo.',
    },
  ],
}

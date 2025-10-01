<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Historia, fundamentos y conceptos básicos en toxicología'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La toxicología general, constituye una rama fundamental de las ciencias biomédicas y ambientales, la cual se dedica al estudio exhaustivo de los efectos adversos que pueden producir los diferentes agentes químicos, físicos y biológicos, sobre los organismos vivos. Esta disciplina no solo se limita a identificar y comprender los mecanismos por los cuales estos agentes causan daño, sino que también busca establecer límites seguros de exposición, diseñar estrategias de prevención y promover medidas que protejan la salud humana, animal y del ecosistema en general. La toxicología tiene un alcance muy amplio y diversificado, dado que sus conocimientos y aplicaciones son fundamentales en múltiples ámbitos, incluyendo la medicina, la farmacología, la protección ambiental, la industria química, la regulación de productos y la seguridad pública.
    
        .bg-color-1.px-5.py-4(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una de las áreas más relevantes y de mayor impacto en la actualidad, es la toxicología ocupacional. Esta especialidad se enfoca en la identificación, evaluación y control de los riesgos tóxicos asociados a los entornos laborales, con el objetivo principal de proteger la salud de los trabajadores. La toxicología ocupacional estudia cómo diferentes agentes presentes en los centros de trabajo, como vapores, gases, partículas, productos químicos, biológicos o radiaciones, pueden afectar la salud de los empleados, tanto a corto como a largo plazo. A través de la evaluación de la exposición, los profesionales en esta área desarrollan protocolos de vigilancia, establecen límites de seguridad y proponen medidas preventivas y correctivas que minimicen los riesgos de enfermedades profesionales.
    
    p.mb-5 El papel de la toxicología ocupacional resulta esencial en la prevención de trastornos de salud relacionados con el trabajo, como intoxicaciones, alergias, enfermedades respiratorias, cáncer laboral y otros padecimientos que pueden afectar significativamente la calidad de vida de los trabajadores y su productividad. Además, su adecuada aplicación contribuye a reducir los costos asociados a las bajas laborales, las incapacidades y las indemnizaciones, promoviendo ambientes laborales más seguros y saludables. En definitiva, la toxicología ocupacional es una disciplina clave que combina conocimientos científicos, técnicos y éticos, para garantizar la protección integral del trabajador en su entorno laboral, consolidando su importancia como pilar fundamental en la salud ocupacional y en la gestión de riesgos en los lugares de trabajo.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Historia de la toxicología y su relación con el trabajo
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Desde la antigüedad, el conocimiento empírico de las sustancias tóxicas ha estado presente en diferentes culturas de la humanidad. Las civilizaciones egipcia, griega y romana documentaron los efectos de plantas, minerales y animales venenosos, estableciendo las bases para el entendimiento de la toxicidad. Figuras como Dioscórides y Galeno, recopilaron y sistematizaron este conocimiento, en tratados que sirvieron como referencia durante siglos, permitiendo avances en el reconocimiento y manejo de sustancias peligrosas. 
    
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 Durante el Renacimiento, el médico y alquimista Paracelso, revolucionó el campo de la toxicología con su célebre <em>dictum</em> "la dosis hace al veneno", subrayando la importancia de la cantidad en la determinación del efecto tóxico y sentando las bases para el concepto de toxicidad dosis-dependiente. Este paradigma fue fundamental para pasar de un conocimiento empírico a un enfoque más científico y preciso en la evaluación de sustancias peligrosas.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Revolución industrial y primeros casos ocupacionales
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Con la llegada de la Revolución Industrial en los siglos XVIII y XIX, el uso intensivo de nuevas sustancias químicas en fábricas, minas y procesos industriales, incrementó significativamente la exposición de los trabajadores a los agentes tóxicos. Este período marcó un cambio radical en la relación entre el trabajo y la salud, dado el aumento en la incidencia de enfermedades laborales, relacionado con la exposición a productos químicos, polvo, vapores y otros contaminantes. 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              p En 1775, Percival Pott realizó un hallazgo pionero al identificar la relación entre la exposición al alquitrán y el cáncer escrotal en deshollinadores, abriendo así camino a la epidemiología ocupacional y a la comprensión de los riesgos específicos en ambientes laborales. Este descubrimiento resaltó la necesidad de evaluar y controlar la exposición a sustancias peligrosas en el contexto laboral, impulsando la creación de regulaciones y medidas preventivas. La toxicología ocupacional comenzó a consolidarse como una disciplina que no solo estudiaba los efectos de sustancias en el organismo, sino que también promovía la protección de los trabajadores mediante la implementación de normas y controles.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              p El siglo XX, fue testigo de un avance significativo en la consolidación de la toxicología relacionada con el trabajo, con la creación de agencias reguladoras y organismos internacionales dedicados a la protección de la salud laboral. En Estados Unidos, instituciones como la Oficina de Seguridad y Salud Ocupacional (OSHA), el Instituto Nacional de Seguridad y Salud en el Trabajo (NIOSH) y la Agencia de Protección Ambiental (EPA), jugaron roles fundamentales en la regulación, investigación y control de sustancias peligrosas en ámbitos laborales y ambientales. A nivel internacional, la Organización Internacional del Trabajo (OIT) promovió normativas y estándares globales para la protección del trabajador frente a exposiciones tóxicas. Durante este período, la industrialización continuó creciendo, y con ella surgieron nuevos desafíos, como la síntesis de miles de compuestos químicos y la aparición de nuevos riesgos para la salud laboral.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              p La toxicología ocupacional se fortaleció como una disciplina científica que combina aspectos de la medicina, la química, la epidemiología y la ingeniería, para evaluar, prevenir y gestionar, los riesgos asociados a la exposición laboral. Además, la investigación en biomarcadores, la evaluación de riesgos y la monitorización de exposiciones, permitieron desarrollar estrategias más efectivas para proteger a los trabajadores y mejorar las condiciones laborales, en un contexto de creciente complejidad tecnológica y química.
    
    p.mb-5 Principios básicos:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Relación dosis-respuesta")
            p Es la piedra angular de la toxicología. Establece que toda sustancia puede ser inofensiva o tóxica, dependiendo de la cantidad a la que se esté expuesto. En toxicología ocupacional, este principio permite determinar umbrales de exposición seguros para sustancias potencialmente peligrosas, ayudando a definir límites de exposición permisibles que protejan la salud de los trabajadores sin causar efectos adversos.
    
          .div(titulo="Exposición ocupacional")
            p Se refiere a la frecuencia, duración y vía por la cual un trabajador entra en contacto con una sustancia tóxica. Las principales vías de exposición incluyen la inhalación, que es común en ambientes con vapores, partículas o gases; la vía dérmica, que ocurre a través de la piel en contacto directo con sustancias químicas; y en menor medida, la vía oral o parenteral, en casos donde el trabajador pueda ingerir accidentalmente sustancias o por contacto con heridas abiertas. La evaluación de estas vías, es fundamental para priorizar medidas de control y reducir el riesgo de efectos nocivos.
    
          .div(titulo="Toxicocinética y toxicodinámica")
            p Estos conceptos describen el comportamiento del tóxico en el organismo y su interacción con los sistemas biológicos. La toxicocinética estudia cómo la sustancia es absorbida, distribuida, metabolizada y eliminada del cuerpo, permitiendo entender cuánto y en qué lugares puede acumularse la sustancia. La toxicodinámica, por su parte, analiza cómo la sustancia interactúa con los receptores, enzimas y órganos blanco, produciendo efectos tóxicos. El conocimiento de estos procesos es esencial para comprender la naturaleza de los efectos tóxicos, determinar posibles vías de intervención y diseñar estrategias de prevención y tratamiento.
    
          .div(titulo="Evaluación del riesgo toxicológico")
            p Consiste en un proceso sistemático que involucra la identificación de peligros, la caracterización de la relación dosis-respuesta, la evaluación de la exposición real en el entorno laboral, y la caracterización del riesgo total. Este proceso permite determinar la probabilidad de que un trabajador sufra efectos adversos debido a la exposición a ciertos agentes, y es fundamental para la toma de decisiones en salud ocupacional. A partir de esta evaluación, se pueden diseñar programas de control, establecer límites de exposición y promover intervenciones preventivas efectivas.
          
          .div(titulo="Factores modificadores de la toxicidad")
            p La respuesta a una sustancia tóxica no es uniforme en todas las personas; diversos factores pueden modificar la severidad y la probabilidad de efectos nocivos. Las características individuales, como la edad, el sexo, la genética, y la condición de salud, influyen en la susceptibilidad del organismo. Factores ambientales, como la temperatura, la ventilación y la humedad, pueden aumentar o disminuir la exposición y la absorción de tóxicos. Además, factores sociales, incluyendo hábitos (como fumar o consumir alcohol), el uso de medicamentos y el estado nutricional, pueden potenciar o reducir la toxicidad, por lo que su consideración es fundamental en la evaluación de riesgos y en la implementación de medidas preventivas personalizadas.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ins.gov.co/ " target="_blank" rel="noopener noreferrer") Instituto Nacional de Salud (INS). (2022). Informe nacional de vigilancia en salud pública ocupacional. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cdc.gov/niosh/ " target="_blank" rel="noopener noreferrer") National Institute for Occupational Safety and Health (NIOSH)						
 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=No76WCtidBU " target="_blank" rel="noopener noreferrer") MMEKII. (2018, 27 de agosto). Introducción a la #toxicología [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

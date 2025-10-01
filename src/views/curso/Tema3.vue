<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Sustancias cancerígenas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-8.p-5(data-aos="fade-left").mb-3
          p.mb-0 Una sustancia cancerígena es cualquier agente físico, químico o biológico, que tiene la capacidad de inducir la transformación maligna de las células, llevando al desarrollo de tumores malignos o cáncer. Estas sustancias pueden actuar a través de diversos mecanismos, pero en general, su efecto principal consiste en dañar el material genético de las células, específicamente el ADN, o en interferir con los mecanismos celulares encargados de la reparación de daños genéticos. La alteración de estos procesos puede resultar en mutaciones que promueven la proliferación descontrolada de las células, evaden los controles normales de crecimiento y apoptosis y, finalmente, conducen a la formación de tumores malignos.
        p(data-aos="fade-left") Las sustancias cancerígenas pueden encontrarse en diversos entornos y exposiciones, incluyendo ambientes laborales, productos de consumo, contaminantes ambientales, radiaciones, virus y bacterias. La exposición repetida o prolongada a estos agentes aumenta el riesgo de que las células sufran daños acumulativos que puedan culminar en cáncer. Es importante destacar que la carcinogenicidad de una sustancia no solo depende de su presencia, sino también de la dosis, la duración de la exposición, la vía de ingreso al organismo y la susceptibilidad individual de cada persona.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.p-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Agencia Internacional para la Investigación del Cáncer (IARC), una agencia especializada de la Organización Mundial de la Salud (OMS), es la encargada de evaluar y clasificar la evidencia científica sobre los agentes potencialmente cancerígenos. 
        p(data-aos="fade-left") En su sistema de clasificación, los agentes se agrupan en diferentes categorías, según la fuerza de la evidencia científica que respalda su carcinogenicidad:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7
              h5 Grupo 1. Carcinógeno para humanos (evidencia suficiente)
              p Incluye sustancias y agentes que han sido claramente asociados con el cáncer en humanos, con evidencia concluyente proveniente de estudios epidemiológicos, experimentos en laboratorio y otras fuentes científicas. Ejemplos comunes son el tabaquismo, asbestos, radiación ultravioleta y ciertos virus como el virus del papiloma humano (VPH).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Grupo 2A. Probablemente carcinógeno para humanos
              p Incluye agentes para los cuales existe evidencia limitada en humanos, pero evidencia suficiente en estudios con modelos animales, o bien, evidencia limitada en humanos con fuerte apoyo en estudios en animales. La exposición a estos agentes puede aumentar significativamente el riesgo de desarrollar cáncer, aunque no se ha establecido con certeza absoluta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Grupo 2B. Posiblemente carcinógeno para humanos
              p Incluye agentes para los cuales hay evidencia limitada en humanos y en animales, o evidencia que no es concluyente. La relación causal aún no ha sido completamente demostrada, pero existe cierta sospecha de carcinogenicidad.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Grupo 3. No clasificable como carcinógeno para humanos
              p Incluye sustancias o agentes para los cuales no hay suficiente evidencia científica para determinar si son carcinógenos o no. La clasificación indica que la evidencia disponible no permite hacer una evaluación definitiva.le.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 Grupo 4: Probablemente no carcinógeno para humanos
              p Este grupo comprende agentes que, según la evidencia científica, no presentan indicios de carcinogenicidad. Sin embargo, esta categoría es menos utilizada y se aplica con menor frecuencia.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Es fundamental entender que la clasificación de un agente como cancerígeno no implica que todos los individuos expuestos desarrollarán cáncer, sino que aumenta la probabilidad de su desarrollo en función de la exposición. Por ello, la prevención y la minimización de la exposición a sustancias peligrosas son estrategias claves en la lucha contra el cáncer. La identificación y regulación de agentes cancerígenos, contribuyen a reducir la carga global de la enfermedad y a proteger la salud pública en diferentes ámbitos, incluyendo el laboral, ambiental y comunitario.
    
    
        

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Exposición ocupacional a sustancias cancerígenas
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-5(data-aos="fade-left").mb-3
          p.mb-0 Numerosos sectores industriales implican una exposición potencial a sustancias reconocidas como carcinógenos, lo que representa un riesgo importante para la salud de los trabajadores. La identificación y control de estos agentes son fundamentales para prevenir la aparición de cánceres relacionados con la exposición laboral. 
        h5 A continuación, se describen algunas de las sustancias más comunes y sus implicaciones:
    
    .bg-full-width.bg-color-info.mb-5
      .px-4.px-md-5.pt-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="-4%" y="65.5%" numero="+")
                h5 Asbesto
                p Utilizado ampliamente en aislamiento térmico, techos, frenos y otros materiales de construcción, el asbesto es uno de los carcinógenos laborales más conocidos. La exposición prolongada y frecuente, puede conducir a enfermedades graves como mesotelioma, cáncer de pulmón y asbestosis. La inhalación de fibras microscópicas provoca daños en el epitelio pulmonar y pleural, con un período de latencia que puede superar los 20 años.
    
              .bg-color-white.box-shadow.p-3(x="-4%" y="31%" numero="+")
                h5 Benceno
                p Presente en la industria petroquímica, producción de plásticos, fibras sintéticas, y en la manipulación de combustibles, el benceno está estrechamente vinculado a la leucemia mieloide aguda y otros trastornos hematológicos. La exposición puede ocurrir a través de inhalación de vapores o contacto con líquidos, y su riesgo aumenta con la duración y concentración de la exposición.
    
              .bg-color-white.box-shadow.p-3(x="5%" y="9%" numero="+")
                h5 Aminas aromáticas
                p Utilizadas en la fabricación de tintes, colorantes, cauchos, y plásticos, estas sustancias han sido relacionadas con cáncer de vejiga. La exposición laboral puede ocurrir en industrias químicas, tintorerías y en procesos de fabricación de textiles, siendo importante el uso de medidas de protección para evitar su inhalación o contacto cutáneo.
    
              .bg-color-white.box-shadow.p-3(x="92%" y="9%" numero="+")
                h5 Hidrocarburos aromáticos policíclicos (HAPs)
                p Son productos de la combustión incompleta de materia orgánica, presentes en humos de tabaco, combustibles fósiles, emisiones industriales y quemas abiertas. Los HAPs son carcinógenos para la piel, pulmones y otros órganos, y su riesgo aumenta en actividades como soldadura, trabajo en refinerías y manejo de combustibles.
    
              .bg-color-white.box-shadow.p-3(x="99.5%" y="31%" numero="+")
                h5 Formaldehído
                p Utilizado como conservante en laboratorios, en la fabricación de muebles, textiles y en la producción de materiales de construcción, el formaldehído se asocia con cáncer nasofaríngeo y leucemia. La exposición puede ocurrir mediante inhalación de vapores o contacto directo con productos que contienen esta sustancia.
              .bg-color-white.box-shadow.p-3(x="100%" y="65%" numero="+")
                h5 Sílice cristalina
                p Presente en actividades de minería, construcción, demolición y fabricación de vidrio, la sílice cristalina es un agente carcinogénico que puede provocar cáncer de pulmón y silicosis, una enfermedad pulmonar progresiva. La inhalación de partículas finas de sílice provoca inflamación y daño en los tejidos pulmonares.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") A este grupo se suman otras sustancias de alta peligrosidad, como el cadmio y sus compuestos, el cromo hexavalente (Cr VI), el cloruro de vinilo, el arsénico inorgánico, el 1,3-butadieno, la bencidina, el dietilestilbestrol (DES) y el tetracloroetileno. Además, exposiciones ocupacionales frecuentes como los humos de soldadura, los polvos de madera, la radiación ionizante y el humo ambiental del tabaco también han sido clasificadas como cancerígenas por organismos internacionales como la IARC. Todas estas sustancias representan riesgos significativos para la salud de los trabajadores, especialmente bajo condiciones de exposición prolongada, sin medidas adecuadas de protección y control.
    
        .bg-color-7.p-5(data-aos="fade-left")
          p.mb-0 El riesgo de desarrollar cáncer por exposición ocupacional, no solo depende de la intensidad, duración, frecuencia y vía de exposición, sino también de factores individuales como la predisposición genética, la edad, el sexo, el estado de salud previo y la existencia de condiciones predisponentes. La implementación de medidas preventivas, incluyendo la utilización de equipos de protección personal, controles de ingeniería, monitoreo ambiental y programas de vigilancia médica, son esenciales para reducir la incidencia de cáncer laboral y proteger la salud de los trabajadores. 
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Es importante destacar que la exposición a estas sustancias, requiere una gestión integral que incluya evaluación de riesgos, capacitación, cumplimiento de normativas y promoción de entornos laborales seguros. Solo mediante un enfoque preventivo y la sensibilización de empleadores y trabajadores se podrá disminuir significativamente la carga de enfermedades relacionadas con sustancias cancerígenas en el ámbito laboral.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ins.gov.co/Direcciones/ONS " target="_blank" rel="noopener noreferrer") Observatorio Nacional de Salud

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Organización Panamericana de la Salud / Organización Mundial de la Salud. (29 de abril de 2014). La OPS/OMS advirtió sobre el riesgo para la salud de la exposición a sustancias químicas cancerígenas en el lugar de trabajo.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=SRniyk-GQoc " target="_blank" rel="noopener noreferrer") ASONEUMOCITO. (2024, 20 de febrero). Enfermedad relacionada con la exposición a asbesto: lo que viene después de la prohibición de su uso [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

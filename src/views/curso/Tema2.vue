<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Toxicocinética y toxicodinámica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El organismo humano es un complejo sistema biológico que está organizado en diversos niveles, desde el molecula-celular hasta el de los tejidos y órganos. Es un sistema abierto, que intercambia materia y energía con su medio ambiente, a través de numerosas reacciones bioquímicas que están en equilibrio dinámico. El medio ambiente puede estar contaminado por diversos tóxicos. Stellman, S. D. (2012). 
    
        .bg-color-3.px-4.py-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La toxicología es una ciencia multidisciplinaria que estudia los efectos adversos de los agentes químicos, físicos y biológicos sobre los organismos vivos. Dos pilares fundamentales dentro de esta disciplina son la toxicocinética y la toxicodinámica, conceptos claves para comprender cómo un tóxico actúa en el organismo y cuáles son sus consecuencias biológicas.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Toxicocinética
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La toxicocinética constituye una rama fundamental de la toxicología que se dedica a estudiar el movimiento de las sustancias tóxicas dentro del organismo. Su objetivo principal es comprender cómo un compuesto químico nocivo ingresa, se distribuye, es metabolizado y, finalmente, eliminado del cuerpo, siguiendo las etapas conocidas como ADME: Absorción, Distribución, Metabolismo y Excreción (Gibaldi & Perrier, 1982). 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Este análisis permite predecir la concentración de la sustancia en diferentes tejidos y fluidos biológicos a lo largo del tiempo, lo que es esencial para determinar la dosis que puede ser tóxica y los tiempos de exposición peligrosos. de negocio.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema2/4.svg" data-aos="zoom-in", style="max-width: 117px")  
    
    p.mb-5 Además, la toxicocinética incluye el estudio de factores que afectan estos procesos, como la edad, el sexo, el estado de salud, la presencia de otras sustancias, y las variaciones genéticas en las enzimas metabolizadoras. Por ejemplo, algunas personas tienen una mayor capacidad para metabolizar ciertos tóxicos, lo que puede reducir o aumentar la toxicidad. También se consideran aspectos como la vía de exposición (oral, inhalatoria, cutánea), que influye en la velocidad y cantidad de sustancia que llega a la circulación sistémica.

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El entendimiento de la toxicocinética es crucial para diseñar protocolos de tratamiento en intoxicaciones, establecer límites de seguridad en productos químicos y medicamentos, y para evaluar riesgos en ambientes laborales o ambientales. Por ejemplo, el conocimiento de la tasa de eliminación de un tóxico permite determinar cuánto tiempo permanece en el organismo y cuándo puede ser necesario realizar intervenciones médicas.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Toxicodinámica
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Por otro lado, la toxicodinámica es la rama de la toxicología que estudia los efectos biológicos que un tóxico produce en el organismo, así como los mecanismos subyacentes que conducen a dichos efectos. Incluye el análisis de los sitios de acción, que pueden ser receptores específicos, enzimas o estructuras celulares, y cómo la interacción de la sustancia con estos blancos desencadena respuestas fisiológicas o patológicas (Eaton & Gilbert, 2008).uestos.
    
        .bg-color-7.p-4(data-aos="fade-left").mb-3
          p.mb-0 La toxicodinámica también investiga las vías bioquímicas y moleculares afectadas por el tóxico, así como la relación dosis-respuesta, que describe cómo varía la magnitud del efecto con diferentes niveles de exposición. Esto permite determinar la dosis mínima que produce un efecto nocivo, así como los niveles de exposición que pueden resultar en daño severo o mortalidad.
        p Además, la toxicodinámica considera la capacidad de los organismos para adaptarse o resistir a los efectos tóxicos, así como los mecanismos de reparación y recuperación. La comprensión de estos mecanismos es fundamental para el desarrollo de antídotos y terapias específicas, así como para la evaluación de riesgos y la formulación de políticas de protección ambiental y salud pública.
    

    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left") Relación entre toxicocinética y toxicodinámica
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left").mb-3
          p.mb-0 Es importante destacar que estas dos ramas están estrechamente relacionadas y se complementan en la evaluación de la toxicidad de sustancias químicas. La toxicocinética determina la cantidad y concentración del tóxico en los sitios de acción, mientras que la toxicodinámica explica cómo ese tóxico produce sus efectos en función de su interacción con los blancos biológicos.
        p(data-aos="fade-left") Por ejemplo, una sustancia puede llegar en altas concentraciones a un órgano específico (estudio de toxicocinética), pero si su mecanismo de acción requiere una concentración muy elevada para activar un receptor determinado, los efectos adversos pueden ser mínimos o ausentes a dosis bajas. Por tanto, la evaluación integral de la toxicidad requiere considerar ambos aspectos para entender completamente el riesgo potencial y diseñar estrategias de prevención y tratamiento efectivas.
    
        h5 Procesos de la toxicocinética:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Absorción")
            p La absorción representa el paso inicial en la toxicocinética y se define como el proceso mediante el cual una sustancia tóxica entra en el cuerpo desde el medio externo. Este proceso puede ocurrir por diversas vías, incluyendo la oral, dérmica, inhalatoria o parenteral, y es fundamental para determinar la cantidad de tóxico que llega a la circulación sistémica y, en consecuencia, a los órganos diana. La velocidad y extensión de la absorción dependen de múltiples factores, como el pH del entorno en el sitio de absorción, la liposolubilidad del compuesto, su peso molecular, tamaño molecular, y la presencia de transportadores específicos o mecanismos de difusión facilitada (Casarett & Doull, 2013). 
            p Además, las características de la formulación del tóxico, la presencia de otros compuestos en el medio externo, y las condiciones fisiológicas del individuo, como el estado de la mucosa o la integridad de la piel, también influyen en este proceso.
    
          .div(titulo="Distribución")
            p Una vez absorbido, el tóxico se distribuye por la sangre hacia los tejidos y órganos, proceso que determina en qué regiones del cuerpo ejercerá sus efectos tóxicos. La distribución está influenciada por factores como el flujo sanguíneo regional, que determina la rapidez con la que el tóxico llega a diferentes tejidos; la afinidad del compuesto por ciertos tejidos, que puede estar relacionada con su liposolubilidad o capacidad de unirse a componentes tisulares; la unión a proteínas plasmáticas, principalmente albúmina, que afecta la fracción libre y activa del tóxico; y la capacidad de atravesar barreras fisiológicas, como la barrera hematoencefálica o la placentaria. 
            p El parámetro que describe esta fase, es el volumen de distribución (Vd), que indica cómo se reparte el tóxico en el cuerpo en relación con su concentración plasmática, proporcionando una idea de si el compuesto se acumula en tejidos adiposos, músculo o en órganos específicos (Rang et al., 2012).

    
          .div(titulo="Metabolismo")
            p El metabolismo o biotransformación convierte al tóxico en formas más hidrosolubles que puedan ser excretadas con mayor facilidad, facilitando así su eliminación del organismo. Este proceso se realiza principalmente en el hígado y se divide en dos fases: la Fase I, que incluye reacciones de oxidación, reducción e hidrólisis, y en menor medida conjugaciones; y la Fase II, que implica la conjugación del metabolito de la Fase I con moléculas endógenas como glucurónido, glutatión, sulfato o aminoácidos, formando compuestos más hidrosolubles. Sin embargo, algunos metabolitos generados durante el metabolismo de ciertos tóxicos pueden ser más tóxicos que el compuesto original, fenómeno conocido como bioactivación. La bioactivación puede dar lugar a la formación de intermediarios reactivos que dañan las células y tejidos, incrementando el potencial tóxico del compuesto (Park et al., 2001). Además, factores genéticos, la edad, el estado de salud hepática y la presencia de otros fármacos o toxinas pueden influir en la eficiencia del metabolismo.
    
          .div(titulo="Excreción o eliminación")
            p Finalmente, el organismo elimina los tóxicos y sus metabolitos a través de varias vías, entre ellas la renal (orina), hepática (bilis y heces), respiratoria (aire exhalado), sudor y leche materna. La principal vía de eliminación suele ser la renal, que implica procesos de filtración glomerular, secreción tubular y reabsorción, y cuya eficiencia determina en gran medida la duración y la intensidad del efecto tóxico. La vía biliar puede ser significativa para compuestos de mayor peso molecular o que se unen a proteínas y otros sustratos en el hígado, siendo eliminados a través de las heces tras secreción en la bilis. La cinética de excreción, que incluye aspectos como la tasa de eliminación y la vida media del tóxico, influye directamente en la duración del efecto tóxico y en la potencial acumulación en el organismo si la exposición es continua o repetida (Guyton & Hall, 2021). 
            p La comprensión de estos procesos es esencial para diseñar estrategias de intervención, determinar períodos de seguridad y establecer dosis seguras en contextos de exposición tóxica.

    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left") Principios y mecanismos de la toxicodinámica
    
    p.mb-5 La toxicodinámica se centra en cómo interactúa un tóxico con los sistemas biológicos para causar daño. Esta interacción puede involucrar unirse a receptores específicos, alterar la actividad de enzimas, modificar proteínas estructurales o inducir daño genético.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Interacción con blancos celulares
              p Los blancos celulares pueden ser muy variados: receptores de membrana, canales iónicos, proteínas del citoesqueleto, ácidos nucleicos, entre otros. Algunas sustancias tienen una acción muy específica (como los insecticidas organofosforados sobre la acetilcolinesterasa), mientras que otras actúan de manera inespecífica, afectando estructuras generales como las membranas celulares (Eaton & Klaassen, 2020).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mecanismos de toxicidad
              p Entre los mecanismos principales se incluyen:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0  <b>Inhibición enzimática:</b> que puede bloquear rutas metabólicas esenciales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0  <b>Peroxidación lipídica:</b> provocando daño en membranas celulares.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0  <b>Inducción de estrés oxidativo:</b> alterando el equilibrio redox y dañando componentes celulares.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0  <b>Alteraciones en el ADN:</b> lo que puede llevar a mutaciones, cáncer o apoptosis.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0  <b>Disfunción mitocondrial:</b> que interfiere con la producción de energía.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Curva dosis-respuesta
              p La relación dosis-respuesta, es un principio básico de la toxicodinámica. Esta describe cómo varía la magnitud del efecto en función de la dosis del tóxico. El conocimiento de parámetros como la DL50 (dosis letal para el 50 % de los individuos), NOAEL (nivel sin efecto adverso observable), o LOAEL (nivel con el efecto adverso más bajo observable), es fundamental para evaluar la seguridad de sustancias (Casarett & Doull, 2013).
        
        









    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://doi.org/10.35509/01239015.752 " target="_blank" rel="noopener noreferrer") Pérez Sosa, M., et al. (2022). Asbestos as an occupational carcinogen in Colombia: from molecular biology to public health. Revista Colombiana de Cancerología, 26(2), 127-136.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.minsalud.gov.co  " target="_blank" rel="noopener noreferrer") Ministerio de Salud y Protección Social


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6hFWWAYATaM" target="_blank" rel="noopener noreferrer") ASONEUMOCITO. (2025, 28 de marzo). Asbesto - revisión [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

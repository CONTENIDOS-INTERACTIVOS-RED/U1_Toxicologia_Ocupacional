<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Enfermedad laboral de origen tóxico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las enfermedades laborales representan un importante problema de salud pública en el mundo, especialmente en países con alta actividad industrial y deficiencias en los sistemas de prevención y control. Dentro de esta categoría, se encuentran las enfermedades laborales de origen tóxico, las cuales son consecuencia directa de la exposición prolongada a los agentes químicos peligrosos, en el entorno de trabajo. En Colombia, la identificación, clasificación y manejo de estas enfermedades, ha cobrado cada vez mayor relevancia dentro del sistema de riesgos laborales, debido al creciente número de casos asociados a sustancias tóxicas y al impacto socioeconómico que generan en la población trabajadora.
    
        .bg-color-9.p-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una enfermedad laboral de origen tóxico, es aquella condición de salud que se desarrolla como resultado de la exposición continua o intermitente a agentes químicos en el ambiente laboral. Estas sustancias pueden ingresar al organismo por diferentes vías inhalación, contacto dérmico o ingestión y causar daño a uno o varios órganos o sistemas. Su aparición puede ser aguda (por exposiciones intensas en corto tiempo) o crónica (exposición baja pero prolongada), y muchas veces se manifiesta años después del inicio de la exposición.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los agentes causantes son muy variados e incluyen solventes orgánicos, metales pesados, pesticidas, hidrocarburos, plomo, arsénico, benceno, entre muchos otros. La toxicidad de estas sustancias depende de su naturaleza química, la concentración, la duración de la exposición y las características del trabajador, como la susceptibilidad genética y la presencia de enfermedades previas.
    
        .bg-color-4.p-5(data-aos="fade-left").mb-3
          p.mb-0 En Colombia, el tratamiento de las enfermedades laborales está regulado por varias normativas, siendo la principal la Ley 1562 del 2012, que modifica el Sistema General de Riesgos Laborales. Esta Ley establece que una enfermedad se considera laboral cuando “es contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ve obligado a trabajar”.
        p Asimismo, el país cuenta con el Decreto 1477 del 2014, que adopta la Tabla de Enfermedades Laborales vigente. Este decreto clasifica oficialmente las enfermedades laborales, incluyendo aquellas de origen tóxico, y especifica las sustancias químicas reconocidas como causantes, así como los órganos blanco más comúnmente afectados. Estas condiciones se encuentran en la Sección II - Parte A del Anexo Técnico, clasificadas por sustancia o grupo de sustancias y su respectiva afectación en el organismo. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/4.png")
            .col-lg-7
              h5 Metales pesados
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Plomo (Pb).</b> Encefalopatías tóxicas, anemia, nefropatía, alteraciones gastrointestinales, efectos sobre la reproducción.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Mercurio (Hg).</b> Daño neurológico (temblores, irritabilidad, neuropatías), afecciones renales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Cadmio (Cd).</b> Nefropatía crónica, alteraciones óseas, afectaciones pulmonares.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Arsénico (As).</b> Cáncer de piel, pulmón, vejiga, alteraciones gastrointestinales y neurológicas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Cromo VI.</b> Dermatitis alérgica, ulceraciones nasales, cáncer de pulmón.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Níquel (Ni).</b> Dermatitis, cáncer nasal y pulmonar.
                  
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7
              h5 Hidrocarburos y derivados
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Benceno.</b> Leucemias (principalmente leucemia mieloide aguda), pancitopenia, anemia aplásica.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Hidrocarburos aromáticos policíclicos (HAPs).</b> Carcinogenicidad dérmica y pulmonar.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>1,3-Butadieno.</b> Neoplasias hematológicas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Tetracloroetileno y tricloroetileno.</b> Daño hepático y renal, efectos neurotóxicos, potencial carcinogénico.
                
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/6.png")
            .col-lg-7
              h5 Solventes orgánicos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Disolventes clorados, hidrocarburos halogenados, cetonas, alcoholes y éteres.</b> Hepatotoxicidad, nefrotoxicidad, alteraciones del sistema nervioso central, dermatitis.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/7.png")
            .col-lg-7
              h5 Gases industriales y vapores tóxicos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Monóxido de carbono (CO).</b> Hipoxia tisular, neuropatía, daño cardíaco.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Cianuros.</b> Inhibición respiratoria celular, colapso cardiovascular y neurológico.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Óxidos de nitrógeno, dióxido de azufre y amoníaco.</b> Neumonitis química, bronquitis crónica, irritación respiratoria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7
              h5 Pesticidas y plaguicidas
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Organofosforados y carbamatos.</b> Inhibición de la colinesterasa, crisis colinérgica, neuropatía retardada.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Organoclorados.</b> Neurotoxicidad crónica, hepatotoxicidad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Piretroides.</b> Toxicidad neurológica leve, dermatitis.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/9.png")
            .col-lg-7
              h5 Polvos minerales y fibras
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Sílice cristalina.</b> Silicosis, cáncer de pulmón.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Asbesto.</b> Asbestosis, mesotelioma, cáncer pulmonar.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Polvos metálicos (aluminio, berilio).</b> Enfermedades pulmonares intersticiales, sensibilización, fibrosis.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/10.png")
            .col-lg-7
              h5 Compuestos orgánicos industriales
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Formaldehído.</b> Irritación respiratoria, dermatitis, cáncer nasofaríngeo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Isocianatos.</b> Asma ocupacional, bronquitis, hipersensibilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7
              h5 Otras enfermedades reconocidas por tóxicos
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Cáncer ocupacional de origen químico</b>. Asociado a exposición crónica a agentes como benceno, arsénico, cromo VI, HAPs, entre otros.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Alteraciones reproductivas y teratogénicas.</b> Por exposición a plomo, disolventes, pesticidas.


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál de las siguientes no es una vía de exposición?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Inhalatoria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dérmica',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Parenteral',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Auditiva',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'El formaldehído se relaciona con:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Cáncer nasofaríngeo',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Hipertensión arterial',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ceguera',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Diabetes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué factor individual influye en la toxicidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Edad',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Color de ropa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Marca de casco',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Altura de la oficina',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué organismo estadounidense elabora límites de exposición?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'NIOSH',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'FAO',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'UNICEF',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'ONU',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'La exposición crónica se caracteriza por:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Alta dosis en poco tiempo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Dosis bajas repetidas por un largo período',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Un accidente químico puntual',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Nula interacción con sustancias',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>

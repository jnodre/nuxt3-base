<template>
  <Breadcrumbs />
  <DotSection
    description="Atención por el detalle, transparencia y calidad en las relaciones"
  />
  <PageText
    title="Experiencia, independencia y resultados"
    description="<p>Asimétrica es un equipo multidisciplinar de profesionales de la gestión cultural que
unen sus conocimientos y experiencia para ayudar a las organizaciones culturales
a conocer e incrementar su público.</p><p>Nos gusta trabajar orientados a resultados desde la independencia y profesionalidad que requiere la investigación y la consultoría. Nuestras recomendaciones están enraizadas en los datos y hemos trabajando con éxito para teatros, auditorios, museos y orquestas de diferente naturaleza; festivales artísticos, instituciones culturales internacionales, nacionales, regionales y locales.</p>"
  />
  <div class="history-section-no-padding">
    <HistorySection
      title="Un poco de historia…"
      :elements="[
        {
          title: '1º Así comenzamos…',
          description:
            '<p>ASIMÉTRICA nace en Madrid en <strong>2010</strong> con la vocación de <strong>añadir valor</strong> a la relación entre artistas, organizaciones culturales y público. Investigación, consultoría y formación al servicio de las artes y la cultura.</p>',
        },
        {
          title: '1º Así comenzamos…',
          description:
            '<p>ASIMÉTRICA nace en Madrid en <strong>2010</strong> con la vocación de <strong>añadir valor</strong> a la relación entre artistas, organizaciones culturales y público. Investigación, consultoría y formación al servicio de las artes y la cultura.</p>',
        },
        {
          title: '1º Así comenzamos…',
          description:
            '<p>ASIMÉTRICA nace en Madrid en <strong>2010</strong> con la vocación de <strong>añadir valor</strong> a la relación entre artistas, organizaciones culturales y público. Investigación, consultoría y formación al servicio de las artes y la cultura.</p>',
        },
      ]"
    />
  </div>
  <Team title="Equipo" :team="editors" />
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
import { Testimonials } from "types/testimonial";
import { Teachers } from "types/teacher";
import type { Ref } from "vue";

const { data: testimonials } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/testimonials"
);
let editors: Ref<Teachers> = ref([]);

useFetch<any>("https://api.asimetrica.abanico.net/api/editorCategories/1").then(
  (r) => (editors.value = r.data.value.data)
);
</script>

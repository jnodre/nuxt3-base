<template>
  <!--TODO Añadir funcionalidad abrir modal-->

  <PageHeader
    title="Te damos la bienvenida a
    Asimétrica"
    subtitle="Investigación, consultoría y formación
    para el sector cultural"
    :image="{ url: '/images/header-borrar.jpg' }"
  />
  <DotSection
    description="ASIMÉTRICA es un equipo de profesionales de la gestión cultural preparado para conocer y ampliar el público de las organizaciones culturales de forma sostenible."
  />
  <ServicesContainer title="Servicios" :services="services" />
  <TestimonialsCarrousel
    title="Clientes y Testimonios"
    description="Asimétrica se siente orgullosa de haber trabajado con decenas de organizaciones culturales en España resto de Europa y América Latina. Esperamos poder darte la bienvenida a nuestra familia de clientes."
    :testimonials="testimonials.data"
  />
  <HistorySection
    short
    title="Un poco de historia..."
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
    ]"
  />
  <Team title="Equipo" :team="editors.data" />
  <FeaturedMagazine
    bottom
    :magazine="magazine"
    title="Leer, ver, escuchar…"
    description="El disfrute del saber"
  />
  <WorkUs />
  <Subscribe />
  <Modal
    title="Esta dirección de correo ya está registrada"
    description="Por si acaso, revisa en tu carpeta spam o de correo promocional y agréganos a tu listado de direcciones."
    buttonActive
    active
  />
</template>
<script setup lang="ts">
import { Testimonials } from "types/testimonial";
import { Teachers } from "types/teacher";
import { reactive } from "vue";
import type { Ref } from "vue";

const { data: testimonials } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/testimonials"
);

let magazine = reactive({});
let editors: Ref<Teachers> = ref([]);
//TODO añadir tipado de services
let services: any = ref([]);

useFetch<any>("https://api.asimetrica.abanico.net/api/editorCategories/1").then(
  (r) => (editors.value = r.data.value.data)
);

useFetch<any>(
  "https://api.asimetrica.abanico.net/api/magazines?featured=1"
).then((r) => (magazine = r.data.value.data));

useFetch<any>("https://api.asimetrica.abanico.net/api/services").then(
  (r) => (services = r.data.value.data)
);
</script>

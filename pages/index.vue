<template>
  <PageHeader
    title="Te damos la bienvenida a
    Asimétrica"
    subtitle="Investigación, consultoría y formación
    para el sector cultural"
    :image="{ url: 'https://dummyimage.com/100.gif' }"
  />
  <DotSection
    description="ASIMÉTRICA es un equipo de profesionales de la gestión cultural preparado para conocer y ampliar el público de las organizaciones culturales de forma sostenible."
  />
  <ServicesContainer title="Servicios" />
  <WorkUs />
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
  <Team title="Equipo" :team="teachers.data" />
  <FeaturedMagazine
    :magazine="{
      title: 'CA 17 - Escuchando a la audiencia',
      subtitle: 'Una oportunidad para redefinir nuestro futuro',
      date: '30.11.2021',
      description:
        '<p>Tras 10 años de andadura continuamos con la curiosidad intacta por conocer más sobre la audiencia y los públicos, viviendo la realidad que tenemos delante con la mejor actitud y planteando <strong>escuchar al público como una oportunidad para definir una realidad distinta</strong>. En este número, compartiremos 5 aproximaciones distintas de especial relevancia:</p><ul><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li><li><strong>Chris Unitt</strong> (One Further)</li></ul>',
      image: { fullUrlThumb: 'https://dummyimage.com/200.jpg' },
    }"
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

const { data: testimonials } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/testimonials"
);
const { data: teachers } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/teachers"
);
</script>

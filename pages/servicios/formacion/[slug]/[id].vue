<template>
  <Breadcrumbs />
  <DotSection
    description="Saber qué medir es la mejor manera de no comenzar de cero cada año."
  />
  <ReservationSection />
  <TestimonialsCarrousel
    description="Finalmente, un taller que aporta sentido a las métricas de públicos."
    :testimonials="testimonials"
  />
  <PageText
    title="¿Qué veremos?"
    description="<p>Con estos <strong>10 indicadores</strong> podrás conocer tu capacidad para captar nuevos públicos, mantener al que tienes y recuperar al que habías perdido.</p><p><strong>Reserva tu plaza en este taller de 10 métricas esenciales para gestionar públicos y podrás:</strong></p><ul><li>Descubrir cómo fijar objetivos en términos de públicos.</li><li>Descubrir cómo fijar objetivos en términos de públicos.</li></ul>"
  />
  <div class="separator"></div>
  <PageText
    title="¿Qué veremos?"
    description="<p>Con estos <strong>10 indicadores</strong> podrás conocer tu capacidad para captar nuevos públicos, mantener al que tienes y recuperar al que habías perdido.</p><p><strong>Reserva tu plaza en este taller de 10 métricas esenciales para gestionar públicos y podrás:</strong></p><ul><li>Descubrir cómo fijar objetivos en términos de públicos.</li><li>Descubrir cómo fijar objetivos en términos de públicos.</li></ul><a href=''>Reserva TU PLAZA</a>"
  />
  <Team :team="teachers" />
  <EventsGrid
    :events="events.data"
    recommended
    title="También podría interesarte"
  />
  <ProfessionalTeam />
  <WorkUs />
  <Subscribe />
</template>
<script setup lang="ts">
import { Testimonials } from "types/testimonial";
import { Teachers } from "types/teacher";

const route = useRoute();

const { data: workshop } = useFetch<any>(
  `https://api.asimetrica.abanico.net/api/workshops/${route.params.id}`
);

const { data: events } = useFetch<any>(
  "https://api.asimetrica.abanico.net/api/workshops"
);

let teachers = computed<Teachers>(() => {
  return workshop.teachers;
});

let testimonials = computed<Testimonials>(() => {
  return workshop.testimonials;
});
</script>

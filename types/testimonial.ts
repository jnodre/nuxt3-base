export interface Testimonial {
  name: string;
  company?: string;
  description: string;
  position?: string;
  testimoniable_id?: number;
  testimoniable_type?: string;
}
export interface Testimonials extends Array<Testimonial> {}

export interface Teacher {
  id: number;
  name: string;
  job: string;
  company: string;
  linkedin: string;
  twitter: string;
  position: number;
  created_at: string;
  updated_at: string;
  job_es: string;
  job_en: string;
  image: Object;
}
export interface Teachers extends Array<Teacher> {}

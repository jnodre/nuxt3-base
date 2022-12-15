export interface Teacher {
  id: number;
  name: String;
  job: String;
  company: String;
  linkedin: String;
  twitter: String;
  position: number;
  created_at: String;
  updated_at: String;
  job_es: String;
  job_en: String;
  image: Object;
}
export interface Teachers extends Array<Teacher> {}

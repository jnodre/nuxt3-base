export interface Teacher {
  id: Number;
  name: String;
  job: String;
  company: String;
  linkedin: String;
  twitter: String;
  position: Number;
  created_at: String;
  updated_at: String;
  job_es: String;
  job_en: String;
  image: Object;
}
export interface Teachers extends Array<Teacher> {}

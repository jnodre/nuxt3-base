export interface Media {
  id: number;
  title: string;
  description: string;
  url: string;
  date: string;
  magazine_id: number;
  created_at: string;
  updated_at: string;
  image?: object;
}
export interface Medias extends Array<Media> {}

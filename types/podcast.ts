export interface Podcast {
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
export interface Podcasts extends Array<Podcast> {}

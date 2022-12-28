export interface Video {
  id: number;
  title: string;
  description: string;
  video_url: string;
  date: string;
  magazine_id: number;
  created_at: string;
  updated_at: string;
  image?: object;
  video?: object;
}
export interface Videos extends Array<Video> {}

export interface Post {
  id: number;
  title: String;
  author: String;
  entry: String;
  description: String;
  date: String;
  magazine_id: number;
  created_at: String;
  updated_at: String;
  image: Object;
  listImage: Object;
  magazine: {
    id: number;
    title: String;
    subtitle: String;
    entry: String;
    description: String;
    date: String;
    featured: boolean;
    image: Object;
  }
}
export interface Posts extends Array<Post> {}

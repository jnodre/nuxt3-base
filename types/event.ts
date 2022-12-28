export interface Event {
  id: number;
  title: string;
  entry: string;
  description: string;
  program: string;
  benefits: string;
  price: number;
  start_date: string;
  end_date: string;
  url: string;
  created_at: string;
  updated_at: string;
  image?: object;
  listImage?: object;
}
export interface Events extends Array<Event> {}

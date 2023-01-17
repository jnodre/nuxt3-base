export interface Magazine {
  title: string;
  id: number;
  subtitle: string;
  entry?: string;
  description?: string;
  author?: string;
  date: string;
  featured?: boolean;
  image?: {
    fullUrlThumb: string;
  };
}
export interface Magazines extends Array<Magazine> {}
